import express from 'express'
import * as md from './middlewares'


//instanciation de la route
export const CommandRoute = express.Router()
export const initializeRoute = async () => {
  CommandRoute.post('/restart/:service', md.restartService)
}
