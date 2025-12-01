import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
  service: 'gmail', // or use 'smtp.ethereal.email' for testing
  auth: {
    user: process.env.EMAIL_USER, // Add these to your .env
    pass: process.env.EMAIL_PASS,
  },
});

export const sendVerificationEmail = async (email: string, token: string) => {
  const url = `${process.env.AUTH_URL || 'http://localhost:3000'}/verify-email?token=${token}`;

  await transporter.sendMail({
    from: '"PhysioTrack" <no-reply@physiotrack.com>',
    to: email,
    subject: 'Verify your email address',
    html: `
      <div style="font-family: Arial, sans-serif; padding: 20px;">
        <h2>Welcome to PhysioTrack!</h2>
        <p>Please click the button below to verify your email address:</p>
        <a href="${url}" style="background-color: #4A90E2; color: white; padding: 10px 20px; text-decoration: none; border-radius: 5px;">Verify Email</a>
        <p>Or click this link: <a href="${url}">${url}</a></p>
      </div>
    `,
  });
};