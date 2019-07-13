import express from 'express'

//import des middlewares
import * as mdl from './middlewares'

//instanciation de la route
export const UsersRoute = express.Router()

export const initializeRoute = async () => {
  UsersRoute.use('/admin', mdl.auth)
  UsersRoute.post('/',
    mdl.newUser.isMailOk,
    mdl.newUser.isUsernameOk,
    mdl.newUser.register
  )
  UsersRoute.delete('/', mdl.deleteUser)
  UsersRoute.put('/', mdl.modifyUser)
}
