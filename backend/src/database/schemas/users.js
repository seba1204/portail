import mongoose from 'mongoose'

const usersSchema = new mongoose.Schema({
  lastname: String,
  name: String,
  username:{type:String, unique:true},
  password: String,
  token: Number,
}, {versionKey: false }, {collection: 'users'})

export default usersSchema
