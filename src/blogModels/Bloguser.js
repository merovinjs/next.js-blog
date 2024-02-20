import mongoose from "mongoose";

const { Schema } = mongoose;

const userSchema = new Schema(
  {
    name: {
      type: String,
      unique: true,
      required: true,
    },
    email: {
      type: String,
      unique: true,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    role: {
      type: String,
      required: true,
      default: "user",
      enum: ["user", "admin"],
    },
  },
  { timestamps: true }
);

let Bloguser;
try {
  Bloguser = mongoose.model("Bloguser");
} catch {
  Bloguser = mongoose.model("Bloguser", userSchema);
}

export default Bloguser;
