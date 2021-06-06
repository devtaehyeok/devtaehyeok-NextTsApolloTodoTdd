import { MockedProvider, MockedResponse } from "@apollo/react-testing";
import { render } from "@testing-library/react";
import React from "react";

type RenderApolloOptions = {
  mocks?: MockedResponse[];
  addTypename?: any;
  defaultOptions?: any;
  cache?: any;
  resolvers?: any;
  [st: string]: any;
};

const renderApollo = (
  node: any,
  {
    mocks,
    addTypename,
    defaultOptions,
    cache,
    resolvers,
    ...options
  }: RenderApolloOptions = {},
) => {
  return render(
    <MockedProvider
      mocks={mocks}
      addTypename={addTypename}
      defaultOptions={defaultOptions}
      cache={cache}
      resolvers={resolvers}
    >
      {node}
    </MockedProvider>,
    options,
  );
};

export * from "@testing-library/react";
export { renderApollo };
