import Bloguser from "@/blogModels/Bloguser";
import connectDB from "@/utilty/db";
import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";
import { options } from "../[...nextauth]/options";

export const GET = async (request) => {
  try {
    await connectDB();

    const session = await getServerSession(options);
    if (!session) {
      return new NextResponse(null, {
        status: 302,
        headers: {
          Location: "/",
        },
      });
    }
    const {
      user: { email },
    } = session;

    if (!email) {
      return new NextResponse("Kullanıcı bulunamadı", { status: 401 });
    }
    const currentUser = await Bloguser.findOne({
      email: email,
    });
    if (!currentUser) {
      return new NextResponse("Kullanıcı bulunamadı", { status: 404 });
    }

    return new NextResponse(JSON.stringify(currentUser), {
      status: 200,
      headers: {
        "Access-Control-Allow-Origin": "*",
      },
    });
  } catch (error) {
    console.log(error);
    return new NextResponse("error", { status: 500 });
  }
};
