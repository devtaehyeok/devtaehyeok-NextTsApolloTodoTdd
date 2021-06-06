import styled from "@emotion/styled";
import React from "react";
import { useTodoContext } from ".";

export interface ITodoHead {
  today: string;
  day: string;
  left: number;
}

const Header = styled.h1({});
const Day = styled.div({});
const TasksLeft = styled.div({});

const TodoHeadBlock = styled.div({
  padding: ["48px", "32px", "32px", "24px"],
  borderBottom: "1px solid #e9ecef",
  [Header as any]: { margin: 0, fontsize: "36px", color: "#6b6b6b" },
  [Day as any]: { marginTop: "4px", color: "#000000", fontSize: "21px" },
  [TasksLeft as any]: {
    marginTop: "40px",
    fontsize: "18px",
    color: "#A50034",
    fontWeight: "bold",
  },
});

/**
 * 이 컴포넌트는 오늘의 날짜와 요일을 보여주고, 앞으로 해야 할 일이 몇개 남았는지 보여줍니다.
 */
export const TodoHead: React.FC = () => {
  const { todoHeaderInfo } = useTodoContext();
  return (
    <TodoHeadBlock>
      <Header>{todoHeaderInfo.today}</Header>
      <Day>{todoHeaderInfo.day}</Day>
      <TasksLeft>할 일 {todoHeaderInfo.left}개 남음</TasksLeft>
    </TodoHeadBlock>
  );
};

export default TodoHead;
