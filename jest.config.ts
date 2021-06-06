// jest.config.ts
import type { Config } from "@jest/types";

// Sync object

// Or async function
export default async (): Promise<Config.InitialOptions> => {
  return {
    verbose: true,
    testEnvironment: "jsdom",
  };
};
