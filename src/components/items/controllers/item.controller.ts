import { Request, Response } from "express";
import { handleErrorsHttp } from "../../../utils/errors.handle";
import * as service from '../services/index';


export const getItems = async (req: Request, res: Response) => {

  try {

    const responseItem = await service.getItems();
    if(responseItem.length) return res.status(200).json({Items: responseItem});
    else return res.status(404).json({message: 'There is no information in teh DB'});

    
  } catch (error) {
    handleErrorsHttp(res, 'getItem', error);
  }
}


export const getItem = async (req: Request, res: Response) => {


  try {

    const {id} = req.params;

    const responsItem = await service.getItem(id)
    if(responsItem) return res.status(200).json({Item: responsItem});
    else return res.status(404).json({message: 'Item not found'})
    
  } catch (error) {
    handleErrorsHttp(res, 'getItems', error);
  }
  
}

export const createItem = async (req: Request, res: Response) => {

  
  try {

    const responseItem = await service.insertItem(req.body);
    return res.status(201).json({message: 'Item create successfully', Item: responseItem});
    
  } catch (error) {
    handleErrorsHttp(res, 'createItem', error);
  }
}



export const updateItem = async (req: Request, res: Response) => {

  try {
   
    const {id} = req.params;
    
    
    const responseItem = await service.updateItem(id, req.body);
    if(responseItem){
      return res.status(200).json({message: 'Item updated successfully', item: responseItem});
    }else{
      res.status(404).json({message: 'Item not found'})
    }
    
    
  } catch (error) {
    handleErrorsHttp(res, 'updateItem', error);
  }

}


export const deleteItem = async (req: Request, res: Response) => {

  try {

    const {id} = req.params;

    const responseItem = await service.deleteItem(id);
    
    if(responseItem){
      res.status(201).json({message: 'Item deleted successfully'})
    }else{
      res.status(404).json({message: 'Item not found'})
    }
    
  } catch (error) {
    handleErrorsHttp(res, 'deleteItem', error);
  }

}