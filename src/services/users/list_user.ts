import { AppError } from "../../errors/error";
import AppDataSource from "../../data-source";
import { Users } from "../../entities/user_entities";
import { IUsersResponse } from "../../interface/users/interface_users";
import { resultUserSchema } from "../../schemas/user_schemas";

export const listUserService = async (id: string): Promise<IUsersResponse | any> => {
  const myRepository = AppDataSource.getRepository(Users);

  const findUser = await myRepository.findOneBy({
    id: id,
  });

  if (!findUser) {
    throw new AppError("Users not exist", 404);
  }

  const responseUser =  resultUserSchema.parse(findUser);

  return responseUser;
};
