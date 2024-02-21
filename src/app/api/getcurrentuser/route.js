import Bloguser from "@/blogModels/Bloguser";
import connectDB from "@/utilty/db";
import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";

export const GET = async (request) => {
  try {
    async function getSession() {
      return await getServerSession();
    }
    await connectDB();
    const session = await getSession();
    if (session?.user?.email) {
      return "user bulunamadı";
    }
    console.log(session);
    const currentUser = await Bloguser.findOne({
      email: session?.user?.email,
    });
    if (!currentUser) {
      return "current user bulunamadı";
    }

    return new NextResponse(JSON.stringify(currentUser), {
      status: 200,
      headers: { "Access-Control-Allow-Origin": "*" },
    });
  } catch (error) {
    console.log("ERROR", error);
    return new NextResponse("error", { status: 500 });
  }
};
