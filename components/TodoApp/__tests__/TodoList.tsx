import React from "react";
import { todosInitialValue } from "../../../cache";
import { cleanup, render } from "../../../test-utils";
import TodoList from "../TodoList";

/** 컴포넌트 단위 테스트는 render 에러 여부를 테스트 합니다. */
/** case 1 : 순수 컴포넌트 테스트 */
describe("TodoList : 이 컴포넌트는 할 일에 대한 정보가 들어있는 todos 배열을 내장함수 map 을 사용하여 여러개의 TodoItem 컴포넌트를 렌더링해줍니다.", () => {
  // automatically unmount and cleanup DOM after the test is finished.
  afterEach(cleanup);

  it("renders without error", () => {
    render(<TodoList todos={[...todosInitialValue]} />);
  });
});
