const resolvers = {
  Query: {
    helloWorld: () => "Hello, world!",
  },
  Mutation: {
    echo: (_, { input }) => input,
    generateMatches: () => ({ validationErrors: [] }),
  },
  GenerateMatchesPayload: {
    validationErrors: () => [],
  },
};

module.exports = { resolvers };
