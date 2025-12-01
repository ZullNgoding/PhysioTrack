import mongoose, { Schema, Document } from 'mongoose';

export interface IAppointment extends Document {
  patientId: mongoose.Schema.Types.ObjectId;
  doctorName: string;
  date: Date;
  type: string;
  status: 'Scheduled' | 'Completed' | 'Cancelled';
}

const AppointmentSchema: Schema = new Schema({
  patientId: { type: mongoose.Schema.Types.ObjectId, ref: 'Patient', required: true },
  doctorName: { type: String, required: true },
  date: { type: Date, required: true },
  type: { type: String, required: true },
  status: { type: String, enum: ['Scheduled', 'Completed', 'Cancelled'], default: 'Scheduled' }
}, { timestamps: true });

export default mongoose.model<IAppointment>('Appointment', AppointmentSchema);