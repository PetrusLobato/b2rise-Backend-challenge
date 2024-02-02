import { IPurchaseOrders, IPurchaseOrdersItems } from "../../interface/orders/interface_orders";





export const deleteOrdersService = async (data:IPurchaseOrders): Promise<string> => {

  console.log(data)
  
  return "passou"
}


export const deleteOrdersItemsService = async (data:IPurchaseOrdersItems): Promise<string> => {

    console.log(data)
    
    return "passou"
}