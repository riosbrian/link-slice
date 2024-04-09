import { Router } from "express";
import authRouter from "./api/auth.routes.js";
import linkRouter from "./api/link.routes.js";
const apiRouter = Router();

apiRouter.use("/api", linkRouter);
apiRouter.use("/api/auth", authRouter);

export default apiRouter;
