import path from 'path'
import fs from 'fs'

const allImages = (req, res) => {
  const directoryPath = path.join(__dirname, '../../../images')
  fs.readdir(directoryPath, (err, files) => {
    if (err) return console.log('Unable to scan directory: ' + err)
    else{
      return res.status(200).send(files.map(f =>
        {
          const size = fs.statSync(path.join(__dirname, `../../../images/${f}`)).size / 1000.0
          return {name: f, size}
        }
      ))
    }
  })
}

export default allImages
