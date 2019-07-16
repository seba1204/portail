import log from 'my-own-logger' // logger
import express from 'express' //pour le routage
import bodyParser from 'body-parser' //pour parser un json

import * as rt from '../routes' // import des routes

const startServ = async () => {
  const { SERVER_PORT } = process.env

  //instantiation du serveur
  const app = express()


  //paramétrage du serveur
  app.use(bodyParser.json()) //permet de recevoir un beau Json en body d'une requête
  app.use(bodyParser.urlencoded({ extended: true }))

  //connection des routes au sever
  app.use('/toogleGate', rt.GateRoute)
  app.use('/temp', rt.TempRoute)
  app.use('/images', rt.ImagesRoute)


  //lancement des routes /!\ doit être lancé après la connexion à la base de donnée, sinon les schémas ne seront pas définis
  await (rt.initializeRoutes(
    (er) => {
      if (er){
        log({
          name: 'Routes',
          status: 'err',
          value:err
        })
      }
      else{
        log({
          name: 'Routes',
          status: 'reg',
          value:'are all initialized !'
        })
      }
    }
  ))

  //lancement du serveur
  await (app.listen(SERVER_PORT, () => {log({name: "Express",status:'reg', value: `is conected on port ${SERVER_PORT}`})}))

}

export default startServ
