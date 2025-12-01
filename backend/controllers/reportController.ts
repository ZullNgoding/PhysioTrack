import { Request, Response } from 'express';
import Report from '../models/Report';

export const getReports = async (req: Request, res: Response) => {
  try {
    const reports = await Report.find().populate('patientId physiotherapistId');
    res.json(reports);
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
};

export const getReport = async (req: Request, res: Response) => {
  try {
    const report = await Report.findById(req.params.id).populate('patientId physiotherapistId');
    if (!report) {
      res.status(404).json({ message: 'Report not found' });
      return;
    }
    res.json(report);
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
};

export const createReport = async (req: Request, res: Response) => {
  try {
    const report = new Report(req.body);
    const newReport = await report.save();
    res.status(201).json(newReport);
  } catch (error: any) {
    res.status(400).json({ message: error.message });
  }
};

export const updateReport = async (req: Request, res: Response) => {
  try {
    const report = await Report.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!report) {
      res.status(404).json({ message: 'Report not found' });
      return;
    }
    res.json(report);
  } catch (error: any) {
    res.status(400).json({ message: error.message });
  }
};

export const deleteReport = async (req: Request, res: Response) => {
  try {
    const report = await Report.findByIdAndDelete(req.params.id);
    if (!report) {
      res.status(404).json({ message: 'Report not found' });
      return;
    }
    res.json({ message: 'Report deleted' });
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
};