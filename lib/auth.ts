import { PrismaAdapter } from "@next-auth/prisma-adapter";
import { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { Prisma } from "./prisma";
import { compare } from "bcrypt";

export const authOptions: NextAuthOptions = {
  adapter: PrismaAdapter(Prisma),
  secret: process.env.NEXTAUTH_SECRET,
  session: {
    strategy: 'jwt'
  },
  pages: {
    signIn: '/sign-in'
  },
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email", placeholder: "Enter Email" },
        password: { label: "Password", type: "Enter Password" }
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) {
          return null;
        }

        const existingUser = await Prisma.user.findUnique({
          where: {email: credentials?.email}
        });

        if(!existingUser){
          return null;
        }

        const existingPassword = existingUser.password || "";

        const passwordMatch = await compare(credentials.password, existingPassword);

        if(!passwordMatch){
          return null;
        }

        return {
          id: `${existingUser.id}`,
          username: existingUser.username,
          email: existingUser.email
        } as any

      }
    })
  ],
  callbacks: {
    async jwt({token, user}) {
      if(user) {
        return {
          ...token,
          username: user.username
        }
      }
      return token
    },
    async session({session, user, token}) {
      return{
        ...session,
        user: {
          ...session.user,
          username: token.username
        }
      }
    },
  }
}