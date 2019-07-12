import express from 'express'

//import des middlewares
import * as mdl from './middlewares'

//instanciation de la route
export const GateRoute = express.Router()

export const initializeRoute = async () => {
  GateRoute.put('/toogle', mdl.toogle)
}
