import AppDataSource from "../../data-source";
import { Users } from "../../entities/user_entities";
import { IUsers } from "../../interface/users/interface_users";



export const listUsersService = async (): Promise<IUsers[]> => {

  const myRepository = AppDataSource.getRepository(Users);

  const allUsers =  await myRepository.find();

  return allUsers

}