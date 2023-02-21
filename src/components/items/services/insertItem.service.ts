import { Car } from "../../../interfaces/car.interface";
import ItemModel from "../model/item.model";


export const insertItem = async (item: Car) => {
  
  const insert = await ItemModel.create(item);
  return insert;
}