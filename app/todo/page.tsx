import { TodoForm } from '@/app/todo/components/todo-form'
import { cn } from '@/lib/utils'

type ValuePiece = Date | null

type Value = ValuePiece | [ValuePiece, ValuePiece]

export default function Todo() {

  return (
    <div className={cn('my-2 flex flex-row flex-wrap items-start py-2 w-screen')}>
      <div className={cn('flex w-max grow basis-4 flex-col items-stretch pt-4 max-w-80')}>
        <h1>Todo Page</h1>
        <div className='w-full'>
        <TodoForm />
        </div>
      </div>
    </div>
  )
}
