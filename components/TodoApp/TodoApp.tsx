import React from "react";
import { TodoHeaderInfo } from "../../models/TodoHeaderInfo";
import TodoCreate from "./TodoCreate";
import TodoHead from "./TodoHead";
import TodoList, { ITodoList } from "./TodoList";

/**
 * The parent component in charge of keeping state.
 */

interface ITodoContext {
  todoHeaderInfo: TodoHeaderInfo;
  setTodoHeaderInfo: (props: TodoHeaderInfo) => void;
}
const TodoContext = React.createContext<ITodoContext | undefined>(undefined);

interface ITodoAppComposition {
  TodoHead: React.FC<TodoHeaderInfo | {}>;
  TodoList: React.FC<ITodoList>;
  TodoCreate: React.FC;
}

// }
export const useTodoContext = () => {
  const context = React.useContext(TodoContext);
  if (!context) {
    throw new Error(
      `TodoContext compound components cannot be rendered outside the TodoContext component`,
    );
  }
  return context;
};

const TodoApp: React.FC & ITodoAppComposition = (props) => {
  return <>{props.children}</>;
};

TodoApp.TodoHead = TodoHead;
TodoApp.TodoList = TodoList;
TodoApp.TodoCreate = TodoCreate;
export default TodoApp;
