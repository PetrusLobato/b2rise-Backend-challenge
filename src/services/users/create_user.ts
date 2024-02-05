import { AppError } from "../../errors/error";
import AppDataSource from "../../data-source";
import { Users } from "../../entities/user_entities";
import { IUsers } from "../../interface/users/interface_users";

export const createUserService = async (data: IUsers): Promise<IUsers> => {
  const myRepository = AppDataSource.getRepository(Users);

  const findUser = await myRepository.findOneBy({
    email: data.email,
  });

  if (findUser) {
    
    throw new AppError("Email already exists", 409);
  }
  const user = myRepository.create(data);
  await myRepository.save(user);

  return user;
};
