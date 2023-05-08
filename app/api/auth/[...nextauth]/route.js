import NextAuth from "next-auth/next";
import GoogleProvider from 'next-auth/providers/google';

import { connectToDB } from "@utils/database";

console.log(process.env.GOOGLE_ID);

const handler = NextAuth ({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET
    })
  ],
  async session ({ session }) {
    
  },
  async signIn ({ profile }) {
    try {
      await connectToDB();

      // check if user exists


      // or create user
      

      return true;
    } catch (err) {
      console.log(err);
      return false;
    }
  }
})

export { handler as GET, handler as POST };