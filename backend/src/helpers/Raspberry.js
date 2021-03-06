import gpio from 'gpio'
import log from 'my-own-logger'
import {Raspistill} from 'node-raspistill'
import moment from 'moment'
import shell from 'shelljs'

import { RaspCode } from '../codes'


import { GPIOSCode } from '../codes'

export const RELAIS = gpio.export(4, {
  direction: gpio.DIRECTION.OUT,
  interval: 500,
  ready: () => log({name: 'GPIO', status: 'reg', value: 'is ready !'})
}) // = on connecte le relais au GPIO 4, et on le configure en sortie
const turnOn = async () => {
  await RELAIS.reset() // on le remet à zéro au cas où
  await RELAIS.set() // puis on le passe à 1
}
const turnOff = async () => {
  await RELAIS.reset()  // on éteint le relais
}

export const toogleGate = async() => {
  return await turnOn()
  .then(setTimeout(turnOff, 1000))
  .catch(e => (GPIOSCode.err.toogleGateError))
}
export const takePhoto = async() => {
  log({name: 'Raspberry', status: 'wait', value: 'on prend une photo...'})
  const now = new Date()
  const fileName = moment().format('DD-MM-YYYY HH-mm-ss')
  const outputDir = `./src/images`
  const camera = new Raspistill({time:1, fileName, outputDir})
  try {
    await camera.takePhoto()
    .then(log({name: 'Raspberry', status: 'ok', value: 'la photo est prise !'}))
    .catch(e => (GPIOSCode.err.takePhotoError))
  } catch (e) {
    return GPIOSCode.err.takePhotoError
  }
}

export const restartRasp = async() => {
  if (shell.exec('sudo reboot').code !== 0)
    return RaspCode.err.rebootRasp
}
export const restartServer = async() => {
  if (shell.exec('npm restart').code !== 0)
    return RaspCode.err.rebootServer
}
