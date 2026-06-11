
import { Response } from "express";
import { AuthRequest } from "../middleware/auth";
import Horoscope from "../models/Horoscope";
import asyncHandler from "../middleware/asyncHandler";
import { getZodiacSign } from "../utils/zodiacHelper";
import axios from "axios";

export const generateHoroscope = asyncHandler(async (req: AuthRequest, res: Response) => {
  const { name, dob, tob, place } = req.body;
  if (!name || !dob || !tob || !place) {  
    res.status(400);
    throw new Error("Please provide name, date, time, and place of birth");
  }
  const zodiacSign = getZodiacSign(dob);
  const aztroUrl = `https://aztro.sameerkumar.website/?sign=${zodiacSign}&day=today`;

  try {
    const response = await axios.post(aztroUrl);
    const prediction = response.data;

    // 3. Save to MongoDB including the actual API result
    const data = await Horoscope.create({
      // userId: req.user.id,
      // name,
      // dob,
      // tob,
      // place,
      // sign: zodiacSign, // Good to store the sign too
      // result: prediction.description,
      // luckyNumber: prediction.lucky_number,
      // luckyColor: prediction.color,
      // mood: prediction.mood
      userId: req.user.id,
      name,
      dob,
      tob,
      place,
      result: prediction.description,
    });

    res.status(201).json(data);
  } catch (error) {
    res.status(502);
    throw new Error("Failed to fetch horoscope from cosmic provider");
  }

});