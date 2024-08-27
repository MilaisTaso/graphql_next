import NextAuth from "next-auth"
import Credentials from "next-auth/providers/credentials"
import { User } from "./app/(auth)/types";
import { client } from "./lib/HTTP/client";

export const { signIn, signOut, auth } = NextAuth({
  providers: [
    Credentials({
      async authorize(credentials: User) {
        console.log('クレデンシャルズ:', credentials)
        const response = await client.post<User>('login', credentials);
      }
    });
  ],
})