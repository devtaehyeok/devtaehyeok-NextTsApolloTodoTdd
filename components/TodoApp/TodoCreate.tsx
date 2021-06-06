import styled from "@emotion/styled";
import React, { useState } from "react";
import { MdAdd } from "react-icons/md";

interface ITodoCreate {
  open: boolean;
  onToggle: () => void;
}

const CircleButton = styled.button<Pick<ITodoCreate, "open">>(
  {
    background: "#38d9a9",
    position: "absolute",
    left: "50%",
    bottom: "0px",
    ":hover": { background: "#63e6be;" },
    ":active": { background: "#20c997;" },
    zIndex: 5,
    cursor: "pointer",
    width: "80px",
    height: "80px",
    display: ["flex"],
    alignItems: "center",
    justifyContent: "center",
    fontSize: "60px",
    transform: "translate(-50%, 50%)",
    color: "white",
    borderRadius: "50%",
    border: "none",
    outline: "none",
    transition: "0.125s all ease-in",
  },
  (props) =>
    props.open && {
      background: "#ff6b6b",
      ":hover": {
        background: "#ff8787",
      },
      ":active ": {
        background: "#fa5252",
      },
      transform: "translate(-50%, 50%) rotate(45deg);",
    },
);

const InsertFormPositioner = styled.div({
  width: "100%",
  bottom: 0,
  left: 0,
  position: "absolute",
});

const InsertForm = styled.form`
  background: #f8f9fa;
  padding-left: 32px;
  padding-top: 32px;
  padding-right: 32px;
  padding-bottom: 72px;

  border-bottom-left-radius: 16px;
  border-bottom-right-radius: 16px;
  border-top: 1px solid #e9ecef;
`;

const Input = styled.input`
  padding: 12px;
  border-radius: 4px;
  border: 1px solid #dee2e6;
  width: 100%;
  outline: none;
  font-size: 18px;
  box-sizing: border-box;
`;

function TodoCreate() {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState("");

  return (
    <>
      {open && (
        <InsertFormPositioner>
          <InsertForm>
            <Input
              autoFocus
              placeholder="할 일을 입력 후, Enter 를 누르세요"
              value={value}
            />
          </InsertForm>
        </InsertFormPositioner>
      )}
      <CircleButton open={open}>
        <MdAdd />
      </CircleButton>
    </>
  );
}

export default React.memo(TodoCreate);
