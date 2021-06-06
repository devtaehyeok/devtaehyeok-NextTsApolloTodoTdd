import React from "react";
import { cleanup, render } from "../../../test-utils";
import TodoList from "../TodoList";

/** 컴포넌트 단위 테스트는 render 에러 여부를 테스트 합니다. */
/** case 1 : 순수 컴포넌트 테스트 */
describe("TodoLayout", () => {
  // automatically unmount and cleanup DOM after the test is finished.
  afterEach(cleanup);

  it("renders without error", () => {
    render(<TodoList />);
  });
});
