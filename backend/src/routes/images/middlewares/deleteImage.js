import path from 'path'
import fs from 'fs'
import log from 'my-own-logger'
import { basicsCode, RaspCode } from '../../../codes'

const deleteImage = (req, res) => {
  const filePath = path.join(__dirname, '../../../images', 'req.params.name')
  try {
    fs.unlinkSync(filePath)
    log({name:'Raspberry', value:'l\'image a été supprimée', status: 'ok'})
    return res.status(200).send(RaspCode.suc.imageDeleted)
  } catch(err) {
    log({name:'Raspberry',  status: 'err', value:'erreur lors de la suppression de l\'image'})
    return res.status(200).send(basicsCode.err.internalError)
  }
}

export default deleteImage
