import React from "react";
import { cleanup, render } from "../../../test-utils";
import TodoApp from "../TodoApp";

/** 컴포넌트 단위 테스트는 render 에러 여부를 테스트 합니다. */
/** case 2 : 의존 컴포넌트 테스트 */
describe("TodoCreate : 새로운 할 일을 등록할 수 있게 해주는 컴포넌트입니다. \
TodoTemplate 의 하단부에 초록색 원 버튼을 렌더링해주고, 이를 클릭하면 할 일을 입력 할 수 있는 폼이 나타납니다. \
버튼을 다시 누르면 폼이 사라집니다.", () => {
  // automatically unmount and cleanup DOM after the test is finished.
  afterEach(cleanup);

  it("renders without error", () => {
    render(
      <TodoApp>
        <TodoApp.TodoCreate />
      </TodoApp>,
    );
  });
});
