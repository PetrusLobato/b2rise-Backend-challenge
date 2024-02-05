import { Request, Response } from "express";
import { createProductService } from "../../services/products/create_product";




export const createProductController = async (req: Request, res: Response) => {

    const result = await createProductService(req.body);

    return res.status(201).json(result);
}