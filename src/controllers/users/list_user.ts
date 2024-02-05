import { Request, Response } from "express";
import { listUserService } from "../../services/users/list_user";

export const listUserController = async (req: Request, res: Response) => {

    const result = await listUserService(req.params.id);

    return res.status(200).json(result);
}

