import { AppError } from "../../Errors/error";
import AppDataSource from "../../data-source";
import { Products } from "../../entities/products_entities";




export const deleteProductService = async (id:string): Promise<object> => {

  const myRepository = AppDataSource.getRepository(Products);

  const findProduct = await myRepository.findOneBy({
    id:id
  })

  if(!findProduct){
    throw new AppError("Product not exist", 404)
  }
 
  await myRepository.remove(findProduct)
  

 return {}

}