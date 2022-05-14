import { gql } from 'apollo-server'

const typeDefs = gql`
  type Query {
    getsomething: String
  }
`

export default typeDefs
