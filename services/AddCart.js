class CartService {
  static AddCart (basketProductid) {
    let basketItems = localStorage.getItem('basketArray') // localstorage içserisinde '^basketArray' değişkenini alır.
    if (basketItems === null || undefined) { // Eğer bu 'değişken' null ya da 'undefined' ise
      basketItems = [] // boş bir dizi yaratır
      basketItems.push(basketProductid) // Gelen id 'basketItems' disizi içierisine aktarılır.
      localStorage.setItem('basketArray', basketItems) // Dizinin son hali localstorage içerisine aktarılır.
    } else { // localstorage içerisinden gelen data 'null' ya da 'undefined' değil ise
      basketItems = basketItems.split(',') // içeriği split edilerek ayrı veriler haline getirilir
      const checkArray = basketItems.find(element => element === String(basketProductid)) // Gelen id içerisinde var olup olmadığı kontrol edilir
      if (checkArray === undefined) { // Eğer sonuç bulunamaz ise
        basketItems.push(basketProductid) // Gelen id basketItems içerisine eklenir.
        localStorage.setItem('basketArray', basketItems) // dizinin son hali localstorage içerisine tekrardan aktarılır.
      }
    }
  }
}
export default CartService
