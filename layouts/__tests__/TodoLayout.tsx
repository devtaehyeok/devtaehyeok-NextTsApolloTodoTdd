import React from "react";
import { cleanup, render } from "../../test-utils";
import { TodoLayout } from "../TodoLayout";

describe("TodoLayout", () => {
  // automatically unmount and cleanup DOM after the test is finished.
  afterEach(cleanup);

  it("renders without error", () => {
    const LayOutWrapper = render(<TodoLayout>{"Hello World"}</TodoLayout>);
    LayOutWrapper.getByText("Hello World");
  });
});
