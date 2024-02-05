import { Request, Response } from "express";
import { filterOrdersItemsService } from "../../services/orders/filter_orders";



export const filterOrdersItemsController= async (req: Request, res: Response) => {

    const result = await filterOrdersItemsService(req.query);

    return res.status(200).json(result);
}