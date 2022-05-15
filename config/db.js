import mongoose from 'mongoose'
import { config } from 'dotenv'

config({ path: '.env' })

const dbConnect = async () => {
  try {
    await mongoose.connect(process.env.DB_MONGO)
  } catch (error) {
    console.log('AN ERROR OCCURRED')
    console.log(error)
    process.exit(1)
  }
}

export default dbConnect
