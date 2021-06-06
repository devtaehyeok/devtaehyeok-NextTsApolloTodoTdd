import { gql } from "@apollo/client";

export const GET_TODO_HEADER = gql`
  query GetTodoHeaderInfo {
    todoHeaderInfo @client {
      today
      day
      left
    }
  }
`;
