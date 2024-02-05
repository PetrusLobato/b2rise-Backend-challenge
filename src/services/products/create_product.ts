import { AppError } from "../../Errors/error";
import AppDataSource from "../../data-source";
import { Products } from "../../entities/products_entities";
import { IProducts } from "../../interface/products/interface_products";



export const createProductService = async (data:IProducts): Promise<IProducts> => {

  const myRepository = AppDataSource.getRepository(Products);

 
  const findProducts = await myRepository.findOneBy({
    title:data.title
  })

  if(findProducts){
    throw new AppError ("Product already exists", 409)
  }

  const product = myRepository.create(data);
  await myRepository.save(product);
 
  
  return product

}