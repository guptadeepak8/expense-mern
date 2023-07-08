import { Router } from "express";
import { deleteTransaction, getTransaction, postTransaction, updateTransaction } from "../controllers/transactionContoller.js";

const router = Router();

router.get("/",getTransaction);

router.post("/",postTransaction);

router.patch("/:id",updateTransaction);

router.delete("/:id", deleteTransaction);

export default router;
