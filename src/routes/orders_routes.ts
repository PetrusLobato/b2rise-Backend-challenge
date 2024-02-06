import { Router } from "express";
import { createOrdersController } from "../controllers/orders/create_orders";
import { historyOrderController } from "../controllers/orders/history_orders";
import { filterOrdersItemsController } from "../controllers/orders/filter_orders";
import validadeBody from "../middlewares/validate_body";
import { loginSchema } from "../schemas/orders_schemas";





const purchaseOrdersRoute = Router();


purchaseOrdersRoute.post("/", validadeBody(loginSchema), createOrdersController );
purchaseOrdersRoute.get("/:id", historyOrderController)
purchaseOrdersRoute.get("/", filterOrdersItemsController)


export default purchaseOrdersRoute;