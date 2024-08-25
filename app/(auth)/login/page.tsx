import { z } from 'zod'

import { Form } from "@/app/components/form/Form";

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
    // Todo 製作中
    <Form<User, typeof userSchema>>

    </Form>
  );
};