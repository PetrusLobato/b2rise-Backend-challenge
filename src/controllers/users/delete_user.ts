import { Request, Response } from "express";
import { deleteUserService } from "../../services/users/delete_user.";



export const deleteUserController = async (req: Request, res: Response) => {

    const result = await deleteUserService(req.params.id);

    return res.status(204).json(result);
}



