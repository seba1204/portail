import moment from 'moment'

const _status = (code) =>{
  switch (code.slice(0, 1)) {
    case 's':
      return 'success'
    case 'e':
      return 'error'
    case 'w':
      return 'warning'
    default:
      return 'error'
  }
}

const switchCodes = (code) => {
  let message = moment().format('HH:mm:ss - ')
  switch (code) {
    case 'e404':
        message += 'Erreur 404 ! '
      break;
    case 'e400':
        message += 'Connexion à la raspberry impossible...'
      break;
    case 'e500':
        message += 'Une erreur interne au serveur s\'est produite...'
      break;
    case 's200':
        message += 'Tout s\'est bien passé !'
      break;
    case 'e1':
        message += "Une erreur s'est produite lors de l'enregistrement de la photo"
      break;
    case 'e2':
        message += "Une erreur s'est produite lors de la prise de la photo"
      break;
    case 'e3':
        message += "Une erreur s'est produite lors de contacter le relais du portail"
      break;
    case 'e4':
        message += "Une erreur s'est produite lors de la lecture de la température du CPU de la raspberry"
      break;
    case 's1':
        message += "Le portail a bien recu l'information et la photo a été prise avec succès !"
      break;
    default:
        message += 'Une erreur s\'est produite...'
  }
  const status = _status(code)
  return {message, status}
}

export default switchCodes
