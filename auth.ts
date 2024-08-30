import NextAuth from 'next-auth';
import Credentials from 'next-auth/providers/credentials';

import { UserCredential } from '@/app/(auth)/types';
import { authConfig  } from '@/auth.config';
import { client } from '@/lib/HTTP/client';

export const { signIn, signOut, auth } = NextAuth({
  // auth configの設定忘れずに
  ...authConfig,
  session: { strategy: 'jwt'},
  providers: [
    Credentials({
      credentials: {
        email: {type: "text"},
        password: {type: "password"},
      },
      async authorize({ email, password }) {
        console.log('auth.ts credentials:', email, password);
        const body = {
          username: email,
          password: password,
        };
        const response = await client.post<UserCredential>('login', body);


        if (!response.token.sub) {
          console.log('Failed to login!')
          return null
        };

        return {
          email: response.user.email,
          name: response.user.nickName,
          token: response.token.sub,
        };
      },
    }),
  ],
});
