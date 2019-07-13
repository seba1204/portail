import log from 'my-own-logger'
import mongoose from 'mongoose'
import crypto from 'crypto'
import { userCode, basicsCode } from '../../../codes'

import { checkIfDataExists } from './helpers'

// mdl appelé en post sur /users/admin

export const isMailOk = async(req, res, next) => await checkIfDataExists('email', req, res, next)
export const isUsernameOk = async(req, res, next) => await checkIfDataExists('username', req, res, next)
export const register = async(req, res, next) =>{
  const {lastname, name, username, email, password } = req.body
  let token = crypto.randomBytes(32).toString('hex')
  let i = 0
  while ((await checkIfDataExists('token', token)) && (i<100)){
    token = crypto.randomBytes(32).toString('hex')
    i++
  }

  const safePwd = crypto.createHash('sha256').update(password).digest('hex')
  const user = new mongoose.model('User')({
    lastname, name, username, email, token,
    password: safePwd,
    isAdmin: false,
  })
  user.save((err, account) => {
    if (err){
      log({
        name: 'Mongoose',
        status: 'err',
        value: `Error on creating ${ username } : ${ err }`
      })
      const iErr = basicsCode.err.internalError
      return res.status(500).send(`${iErr.code} - ${iErr.description}`)
    }
    log({
      name: 'Mongoose',
      status: 'ok',
      value: `${ username } was created !`
    })
    const uSuc = userCode.suc.userCreated
    res.status(200).send(`${uSuc.code} - (${username}) ${uSuc.description}`)
    return next()
  })
}
