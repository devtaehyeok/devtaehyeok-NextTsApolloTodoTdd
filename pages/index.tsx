import { ApolloClient, ApolloProvider } from "@apollo/client";
import React from "react";
import { cache } from "../cache";
import TodoApp from "../components/TodoApp/TodoApp";
import TodoHeaderContainer from "../containers/TodoHeaderContainer";
import { TodoLayout } from "../layouts/TodoLayout";
import { injectStyles } from "../styles";
export const client = new ApolloClient({
  cache,
  connectToDevTools: true,
});
export default function Home() {
  injectStyles();
  return (
    <ApolloProvider client={client}>
      <TodoLayout>
        <TodoApp>
          <TodoHeaderContainer />
          <TodoApp.TodoList todos={[]} />
          <TodoApp.TodoCreate />
        </TodoApp>
      </TodoLayout>
    </ApolloProvider>
  );
}
