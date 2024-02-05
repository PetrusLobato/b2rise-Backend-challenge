import AppDataSource from "../../data-source";
import { PurchaseOrdersItems } from "../../entities/purchasse_order_items_entities";
import { AppError } from "../../errors/error";



export const deleteOrdersItemsService = async (idOrders:string): Promise<object> => {

    const myRepositoryOrderItems = AppDataSource.getRepository(PurchaseOrdersItems);

    const findOrderItems = await myRepositoryOrderItems.findOneBy({
      id: idOrders,
    });
  
    if (!findOrderItems) {
      throw new AppError("Order Items not exist", 404);
    }
  
    await myRepositoryOrderItems.remove(findOrderItems);
  
    return {};
}


