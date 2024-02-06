import { Request, Response, NextFunction } from "express";
import { AnyZodObject, ZodError } from "zod";


const validadeBody = (schema: AnyZodObject) => async (req: Request, res: Response, next: NextFunction) => {

    try{

        req.body = await schema.parseAsync(req.body);
        return next()

    } catch(err){
        if(err instanceof ZodError){
            return res.status(409).json(err.issues)
        }
    }

}

export default validadeBody