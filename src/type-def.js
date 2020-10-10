const { gql } = require("apollo-server");

const typeDefs = gql`
  input PeopleInput {
    id: String!
    name: String!
    number: String!
  }

  type ValidationError {
    personId: String!
    field: String!
    error: String!
  }

  type GenerateMatchesPayload {
    validationErrors: [ValidationError!]!
  }

  type Mutation {
    echo(input: String!): String!

    generateMatches(people: [PeopleInput!]!): GenerateMatchesPayload!
  }

  type Query {
    helloWorld: String
  }
`;

module.exports = { typeDefs };
