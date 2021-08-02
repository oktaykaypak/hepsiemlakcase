const axios = require('axios')
const url = 'https://nonchalant-fang.glitch.me/listing'

class itemService {
  static getItem () {
    const data = axios.get(`${url}`)
    return data
  }
}
export default itemService
