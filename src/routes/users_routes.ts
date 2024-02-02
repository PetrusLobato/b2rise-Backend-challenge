import { Router } from "express";
import { createUserController } from "../controllers/users/create_user";



const usersRoute = Router();


usersRoute.post("/", createUserController);
usersRoute.get("/", );
usersRoute.get("/:id", );
usersRoute.patch("/:id", );
usersRoute.delete("/:id", );





export default usersRoute;