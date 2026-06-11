// src/controllers/auth.controller.ts
import { Request, Response } from "express";
import User from "../models/User";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import asyncHandler from "../middleware/asyncHandler";

export const register = asyncHandler(async (req: Request, res: Response) => {
    const { name, email, password } = req.body;

    const existingUser = await User.findOne({ email });
    if (existingUser) {
        res.status(400); // Set status, then throw error
        throw new Error("User already exists");
    }

    const hashed = await bcrypt.hash(password, 10);
    const user = await User.create({ name, email, password: hashed });
    const { password: _, ...userWithoutPassword } = user.toObject();

    res.status(201).json(userWithoutPassword);
});



export const login = asyncHandler(async (req: Request, res: Response) => {
  const { email, password } = req.body;
   
  const user = await User.findOne({ email });

  // If user doesn't exist, set status and throw
  if (!user) {
    res.status(401); 
    throw new Error("Invalid email or password");
  }

  const isMatch = await bcrypt.compare(password, user.password);

  // If password doesn't match, set status and throw
  if (!isMatch) {
    res.status(401);
      throw new Error("Invalid email or password");
  }

  // Ensure secret exists
  if (!process.env.JWT_SECRET) {
    res.status(500);
    throw new Error("Internal Server Error: Token configuration missing");
  }

  const token = jwt.sign(
    { id: user._id },
    process.env.JWT_SECRET,
    { expiresIn: "1d" }
  );

  res.json({
    token,
    user: { id: user._id, name: user.name, email: user.email }
  });
});