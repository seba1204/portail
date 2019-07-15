import mongoose from 'mongoose'
const Schema = mongoose.Schema

const initializeSchema = async() => {
  const usersSchema = new Schema({
    lastname: String,
    name: String,
    username:{type:String, unique:true},
    email:{type:String, unique:true},
    password: String,
    token: {type: Schema.Types.ObjectId, ref: 'Token'},
  }, {versionKey: false }, {collection: 'users'})
  const tokenSchema = new Schema({
    token: {type: String, unique: true},
    isAdmin: Boolean,
    isAllowed: Boolean
  }, {versionKey: false }, {collection: 'users'})

  const User = mongoose.model('User', usersSchema)
  const Token = mongoose.model('Token', tokenSchema)
}

export default initializeSchema
