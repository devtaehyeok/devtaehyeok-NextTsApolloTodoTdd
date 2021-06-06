import * as dateFns from "date-fns";
import React from "react";
import TodoCreate from "./TodoCreate";
import TodoHead, { ITodoHead } from "./TodoHead";
import TodoList, { ITodoList } from "./TodoList";
/**
 * The parent component in charge of keeping state.
 */

const defaultContextValue = {
  today: dateFns.format(new Date(), "yyyy-MM-dd"),
  day: dateFns.format(new Date(), "	LLL"),
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
  const [todoHeaderInfo, setTodoHeaderInfo] =
    React.useState(defaultContextValue);
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
