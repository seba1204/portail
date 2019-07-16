import temp from 'pi-temperature'
import log from 'my-own-logger'

import { RaspCode } from '../../../codes'


export const getCPUTemp = async(req, res) => {
  try{
    temp.measure((err, temp) => {
        if (err) return res.status(500).send(RaspCode.err.readingCPUTempError)
        else return res.status(200).send({temp})
    })
  } catch (e) {
    console.log('on rentre enfin dans le catch...')
  } finally {
    log({name: 'Raspberry', status: 'err', value: RaspCode.err.readingCPUTempError.description})
    return res.status(500).send(RaspCode.err.readingCPUTempError)
  }
}
