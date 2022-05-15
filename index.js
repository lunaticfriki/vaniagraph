import { ApolloServer } from 'apollo-server'
import typeDefs from './db/schema.js'
import resolvers from './db/resolvers.js'
import dbConnect from './config/db.js'

dbConnect().then(() => console.log('DATABASE CONNECTED'))

const server = new ApolloServer({
  typeDefs,
  resolvers,
})

server.listen().then(({ url }) => {
  console.log(`SERVER RUNNING ON ${url}`)
})
