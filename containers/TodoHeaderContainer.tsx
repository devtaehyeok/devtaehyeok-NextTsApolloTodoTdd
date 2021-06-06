import { useQuery } from "@apollo/client";
import { FC } from "react";
import TodoApp from "../components/TodoApp/TodoApp";
import { GET_TODO_HEADER } from "../operations/queries/getTodoHeaderInfo";

const TodoHeaderContainer: FC = () => {
  const { loading, error, data } = useQuery(GET_TODO_HEADER);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error!</p>;

  return <TodoApp.TodoHead {...data?.todoHeaderInfo} />;
};

export default TodoHeaderContainer;
