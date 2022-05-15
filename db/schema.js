import { gql } from 'apollo-server'

const typeDefs = gql`
  #TYPES
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
  type Item {
    id: ID
    title: String!
    author: String
    publisher: String
    category: String!
    topic: String
    language: String
    format: String
    year: String
    tags: [String]
    description: String
    image: String
    createdAt: String
  }

  #INPUTS
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
  input ItemInput {
    title: String!
    author: String
    publisher: String
    category: String!
    topic: String
    language: String
    format: String
    year: String
    tags: [String]
    description: String
    image: String
  }

  #QUERIES
  type Query {
    #Users
    getUser(token: String!): User

    #Items
    getItems: [Item]
    getItem(id: ID!): Item
  }

  #MUTATIONS
  type Mutation {
    #Users
    newUser(input: UserInput): User
    authenticateUser(input: AuthenticateInput): Token

    #Items
    newItem(input: ItemInput): Item
    editItem(id: ID!, input: ItemInput): Item
  }
`

export default typeDefs
