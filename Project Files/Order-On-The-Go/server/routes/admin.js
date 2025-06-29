import express from "express";
import User from "../models/User.js";

const router = express.Router();

// GET all users
router.get("/users", async (req, res) => {
  try {
    const users = await User.find({}, "-password"); // exclude passwords
    res.json(users);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch users" });
  }
});

export default router;
