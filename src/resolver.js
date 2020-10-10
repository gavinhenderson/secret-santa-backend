const { generateMatches } = require("./generate-matches");

const resolvers = {
  Query: {
    helloWorld: () => "Hello, world!",
  },
  Mutation: {
    echo: (_, { input }) => input,
    generateMatches: (_, { people }) => {
      const matches = generateMatches(people);

      console.log(matches);

      return [];
    },
  },
  GenerateMatchesPayload: {
    validationErrors: () => [],
  },
  ValidationError: {
    personId: ({ personId }) => personId,
    field: ({ field }) => field,
    error: (error) => error,
  },
};

module.exports = { resolvers };
