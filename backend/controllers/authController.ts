import { Request, Response } from 'express';
import bcrypt from 'bcryptjs';
import crypto from 'crypto';
import User from '../models/User';
import { sendVerificationEmail } from '../utils/sendEmail';

// Register a new user
export const register = async (req: Request, res: Response) => {
  try {
    const { name, email, password, role } = req.body;

    const existingUser = await User.findOne({ email });
    if (existingUser) {
        res.status(400).json({ message: 'User already exists' });
        return;
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const verificationToken = crypto.randomBytes(32).toString('hex');

    const newUser = await User.create({
      name,
      email,
      password: hashedPassword,
      role: role || 'Patient',
      provider: 'credentials',
      isVerified: false, // Default false for email signups
      verificationToken,
    });

    // Send Email (Don't await if you want faster response, but good for debugging)
    try {
        await sendVerificationEmail(newUser.email, verificationToken);
    } catch (emailError) {
        console.error("Failed to send email:", emailError);
        // Optional: delete user if email fails, or just warn
    }

    res.status(201).json({ message: 'Registration successful! Please check your email to verify your account.' });
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
};

// Verify Email Endpoint
export const verifyEmail = async (req: Request, res: Response) => {
    try {
        const { token } = req.body;
        const user = await User.findOne({ verificationToken: token });

        if (!user) {
            res.status(400).json({ message: 'Invalid or expired token' });
            return;
        }

        user.isVerified = true;
        user.verificationToken = undefined; // Clear token
        await user.save();

        res.status(200).json({ message: 'Email verified successfully' });
    } catch (error: any) {
        res.status(500).json({ message: error.message });
    }
};

// Login
export const login = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });
    if (!user) {
        res.status(400).json({ message: 'Invalid credentials' });
        return;
    }

    // Allow login if it's a Google account (no password)
    if (user.provider === 'google') {
        res.json({ id: user._id, name: user.name, email: user.email, role: user.role, avatar: user.avatar });
        return;
    }

    if (!user.password) {
        res.status(400).json({ message: 'Please login with Google' });
        return;
    }

    // Check Verification
    if (!user.isVerified) {
        res.status(401).json({ message: 'Please verify your email before logging in.' });
        return;
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
        res.status(400).json({ message: 'Invalid credentials' });
        return;
    }

    res.json({ id: user._id, name: user.name, email: user.email, role: user.role, avatar: user.avatar });
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
};