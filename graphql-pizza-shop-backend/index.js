import { resolvers } from "./resolvers/resolvers.js";
import { typeDefs } from "./typeDefs/typeDefs.js";
import { ApolloServer } from "apollo-server";

export const server = new ApolloServer({
    typeDefs,
    resolvers,
    csrfPrevention: true,
    cache: "bounded",
});

const port = process.env.PORT || 5000;

server.listen({ port }).then(({ url }) => {
    console.log(`Server ready at ${url}`);
});
