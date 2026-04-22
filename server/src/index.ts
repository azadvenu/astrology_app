// src/index.ts
import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import authRoutes from "./routes/auth.routes";
import horoscopeRoutes from "./routes/horoscope.routes";
import { errorHandler } from "./middleware/errorMiddleware";
dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());


mongoose.connect(process.env.MONGO_URI as string)
  .then(() => console.log("MongoDB connected"))
  .catch(err => console.error(err));

app.use("/api/auth", authRoutes);
app.use("/api/horoscope", horoscopeRoutes);
app.use(errorHandler);

app.listen(5000, () => console.log("Server running"));