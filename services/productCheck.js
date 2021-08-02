const axios = require('axios')
const url = 'https://nonchalant-fang.glitch.me/order'
class ProductService {
  static ProductCheck (Pid) {
    return axios.post(`${url}`, [{
      id: Pid,
      amount: 999999999
    }])
  }
}
export default ProductService
