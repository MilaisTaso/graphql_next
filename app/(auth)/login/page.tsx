'use client';

import { LogIn } from 'lucide-react';

import { userSchema, User } from '@/app/(auth)/types';
import { Button } from '@/app/components/button';
import { Form } from '@/app/components/form/Form';
import { InputField } from '@/app/components/form/InputField';
import { cn } from '@/lib/utils';

const loginSubmit = (data: User) => {
  console.log(data);
};

export default function Login() {
  return (
    <div className="rounded-lg border-2 border-white px-1 py-2">
      <h1 className="mb-3 px-3 text-2xl">Please log in to continue.</h1>
      <Form<typeof userSchema, User>
        id="login"
        schema={userSchema}
        onSubmit={loginSubmit}
      >
        {({ register, formState }) => {
          return (
            <div className="flex flex-col gap-6 p-3">
              <div className="flex flex-col gap-2 md:gap-3">
                <InputField
                  id="email"
                  label="email"
                  placeholder="Enter your email address"
                  error={formState.errors.email}
                  registration={register('email')}
                  className={cn()}
                />
                <InputField
                  id="password"
                  label="password"
                  error={formState.errors.password}
                  placeholder="Enter your password"
                  registration={register('password')}
                  className={cn()}
                />
              </div>
              <Button type="submit" size="sm" className="flex content-around">
                <span className="flex flex-row content-around gap-1">
                  Login <LogIn className="ml-auto size-5" />
                </span>
              </Button>
            </div>
          );
        }}
      </Form>
    </div>
  );
}
