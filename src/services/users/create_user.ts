import { IUsers } from "../../interface/users/interface_users";




export const createUserService = async (data:IUsers): Promise<string> => {

  console.log(data)
  
  return "passou"
}