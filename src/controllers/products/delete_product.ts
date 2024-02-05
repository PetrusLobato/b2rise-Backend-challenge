import { Request, Response } from "express";
import { deleteProductService } from "../../services/products/delete_product";




export const deleteProductController = async (req: Request, res: Response) => {

    const result = await deleteProductService(req.params.id);

    return res.status(204).json(result);
}