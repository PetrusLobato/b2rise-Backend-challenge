import { AppError } from "../../Errors/error";
import AppDataSource from "../../data-source";
import { Products } from "../../entities/products_entities";
import { IProducts } from "../../interface/products/interface_products";




export const filterProductService = async ({category, page = 1, limit = 3}:string | any): Promise<IProducts[]> => {

 
  const myRepository = AppDataSource.getRepository(Products);

  const skip = (page - 1) * limit

  const findProducts = await myRepository.find({
    where:{
      category: category
    },
    take:limit,
    skip: skip
  })

  return findProducts

}