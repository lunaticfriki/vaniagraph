const {ApolloServer, gql} = require('apollo-server')

const server = new ApolloServer()

const typeDefs = gql`

`

server.listen().then(({url}) => {
    console.log(`Server running on ${url}`)
})
