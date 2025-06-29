import mongoose from "mongoose";

const orderSchema = new mongoose.Schema({
  user: { type: String, required: true },
  items: [
    {
      id: Number,
      name: String,
      price: Number,
      quantity: Number,
    },
  ],
  total: { type: Number, required: true },
  createdAt: { type: Date, default: Date.now },
});

export default mongoose.model("Order", orderSchema);
