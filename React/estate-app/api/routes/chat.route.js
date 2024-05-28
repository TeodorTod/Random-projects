import express from 'express';
import { getChats, getChat, addChat, readChat } from '../controllers/chat.controller.js';
import { verifyToken } from '../middleware/verifyToken.js';

const router = express.Router();

router.get('/', verifyToken, getChats);
// router.get('/serach/:id', verifyToken, getUser);
router.get('/:id', verifyToken, getChat);
router.post('/save', verifyToken, addChat);
router.put('/read/:id', verifyToken, readChat);

export default router;
