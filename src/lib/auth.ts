import { PrismaAdapter } from "@next-auth/prisma-adapter";
import { NextAuthOptions } from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import { Session } from 'next-auth';
import { JWT } from 'next-auth/jwt';


import { db } from "@/lib/db";
import { User } from "lucide-react";


function getGoogleCredentials(): { clientId: string; clientSecret: string; } {
  const clientId = process.env.GOOGLE_CLIENT_ID;
  const clientSecret = process.env.GOOGLE_CLIENT_SECRET;

  if (!clientId || !clientSecret) {
    throw new Error('Missing Google client ID or secret');
  } else {
    return { clientId, clientSecret };
  }
};



export const authOptions: NextAuthOptions = {
  /*Prisma is an open-source ORM that drastically simplifies data modeling, migrations, and data access
  for SQL databases in Node.js and TypeScript. */
  adapter: PrismaAdapter(db),
  session: {
    strategy: 'jwt'
  },
  pages: {
    signIn: '/login',
  },
  providers: [
    GoogleProvider({
      clientId: getGoogleCredentials().clientId,
      clientSecret: getGoogleCredentials().clientSecret,
    })
  ],
  callbacks: {
    session: async ({ session, token }: { session: Session, token: JWT }) => {
      if (token) {
        session.user.id = token.id;
        session.user.name = token.name;
        session.user.email = token.email;
        session.user.image = token.picture;
      }
      return session;
    },
    async jwt({ token, user }) {
      const dbUser = await db.user.findFirst({
        where: {
          email: token.email,
        },
      })

      if (!dbUser) {
        token.id = user!.id
        return token
      }

      return {
        id: dbUser.id,
        name: dbUser.name,
        email: dbUser.email,
        picture: dbUser.image,
      }
    },
    redirect() {
      return '/dashboard'
    },
  },
}