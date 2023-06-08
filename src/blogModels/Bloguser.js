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
  },
  { timestamps: true }
);

let Bloguser;
try {
  Bloguser = mongoose.model("Blogpost");
} catch {
  Bloguser = mongoose.model("Blogpost", userSchema);
}

export default Blogpost;
