const { ApolloServer } = require("apollo-server");
const { typeDefs } = require("./type-def");
const { resolvers } = require("./resolver");

const server = new ApolloServer({
  typeDefs,
  resolvers,
  introspection: true,
  playground: true,
});

server.listen({ port: process.env.PORT || 4000 }).then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});
