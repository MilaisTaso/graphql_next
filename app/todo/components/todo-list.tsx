import { getTodos } from "@/app/todo/actions/todo";
import { TodoItem } from "../types";

export type TodoListProps = {
  todos: TodoItem[]
}

export async function TodoList({todos}: TodoListProps) {

  return (
    <div className="mt-6 flow-root">
      <div className="inline-block min-w-full align-middle">
        <div className="rounded-lg bg-gray-50 p-2 md:pt-0">
          <table className="hidden min-w-full text-gray-900 md:table">
            <thead className="rounded-lg text-left text-sm font-normal">
              <tr>
                <th scope="col" className="px-4 py-5 font-medium sm:pl-6">
                  Title
                </th>
                <th scope="col" className="px-3 py-5 font-medium">
                  Description
                </th>
                <th scope="col" className="px-3 py-5 font-medium">
                  Status
                </th>
                <th scope="col" className="relative py-3 pl-6 pr-3">
                  <span className="sr-only">Edit</span>
                </th>
              </tr>
            </thead>
            <tbody className="bg-white">
              {todos.map((todo) => (
                <tr
                  key={todo.id}
                  className="w-full border-b py-3 text-sm last-of-type:border-none [&:first-child>td:first-child]:rounded-tl-lg [&:first-child>td:last-child]:rounded-tr-lg [&:last-child>td:first-child]:rounded-bl-lg [&:last-child>td:last-child]:rounded-br-lg"
                >
                  <td className="whitespace-nowrap py-3 pl-6 pr-3">
                    <div className="flex items-center gap-3">
                      <p>{todo.title}</p>
                    </div>
                  </td>
                  <td className="whitespace-nowrap p-3">
                    {todo.description ?? "説明なし"}
                  </td>
                  <td className="whitespace-nowrap p-3">
                    <p>{todo.status}</p>
                  </td>
                  <td className="whitespace-nowrap py-3 pl-6 pr-3">
                    <div className="flex justify-end gap-3">
                      <span>Edit</span>
                      <span>Delete</span>
                      {/* <UpdateInvoice id={invoice.id} />
                      <DeleteInvoice id={invoice.id} /> */}
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )

}