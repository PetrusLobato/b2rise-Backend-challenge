import { Request, Response } from "express";
import { listUsersService } from "../../services/users/list_all_users";




export const listUsersController = async (req: Request, res: Response) => {

    const result = await listUsersService();

    return res.status(201).json(result);
}