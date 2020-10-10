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
  ValidationError: {
    personId: () => "",
    field: () => "",
    error: () => "",
  },
};

module.exports = { resolvers };
