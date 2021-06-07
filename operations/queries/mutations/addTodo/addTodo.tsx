import { ReactiveVar } from "@apollo/client";
import { Todo, Todos } from "../../../../models/Todos";

export default function createAddTodo(todosVar: ReactiveVar<Todos>) {
  const createNewTodoId = (allTodos: Todos) => {
    return (
      allTodos.reduce(
        (maxId: number, todo: Todo) => Math.max(todo.id, maxId),
        -1,
      ) + 1
    );
  };

  const createNewTodo = (text: string, allTodos: Todos): Todo => {
    return { text, done: false, id: createNewTodoId(allTodos) };
  };

  return (text: string) => {
    const allTodos = todosVar();
    todosVar(allTodos.concat([createNewTodo(text, allTodos)]));
  };
}
