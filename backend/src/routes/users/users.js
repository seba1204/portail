import express from 'express'

//import des middlewares
import * as mdl from './middlewares'

//instanciation de la route
export const UsersRoute = express.Router()

export const initializeRoute = async () => {
  UsersRoute.post('/admin', mdl.newUser)
  UsersRoute.delete('/admin', mdl.deleteUser)
  UsersRoute.put('/admin', mdl.modifyUser)
}
