import { Router } from "express";
import { createOrdersController } from "../controllers/orders/create_orders";
import { historyOrderController } from "../controllers/orders/history_orders";
import { filterOrdersItemsController } from "../controllers/orders/filter_orders";





const purchaseOrdersRoute = Router();


purchaseOrdersRoute.post("/", createOrdersController );
purchaseOrdersRoute.get("/:id", historyOrderController)
purchaseOrdersRoute.get("/", filterOrdersItemsController)


export default purchaseOrdersRoute;