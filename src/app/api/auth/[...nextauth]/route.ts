
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
    }),
    GitHubProvider({
    clientId: process.env.GITHUB_CLIENT_ID!,
    clientSecret: process.env.GITHUB_CLIENT_SECRET!,
  }),
  ],
  session: {
    strategy: "jwt",
  },
  pages: {
    signIn: "/auth/login",
    error: "/auth/login", 
  },
  secret: process.env.NEXTAUTH_SECRET,
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
      }
      return token;
    },
    async session({ session, token }) {
      if (session.user) {
        session.user.id = token.id as string;
      }
      return session;
    },
  },
  
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
