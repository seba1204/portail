import mongoose from 'mongoose'

//authentification in users/amdin

const authentificate = (req, res, next) =>{
  const User = mongoose.model('User')
  const { token } = req.headers
  const query = User.find({ token }, (er, data) => {
    if (er){
      log({
        name: 'API',
        status: 'err',
        value: `error : ${ er }`
      })
      return res.status(500).send(`an internal server error occured on authentificating ${token}`)
    }
    if (data.length){
      if(data.filter((user) => (user.isAdmin === true)).length){
        res.status(200)
        return next()
      } else {
        log({
          name: 'API',
          status: 'warn',
          value: `somebody is trying to connect as admin with a wrong token : ${ data[0].username }`
        })
        return res.status(401).send('wrong token !')
      }
    }
  })
}

export default authentificate
