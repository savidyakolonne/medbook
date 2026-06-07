import { Router } from 'express';
import authMiddleware from '../middlewares/auth.js';
import {
  bookAppointment,
  getMyAppointments,
  cancelAppointment
} from '../controllers/appointmentController.js';

const router = Router();

router.post('/', authMiddleware, bookAppointment);
router.get('/my', authMiddleware, getMyAppointments);
router.put('/:id/cancel', authMiddleware, cancelAppointment);

export default router;