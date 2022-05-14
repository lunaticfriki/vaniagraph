const courses = [
  {
    tech: 'React',
    title: 'React course',
  },
  {
    tech: 'Vue',
    title: 'Vue course',
  },
  {
    tech: 'Angular',
    title: 'Angular course',
  },
]

const resolvers = {
  Query: {
    getCourses: () => courses,
    getTech: () => courses,
  },
}

module.exports = resolvers
