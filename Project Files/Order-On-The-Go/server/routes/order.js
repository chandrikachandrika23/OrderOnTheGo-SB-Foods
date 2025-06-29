import express from "express";
import Order from "../models/Order.js";

const router = express.Router();

// POST: Create a new order
router.post("/", async (req, res) => {
  try {
    console.log("✅ Received order data:", req.body); // ✅ LOG REQUEST BODY

    const newOrder = new Order(req.body);
    await newOrder.save();

    res.status(201).json({ message: "Order placed successfully!" });
  } catch (error) {
    console.error("❌ Error placing order:", error); // ✅ LOG ERROR
    res.status(500).json({ error: "Failed to place order" });
  }
});

export default router;
