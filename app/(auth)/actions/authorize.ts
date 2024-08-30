'use server';

import { AuthError } from 'next-auth';

import { User } from '@/app/(auth)/types';
import { signIn } from '@/auth';

export async function authenticate(formData: User) {
  try {
    await signIn('credentials', {
      email: formData.email,
      password: formData.password,
    });
  } catch (err) {
    if (err instanceof AuthError) {
      switch (err.type) {
        case 'CredentialsSignin':
          return 'Invalid credentials.';
        default:
          return 'Something went wrong.';
      }
    }
    throw err;
  }
}
