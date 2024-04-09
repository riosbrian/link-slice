import { Router } from "express";
import * as LinkController from "../../controllers/link.controller.js";
import { isAuthenticate } from "../../middlewares/secure.middleware.js";

const linkRouter = Router();

linkRouter.get("/links", isAuthenticate, LinkController.getAllLinks);
linkRouter.post("/slice", isAuthenticate, LinkController.sliceLink);
linkRouter.delete("/:linkID", isAuthenticate, LinkController.deleteLink);

export default linkRouter;
