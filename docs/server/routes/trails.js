import express from 'express';

import { getTrails, createTrail, updateTrail, deleteTrail } from '../controllers/trails.js';
import auth from '../middleware/auth.js';

const router = express.Router();

router.get('/', getTrails);
router.post('/', createTrail);
router.patch('/:id', updateTrail);
router.delete('/:id', deleteTrail);

export default router;