import { Router } from "express";
import { createUserController } from "../controllers/users/create_user";
import { listUsersController } from "../controllers/users/list_all_users";



const usersRoute = Router();


usersRoute.post("/", createUserController);
usersRoute.get("/", listUsersController );
usersRoute.get("/:id", );
usersRoute.patch("/:id", );
usersRoute.delete("/:id", );





export default usersRoute;