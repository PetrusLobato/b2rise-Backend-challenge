import { AppError } from "../../Errors/error";
import AppDataSource from "../../data-source";
import { Users } from "../../entities/user_entities";
import { IUsers } from "../../interface/users/interface_users";



export const listUserService = async (id:string): Promise<IUsers> => {

  const myRepository = AppDataSource.getRepository(Users);


  const findUser = await myRepository.findOneBy({
    id:id
  })

  if(!findUser){
    throw new AppError ("Users not exist", 404)
  }

  return findUser!

}
