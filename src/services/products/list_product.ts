import { AppError } from "../../Errors/error";
import AppDataSource from "../../data-source";
import { Products } from "../../entities/products_entities";
import { IProducts } from "../../interface/products/interface_products";



export const listProductService = async (id:string): Promise<IProducts> => {

  const myRepository = AppDataSource.getRepository(Products);

  const findProducts = await myRepository.findOneBy({
    id:id
  })

  if(!findProducts){
    throw new AppError ("Product not exist", 404)
  }

  return findProducts
}