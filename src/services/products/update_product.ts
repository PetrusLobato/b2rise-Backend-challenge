import { AppError } from "../../errors/error";
import AppDataSource from "../../data-source";
import { Products } from "../../entities/products_entities";
import {
  IProducts,
  IUpdateProducts,
} from "../../interface/products/interface_products";

export const uptadeProductService = async (
  data: IUpdateProducts,
  id: string
): Promise<IProducts> => {
  const myRepository = AppDataSource.getRepository(Products);

  const findProducts = await myRepository.findOneBy({
    id: id,
  });

  if (!findProducts) {
    throw new AppError("Product not exist", 404);
  }

  const { id: _, ...newData } = data;

  const updateProduct = myRepository.create({
    ...findProducts,
    ...newData,
  });

  await myRepository.save(updateProduct);

  return updateProduct;
};
