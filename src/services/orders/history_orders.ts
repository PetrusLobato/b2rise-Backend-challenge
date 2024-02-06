import AppDataSource from "../../data-source";
import { Products } from "../../entities/products_entities";
import { PurchaseOrdersItems } from "../../entities/purchasse_order_items_entities";
import { PurchaseOrders } from "../../entities/purchasse_orders_entities";
import { AppError } from "../../errors/error";
import { IPurchaseOrdersItems } from "../../interface/orders/interface_orders";
import { arrayhistorySchema } from "../../schemas/orders_schemas";



export const historyOrderService = async (id: string): Promise<IPurchaseOrdersItems[] | any> => {

    const myRepositoryOrders = AppDataSource.getRepository(PurchaseOrders);
    const myRepositoryOrdersItems = AppDataSource.getRepository(PurchaseOrdersItems);
  
    const findOrders = await myRepositoryOrders.findOneBy({
      id: id,
    });
  
    if (!findOrders) {
      throw new AppError("Orders Items not exist", 404);
    }

    
    const historyOrders = await myRepositoryOrdersItems.find({
        where: {
            purchase_order: {
                id: findOrders.id
            }
        },
        relations: {product:true}
        
    })

    const result = arrayhistorySchema.parse(historyOrders)


    return result

  };
  