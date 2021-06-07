import React from "react";
import { cleanup, fireEvent, render, screen } from "../../../test-utils";
import TodoApp from "../TodoApp";

/** 컴포넌트 단위 테스트는 render 에러 여부를 테스트 합니다. */
/** 컴포넌트 단위 테스트는 이벤트 동작여부를 테스트 하는데. */
/**
 * 컴포넌트 입장에서는 이벤트 핸들러가 뭐가 들어올지 알 수 없다.
 * 그래서 이벤트 핸들러 함수가 호출되었는가를 테스트한다.
 * 1. 데이터가 잘 그려지는지
 */
/** case 2 : 의존 컴포넌트 테스트 */
describe("TodoCreate : 새로운 할 일을 등록할 수 있게 해주는 컴포넌트입니다. \
버튼을 다시 누르면 폼이 사라집니다.", () => {
  // automatically unmount and cleanup DOM after the test is finished.
  afterEach(cleanup);

  it("renders without error", () => {
    const handleChange = jest.fn();
    const { container, getByText } = render(<TodoApp.TodoCreate />);
  });
  it("TodoCreate 의 하단부에 초록색 원 버튼을 렌더링해주고, 이를 클릭하면 할 일을 입력 할 수 있는 폼이 나타납니다.", async () => {
    const { findByTestId } = render(<TodoApp.TodoCreate />);
    // TodoApp.TodoCreate.toggleOpen = jest.fn();
    const handleClick = jest.fn();
    const circleButton = findByTestId("circle-button");
    expect(circleButton).toBeInTheDocument();
    fireEvent.click(await screen.findByTestId("circle-button"));
  });
});
