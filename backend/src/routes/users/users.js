import express from 'express'

//import des middlewares
import * as mdl from './middlewares'

//instanciation de la route
export const UsersRoute = express.Router()

export const initializeRoute = async () => {
  UsersRoute.use('/admin', mdl.auth)
  UsersRoute.post('/admin',
    mdl.newUser.isMailOk,
    mdl.newUser.isUsernameOk,
    mdl.newUser.register
  )
  UsersRoute.delete('/admin', mdl.deleteUser)
  UsersRoute.put('/admin', mdl.modifyUser)
}
