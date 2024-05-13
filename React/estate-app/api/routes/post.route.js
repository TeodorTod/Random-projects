import express from 'express';

const router = express.Router();

router.get('/test', (req, res) => {
    res.send('Test works')
});

export default router;

