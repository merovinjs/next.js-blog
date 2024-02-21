import Bloguser from "@/blogModels/Bloguser";
import connectDB from "@/utilty/db";
import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";
import { options } from "../auth/[...nextauth]/options";
export const GET = async (request) => {
  try {
    await connectDB();

    const session = await getServerSession(options);
    const {
      user: { email },
    } = session;
    console.log(email);

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

    return new NextResponse(JSON.stringify(...currentUser), {
      status: 200,
      headers: { "Access-Control-Allow-Origin": "*" },
    });
  } catch (error) {
    console.log("ERROR", error);
    return new NextResponse("error", { status: 500 });
  }
};
