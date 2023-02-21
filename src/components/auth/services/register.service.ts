
import { User } from "../../../interfaces/user.interface";
import { encryptPassword } from "../../../utils/bcryotjs.handle";
import UserModel from "../model/auth.mondel";




export const registerUser = async (dataUser: User) => {

  const {email, password, name} = dataUser;

  const checkUser = await UserModel.findOne({email: email});
  if(checkUser)return 'User exists';

  const HashPassword = await encryptPassword(password);
  const registerNewUser = await UserModel.create({name, email, password: HashPassword});

  
}