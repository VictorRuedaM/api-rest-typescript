import { hash, compare } from "bcryptjs"

export const encryptPassword = async (password: string) => {

  const passwordHash = await hash(password, 10);

  return passwordHash;

}




export const verifiedPassword = () => {



}