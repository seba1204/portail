import * as ne from './NODE_ENV'

const setEnvVar = async () => {
  await ne.definePort() // le port du serveur
  await ne.defineDB()// on crée les variables environnement pour gérer le database
}

export default setEnvVar
