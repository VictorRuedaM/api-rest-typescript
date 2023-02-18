import { Request, Response } from "express";


export const getItems = (req: Request, res: Response) => {
  res.send('get items!')
}