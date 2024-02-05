import { Request, Response } from "express";
import { upadateUserService } from "../../services/users/update_user";


export const upadateUserController = async (req: Request, res: Response) => {

    const result = await upadateUserService(req.body ,req.params.id);

    return res.status(200).json(result);
}



