import mongoose from 'mongoose'
import { RELAIS } from '../../../helpers/GPIO'

//regarder dans la BDD si le token de l'utilisateur est bon

const toggle = async() => {
  await RELAIS()
}
export default toggle
// middleware to execute when we are in gate/toogle on a PUT