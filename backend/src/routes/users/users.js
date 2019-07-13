import express from 'express'

//import des middlewares
import * as mdl from './middlewares'
import * as admin from './admin'

//instanciation de la route
export const UsersRoute = express.Router()

export const initializeRoute = async () => {
  UsersRoute.post('/',
    mdl.newUser.isMailOk,
    mdl.newUser.isUsernameOk,
    mdl.newUser.register
  )
  UsersRoute.delete('/', mdl.deleteUser)
  UsersRoute.put('/', mdl.modifyUser)


  UsersRoute.use('/admin', admin.auth)
  UsersRoute.post('/admin',
    admin.newToken.isTokenOk,
    admin.newToken.addToken,
  )
  UsersRoute.get('/admin',
    admin.getUsers,
  )
}
