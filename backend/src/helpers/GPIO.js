import gpio from 'gpio'

export const RELAIS = gpio.export(4, {
   direction: gpio.DIRECTION.OUT,
   interval: 500,
   ready: toggleGate()}
 ) // = on connecte le relais au GPIO 4, et on le configure en sortie

const turnOn = async () => {
  await RELAIS.reset() // on le remet à zéro au cas où
  await RELAIS.set() // puis on le passe à 1
}
const turnOff = async () => {
  await RELAIS.reset()  // on éteint le relais
}

const toggleGate = async () => {
  turnOn().then(turnOff, 1000))
}
