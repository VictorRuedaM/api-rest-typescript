import { NextFunction, Request, Response } from 'express';


export const handleLog = (req: Request, res: Response, next: NextFunction) => {

  const header = req.headers['user-agent']
  console.log('the host', header);
  // guardar en db el log

  next();
}