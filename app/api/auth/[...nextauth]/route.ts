import NextAuth, { NextAuthOptions } from "next-auth";
import GoogleProvider from "next-auth/providers/google";

import { User } from "@/app/_modles/userModel";
import { School } from "@/app/_modles/schoolModel";
import camelize from "@/utils/camelize";
import { dbConnect } from "@/app/db/dbConnect";

export const authOptions: NextAuthOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
  ],
  // adapter: MongoDBAdapter(clientPromise),
  pages: {
    // signIn: '/auth/signin',
    // signOut: '/auth/signout',
    // error: '/auth/error', // Error code passed in query string as ?error=
    // verifyRequest: '/auth/verify-request', // (used for check email message)
    // newUser: '/auth/new-user' // New users will be directed here on first sign in (leave the property out if not of interest)
  },
  callbacks: {
    // @ts-ignore
    async signIn({ user, account, profile, email, credentials }) {
      console.log("USER: ", user);
      console.log("ACCOUNT: ", account);
      console.log("PROFILE:", profile);

      console.log("CREDENTIAL", credentials);

      if (!user) {
        return false;
      }
      const userEmail = user.email || email;
      if (!userEmail) {
        return false;
      }
      await dbConnect();
      const userExist = await User.findOne({ userEmail });
      if (userExist) {
        return true;
      }

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
          const schoolName = camelize(school.name);
          newUser.settings.mySchools.set(schoolName, school);
        }

        const savedUser = await newUser.save();

        console.log(savedUser);
        return true;
      } catch (error) {
        console.error("Error saving user:", error);
        return false;
      }
    },
  },
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
