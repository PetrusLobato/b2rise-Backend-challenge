import { Router } from "express";
import { createUserController } from "../controllers/users/create_user";
import { listUsersController } from "../controllers/users/list_all_users";
import { listUserController } from "../controllers/users/list_user";
import { upadateUserController } from "../controllers/users/update_user";
import { deleteUserController } from "../controllers/users/delete_user";
import validadeBody from "../middlewares/validate_body";
import { userSchema } from "../schemas/user_schemas";



const usersRoute = Router();


usersRoute.post("/", validadeBody(userSchema) ,createUserController);
usersRoute.get("/", listUsersController );
usersRoute.get("/:id", listUserController);
usersRoute.patch("/:id", upadateUserController);
usersRoute.delete("/:id", deleteUserController);

export default usersRoute;