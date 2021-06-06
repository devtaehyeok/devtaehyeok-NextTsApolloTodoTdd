import React from "react";
import Home from "..";
import { cleanup, render } from "../../test-utils";

/** 페이지 단위 테스트는 acceptance test를 수행합니다 (usecase 시나리오) */
describe("TodoLayout", () => {
  // automatically unmount and cleanup DOM after the test is finished.
  afterEach(cleanup);

  it("renders without error", () => {
    render(<Home />);
  });
});
