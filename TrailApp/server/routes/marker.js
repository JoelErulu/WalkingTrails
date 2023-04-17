import express from 'express';
import { createMarker, getMarkers } from '../controllers/marker.js';


const router = express.Router();

router.get('/', getMarkers);
router.post('/', createMarker);

export default router;