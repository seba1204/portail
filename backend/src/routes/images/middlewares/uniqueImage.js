import path from 'path'
import fs from 'fs'
import sharp from 'sharp'

import { ImageCode, basicsCode } from '../../../codes'
import { basics as help } from '../../../helpers'
var mime = {
    html: 'text/html',
    txt: 'text/plain',
    css: 'text/css',
    gif: 'image/gif',
    jpg: 'image/jpeg',
    jpeg: 'image/jpeg',
    png: 'image/png',
    svg: 'image/svg+xml',
    js: 'application/javascript'
};

const uniqueImage = async(req, res) => {
    let file = path.join(__dirname, `../../../images/${req.params.name}`)
    const type = mime[path.extname(file).slice(1)] || 'text/plain'
    let { width, height, quality } = req.query
    let options = {}

    // on vérifie les paramètres !
    if (width !== undefined){
      width = Number(width)
      if(!help.isANumber(width) || !help.isIn(width, 1, 5000))
        return res.status(200).send(basicsCode.err.wrongQuery)
      options = {...options, width}
    } else if (height === undefined) options = {...options, width:300}


    if (height !== undefined){
      if(!help.isANumber(height) || !help.isIn(height, 1, 5000))
        return res.status(200).send(basicsCode.err.wrongQuery)
      options = {...options, height:Number(height)}
      if (width !== undefined) options = {...options, position: sharp.strategy.attention}
    }

    if (quality !== undefined){
      quality = Number(quality)
      if(!help.isANumber(quality) || !help.isIn(quality, 0, 100))
        return res.status(200).send(basicsCode.err.wrongQuery)
    } else quality = 50
    if (quality!==0){
      const transformer = sharp()
        .resize(options)
        .webp({quality})
        .toBuffer()
      fs.createReadStream(file)
        .pipe(transformer)
        .pipe(res);
    }else {
      const s = fs.createReadStream(file)

      s.on('open', function () {
          res.set('Content-Type', type)
          s.pipe(res)
      })
      s.on('error', function () {
          res.set('Content-Type', 'text/plain')
          res.status(404).end(ImageCode.err.photoNotFound)
      })
    }


}

export default uniqueImage
