import { gql } from "@apollo/client";

export const typeDefs = gql`
  extend type Query {
    todoHeaderInfo: TodoHeaderInfo!
  }

  extend type TodoHeaderInfo {
    today: String!
    day: String!
    left: Number!
  }
`;
