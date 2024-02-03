import AppDataSource from "../../data-source";
import { Users } from "../../entities/user_entities";
import { IUsers } from "../../interface/users/interface_users";



export const createUserService = async (data:IUsers): Promise<any> => {

  const myRepository = AppDataSource.getRepository(Users);

  const findUser = await myRepository.findOneBy({
    email:data.email
  })

  if(findUser){
    console.log("Email already exists")
  }

  const user = myRepository.create(data);
  await myRepository.save(user);

 
  return user

}