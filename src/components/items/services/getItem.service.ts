import ItemModel from "../model/item.model";


export const getItem = async (id: string) => {

  const item = await ItemModel.findById({_id: id});
  return item;
}