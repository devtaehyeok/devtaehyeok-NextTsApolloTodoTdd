import { InMemoryCache, makeVar, ReactiveVar } from "@apollo/client";
import { TodoHeaderInfo } from "./models/TodoHeaderInfo";
import { Todos } from "./models/Todos";
import { VisibilityFilter, VisibilityFilters } from "./models/VisibilityFilter";

export const cache: InMemoryCache = new InMemoryCache({
  typePolicies: {
    Query: {
      fields: {
        todos: {
          read() {
            return todosVar();
          },
        },
        visibilityFilter: {
          read() {
            return visibilityFilterVar();
          },
        },
        todoHeaderInfo: {
          read() {
            return todoHeaderInfoVar();
          },
        },
      },
    },
  },
});

/**
 * Set initial values when we create cache variables.
 */

export const todosInitialValue: Todos = [
  {
    id: 0,
    done: false,
    text: "Use Apollo Client 3",
  },
];

const today = new Date();
export const todoHeaderInfoInitialValue = {
  today: today.toLocaleDateString("ko-KR", {
    year: "numeric",
    month: "long",
    day: "numeric",
  }),
  day: today.toLocaleDateString("ko-KR", { weekday: "long" }),
  left: 0,
};

export const todosVar: ReactiveVar<Todos> = makeVar<Todos>(todosInitialValue);

export const visibilityFilterVar = makeVar<VisibilityFilter>(
  VisibilityFilters.SHOW_ALL,
);

export const todoHeaderInfoVar: ReactiveVar<TodoHeaderInfo> =
  makeVar<TodoHeaderInfo>(todoHeaderInfoInitialValue);
