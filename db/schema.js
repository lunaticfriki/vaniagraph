import { gql } from 'apollo-server'

const typeDefs = gql`
  type User {
    id: ID
    username: String
    lastname: String
    email: String
    createdAt: String
  }
  type Token {
    token: String
  }
  input UserInput {
    username: String!
    lastname: String!
    email: String!
    password: String!
  }
  input AuthenticateInput {
    email: String!
    password: String!
  }
  type Query {
    getUser(token: String!): User
  }
  type Mutation {
    newUser(input: UserInput): User
    authenticateUser(input: AuthenticateInput): Token
  }
`

export default typeDefs
