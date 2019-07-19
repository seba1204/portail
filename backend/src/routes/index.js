//on importe toutes les routes
import * as gate from './toogleGate'
import * as temp from './temp'
import * as images from './images'
import * as command from './command'

export const GateRoute = gate.GateRoute
export const TempRoute = temp.TempRoute
export const ImagesRoute = images.ImageRoute
export const CommandRoute = command.CommandRoute

export const initializeRoutes = async (callback) => {
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
  try{
    await (command.initializeRoute())
  }
  catch (error){
    errors += error
  }
  !errors ? callback(errors) : callback()
}
