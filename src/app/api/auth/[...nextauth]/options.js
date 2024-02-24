import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcrypt";
import Bloguser from "@/blogModels/Bloguser";
import connectDB from "@/utilty/db";

export const options = {
  providers: [
    CredentialsProvider({
      id: "credentials",
      name: "Credentials",
      async authorize(credentials) {
        //Check if the user exists.
        await connectDB();

        try {
          const user = await Bloguser.findOne({
            email: credentials.email,
          });

          if (user) {
            const isPasswordCorrect = await bcrypt.compare(credentials.password, user.password);

            if (isPasswordCorrect) {
              return user;
            } else {
              throw new Error("Wrong Credentials!");
            }
          } else {
            throw new Error("User not found!");
          }
        } catch (err) {
          throw new Error(err);
        }
      },
    }),
  ],
  pages: {
    error: "/login",
  },
  secret: process.env.NEXT_AUTH_SECRET,
};
