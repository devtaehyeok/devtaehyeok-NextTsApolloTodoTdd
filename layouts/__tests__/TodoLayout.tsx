import React from "react";
import { cleanup, render } from "../../test-utils";
import { TodoLayout } from "../TodoLayout";

describe("TodoLayout : 이 컴포넌트는 우리가 만들 투두리스트의 레이아웃을 설정하는 컴포넌트입니다. 페이지의 중앙에 그림자가 적용된 흰색 박스를 보여줍니다.", () => {
  // automatically unmount and cleanup DOM after the test is finished.
  afterEach(cleanup);

  it("renders without error", () => {
    const LayOutWrapper = render(<TodoLayout>{"Hello World"}</TodoLayout>);
    LayOutWrapper.getByText("Hello World");
  });
});
