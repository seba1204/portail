import definePort from './NODE_ENV'

const setEnvVar = async () => {
  await definePort() // le port du serveur
}

export default setEnvVar
