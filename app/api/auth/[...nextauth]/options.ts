import GoogleProvider from "next-auth/providers/google";
import axios from "axios";
import { UserType } from "../../../types";
import { JWT } from "next-auth/jwt";
import { NextAuthOptions } from "next-auth";

declare module "next-auth" {
  interface Session {
    user: {
      id: number | null;
      name?: string | null;
      email?: string | null;
      image?: string | null;
      role?: string | null;
    };
  }
}

const options: NextAuthOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_ID as string,
      clientSecret: process.env.GOOGLE_SECRET as string,
    }),
  ],

  callbacks: {
    async signIn({ user }) {
      const userInfo = await axios
        .get(`http://localhost:3001/get-user/${user.email}`)
        .then((res) => {
          return res.data;
        });
      if (!userInfo) {
        await axios.post("http://localhost:3001/create-user", {
          name: user.name,
          email: user.email,
          role: "member",
        });
      }
      return true;
    },
    async jwt({ user, token }) {
      if (user) {
        try {
          const userInfo = await axios
            .get(`http://localhost:3001/get-user/${user.email}`)
            .then((res) => res.data[0]);
          token.role = userInfo.role;
          token.id = userInfo.id;
        } catch (error) {
          console.error("Error in jwt callback:", error);
          token.role = "member";
        }
      }
      return token;
    },
    async session({ session, token }) {
      if (token) {
        session.user.role = token.role as string;
        session.user.id = token.id as number;
      }
      return session;
    },
  },
};

export default options;
