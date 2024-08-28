import NextAuth from "next-auth"
import Credentials from "next-auth/providers/credentials"

import { UserCredential } from "./app/(auth)/types";
import { client } from "./lib/HTTP/client";

export const { signIn, signOut, auth } = NextAuth({
  providers: [
    Credentials({
      credentials: {
        email: {},
        password: {}
      },
      async authorize({email, password}) {
        console.log('クレデンシャルズ:', email, password)
        const body = {
          username: email,
          password: password
        }
        const response = await client.post<UserCredential>('login', body);
        console.log(response);

        if (!response.token) return null;

        return {
          email: response.user.email,
          name: response.user.nick_name,
          token: response.token
        };
      }
    }),
  ],
})