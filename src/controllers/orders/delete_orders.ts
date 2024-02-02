import { Request, Response } from "express";
import { deleteOrdersItemsService, deleteOrdersService } from "../../services/orders/delete_orders";




export const deleteOrdersController = async (req: Request, res: Response) => {

    const result = await deleteOrdersService(req.body)

    return res.status(201).json(result);
}


export const deleteOrdersItemsController = async (req: Request, res: Response) => {

    const result = await deleteOrdersItemsService(req.body)

    return res.status(201).json(result);
}