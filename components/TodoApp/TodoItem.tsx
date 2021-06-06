import styled from "@emotion/styled";
import React from "react";
import { MdDelete, MdDone } from "react-icons/md";
import { Todo } from "../../models/Todos";

const Remove = styled.div({
  display: ["flex", "none"],
  alignItems: "center",
  color: "#dee2e6",
  fontSize: "24px",
  cursor: "pointer",
  ":hover": {
    color: "#ff6b6b",
  },
});

const TodoItemBlock = styled.div({
  display: ["flex"],
  alignItems: "center",
  paddingTop: "12px",
  paddingBottom: "12px",
  ":hover": {
    [Remove as any]: {
      display: "initial",
    },
  },
});

const CheckCircle = styled.div<Pick<Todo, "done">>(
  {
    width: "32px",
    height: "32px",
    borderRadius: "16px",
    border: "1px solid #ced4da",
    fontSize: "24px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginRight: "20px",
    cursor: "pointer",
  },
  (props) =>
    props.done && {
      border: "1px solid #38d9a9",
      color: "#38d9a9",
    },
);

const Text = styled.div<Pick<Todo, "done">>(
  {
    flex: 1,
    fontSize: "21px",
    color: "#495057",
  },
  (props) => (props.done ? { color: "#ced4da" } : { color: "#495057" }),
);

const TodoItem: React.FC<Todo> = ({ id, done, text }) => {
  return (
    <TodoItemBlock>
      <CheckCircle done={done}>{done && <MdDone />}</CheckCircle>
      <Text done={done}>{text}</Text>
      <Remove>
        <MdDelete />
      </Remove>
    </TodoItemBlock>
  );
};

export default React.memo(TodoItem);
