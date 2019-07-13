import mongoose from 'mongoose'

const tokenSchema = new mongoose.Schema({
  token: {type: String, unique: true},
  isAdmin: Boolean,
  isAllowed: Boolean
}, {versionKey: false }, {collection: 'tokens'})

export default tokenSchema
