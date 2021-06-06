import styled from "@emotion/styled";
import { FC } from "react";

const TodoLayoutBlock = styled("div")({
  width: "512px",
  height: "768px",
  position: "relative",
  background: "white",
  borderRadius: "16px",
  boxShadow: "0 0 8px 0 rgba(0, 0, 0, 0.04)",
  margin: "0 auto",
  marginTop: "96px",
  marginBottom: "32px",
  display: "flex",
  flexDirection: "column",
});

export const TodoLayout: FC = ({ children }) => {
  return <TodoLayoutBlock>{children}</TodoLayoutBlock>;
};
