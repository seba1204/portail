import { toogleGate, takePhoto } from '../../../helpers/Raspberry'
import { basicsCode, GPIOSCode } from '../../../codes'


export const postToogleGate = async(req, res) => {
  return toogleGate()
  .then(err => {
    if (err) return res.status(500).send(err)
    else return takePhoto().then(err => {
      console.log('on sort de la fonction takePhoto')
      if (err) {
        console.log('on a des erreurs')
        return res.status(500).send({...err, description: `${err.description} but gate is toogled !`})
      }
      else {
        console.log('on a aucune erreur')
        return res.status(200).send(GPIOSCode.relayOK)
      }
    })
  })

}
