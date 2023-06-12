import { NextResponse } from "next/server";
import Blogpost from "@/blogModels/Blogpost";
import connectDB from "@/utilty/db";

export const GET = async (request) => {
  const url = new URL(request.url);

  const username = url.searchParams.get("username");

  try {
    await connectDB();

    const posts = await Blogpost.find(username && { username });

    return new NextResponse(JSON.stringify(posts), { status: 200 });
  } catch (err) {
    return new NextResponse("Database Error", { status: 500 });
  }
};

export const POST = async (request) => {
  const body = await request.json();

  const newPost = new Blogpost(body);

  try {
    await connectDB();

    await newPost.save();

    return new NextResponse(
      JSON.stringify({ message: "Post has been created" }),
      { status: 201 }
    );
  } catch (err) {
    return new NextResponse("Database Error", { status: 500 });
  }
};
