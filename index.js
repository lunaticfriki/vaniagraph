const { ApolloServer } = require('apollo-server')
const typeDefs = require('./db/schema.js')
const resolvers = require('./db/resolvers')

const server = new ApolloServer({ typeDefs, resolvers })

server.listen().then(({ url }) => {
  console.log(`Server running on ${url}`)
})
