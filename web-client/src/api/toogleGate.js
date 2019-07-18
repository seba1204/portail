import axios from 'axios'

const toogleGate = async() => {
  axios.defaults.timeout = 5000;
  return await axios.post('http://192.168.1.19:5973/toogleGate')
  .then(r => r.data)
  .catch(e => ({code:'e400', description:e}))
}
export default toogleGate
