import mongoose from 'mongoose'
import { userCode, basicsCode } from '../../../codes'

const checkIfDataExists = async(type, req, res, next) => {
  const User = mongoose.model('User')
  let result, error
  switch(type){
    case 'email':
      const { email } = req.body
      if (email === undefined){
        const er = userCode.err.emailIsNotSpecified
        return res.status(404).send(`${er.code} - ${er.description}`)
      }
      result = await User.find({ email })
      error = {...userCode.err.emailExists, data:email}
      break
    case 'username':
      const { username } = req.body
      if (username === undefined){
        const er = userCode.err.usernameIsNotSpecified
        return res.status(404).send(`${er.code} - ${er.description}`)
      }
      result = await User.find({ username })
      error = {...userCode.err.usernameExists, data:username}
      break
    case 'token':
      const Token = mongoose.model('Token')
      const { token } = req.body
      if (token === undefined){
        const er = userCode.err.tokenIsNotSpecified
        return res.status(404).send(`${er.code} - ${er.description}`)
      }
      result = await Token.find({ token })
      error = {...userCode.err.tokenExists, data:''}
      break
    case 'tokenBool':
      result = await User.find({ token: req })
      return result.length ? true : false
      break
    default:
      log({name: 'API', status:'err', value:userCode.err.unknownTypeToCheck.description})
      res.status(500).send(basicsCode.err.internalError.description)
  }
  try{
    if(!result.length){
      return next ()
    }else{
      res.status(409).send(`${error.code} - (${error.data}) ${error.description}`)
    }
  }
  catch(er){
    log({name: 'API', status:'err', value:er})
    res.status(500).send(basicsCode.err.internalError.description)
  }
}

export default checkIfDataExists
