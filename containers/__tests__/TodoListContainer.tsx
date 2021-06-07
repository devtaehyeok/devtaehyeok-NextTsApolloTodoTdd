import { InMemoryCache } from "@apollo/client";
import { waitFor } from "@testing-library/dom";
import React from "react";
import { Todos } from "../../models/Todos";
import { GET_ALL_TODOS } from "../../operations/queries/getAllTodos";
import { cleanup, renderApollo, screen } from "../../test-utils";
import { mockTodosVar } from "../../tests/mocks/mockTodoVar";
import TodoListContainer from "../TodoListContainer";

const mockTodos: Todos = [
  { id: 1, done: true, text: "mytest1" },
  { id: 2, done: true, text: "mytest2" },
];

const successMock = [
  {
    request: { query: GET_ALL_TODOS },
    result: { data: { todos: mockTodos } },
  },
];
describe("TodoListContainer", () => {
  // automatically unmount and cleanup DOM after the test is finished.
  afterEach(cleanup);
  it("queries item and renders without error", async () => {
    const cache: InMemoryCache = new InMemoryCache({
      typePolicies: {
        Query: {
          fields: {
            todos: {
              read() {
                return mockTodosVar(mockTodos);
              },
            },
          },
        },
      },
    });
    const { getByText } = renderApollo(<TodoListContainer />, {
      mocks: successMock,
      cache,
      addTypename: false,
    });

    const item1 = await screen.findAllByText(/mytest1/i);
    const item2 = await screen.findAllByText(/mytest2/i);
    await waitFor(() => expect(item1).toHaveLength(1));
    await waitFor(() => expect(item2).toHaveLength(1));
    // check the loading state
  });
});
