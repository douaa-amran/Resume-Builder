import { Router } from 'express';
import { generatePDF } from "../controllers/pdfController.js";
import auth from '../middlewares/authMiddleware.js';
const router = Router();

router.post('/generate', auth, generatePDF);

export default router;
