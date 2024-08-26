'use client';

import { LogIn } from 'lucide-react';
import { z } from 'zod';

import { Button } from '@/app/components/button';
import { Form } from '@/app/components/form/Form';
import { InputField } from '@/app/components/form/InputField';
import { cn } from '@/lib/utils';

const passwordReg = new RegExp('^(?=.*[a-z])(?=.*[A-Z])(?=.*d)(?=.*[W_]).+$');

const userSchema = z.object({
  email: z.string().email().nullable(),
  password: z.string().min(8).regex(passwordReg),
});

type User = z.infer<typeof userSchema>;

const loginSubmit = (data: User) => {
  console.log(data);
};

export default function Login() {
  return (
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
                error={formState.errors.email}
                registration={register('email')}
                className={cn()}
              />
              <InputField
                id="password"
                label="password"
                error={formState.errors.password}
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
  );
}
