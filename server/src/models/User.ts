// src/models/User.ts
import mongoose, { Document } from "mongoose";

export interface IUser extends Document {
  name: string;
  email: string;
  password: string;
}

const UserSchema = new mongoose.Schema<IUser>({
  name: String,
  email: { type: String, unique: true },
  password: String,
}, { timestamps: true });

export default mongoose.model<IUser>("User", UserSchema);