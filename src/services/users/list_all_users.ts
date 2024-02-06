import AppDataSource from "../../data-source";
import { Users } from "../../entities/user_entities";
import {  IUsersResponse } from "../../interface/users/interface_users";
import { arrayResultUserSchema, resultUserSchema } from "../../schemas/user_schemas";



export const listUsersService = async (): Promise<IUsersResponse[] | any> => {

  const myRepository = AppDataSource.getRepository(Users);

  const allUsers =  await myRepository.find();

  const responseUser =  arrayResultUserSchema.parse(allUsers)

  return responseUser

}