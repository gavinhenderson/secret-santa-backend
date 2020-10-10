const { generateMatches } = require("./generate-matches");
const { sendMatches } = require("./send-matches");

const resolvers = {
  Query: {
    helloWorld: () => "Hello, world!",
  },
  Mutation: {
    echo: (_, { input }) => input,
    generateMatches: async (_, { people }) => {
      const matches = generateMatches(people);
      await sendMatches(people, matches);

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
