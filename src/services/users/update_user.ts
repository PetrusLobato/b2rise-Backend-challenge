import { AppError } from "../../errors/error";
import AppDataSource from "../../data-source";
import { Users } from "../../entities/user_entities";
import { IUpdateUsers, IUsers, IUsersResponse } from "../../interface/users/interface_users";
import { resultUserSchema } from "../../schemas/user_schemas";

export const upadateUserService = async (
  data: IUpdateUsers,
  id: string
): Promise<IUsersResponse | any> => {
  const myRepository = AppDataSource.getRepository(Users);

  const findUser = await myRepository.findOneBy({
    id: id,
  });

  if (!findUser) {
    throw new AppError("User not exist", 404);
  }

  const updateUser = myRepository.create({
    ...findUser,
    ...data,
  });

  await myRepository.save(updateUser);

  const responseUser =  resultUserSchema.parse(findUser);

  return responseUser;
};
