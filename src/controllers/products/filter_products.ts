import { Request, Response } from "express";
import { filterProductService } from "../../services/products/filter_product";




export const filterProductController = async (req: Request, res: Response) => {

    
    const result = await filterProductService(req.query);

    return res.status(200).json(result);
}