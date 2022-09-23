import express from 'express';
import spectrumService from '../services/spectrum';
import areasService from '../services/areas';

const router = express.Router();

router.get('/:area', (req, res) => {
  const area = areasService.getById(Number(req.params?.area));
  if (!area) {
    res.status(404).json({ error: 'Area not found'});
  } else {
    const spectrum = spectrumService.getSpectrumData(area);
    res.json(spectrum);
  }
});

export default router;