import { ApolloServer } from 'apollo-server'
import typeDefs from './db/schema.js'
import resolvers from './db/resolvers.js'

const server = new ApolloServer({
  typeDefs,
  resolvers,
})

server.listen().then(({ url }) => {
  console.log(`Server running on ${url}`)
})
