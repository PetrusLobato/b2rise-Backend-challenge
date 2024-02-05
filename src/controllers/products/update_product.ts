import { Request, Response } from "express";
import { uptadeProductService } from "../../services/products/update_product";




export const updateProductController = async (req: Request, res: Response) => {

    const result = await uptadeProductService(req.body, req.params.id);

    return res.status(200).json(result);
}