import mongoose, { Schema, Document } from 'mongoose';

export interface IReport extends Document {
  title: string;
  type: string;
  patientId: mongoose.Schema.Types.ObjectId;
  physiotherapistId?: mongoose.Schema.Types.ObjectId;
  content: string;
  date: Date;
}

const ReportSchema: Schema = new Schema({
  title: { type: String, required: true },
  type: { type: String, required: true },
  patientId: { type: mongoose.Schema.Types.ObjectId, ref: 'Patient', required: true },
  physiotherapistId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  content: { type: String, required: true },
  date: { type: Date, default: Date.now },
}, { timestamps: true });

export default mongoose.model<IReport>('Report', ReportSchema);