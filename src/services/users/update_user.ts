import { AppError } from "../../errors/error";
import AppDataSource from "../../data-source";
import { Users } from "../../entities/user_entities";
import { IUpdateUsers, IUsers } from "../../interface/users/interface_users";

export const upadateUserService = async (
  data: IUpdateUsers,
  id: string
): Promise<IUsers> => {
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

  return updateUser;
};
