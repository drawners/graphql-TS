const { ApolloServer, gql } = require("apollo-server");
import { typeDefs } from "./graphql/schema.js";
import { resolvers } from "./graphql/resolvers";

const server = new ApolloServer({ typeDefs, resolvers });

server.listen().then(({ url }: { url: String }) => {
  console.log(`Server Listening at ${url}`);
});
