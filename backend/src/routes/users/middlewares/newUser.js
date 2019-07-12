import log from 'my-own-logger'
import mongoose from 'mongoose'
import crypto from 'crypto'

// mdl appelé en post sur /users/admin

const hash = crypto.createHash('sha256') //on instantie le type de cryptage

const register = (req, res, next) =>{
  const User = mongoose.model('User')
  const {lastname, name, username, email, password } = req.body
  const safePwd = hash.update(password).digest('hex')
  const token = crypto.randomBytes(64).toString('hex')
  const user = new User({
    lastname, name, username, email, token,
    password: safePwd,
  })
  user.save((err, account) => {
      if (err){
        log({
        name: 'Mongoose',
        status: 'err',
        value: `Error on creating ${ lastname } : ${ err }`
      })
        return res.status(500).send(err)
      }
      log({
        name: 'Mongoose',
        status: 'ok',
        value: `${ lastname } was created !`
      })
      res.status(200).send('User created !')
      return next
    })
}

export default register
