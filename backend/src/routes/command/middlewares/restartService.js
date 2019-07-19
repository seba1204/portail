import { RaspCode } from '../../../codes'
import { restartRasp, restartServer } from '../../../helpers/Raspberry'
const restartService = (req, res) => {

  switch (req.params.service) {
    case 'Raspberry':
      restartRasp().then((err) => {
        if (err) return res.status(200).send(RaspCode.err.rebootRasp)
        else return res.status(200).send(RaspCode.suc.rebootRasp)
      })
      break
    case 'Server':
      restartServer().then((err) => {
        if (err) return res.status(200).send(RaspCode.err.rebootServer)
        else return res.status(200).send(RaspCode.suc.rebootServer)
      })
      break
    default:
      res.status(200).send(RaspCode.err.serviceUnknow)
  }
}

export default restartService
