import express, {Express} from 'express';
import serverConfig from './config/server.config';

const app: Express = express();

app.listen(serverConfig.PORT, () => {
  console.log('Server is running on http://localhost:0786');
  console.log("Hello world")
});