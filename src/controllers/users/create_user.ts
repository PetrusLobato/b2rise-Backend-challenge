import { Request, Response } from "express";
import { createUserService } from "../../services/users/create_user";



export const createUserController = async (req: Request, res: Response) => {

    const result = await createUserService(req.body);

    return res.status(201).json(result);
}