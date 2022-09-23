import express from 'express';
import areasService from '../services/areas';

const router = express.Router();

router.get('/', (_req, res) => {
  res.json(areasService.getAreas());
});

export default router;