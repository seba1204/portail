import express from 'express'
import { getCPUTemp } from './middlewares'


//instanciation de la route
export const TempRoute = express.Router()
export const initializeRoute = async () => {
  TempRoute.get('/cpu', getCPUTemp)
}
