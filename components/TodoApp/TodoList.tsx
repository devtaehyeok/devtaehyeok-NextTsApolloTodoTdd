import styled from "@emotion/styled";
import React from "react";
import { Todo, Todos } from "../../models/Todos";
import TodoItem from "./TodoItem";

const TodoListBlock = styled.div({
  flex: 1,
  padding: ["20px", "32px"],
  paddingBottom: "48px",
  overFlowY: "auto",
});
export interface ITodoList {
  todos: Todos;
}

const TodoList: React.FC<ITodoList> = ({ todos }) => {
  return (
    <TodoListBlock>
      {todos.map((todo: Todo) => (
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
