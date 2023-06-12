import Blogpost from "@/blogModels/Blogpost";
import connectDB from "@/utilty/db";

import { NextResponse } from "next/server";

export const GET = async (request) => {
  try {
    await connectDB();
    const posts = await Blogpost.find();

    return new NextResponse(JSON.stringify(posts), { status: 200 });
  } catch (error) {
    return new NextResponse("data eroro", { status: 500 });
  }
};

export const POST = async (req, res) => {
  try {
    if (req.method === "POST") {
      await connectDB();
      const { title, desc, img, content, username } = req.body;
      const post = await Blogpost.create({
        title,
        desc,
        img,
        content,
        username,
      });
      return NextResponse.created().json({ message: "Post created" });
    }
  } catch (err) {
    return NextResponse.methodNotAllowed().json({
      message: "Method not allowed",
    });
  }
};
