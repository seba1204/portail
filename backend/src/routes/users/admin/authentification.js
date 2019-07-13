import log from 'my-own-logger'
import mongoose from 'mongoose'
import { userCode, basicsCode } from '../../../codes'

//authentification in users/amdin

const authentificate = (req, res, next) =>{
  const Token = mongoose.model('Token')
  const { token } = req.headers
  if (token === undefined){
    const er = userCode.err.tokenIsNotSpecified
    return res.status(404).send(`${er.code} - ${er.description}`)
  }
  const query = Token.find({ token }, (er, data) => {
    if (er){
      log({
        name: 'API',
        status: 'err',
        value: `error : ${ er }`
      })
      const iEr = basicsCode.err.internalError
      return res.status(500).send(`${iEr.code} - ${iEr.description}`)
    }
    if (data.length){
      if(data.filter((token) => (token.isAdmin === true)).length){
        res.status(200)
        return next()
      } else {
        log({
          name: 'API',
          status: 'warn',
          value: `somebody is trying to connect as admin with a wrong token`
        })
        const iWer = userCode.err.wrongToken
        return res.status(401).send(`${iWer.code} - ${iWer.description}`)
      }
    } else {
    const iTer = userCode.err.tokenDoesNotExists
    return res.status(401).send(`${iTer.code} - ${iTer.description}`)
    }
  })
}

export default authentificate
