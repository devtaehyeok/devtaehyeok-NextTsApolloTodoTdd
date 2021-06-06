import React from "react";
import { todoHeaderInfoInitialValue } from "../../../cache";
import { cleanup, render } from "../../../test-utils";
import TodoApp from "../TodoApp";

/** 컴포넌트 단위 테스트는 render 에러 여부를 테스트 합니다. */
/** case 2 : 의존 컴포넌트 테스트 */
describe("TodoHead : 이 컴포넌트는 오늘의 날짜와 요일을 보여주고, 앞으로 해야 할 일이 몇개 남았는지 보여줍니다.", () => {
  // automatically unmount and cleanup DOM after the test is finished.
  afterEach(cleanup);

  it("renders without error", () => {
    render(
      <TodoApp>
        <TodoApp.TodoHead {...todoHeaderInfoInitialValue} />
      </TodoApp>,
    );
  });
});
