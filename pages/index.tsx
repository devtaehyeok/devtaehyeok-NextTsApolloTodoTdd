import React from "react";
import TodoApp from "../components/TodoApp/TodoApp";
import { TodoLayout } from "../layouts/TodoLayout";
import { injectStyles } from "../styles";
import { TodoProvider } from "../TodoContext";
export default function Home() {
  injectStyles();
  return (
    <TodoProvider>
      <TodoLayout>
        <TodoApp>
          <TodoApp.TodoHead />
          <TodoApp.TodoList />
          <TodoApp.TodoCreate />
        </TodoApp>
      </TodoLayout>
    </TodoProvider>
  );
}
