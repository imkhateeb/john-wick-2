import express from 'express';

import evaluationRouter from './evaluation.route';

const v1Router = express.Router();

v1Router.use('/submissions', evaluationRouter);

export default v1Router;