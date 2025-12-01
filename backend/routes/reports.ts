import express from 'express';
import { getReports, getReport, createReport, updateReport, deleteReport } from '../controllers/reportController';

const router = express.Router();

router.get('/', getReports);
router.get('/:id', getReport);
router.post('/', createReport);
router.put('/:id', updateReport);
router.delete('/:id', deleteReport);

export default router;