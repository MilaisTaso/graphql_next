import { LogIn } from 'lucide-react';
import { z } from 'zod'

import { Button } from '@/app/components/button';
import { Form } from "@/app/components/form/Form";
import { InputField } from '@/app/components/form/InputField';
import { cn } from '@/lib/utils';

const passwordReg = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).+$")

const userSchema = z.object({
  email: z.string().email().nullable(),
  password: z.string().min(8).regex(passwordReg)
})

type User = z.infer<typeof userSchema>

const loginSubmit = (data: User) => {
  console.log(data)
}

export default function Login() {
  return (
    <Form<User, typeof userSchema>
      id="login"
      schema={userSchema}
      onSubmit={loginSubmit}
    >
      {
        ({register, formState}) => {
          return (
            <div>
            <InputField
            id='email'
            error={formState.errors.email}
            registration={register('email')}
            className={cn()}
            />
            <Button type='submit' size='sm' className=''>
              Login
            </Button>
            </div>
          )
        }
      }
    </Form>
  );
};