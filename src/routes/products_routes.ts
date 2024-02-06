import { Router } from "express";
import { createProductController } from "../controllers/products/create_product";
import { filterProductController } from "../controllers/products/filter_products";
import { listProductController } from "../controllers/products/list_product";
import { updateProductController } from "../controllers/products/update_product";
import { deleteProductController } from "../controllers/products/delete_product";
import validadeBody from "../middlewares/validate_body";
import { productSchema } from "../schemas/product_schemas";




const productsRoute = Router();

productsRoute.post("/", validadeBody(productSchema), createProductController );
productsRoute.get("/", filterProductController);
productsRoute.get("/:id", listProductController );
productsRoute.patch("/:id",  updateProductController );
productsRoute.delete("/:id",  deleteProductController);


export default productsRoute;