import path from 'path'
import fs from 'fs'

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
    const file = path.join(__dirname, `../../../images/${req.params.name}`)
    console.log(file)
    const type = mime[path.extname(file).slice(1)] || 'text/plain';
    console.log(type)
    let s = fs.createReadStream(file);
    s.on('open', function () {
        res.set('Content-Type', type);
        s.pipe(res);
    })
    s.on('error', function () {
        res.set('Content-Type', 'text/plain')
        res.status(404).end('Not found')
    })
}

export default uniqueImage
