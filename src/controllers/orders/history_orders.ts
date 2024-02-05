import { Request, Response } from "express";
import { historyOrderService } from "../../services/orders/history_orders";


export const historyOrderController = async (req: Request, res: Response) => {

    const result = await historyOrderService(req.params.id);

    return res.status(200).json(result);
}