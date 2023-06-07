import mongoose from "mongoose";
import { Schema } from "mongoose";

const userSchema = new Schema(
  {
    firstName: {
      type: String,
      required: true,
    },
    lastName: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    categories: [
      {label:String,icon:String}
    ]
    },
  {
    timestamps: true,
  }
);

export default new mongoose.model("User", userSchema);
