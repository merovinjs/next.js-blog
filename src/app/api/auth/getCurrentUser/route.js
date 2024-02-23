import Bloguser from "@/blogModels/Bloguser";
import connectDB from "@/utilty/db";
import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";
import { options } from "../[...nextauth]/options";
export const dynamic = "force-dynamic"; // defaults to auto
export const GET = async (request) => {
  try {
    await connectDB();

    const session = await getServerSession(options);
    const {
      user: { email },
    } = session;
    console.log(typeof email);

    if (!email) {
      return "user bulunamadı";
    }
    console.log(session);
    const currentUser = await Bloguser.findOne({
      email: email,
    });
    if (!currentUser) {
      return "current user bulunamadı";
    }

    return new NextResponse(JSON.stringify(currentUser), {
      status: 200,
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
        "Access-Control-Allow-Headers": "Content-Type, Authorization",
      },
    });
  } catch (error) {
    return new NextResponse("error", { status: 500 });
  }
};
