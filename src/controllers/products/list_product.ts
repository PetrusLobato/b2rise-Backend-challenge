import { Request, Response } from "express";
import { listProductService } from "../../services/products/list_product";




export const listProductController = async (req: Request, res: Response) => {

    const result = await listProductService(req.params.id);

    return res.status(200).json(result);
}