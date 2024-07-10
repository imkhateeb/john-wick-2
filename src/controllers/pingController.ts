import { Request, Response } from 'express';

const pingController = (req: Request, res: Response) => {

  console.log(req.url);
  
  res.status(200).json({
    msg: 'pong',
    status: 'success'
  });
};

export default pingController;