import { Router } from "express";
import { createOrdersItemsController } from "../controllers/orders/create_orders";
import { deleteOrdersItemsController } from "../controllers/orders/delete_orders";




const purchaseOrdersItemsRoute = Router();


purchaseOrdersItemsRoute.post("/", createOrdersItemsController);
purchaseOrdersItemsRoute.delete("/", deleteOrdersItemsController)


export default purchaseOrdersItemsRoute;