import {Router} from 'express'
const projectRouter = Router();
import {Controller} from "../controllers/project.controller.js";
const controller = new Controller();
import {validId, validProject} from "../middlewares/global.middlewares.js";
import {authMiddleware} from "../middlewares/auth.middlewares.js";

projectRouter.post("/", authMiddleware, controller.create);
projectRouter.get("/", controller.findAll);
projectRouter.get("/:id", controller.findById);
projectRouter.patch("/:id", authMiddleware, validId, validProject, controller.update);
projectRouter.delete("/delete/:id", authMiddleware, validId, validProject, controller.delete);

export default projectRouter;