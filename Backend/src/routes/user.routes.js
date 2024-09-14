import {Router} from 'express'
const userRouter = Router();
import {Controller} from "../controllers/user.controller.js";
const controller = new Controller();
import {validId, validUser} from "../middlewares/global.middlewares.js";
import {authMiddleware} from "../middlewares/auth.middlewares.js";

userRouter.post("/", authMiddleware, controller.create);
userRouter.get("/", controller.findAll);
userRouter.get("/:id", authMiddleware, controller.findById);
userRouter.patch("/:id", authMiddleware, validId, validUser, controller.update);
userRouter.delete("/delete/:id", authMiddleware, validId, validUser, controller.delete);

export default userRouter;