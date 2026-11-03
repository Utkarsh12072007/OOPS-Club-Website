import { Router } from "express";
import { listEvents, getEventBySlug } from "./events.controller.js";


const router = Router();

router.get("/", listEvents);
router.get("/:slug", getEventBySlug);

export default router;