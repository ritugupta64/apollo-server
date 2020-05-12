const { ApolloServer, gql } = require('apollo-server');

// A schema is a collection of type definitions (hence "typeDefs")
// that together define the "shape" of queries that are executed against
// your data.
const typeDefs = gql`

 

  # The "Query" type is special: it lists all of the available queries that
  # clients can execute, along with the return type for each. In this
  # case, the "books" query returns an array of zero or more Books (defined above).
  type Query {
    greeting: String
}

`;


 

  const resolvers = {
    Query: {
     
      greeting: () => 'test msg'

    },
  };

const server = new ApolloServer({
    typeDefs, resolvers
});

server.listen({
    port: 9000
}).then((serverInfo) => console.log(`server info ${serverInfo.url}`))