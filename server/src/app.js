import express from "express";
import eventsRouter from "./modules/events/events.routes.js";

const app = express();

app.get("/api/health", (req, res) => {
  res.json({ status: "ok", service: "oops-chakravyuh-api" });
});

app.use("/api/events", eventsRouter);

export default app;