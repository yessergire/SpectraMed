import express, { Express } from 'express';
import cors from 'cors';

import areasRouter from './routes/areas';
import spectrumRouter from './routes/spectrum';

const app: Express = express();
app.use(cors());
app.use(express.json());

const PORT = 3001;

app.get('/api/healthcheck', (_req, res) => {
  res.send('ok');
});

app.use('/areas', areasRouter);
app.use('/spectrum', spectrumRouter);

app.listen(PORT, () => {
  console.log(`Express-server running on port ${PORT}`);
});