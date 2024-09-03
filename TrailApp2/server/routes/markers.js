import express from 'express';
import {createMarker, getMarkers, updateMarker, deleteMarker, getMarkersByTrail} from '../controllers/marker.js';


const router = express.Router();

router.get('/', getMarkers);
router.post('/', createMarker);
router.patch('/:id', updateMarker);
router.delete('/:id', deleteMarker);
router.get('/byTrail', getMarkersByTrail);

export default router;