import mongoose, { Schema, Document } from 'mongoose';

export interface IPatient extends Document {
  name: string;
  age: number;
  condition: string;
  status: 'Active' | 'Inactive' | 'Discharged';
  avatar: string;
  adherence: number;
  lastVisit: Date;
}

const PatientSchema: Schema = new Schema({
  name: { type: String, required: true },
  age: { type: Number, required: true },
  condition: { type: String, required: true },
  status: { type: String, enum: ['Active', 'Inactive', 'Discharged'], default: 'Active' },
  avatar: { type: String, default: '' },
  adherence: { type: Number, default: 0 },
  lastVisit: { type: Date, default: Date.now }
}, { timestamps: true });

export default mongoose.model<IPatient>('Patient', PatientSchema);