import log from 'my-own-logger'
import mongoose from 'mongoose'
import { userCode, basicsCode } from '../../../codes'

import { checkIfDataExists } from '../helpers'


export const isTokenOk = async(req, res, next) => await checkIfDataExists('token', req, res, next)
export const addToken = async(req, res, next) =>{
  const { token } = req.body
  if (token === undefined){
    const er = userCode.err.tokenIsNotSpecified
    return res.status(404).send(`${er.code} - ${er.description}`)
  }
  let { isAdmin, isAllowed } = req.body
  if (isAdmin === undefined)
    isAdmin=false
  if (isAllowed === undefined)
    isAllowed=true
  const newToken = new mongoose.model('Token')({ token, isAdmin, isAllowed })

  newToken.save((err, account) => {
    if (err){
      log({
        name: 'Mongoose',
        status: 'err',
        value: `Error on adding token : ${ err }`
      })
      const iErr = basicsCode.err.internalError
      return res.status(500).send(`${iErr.code} - ${iErr.description}`)
    }
    log({
      name: 'Mongoose',
      status: 'ok',
      value: `token was added to the db !`
    })
    const uSuc = userCode.suc.tokenAdded
    res.status(200).send(`${uSuc.code} - ${uSuc.description}`)
    return next()
  })
}
