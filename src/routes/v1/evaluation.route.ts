import express from 'express';

import { pingController } from '../../controllers';


const evaluationRouter = express.Router();

evaluationRouter.get('/ping', pingController);

export default evaluationRouter;