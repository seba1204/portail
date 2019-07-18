import gpio from 'gpio'
import log from 'my-own-logger'
import {Raspistill} from 'node-raspistill'
import fs from 'fs'
import moment from 'moment'


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
    .then()
    .catch(e => (GPIOSCode.err.takePhotoError))
  } catch (e) {
    return GPIOSCode.err.takePhotoError
  }
}
