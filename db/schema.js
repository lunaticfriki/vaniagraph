const { gql } = require('apollo-server')

const typeDefs = gql`
  type Course {
    title: String
  }
  type Tech {
    tech: String
  }
  type Query {
    getCourses: [Course]
    getTech: [Tech]
  }
`

module.exports = typeDefs
