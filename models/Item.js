import mongoose from 'mongoose'

const ItemSchema = mongoose.Schema({
  title: {
    type: String,
    required: true,
    trim: true,
  },
  author: {
    type: String,
    trim: true,
  },
  publisher: {
    type: String,
    trim: true,
  },
  category: {
    type: String,
    required: true,
    trim: true,
  },
  topic: {
    type: String,
    trim: true,
  },
  language: {
    type: String,
    trim: true,
  },
  format: {
    type: String,
    trim: true,
  },
  year: {
    type: String,
    trim: true,
  },
  tags: {
    type: Array,
  },
  description: {
    type: String,
    trim: true,
  },
  image: {
    type: String,
    trim: true,
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
})

export default mongoose.model('Item', ItemSchema)
