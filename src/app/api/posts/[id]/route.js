import Blogpost from "@/blogModels/Blogpost";
import connectDB from "@/utilty/db";

import { NextResponse } from "next/server";

export const GET = async (request, { params }) => {
  const { id } = params;
  try {
    await connectDB();
    const post = await Blogpost.findById(id);

    return new NextResponse(JSON.stringify(post), { status: 200 });
  } catch (error) {
    return new NextResponse("data eroro", { status: 500 });
  }
};
