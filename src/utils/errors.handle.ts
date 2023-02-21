import { Response } from "express";
import colors from '@colors/colors';

export const handleErrorsHttp = (res: Response, funcName: string, error: any) => {

  console.log(colors.red(`*** --> Error < ${funcName} > : [${error}] ***`));
  return res.status(500).json({message: 'Iternal server error'})
  
}