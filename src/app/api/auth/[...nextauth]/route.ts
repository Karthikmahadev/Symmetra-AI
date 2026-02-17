// src/app/api/auth/[...nextauth]/route.ts
import NextAuth, { type AuthOptions } from "next-auth";
import Google from "next-auth/providers/google";
import GitHubProvider from "next-auth/providers/github";


import { DrizzleAdapter } from "@auth/drizzle-adapter";

import { db } from "@/lib/db";
import { users, accounts, sessions, verificationTokens } from "@/lib/schema";

export const authOptions: AuthOptions = {
  adapter: DrizzleAdapter(db, {
    usersTable: users,
    accountsTable: accounts,
    sessionsTable: sessions,
    verificationTokensTable: verificationTokens,
  }),
  providers: [
    Google({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
      // authorization: {
      //   params: {
      //     prompt: "select_account", // 🔥 Forces account chooser
      //   },
      // },
    }),
    GitHubProvider({
    clientId: process.env.GITHUB_CLIENT_ID!,
    clientSecret: process.env.GITHUB_CLIENT_SECRET!,
    // authorization: {
    //   params: {
    //     prompt: "login", // 🔥 Forces login screen
    //   },
    // },
  }),
  ],
  session: {
    strategy: "database", // sessions stored in DB
  },
  pages: {
    signIn: "/auth/login", // optional: your custom login page
    error: "/auth/login", // display errors on login page
  },
  secret: process.env.NEXTAUTH_SECRET,
  callbacks: {
    async session({ session, user }) {
      // Include DB user ID in session
      session.user.id = user.id;
      return session;
    },
  },
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
