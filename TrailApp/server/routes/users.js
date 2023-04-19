import express from 'express';

import { signin, signup, googleSignIn, getUsers, updateUserRole } from '../controllers/user.js';

const router = express.Router();

router.post('/signin', signin);
router.post('/signup', signup);
router.get('/users', getUsers);
router.patch('/:id', updateUserRole);
router.post('/googleLogin', googleSignIn);

export default router;