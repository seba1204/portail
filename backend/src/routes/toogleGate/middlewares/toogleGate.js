import { toogleGate, takePhoto } from '../../../helpers/Raspberry'
import { basicsCode, GPIOSCode } from '../../../codes'


export const postToogleGate = async(req, res) => {
  return toogleGate()
  .then(err => {
    if (err) return res.status(200).send(err)
    else return takePhoto().then(err => {
      if (err) return res.status(200).send({...err, description: `${err.description} but gate is toogled !`})
      else return res.status(200).send(GPIOSCode.suc.relayOK)
    })
  })

}
