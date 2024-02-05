import { compare } from "bcryptjs";
import AppDataSource from "../../data-source";
import { Users } from "../../entities/user_entities";
import { IOrdersLogin, IPurchaseOrders, IPurchaseOrdersItems } from "../../interface/orders/interface_orders";
import { PurchaseOrders } from "../../entities/purchasse_orders_entities";



export const createOrdersService = async (data:IOrdersLogin): Promise<any> => {

  const myRepository = AppDataSource.getRepository(Users);
  const myOrders = AppDataSource.getRepository(PurchaseOrders);

  const verificationUser = await myRepository.findOneBy({email:data.email});

  
  if(!verificationUser){
    console.log("User or password invalid", 401)
  }

  const passwordCheck = await compare(data.password, String(verificationUser?.password));
  
  if(!passwordCheck){
    console.log("User or password invalid", 401)
  }

  const orders = myOrders.create({
    user:verificationUser?.id || ""
      
  })
      
  await myOrders.save(orders);
      
  return orders
  
    
}
    
    

export const createOrdersItemsService = async (data:IPurchaseOrdersItems): Promise<string> => {

    console.log(data)
    
    return "passou"
}
