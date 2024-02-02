import { Router } from "express";
import { createOrdersController } from "../controllers/orders/create_orders";
import { deleteOrdersController } from "../controllers/orders/delete_orders";



const purchaseOrdersRoute = Router();


purchaseOrdersRoute.post("/", createOrdersController );
purchaseOrdersRoute.delete("/", deleteOrdersController);


export default purchaseOrdersRoute;