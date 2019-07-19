import path from 'path'
import fs from 'fs'
import sharp from 'sharp'

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
    const type = mime[path.extname(file).slice(1)] || 'text/plain';
    const { width, heigth } = req.query
    const transformer = sharp()
      .resize({
        width: 200,
        fit: sharp.fit.inside
      })
      .webp({
        quality:100
      });
    const s = fs.createReadStream(file)

    s.on('open', function () {
        res.set('Content-Type', type);
        s.pipe(transformer).pipe(res)
    })
    s.on('error', function () {
        res.set('Content-Type', 'text/plain')
        res.status(404).end('Not found')
    })
}

export default uniqueImage
