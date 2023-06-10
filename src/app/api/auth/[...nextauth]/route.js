import NextAuth from "next-auth";
import GitHubProvider from "next-auth/providers/github";
import CredentialsProvider from "next-auth/providers/credentials";
import connectDB from "@/utilty/db";
import Bloguser from "@/blogModels/Bloguser";
import bcrypt from "bcrypt";
const handler = NextAuth({
  providers: [
    GitHubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
    CredentialsProvider({
      id: "credentials",
      name: "Credentials",
      async authorize(credentials) {
        await connectDB();
        try {
          const user = await Bloguser.findOne({
            email: credentials.email,
          });
          if (user) {
            const isPasswordCorrect = await bcrypt.compare(
              credentials.password,
              user.password
            );

            if (isPasswordCorrect) {
              return user;
            } else {
              throw new Error("Wrong Credentials!");
            }
          } else {
            throw new Error("User not found!");
          }
        } catch (error) {
          throw new Error(err);
        }
      },
    }),
  ],
  secret: process.env.NEXT_AUTH_SECRET,
  pages: {
    error: "/dashboard/login",
  },
});

export { handler as GET, handler as POST };
