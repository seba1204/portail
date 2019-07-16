import { toogleGate, takePhoto } from '../../../helpers/Raspberry'
import { basicsCode, GPIOSCode } from '../../../codes'


export const postToogleGate = async(req, res) => {
  toogleGate()
  .then(err => {
    if (err) return res.status(500).send(err)
    else takePhoto().then(err => {
      console.log('on sort de la fonction takePhoto')
      if (err) return res.status(500).send({...err, description: `${err.description} but gate is toogled !`})
      else return res.status(200).send(GPIOSCode.relayOK)
    })
  })

}
