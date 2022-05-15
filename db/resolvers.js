import User from '../models/User.js'
import Item from '../models/Item.js'
import bcryptjs from 'bcryptjs'
import jwt from 'jsonwebtoken'

import { config } from 'dotenv'
import { createToken } from '../helpers/index.js'

config({ path: '.env' })

const resolvers = {
  Query: {
    // Users
    getUser: async (_, { token }) => {
      return jwt.verify(token, process.env.SECRET)
    },

    // Items
  },
  Mutation: {
    // Users
    newUser: async (_, { input }) => {
      const { email, password } = input

      // Check if user is already registered
      const isUser = await User.findOne({ email })

      if (isUser) {
        throw new Error('USER ALREADY REGISTERED')
      }

      // Hash password
      const salt = await bcryptjs.genSalt(10)
      input.password = await bcryptjs.hash(password, salt)

      // Save user into database
      try {
        const user = new User(input)
        await user.save()
        return user
      } catch (error) {
        console.log(error)
      }
    },
    authenticateUser: async (_, { input }) => {
      const { email, password } = input

      // Check if user is already registered
      const isUser = await User.findOne({ email })

      if (!isUser) {
        throw new Error('USER NOT FOUND')
      }

      // Check password
      const isPasswordCorrect = await bcryptjs.compare(
        password,
        isUser.password
      )

      if (!isPasswordCorrect) {
        throw new Error('WRONG PASSWORD')
      }

      // Create token
      return {
        token: createToken(isUser, process.env.SECRET, '24h'),
      }
    },

    // Items
    newItem: async (_, { input }) => {
      try {
        const newItem = new Item(input)

        // Save into the database
        return await newItem.save()
      } catch (error) {
        console.log(error)
      }
    },
  },
}

export default resolvers
