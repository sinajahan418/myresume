import bcrypt from "bcrypt";

import { User } from "../models/user.model.js";
import { generateTokenAndSetCookie } from "../utils/generateToken.js";

export const signup = async (req, res) => {
  try {
    const { username, email, password } = req.body;

    if (!username || !email || !password) {
      return res
        .status(400)
        .json({ succcess: false, message: "All fields are required" });
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(email)) {
      return res.status(400).json({ success: false, message: "Invalid email" });
    }

    if (password.length < 6) {
      return res.status({
        succcess: false,
        message: "Password must be at least 6 characters",
      });
    }

    const existingUserByEmail = await User.findOne({ email: email });

    if (existingUserByEmail) {
      return res
        .status(400)
        .json({ success: false, message: "Email already exists" });
    }

    const existingUserByUsername = await User.findOne({ username: username });

    if (existingUserByUsername) {
      return res
        .status(400)
        .json({ success: false, message: "Username already exists" });
    }

    const getSalt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, getSalt);

    const PROFILE_PICS = ["/avatar1.png", "/avatar2.png", "/avatar3.png"];
    const image = PROFILE_PICS[Math.floor(Math.random() * PROFILE_PICS.length)];

    const newUser = new User({
      username,
      email,
      password: hashedPassword,
      image,
      role: "user",
    });

    generateTokenAndSetCookie(newUser._id, res);
    await newUser.save();

    res.status(201).json({
      succcess: true,
      user: {
        ...newUser._doc,
        password: "",
      },
    });
  } catch (err) {
    console.log("Error in signup controller", err.message);
    res.status(500).json({ success: false, message: "Internal server error" });
  }
};


export const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res
        .status(400)
        .json({ success: true, message: "All fields are requried" });
    }

    const user = await User.findOne({ email });
    if (!user) {
      return res
        .status(400)
        .json({ success: false, message: "incorrect email or password" });
    }

    const isPasswordCorrect = await bcrypt.compare(password, user.password);
    if (!isPasswordCorrect) {
      return res
        .status(400)
        .json({ succcess: true, message: "incorrect email or password" });
    }

    generateTokenAndSetCookie(user._id, res);

    res.status(200).json({
      succcess: true,
      user: {
        ...user._doc,
        password: "",
      },
    });
  } catch (err) {
    console.log("Error in signup controller", err.message);
    res.status(500).json({ success: false, message: "Internal server error" });
  }
};

export const logout = async (req, res) => {
  try {
    res.clearCookie("jwt");
    res.status(200).json({ success: true, message: "Logged out successfully" });
  } catch (err) {
    console.log("Error in signup controller", err.message);
    res.status(500).json({ success: false, message: "Internal server error" });
  }
};

export async function authCheck(req, res) {
  try {
    console.log("req.user:", req.user);
    res.status(200).json({ success: true, user: req.user });
  } catch (error) {
    console.log("Error in authCheck controller", error.message);
    res.status(500).json({ success: false, message: "Internal server error" });
  }
}

export const updatePassword = async (req, res) => {
  const { email, oldPassword, newPassword } = req.body;

  if (!email || !oldPassword || !newPassword) {
    return res
      .status(400)
      .json({ success: false, message: "All fields are required" });
  }

  const user = await User.findOne({ email });
  if (!user) {
    return res.status(400).json({ success: false, message: "user not found" });
  }

  const isMatch = await bcrypt.compare(oldPassword, user.password);
  if (!isMatch) {
    return res
      .status(400)
      .json({ success: false, message: "password is wrong" });
  }

  const genSalt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(newPassword, genSalt);

  user.password = hashedPassword;
  await user.save();

  res
    .status(200)
    .json({ succcess: true, message: "password updeted successfully" });
};
