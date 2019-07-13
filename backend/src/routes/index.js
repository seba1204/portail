//on importe toutes les routes
import * as gate from './gate'
import * as users from './users'

const UsersRoute = users.UsersRoute
const GateRoute = gate.GateRoute

const initializeRoutes = async (callback) => {
  let errors
  try{
    await (gate.initializeRoute())
  }
  catch (error){
    errors += error
  }
  try{
    await (users.initializeRoute())
  }
  catch (error){
    errors += error
  }

  !errors ? callback(errors) : callback()
}

export {initializeRoutes, GateRoute, UsersRoute }
