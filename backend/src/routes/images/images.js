import express from 'express'
import * as md from './middlewares'


//instanciation de la route
export const ImageRoute = express.Router()
export const initializeRoute = async () => {
  ImageRoute.get('/all', md.allImages)
  ImageRoute.get('/:name', md.uniqueImage)
  ImageRoute.delete('/:name', md.deleteImage)
}
