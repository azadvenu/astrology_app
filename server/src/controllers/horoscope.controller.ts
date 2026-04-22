
import { Response } from "express";
import { AuthRequest } from "../middleware/auth";
import Horoscope from "../models/Horoscope";
import asyncHandler from "../middleware/asynchandler";

export const generateHoroscope = asyncHandler(async (req: AuthRequest, res: Response) => {
  const { name, dob, tob, place } = req.body;


  if (!name || !dob || !tob || !place) {
    res.status(400);
    throw new Error("Please provide name, date, time, and place of birth");
  }

  const result = "This is your horoscope prediction based on planetary positions.";

  const data = await Horoscope.create({
    userId: req.user.id,
    name,
    dob,
    tob,
    place,
    result,
  });

  res.status(201).json(data);
});