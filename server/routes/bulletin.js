import express from 'express';

import { getBulletins, getBulletin, createBulletin, deleteBulletin } from '../controllers/bulletin.js';

const router = express.Router();

router.get('/', getBulletins);
router.post('/', createBulletin);
router.get('/:id', getBulletin);
router.delete('/:id', deleteBulletin);


export default router;