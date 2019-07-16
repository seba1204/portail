import express from 'express'
import { postToogleGate } from './middlewares'


//instanciation de la route
export const GateRoute = express.Router()
export const initializeRoute = async () => {
  GateRoute.post('/', postToogleGate)
}
