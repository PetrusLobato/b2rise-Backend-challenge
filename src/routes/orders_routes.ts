import { Router } from "express";
import { createOrdersController } from "../controllers/orders/create_orders";





const purchaseOrdersRoute = Router();


purchaseOrdersRoute.post("/", createOrdersController );


export default purchaseOrdersRoute;