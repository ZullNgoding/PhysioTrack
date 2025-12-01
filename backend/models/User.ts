import mongoose, { Schema, Document } from 'mongoose';

export interface IUser extends Document {
  name: string;
  email: string;
  password?: string;
  role: 'Patient' | 'Doctor' | 'Admin';
  provider: 'credentials' | 'google';
  avatar?: string;
  isVerified: boolean;           
  verificationToken?: string;    
}

const UserSchema: Schema = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: false },
  role: { type: String, enum: ['Patient', 'Doctor', 'Admin'], default: 'Patient' },
  provider: { type: String, default: 'credentials' },
  avatar: { type: String },
  isVerified: { type: Boolean, default: false },
  verificationToken: { type: String },
}, { timestamps: true });

export default mongoose.model<IUser>('User', UserSchema);