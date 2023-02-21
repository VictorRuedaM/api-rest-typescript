import ItemModel from "../model/item.model";

export const deleteItem = async (id: string) => {

  const result = await ItemModel.findByIdAndDelete({_id: id});
  
  
  return result;
}