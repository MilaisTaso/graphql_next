import NextAuth from "next-auth"
import Credentials from "next-auth/providers/credentials"
import { User } from "./app/(auth)/types";

export const { signIn, signOut, auth } = NextAuth({
  providers: [
    Credentials({
      async authorize(credentials: User) {
        
      }
    });
  ],
})