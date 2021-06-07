import { useQuery } from "@apollo/client";
import { FC } from "react";
import TodoApp from "../components/TodoApp/TodoApp";
import { GET_ALL_TODOS } from "../operations/queries/getAllTodos";

const TodoListContainer: FC = () => {
  const { loading, error, data } = useQuery(GET_ALL_TODOS);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error!</p>;
  console.log(data);

  return <TodoApp.TodoList todos={data?.todos} />;
};

export default TodoListContainer;
