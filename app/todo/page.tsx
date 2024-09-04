import { GetServerSideProps } from 'next';
import { TodoForm } from '@/app/todo/components/todo-form';
import { cn } from '@/lib/utils';
import { TodoList, TodoListProps } from './components/todo-list';
import { urqlClient } from '@/lib/client/GraphQL/client';
import { getTodos } from './actions/todo';


export default function Todo() {
  return (
    <div
      className={cn('my-2 flex w-screen flex-row flex-wrap items-start py-2')}
    >
      <div
        className={cn(
          'flex w-max max-w-80 grow basis-4 flex-col items-stretch pt-4',
        )}
      >
        <h1>Todo Page</h1>
        <div>
          <TodoList />
        </div>
        <div className="w-full">
          <TodoForm />
        </div>
      </div>
    </div>
  );
}

export const getServerSideProps: GetServerSideProps<TodoListProps> = async () => {
  const todoList = await getTodos();

  return {
    props: {
      todos: todoList
    }
  }

}