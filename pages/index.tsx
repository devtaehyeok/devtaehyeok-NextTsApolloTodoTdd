import React from "react";
import TodoApp from "../components/TodoApp/TodoApp";
import { TodoLayout } from "../layouts/TodoLayout";
import { injectStyles } from "../styles";
export default function Home() {
  injectStyles();
  return (
    <TodoLayout>
      <TodoApp>
        <TodoApp.TodoHead />
        <TodoApp.TodoList />
        <TodoApp.TodoCreate />
      </TodoApp>
    </TodoLayout>
  );
}
