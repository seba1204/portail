import log from 'my-own-logger' // logger
import mongoose from 'mongoose'
import * as schemas from '../database/schemas'

const startDB = async () => {
  //on importe les variables environnement préalablement définies
  const {DB_HOSTNAME, DB_PORT, DB_NAME} = process.env

  // on en déduit l'url de connexion de la bdd mongodb
  const url = `mongodb://${DB_HOSTNAME}:${DB_PORT}/${DB_NAME}`

  //on paramètre les options de la connexion à la base
  const options ={
    promiseLibrary: Promise,
    useNewUrlParser: true,
    useFindAndModify: false,
    useCreateIndex: true,
    connectTimeoutMS: 1000
  }

  //fonction permettant d'afficher les erreurs s'il y en a lors de la connexion à la base
  const _mongooseConnectLogResult = (error) => {
    if (error)
      log({name: "MongoDB",status:'err', value: `${error}`})
  }

  //On paramètre les événement de mongoose
  mongoose.connection.on("connecting", () => {
    log({name: "MongoDB",status:'wait', value: `is starting up...`})
  })
  mongoose.connection.on("connected", () => {
    log({name: "MongoDB",status:'reg', value: `is connected on port ${DB_PORT} !`})
  })
  mongoose.connection.on("disconnecting", () => {
    log({name: "MongoDB",status:'wait', value: `is diconnecting...`})
  })
  mongoose.connection.on("disconnected", () => {
    log({name: "MongoDB",status:'warn', value: `is disconnected !`})
  })
  mongoose.connection.on("error", () => {
    log({name: "MongoDB",status:'err', value: `error !`})
  })

  //on définit les schémas de la bdd
  mongoose.model('User', schemas.usersSchema)
  mongoose.model('History', schemas.historySchema)

  //on lance et on attend la connexion à la base
  await (mongoose.connect(url, options, _mongooseConnectLogResult))

}

export default startDB
