import { School } from "@/app/_modles/schoolModel";
import { User } from "@/app/_modles/userModel";
import { dbConnect } from "@/app/db/dbConnect";
import camelCaseString from "@/utils/camelCaseString";
import NextAuth, { NextAuthOptions } from "next-auth";
import GoogleProvider from "next-auth/providers/google";

export const authOptions: NextAuthOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
  ],
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
