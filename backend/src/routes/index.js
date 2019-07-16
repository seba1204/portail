//on importe toutes les routes
import * as gate from './toogleGate'
import * as temp from './temp'
import * as images from './images'

const GateRoute = gate.GateRoute
const TempRoute = temp.TempRoute
const ImagesRoute = images.ImageRoute

const initializeRoutes = async (callback) => {
  let errors
  try{
    await (gate.initializeRoute())
  }
  catch (error){
    errors += error
  }
  try{
    await (temp.initializeRoute())
  }
  catch (error){
    errors += error
  }
  try{
    await (images.initializeRoute())
  }
  catch (error){
    errors += error
  }
  !errors ? callback(errors) : callback()
}

export { initializeRoutes, GateRoute, TempRoute, ImagesRoute }
