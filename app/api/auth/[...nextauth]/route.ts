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
  callbacks: {
    async signIn({ user, email }) {
      const userEmail = user.email || email;
      if (!user || !userEmail) return false;

      await dbConnect();

      // If user exist
      const userExist = await User.findOne({ email: userEmail });
      if (userExist) {
        return true;
      } else {
        // Create new User
        //Get all schools from DB to add as defaults

        const schools = await School.find({});

        try {
          const newUser = await User.create({
            name: user.name,
            email: userEmail,
            picture: user.image || "",
            settings: {
              mySchools: new Map(),
            },
          });

          // Loop through the 'schools' array and add each school to the mySchools key
          for (const school of schools) {
            const schoolName = camelCaseString(school.name);
            newUser.settings.mySchools.set(schoolName, school);
          }

          const savedUser = await newUser.save();

          console.log("New User Saved", savedUser);
          return true;
        } catch (error) {
          console.error("Error saving user:", error);
          return false;
        }
      }
    },
    // Session Callback https://next-auth.js.org/configuration/callbacks#session-callback
    // Add User _id to session
    session: async ({ session }) => {
      if (session?.user) {
        try {
          await dbConnect();
          const user = await User.findOne({ email: session.user.email });
          if (user) {
            session.user._id = user._id.toString();
          } else {
            console.error("User not found in DB to append session.user._id");
          }
        } catch (error) {
          console.error(
            "Error fetching user from DB to append session.user._id:",
            error
          );
        }
      }
      return session;
    },
  },
};

declare global {
  namespace NodeJS {
    export interface ProcessEnv {
      NEXTAUTH_SECRET: string;

      GOOGLE_CLIENT_ID: string;
      GOOGLE_CLIENT_SECRET: string;

      MONGODB_URI: string;
      MONGODB_URI_DEV: string;
      NEXT_PUBLIC_API_URL: string;
    }
  }
}

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
