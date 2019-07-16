import { toogleGate, takePhoto } from '../../../helpers/Raspberry'
import { basicsCode, GPIOSCode } from '../../../codes'


export const postToogleGate = async(req, res) => {
  toogleGate()
  .then(err => {
    if (err) return res.status(500).send(err)
    takePhoto().then(err => {
      if (err) return res.status(500).send({...err, description: `${err.description} but gate is toogled !`})
      return res.status(500).send(err)
    })
  })

}
