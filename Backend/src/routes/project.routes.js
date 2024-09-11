import {Router} from 'express'
const projectRouter = Router();
import {Controller} from "../controllers/project.controller.js";
const controller = new Controller();
import {validId, validProject} from "../middlewares/global.middlewares.js";
import {authMiddleware} from "../middlewares/auth.middlewares.js";

projectRouter.post("/", authMiddleware, controller.create);
projectRouter.get("/", authMiddleware, controller.findAll);
projectRouter.get("/:id", authMiddleware, controller.findById);
projectRouter.patch("/:id", authMiddleware, validId, validProject, controller.update);
projectRouter.delete("/:id", authMiddleware, validId, validProject, controller.delete);

export default projectRouter;