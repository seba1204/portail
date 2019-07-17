import axios from 'axios'

const toogleGate = async() => {
  return await axios.post('http://192.168.1.19:5973/toogleGate')
  .then(r => {return r})
  .catch(e => {return e})
}
export default toogleGate
