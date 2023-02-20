import { Router } from "express";
import Transaction from "../models/Transaction.js";
import passport from "passport";
const router = Router();

router.get(
  "/",
  async (req, res) => {
    const transaction = await Transaction.find({user_id:req.user._id}).sort({ createdAt: -1 });
    res.json({ data: transaction });
  }
);

router.post("/", async (req, res) => {
  const { amount, text, date } = req.body;
  const transaction = new Transaction({
    amount,
    text,
    user_id:req.user._id,
    date,
  });
  await transaction.save();
  res.send({ message: "success" });
});

router.patch("/:id", async (req, res) => {
  await Transaction.findOneAndUpdate(
    { _id: req.params.id },
    { $set: req.body }
  );
  res.send({ message: "Updated sucessfully" });
});

router.delete("/:id", async (req, res) => {
  await Transaction.findOneAndDelete({ _id: req.params.id });
  res.send({ message: "Delete Successfully" });
});
export default router;
