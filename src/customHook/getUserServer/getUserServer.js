import Bloguser from "@/blogModels/Bloguser";
import connectDB from "@/utilty/db";
import { getServerSession } from "next-auth";

export async function getSession() {
  return await getServerSession();
}
export async function getUserServer() {
  try {
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

    return {
      ...currentUser,
    };
  } catch (error) {
    return error;
  }
}
