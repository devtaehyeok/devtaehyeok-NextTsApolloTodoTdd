import React, { useContext } from "react";
import { TodoDispatchContext, TodoStateContext } from "../TodoContext";

function Sample() {
  const state = useContext(TodoStateContext);
  const dispatch = useContext(TodoDispatchContext);
  const state2 = useTodoState();
  const dispatch2 = useTodoDispatch();
  return <div>Sample</div>;
}
