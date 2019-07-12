import log from 'my-own-logger' // logger
import * as cte from '../../constantes' // on importe les valeurs des constantes qui sont exclues des exports github


const {DB_HOSTNAME_DEV} = cte
const {DB_PORT_DEV} = cte
const {DB_NAME_DEV} = cte

const {DB_HOSTNAME_PROD} = cte
const {DB_PORT_PROD} = cte
const {DB_NAME_PROD} = cte


const defineDB = async () => {
  const { NODE_ENV } = process.env
  if (NODE_ENV === 'development'){
    await (process.env.DB_HOSTNAME = DB_HOSTNAME_DEV)
    await (process.env.DB_PORT = DB_PORT_DEV)
    await (process.env.DB_NAME = DB_NAME_DEV)
    log({
      name: "ENV VAR",
      status:'reg',
      mode: `dev`,
      value: `dataBase variables`
    })
  }
  else if(NODE_ENV === 'production '){
    await (process.env.DB_HOSTNAME = DB_HOSTNAME_PROD)
    await (process.env.DB_PORT = DB_HOSTNAME_PROD)
    await (process.env.DB_NAME = DB_HOSTNAME_PROD)
    log({
      name: "ENV VAR",
      status:'reg',
      mode: `prod`,
      value: `dataBase variables`
    })
  }
  else{
    log({
      name: "ENV VAR",
      status:'err',
      value:`no env var for database have been defined cause NODE_ENV is not in development or in production`
    })
  }
}

export default defineDB
