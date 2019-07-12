import log from 'my-own-logger' // logger
import * as cte from '../../constantes' // on importe les valeurs des constantes qui sont exclues des exports github

const {DEFAULT_TOKEN} = cte

const defineToken = async (token) => {
  const { NODE_ENV } = process.env
  if (NODE_ENV === "development"){
    if (!token){
      await (process.env.TOKEN = DEFAULT_TOKEN)
    }
    else{
      await (process.env.TOKEN = token)
    }
    log({name: "Token",
      status:'reg',
      mode:`dev`,
      value: `${process.env.TOKEN}`})
  }
}

export default defineToken
