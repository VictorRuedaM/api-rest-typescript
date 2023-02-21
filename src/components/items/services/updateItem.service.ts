import { Car } from "../../../interfaces/car.interface";
import ItemModel from "../model/item.model";


export const updateItem = async (id: string, data: Car) => {

  const resust = await ItemModel.findOneAndUpdate(
    {_id: id},
    data,
    {new: true}
    );

  return resust;
}