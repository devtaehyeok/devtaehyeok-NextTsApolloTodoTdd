import styled from "@emotion/styled";
import React from "react";
import { useTodoState } from "../../TodoContext";
import TodoItem, { ITodoItem } from "./TodoItem";

export interface ITodoList {}

const TodoListBlock = styled.div({
  flex: 1,
  padding: ["20px", "32px"],
  paddingBottom: "48px",
  overFlowY: "auto",
});

const TodoList: React.FC<ITodoList> = () => {
  const todos = useTodoState();
  return (
    <TodoListBlock>
      {todos.map((todo: ITodoItem) => (
        <TodoItem
          key={todo.id}
          id={todo.id}
          text={todo.text}
          done={todo.done}
        />
      ))}
    </TodoListBlock>
  );
};

export default TodoList;
