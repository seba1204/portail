import temp from 'pi-temperature'
import log from 'my-own-logger'

import { RaspCode } from '../../../codes'


export const getCPUTemp = async(req, res) => {
  try{
    temp.measure((err, temp) => {
        if (err){
          log({name:'Raspberry', status:'err', value:RaspCode.err.readingCPUTempError.description})
          return res.status(200).send(RaspCode.err.readingCPUTempError)
        }
        else{
          log({name:'Raspberry', status:'info', value:`CPU temp : ${temp}`})
          return res.status(200).send({temp})
        }
    })
  } catch (e) {
    log({name:'Raspberry', status:'err', value:RaspCode.err.readingCPUTempError.description})
    return res.status(200).send(RaspCode.err.readingCPUTempError)
  }
}
