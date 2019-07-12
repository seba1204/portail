import log from 'my-own-logger' // logger
import * as cte from '../../constantes' // on importe les valeurs des constantes qui sont exclues des exports github

const {SERVER_PORT_DEV} = cte
const {SERVER_PORT_PROD} = cte


const definePort = async () => {
  const { NODE_ENV } = process.env
  if (NODE_ENV === 'development'){
    await (process.env.SERVER_PORT = SERVER_PORT_DEV)
    log({name: "ENV VAR",status:'reg', mode: `dev`, value: `server variables`})
  }
  else if(NODE_ENV === 'production '){
    await (process.env.SERVER_PORT = SERVER_PORT_PROD)
    log({name: "ENV VAR",status:'reg', mode: `prod`, value: `server variables`})
  }
  else{
    log({name: "ENV VAR",status:'err', value:`no env var for server have been defined cause NODE_ENV is not in development or in production`})
  }
}

export default definePort
