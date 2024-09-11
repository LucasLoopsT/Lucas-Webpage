import {Router} from 'express'
const userRouter = Router();
import {Controller} from "../controllers/user.controller.js";
const controller = new Controller();
import {validId, validUser} from "../middlewares/global.middlewares.js";

userRouter.post("/", controller.create);
userRouter.get("/", controller.findAll);
userRouter.get("/:id", controller.findById);
userRouter.patch("/:id", validId, validUser, controller.update);
userRouter.delete("/:id", validId, validUser, controller.delete);

export default userRouter;