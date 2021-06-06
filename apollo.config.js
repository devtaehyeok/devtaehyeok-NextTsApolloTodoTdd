module.exports = {
  client: {
    service: "my-graphql-app",
    includes: ["./**/*.ts"],
    excludes: ["**/__tests__/**", "**/tests/**"],
  },
};
