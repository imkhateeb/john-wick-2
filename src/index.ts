import express, {Express} from 'express';

import serverConfig from './config/server.config';
import apiRouter from './routes';

const app: Express = express();

app.use('/api', apiRouter);

app.listen(serverConfig.PORT, () => {
  console.log('Server is running on http://localhost:' + serverConfig.PORT);
});