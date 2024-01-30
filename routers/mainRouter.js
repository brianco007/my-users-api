import { Router } from "express";
import userController from "../controllers/controllers.js";

const mainRouter = Router();

mainRouter.get('/', userController.getAllUsers);
mainRouter.post('/', userController.createNewUser);
mainRouter.get('/details/:id', userController.getOneUser);
mainRouter.put('/edit/:id', userController.updateUserInfo);
mainRouter.delete('/delete/:id', userController.deleteUser);

export default mainRouter;