const { gql } = require("apollo-server");

export const typeDefs = gql`
  #graphql
  type User {
    name: String
    email: String
    projects: [Project]
  }

  type Project {
    title: String
    active: Boolean
    members: [User]
  }

  type Query {
    users: [User]
  }
`;
