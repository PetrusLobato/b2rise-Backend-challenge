import { compare } from "bcryptjs";
import AppDataSource from "../../data-source";
import { Users } from "../../entities/user_entities";
import {
  IOrdersLogin,
  IPurchaseOrders,
  IPurchaseOrdersItems,
} from "../../interface/orders/interface_orders";
import { PurchaseOrders } from "../../entities/purchasse_orders_entities";
import { AppError } from "../../errors/error";
import { PurchaseOrdersItems } from "../../entities/purchasse_order_items_entities";
import { Products } from "../../entities/products_entities";

export const createOrdersService = async (data: IOrdersLogin): Promise<IPurchaseOrders> => {

  const myRepository = AppDataSource.getRepository(Users);
  const myOrders = AppDataSource.getRepository(PurchaseOrders);

  const verificationUser = await myRepository.findOneBy({ email: data.email });

  if (!verificationUser) {
    throw new AppError("User or password invalid", 401);
  }

  const passwordCheck = await compare(
    data.password,
    String(verificationUser?.password)
  );

  if (!passwordCheck) {
    throw new AppError("User or password invalid", 401);
  }

  const orders = myOrders.create({
    user: verificationUser?.id || "",
  });

  await myOrders.save(orders);

  return orders;
};

export const createOrdersItemsService = async (data: IPurchaseOrdersItems, idOrders: string): Promise<IPurchaseOrdersItems | any> => {

  const myRepositoryOrder = AppDataSource.getRepository(PurchaseOrders);
  const myRepositoryOrderItems = AppDataSource.getRepository(PurchaseOrdersItems);
  const myRepositoryProducts = AppDataSource.getRepository(Products);

  const findOrders = await myRepositoryOrder.findOneBy({
    id: idOrders
  });


  if (!findOrders) {
    throw new AppError("Orders not exists", 404);
  }

  const findProduct = await myRepositoryProducts.findOneBy({
    id: data.product_id
  });

  if(!findProduct){
    throw new AppError("Product not exists", 404);
  }


  const ordersItems = myRepositoryOrderItems.create({
    product:findProduct,
    purchase_order: findOrders,
    ...data
  });


  await myRepositoryOrderItems.save(ordersItems);

  return ordersItems;
};
