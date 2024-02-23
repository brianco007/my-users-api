import { Router } from "express";
import loginController from "../controllers/loginController.js";

const loginRouter = Router();

//to create token
loginRouter.post('/', loginController.userLogin);

//to get owner
loginRouter.get('/owner/:id', loginController.getOwner);

//to validate token
loginRouter.get('/:token', loginController.validateToken);

export default loginRouter;