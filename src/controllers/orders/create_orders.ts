import { Request, Response } from "express";
import { createOrdersItemsService, createOrdersService } from "../../services/orders/create_orders";



export const createOrdersController = async (req: Request, res: Response) => {

    const result = await createOrdersService(req.body)

    return res.status(201).json(result);
}


export const createOrdersItemsController = async (req: Request, res: Response) => {

    const result = await createOrdersItemsService(req.body, req.params.idOrders)

    return res.status(201).json(result);
}