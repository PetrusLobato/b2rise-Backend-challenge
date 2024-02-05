import { AppError } from "../../Errors/error";
import AppDataSource from "../../data-source";
import { Users } from "../../entities/user_entities";
import { IUpdateUsers, IUsers } from "../../interface/users/interface_users";



export const deleteUserService = async (id:string): Promise<object> => {

  const myRepository = AppDataSource.getRepository(Users);


  const findUser = await myRepository.findOneBy({
    id:id
  })

  if(!findUser){
    throw new AppError("User not exist", 404)
  }
 
  await myRepository.remove(findUser)
  

 return {}


}