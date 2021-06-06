import React from "react";
import { Todo } from "../../../models/Todos";
import { cleanup, render } from "../../../test-utils";
import TodoItem from "../TodoItem";

/** 컴포넌트 단위 테스트는 render 에러 여부를 테스트 합니다. */
/** case 1 : 순수 컴포넌트 테스트 */
describe("TodoItem : 각 할 일에 대한 정보를 렌더링해주는 컴포넌트입니다. 좌측에 있는 원을 누르면 할 일의 완료 여부를 toggle 할 수 있습니다.  \
할 일이 완료됐을 땐 좌측에 체크가 나타나고 텍스트의 색상이 연해집니다. \
그리고, 마우스를 올리면 휴지통 아이콘이 나타나고 이를 누르면 항목이 삭제됩니다..", () => {
  // automatically unmount and cleanup DOM after the test is finished.
  afterEach(cleanup);
  const mockTodo: Todo = { done: true, text: "test", id: 1 };
  it("renders without error", () => {
    render(<TodoItem {...mockTodo} />);
  });
});
