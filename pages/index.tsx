import { ApolloClient, ApolloProvider } from "@apollo/client";
import React from "react";
import { cache } from "../cache";
import TodoApp from "../components/TodoApp/TodoApp";
import TodoHeaderContainer from "../containers/TodoHeaderContainer";
import TodoListContainer from "../containers/TodoListContainer";
import { TodoLayout } from "../layouts/TodoLayout";
import { typeDefs } from "../localSchema";
import { injectStyles } from "../styles";
export const client = new ApolloClient({
  cache,
  connectToDevTools: true,
  typeDefs,
});
export default function Home() {
  injectStyles();
  return (
    <ApolloProvider client={client}>
      <TodoLayout>
        <TodoApp>
          <TodoHeaderContainer />
          <TodoListContainer />
          <TodoApp.TodoCreate />
        </TodoApp>
      </TodoLayout>
    </ApolloProvider>
  );
}
