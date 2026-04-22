// src/models/Horoscope.ts
import mongoose, { Document } from "mongoose";

export interface IHoroscope extends Document {
  userId: string;
  name: string;
  dob: string;
  tob: string;
  place: string;
  result: string;
}

const HoroscopeSchema = new mongoose.Schema<IHoroscope>({
  userId: String,
  name: String,
  dob: String,
  tob: String,
  place: String,
  result: String,
}, { timestamps: true });

export default mongoose.model<IHoroscope>("Horoscope", HoroscopeSchema);