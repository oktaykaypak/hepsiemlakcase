class CartService {
  static AddCart (basketProductid) {
    let basketItems = localStorage.getItem('basketArray')
    if (basketItems === null || undefined) {
      basketItems = []
      basketItems.push(basketProductid)
      localStorage.setItem('basketArray', basketItems)
    } else {
      basketItems = basketItems.split(',')
      const checkArray = basketItems.find(element => element === String(basketProductid))
      if (checkArray === undefined) {
        basketItems.push(basketProductid)
        localStorage.setItem('basketArray', basketItems)
      }
    }
  }
}
export default CartService
