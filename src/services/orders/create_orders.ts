import { IPurchaseOrders, IPurchaseOrdersItems } from "../../interface/orders/interface_orders";





export const createOrdersService = async (data:IPurchaseOrders): Promise<string> => {

  console.log(data)
  
  return "passou"
}


export const createOrdersItemsService = async (data:IPurchaseOrdersItems): Promise<string> => {

    console.log(data)
    
    return "passou"
}