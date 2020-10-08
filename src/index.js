const { ApolloServer, gql } = require("apollo-server");

const typeDefs = gql`
  type Mutation {
    echo(input: String!): String!
  }

  type Query {
    helloWorld: String
  }
`;

const resolvers = {
  Query: {
    helloWorld: () => "Hello, world!",
  },
  Mutation: {
    echo: (_, { input }) => input,
  },
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
  introspection: true,
  playground: true,
});

server.listen({ port: process.env.PORT || 4000 }).then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});
