import jwt from 'jsonwebtoken'

import { config } from 'dotenv'

config({ path: '.env' })

const createToken = (user, secret, expiresIn) => {
  const { id, username, lastname, email } = user

  return jwt.sign({ id, username, lastname, email }, secret, { expiresIn })
}

export { createToken }
