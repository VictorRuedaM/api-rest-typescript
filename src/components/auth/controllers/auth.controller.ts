import { Request, Response } from "express";
import { handleErrorsHttp } from "../../../utils/errors.handle";
import {loginUser, registerUser} from '../services';


export const authRegister = async (req: Request, res: Response) => {

  try {

    const resposeRegister = await registerUser(req.body);
   
    if(resposeRegister === 'User exists') return res.status(404).json({message: 'The user already exists in the DB'});
    return res.status(201).json({message: 'User created successfully'});

    
  } catch (error) {
    handleErrorsHttp(res, 'authRegister', error);
  }
}


export const authLogin = async (req: Request, res: Response) => {

  try {
    
    res.send('in the login')
  } catch (error) {
    handleErrorsHttp(res, 'authLogin', error);
  }
}