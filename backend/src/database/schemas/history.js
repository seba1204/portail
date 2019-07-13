import mongoose from 'mongoose'

const historySchema = new mongoose.Schema({
  token: String,
  date: Date,
  action: String,
}, {versionKey: false }, {collection: 'history'})

export default historySchema
