
import ItemModel from "../model/item.model";


export const getItems = async () => {

  const getData = await ItemModel.find();
  return getData;
}