'use client';

import { Button } from '@/app/components/button';
import { Form } from '@/app/components/form/Form';
import { InputField } from '@/app/components/form/InputField';
import { TodoSchema, type TodoType } from '@/app/todo/types';
import { cn } from '@/lib/utils';

const todoSubmit = async (data: TodoType) => {
  console.log(data);
};

export function TodoForm() {
  return (
    <div>
      <Form id="create-todo" schema={TodoSchema} onSubmit={todoSubmit}>
        {({ register, formState }) => {
          return (
            <div className="flex flex-col gap-6 p-3">
              <div className="flex flex-col gap-2 md:gap-3">
                <InputField
                  id="title"
                  label="title"
                  placeholder="Title of Todo"
                  error={formState.errors.title}
                  registration={register('title')}
                  className={cn()}
                />
                <InputField
                  id="description"
                  label="description"
                  error={formState.errors.description}
                  placeholder="Description of Todo"
                  registration={register('description')}
                  className={cn()}
                />
              </div>
              <Button type="submit" size="sm" className="flex content-around">
                register
              </Button>
            </div>
          );
        }}
      </Form>
    </div>
  );
}
