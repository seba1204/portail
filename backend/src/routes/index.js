//on importe toutes les routes
import * as gate from './gate'

const GateRoute = gate.GateRoute

const initializeRoutes = async (callback) => {
  let errors
  try{
    await (gate.initializeRoute())
  }
  catch (error){
    errors += error
  }

  !errors ? callback(errors) : callback()
}

export {initializeRoutes, GateRoute }
