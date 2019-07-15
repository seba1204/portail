import mongoose from 'mongoose'
import log from 'my-own-logger'
import { basicsCode } from '../../../codes'

const getUsers = async(req, res, next) => {
  const { usernames } = req.body
  const FullUser = mongoose.model('User')
  let names = ''
  if (usernames === undefined || !usernames.length ){
    //return all users
    names=new RegExp('/*')
  }
  else {
    //return all users asked
    usernames.forEach(username => names+='|'+username)
    names = new RegExp(names.slice(1))
  }
  // User.find({username:names}, 'lastname name username email').populate().exec((err, data) => {
  FullUser.find({username:names}, 'lastname name username email').populate('token').exec((err, data) => {
    if (err){
      log({name:'Mongoose', status: 'err', value: er})
      const erC = basicsCode.err.internalError
      return res.status(200).send(`${erC.code} - ${erC.description} `)
    }
    try{
      const results = data.map(user => {
        const {lastname, name, username, email, token} = user
        const { isAdmin, isAllowed } = token
        return {lastname, name, username, email, isAdmin, isAllowed}
      })
      return res.status(200).send(results)
    }
    catch(er){
      log({name:'Mongoose', status: 'err', value: er})
      const erB = basicsCode.err.internalError
      return res.status(500).send(`${erB.code} - ${erB.description}`)
    }
  })
}

export default getUsers
