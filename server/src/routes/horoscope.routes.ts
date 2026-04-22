// src/routes/horoscope.routes.ts
import { Router } from "express";
import auth from "../middleware/auth";
import { generateHoroscope } from "../controllers/horoscope.controller";

const router = Router();

router.post("/", auth, generateHoroscope);

export default router;