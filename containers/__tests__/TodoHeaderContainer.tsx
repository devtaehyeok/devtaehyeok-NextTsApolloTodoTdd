import React from "react";
import { TodoHeaderInfo } from "../../models/TodoHeaderInfo";
import { GET_TODO_HEADER } from "../../operations/queries/getTodoHeaderInfo";
import { cleanup, renderApollo, waitForElement } from "../../test-utils";
import TodoHeaderContainer from "../TodoHeaderContainer";

const mockTodoHeaderInfo: TodoHeaderInfo = {
  day: "test",
  today: "test2",
  left: 4,
};

describe("TodoHeaderContainer", () => {
  // automatically unmount and cleanup DOM after the test is finished.
  afterEach(cleanup);

  it("queries item and renders without error", async () => {
    let mocks = [
      {
        request: { query: GET_TODO_HEADER },
        result: { data: { todoHeaderInfo: mockTodoHeaderInfo } },
      },
    ];

    const { getByText } = renderApollo(<TodoHeaderContainer />, {
      mocks,
      addTypename: false,
    });

    // check the loading state
    getByText(/loading/i);

    return await waitForElement(() => getByText(/4/i));
  });
  it("renders with error state", async () => {
    let mocks = [
      {
        request: { query: GET_TODO_HEADER },
        error: new Error("aw shucks"),
      },
    ];

    // since we know the error message, we can use getByText
    // to recognize the error
    const { getByText } = renderApollo(<TodoHeaderContainer />, {
      mocks,
      addTypename: false,
    });
    return await waitForElement(() => getByText(/Error/i));
  });
});
