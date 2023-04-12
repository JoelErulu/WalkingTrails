import express from 'express';

import { signin, signup, googleSignIn, getUsers } from '../controllers/user.js';

const router = express.Router();

router.post('/signin', signin);
router.post('/signup', signup);
router.get('/all', getUsers);
router.post('/googleLogin', googleSignIn);

export default router;