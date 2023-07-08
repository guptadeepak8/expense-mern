import Transaction from "../models/Transaction.js";

const getTransaction=async(req, res)=>{
  const transaction = await Transaction.find({user_id:req.user._id}).sort({ createdAt: -1 });
  
  res.json({ transaction });
}


const updateTransaction=async(req, res)=>{
  await Transaction.findOneAndUpdate(
    { _id: req.params.id },
    { $set: req.body }
  );
  res.send({ message: "Updated sucessfully" });
}


const deleteTransaction=async(req, res)=>{
  await Transaction.findOneAndDelete({ _id: req.params.id });
  res.send({ message: "Delete Successfully" });
}


const postTransaction=async(req, res)=>{
  const { amount, text, date } = req.body;
  const transaction = new Transaction({
    amount,
    text,
    user_id:req.user._id,
    date,
  });
  await transaction.save();
  res.send({ message: "successFully Added Transaction" });
}

export {getTransaction,updateTransaction,deleteTransaction,postTransaction}