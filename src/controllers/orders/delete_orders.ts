import { Request, Response } from "express";
import { deleteOrdersItemsService } from "../../services/orders/delete_orders";




export const deleteOrdersItemsController = async (req: Request, res: Response) => {

    const result = await deleteOrdersItemsService(req.body)

    return res.status(201).json(result);
}