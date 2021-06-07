import { InMemoryCache } from "@apollo/client";
import React from "react";
import { TodoHeaderInfo } from "../../models/TodoHeaderInfo";
import { GET_TODO_HEADER } from "../../operations/queries/getTodoHeaderInfo";
import { cleanup, renderApollo, screen } from "../../test-utils";
import { mockTodoHeaderInfoVar } from "../../tests/mocks/mockTodoHeaderInfo";
import TodoHeaderContainer from "../TodoHeaderContainer";

const mockTodoHeaderInfo: TodoHeaderInfo = {
  day: "테스트일자",
  today: "테스트날자",
  left: 0,
};
const successMock = [
  {
    request: { query: GET_TODO_HEADER },
    result: { data: { todoHeaderInfo: mockTodoHeaderInfo } },
  },
];
let errorMock = [
  {
    request: { query: GET_TODO_HEADER },
    error: new Error("aw shucks"),
  },
];
describe("TodoHeaderContainer", () => {
  // automatically unmount and cleanup DOM after the test is finished.
  afterEach(cleanup);
  it("queries item and renders without error", async () => {
    const cache: InMemoryCache = new InMemoryCache({
      typePolicies: {
        Query: {
          fields: {
            todoHeaderInfo: {
              read() {
                return mockTodoHeaderInfoVar(mockTodoHeaderInfo);
              },
            },
          },
        },
      },
    });
    const { getByText } = renderApollo(<TodoHeaderContainer />, {
      cache,
      addTypename: false,
    });
    const items = await screen.findAllByText(/테스트/i);
    expect(items).toHaveLength(2);
    // check the loading state
  });
});
