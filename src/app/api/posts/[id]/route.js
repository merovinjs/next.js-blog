import Blogpost from "@/blogModels/Blogpost";
import connectDB from "@/utilty/db";
import { NextResponse } from "next/server";

export const GET = async (request, { params }) => {
  const { id } = params;
  try {
    await connectDB();
    const post = await Blogpost.findById(id);
    return new NextResponse(JSON.stringify(post), {
      status: 200,
      headers: { "Access-Control-Allow-Origin": "*" },
    });
  } catch (error) {
    return new NextResponse("error", { status: 500 });
  }
};
export const DELETE = async (request, { params }) => {
  const { id } = params;
  console.log(id);
  try {
    await connectDB();
    await Blogpost.findByIdAndDelete(id);
    return new NextResponse("Post has been deleted", {
      status: 200,
      headers: { "Access-Control-Allow-Origin": "*" },
    });
  } catch (error) {
    console.log(error);
    return new NextResponse("error", { status: 500 });
  }
};
export const PUT = async (request, { params }) => {
  const { id } = params;

  //console.log("Updating post with id:", id);

  const body = await request.text();
  // console.log("body:", body);

  await connectDB();
  const updatedPost = await Blogpost.findByIdAndUpdate(id, JSON.parse(body));
  console.log(updatedPost);

  return new NextResponse("Post has been updated", {
    status: 200,
    headers: { "Access-Control-Allow-Origin": "*" },
  });
};
