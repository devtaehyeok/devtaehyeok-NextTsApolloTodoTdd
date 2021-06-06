import React from "react";
import { useTodoState } from "../../TodoContext";
import TodoCreate from "./TodoCreate";
import TodoHead, { ITodoHead } from "./TodoHead";
import { ITodoItem } from "./TodoItem";
import TodoList, { ITodoList } from "./TodoList";
/**
 * The parent component in charge of keeping state.
 */
const today = new Date();
const defaultContextValue = {
  today: today.toLocaleDateString("ko-KR", {
    year: "numeric",
    month: "long",
    day: "numeric",
  }),
  day: today.toLocaleDateString("ko-KR", { weekday: "long" }),
  left: 0,
};

interface ITodoContext {
  todoHeaderInfo: ITodoHead;
  setTodoHeaderInfo: (props: ITodoHead) => void;
}
const TodoContext = React.createContext<ITodoContext | undefined>(undefined);

interface ITodoAppComposition {
  TodoHead: React.FC<ITodoHead | {}>;
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
  const todos = useTodoState();
  const undoneTasks = todos.filter((todo: ITodoItem) => !todo.done);
  const [todoHeaderInfo, setTodoHeaderInfo] = React.useState({
    ...defaultContextValue,
    left: undoneTasks.length,
  });

  const memoizedContextValue = React.useMemo(
    () => ({
      todoHeaderInfo,
      setTodoHeaderInfo,
    }),
    [todoHeaderInfo, setTodoHeaderInfo],
  );
  return (
    <TodoContext.Provider value={memoizedContextValue}>
      {props.children}
    </TodoContext.Provider>
  );
};

TodoApp.TodoHead = TodoHead;
TodoApp.TodoList = TodoList;
TodoApp.TodoCreate = TodoCreate;
export default TodoApp;
