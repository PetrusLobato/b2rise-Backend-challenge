import { AppError } from "../../errors/error";
import AppDataSource from "../../data-source";
import { Users } from "../../entities/user_entities";
import { IUsers, IUsersResponse } from "../../interface/users/interface_users";
import { resultUserSchema } from "../../schemas/user_schemas";

export const createUserService = async (data: IUsers): Promise<IUsersResponse | any> => {
  const myRepository = AppDataSource.getRepository(Users);

  const findUser = await myRepository.findOneBy({
    email: data.email,
  });

  if (findUser) {
    
    throw new AppError("Email already exists", 409);
  }
  const user = myRepository.create(data);
  await myRepository.save(user);

  const responseUser =  resultUserSchema.parse(user);

  return responseUser;
};
