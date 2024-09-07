import express from "express";
const routes = express.Router();
import userRouter from "../routes/user.routes.js"
import authRouter from "../routes/auth.routes.js"
import projectRouter from "../routes/project.routes.js"

routes.use("/user", userRouter);
routes.use("/auth", authRouter);
routes.use("/project", projectRouter);

export default routes;