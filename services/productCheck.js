const axios = require('axios')
const url = 'https://nonchalant-fang.glitch.me/order'
class ProductService {
  static ProductCheck (Pid) {
    return axios.post(`${url}`, [{ // verile url üzerine ürünün id'si ve adeti gönderilir. Gelen cevap geri gönerilir
      id: Pid,
      amount: 1
    }])
  }
}
export default ProductService
