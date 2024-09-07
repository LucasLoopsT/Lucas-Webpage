import {Router} from 'express'
const projectRouter = Router();
import {Controller} from "../controllers/project.crontroller.js";
const controller = new Controller();
import {validId, validProject} from "../middlewares/global.middlewares.js";

projectRouter.post("/", controller.create);
projectRouter.get("/", controller.findAll);
projectRouter.patch("/:id", validId, validProject, controller.update);
projectRouter.delete("/", controller.delete);

export default projectRouter;