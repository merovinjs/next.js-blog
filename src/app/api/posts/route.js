import Blogpost from "@/blogModels/Blogpost";
import connectDB from "@/utilty/db";
import { NextResponse } from "next/server";

export const GET = async (request) => {
  try {
    await connectDB();
    const posts = await Blogpost.find();
    return new NextResponse(JSON.stringify(posts), {
      status: 200,
      headers: { "Access-Control-Allow-Origin": "*" },
    });
  } catch (error) {
    return new NextResponse("error", { status: 500 });
  }
};
export const POST = async (request) => {
  const { title, desc, img, content, username } = await request.json();

  await connectDB();
  const newPost = new Blogpost({ title, desc, img, content, username });

  await newPost.save();
  return new NextResponse(JSON.stringify(newPost), {
    status: 200,
    headers: { "Access-Control-Allow-Origin": "*" },
  });
};
