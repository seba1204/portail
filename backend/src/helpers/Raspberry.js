import gpio from 'gpio'
import log from 'my-own-logger'
import {Raspistill} from 'node-raspistill'
import fs from 'fs'
import date from 'date-and-time';

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

const _savePhoto = async(photo) => {
  console.log("on enregistre la photo !")
  console.log(path)
  return await fs.writeFile(path, photo, 'binary', (err) => {
    if (err) return err
    log({name:'Raspberry', status: 'ok', value: 'photo taken and saved'})
  })
}
export const takePhoto = async() => {
  console.log("on prend la photo !")
  const fileName = `${date.format(now, 'DD-MM-YYYY_HH-mm-ss')}`
  const outputDir = `../image`
  const camera = new Raspistill({time:1, fileName, outputDir})
  return await camera.takePhoto()
  .then(photo => {
    console.log("on a pris la photo")
    //_savePhoto(photo).catch(e => (GPIOSCode.err.savePhotoError))
  })
  .catch(e => (GPIOSCode.err.takePhotoError))
}
