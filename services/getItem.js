const axios = require('axios')
const url = 'https://nonchalant-fang.glitch.me/listing'

class itemService {
  static getItem () {
    const data = axios.get(`${url}`) // Url içerisindeki bilgiye get işlemi yapılır ve içerik geri döndürülür
    return data
  }
}
export default itemService
