<template>
  <div class="container">
    <div class="row m_tb_30">
      <div class="column_full">
        My Cart ({{ BasketItemCount }})
      </div>
    </div>
    <div v-if="basketItems == null" class="row">
      <div class="column_full text_center p_30">
        Cart Empty
      </div>
    </div>
    <div v-for="data in product" v-else :key="data">
      <cart-item
        v-if="checkDatainBasket(data.id)"
        :quantitiy="quantitiy"
        :data="data"
      />
    </div>
    <div class="row m_t_20 shadow p_20">
      <div class="display_flex content_between column_full">
        <div class="column_50 display_flex text_center m_r_10">
          <Nuxt-link to="/" class="btn btn_light p_tb_10 text_uppercase">
            <i class="bi bi-chevron-compact-left" /> Continue Shopping
          </Nuxt-link>
        </div>
        <div class="column_50 display_flex text_center m_l_10">
          <button
            class="btn btn_primary p_tb_10 text_uppercase"
            @click="placeOrder"
          >
            Place Order
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import itemService from '../services/getItem'
import cartItem from '~/components/cartItem.vue'
export default {
  components: { cartItem },
  data () {
    return {
      BasketItemCount: 0, // Değişkenimiz sepet sayfamızdaki ürün sayısını göstermektedir.
      product: null, // değişkenimiz api üzerinden ürünlerimizi getirmektedir.
      quantitiy: 1, // ürünlerimizin varsayılan adet miktarıdır. props olarak gönderilmektedir.
      basketItems: null // kategori sayfamızda eklenmiş olan ürünlerin aktarıldığı değişkendir.
    }
  },
  mounted () {
    this.getBasketItem()
    this.cartCheck()
  },
  methods: {
    async getBasketItem () { // fonksiyonu hem api üzerinden ürünleri çekmektedir. Hemde localstorage üzerindeki ürün id'lerini çekmektedir.
      this.product = await itemService.getItem()
      this.product = this.product.data
      this.basketItems = localStorage.getItem('basketArray')
      this.basketItems = this.basketItems.split(',')
      this.BasketItemCount = this.basketItems.length // localstorage üzerindeki ürün sayısını basketItemCount değişkenine aktarak sepetimizde kaç tane ürün olduğu bilgisini göstermektedir.
    },
    cartCheck () { // fonksiyonu ile sepet sayfasındaki ürünlerin durumları kontrol edilmektedir. Eğer localstorage içerisinde bir ürün bulunmuyorsa localstorage üzerindeki datamız temizlenerek kategori sayfasına yönlendirme yapmaktadır.
      const dataArray = localStorage.getItem('basketArray')
      if (dataArray === "") {
        localStorage.removeItem('basketArray')
        this.$router.push('/')
      }
    },

    checkDatainBasket (id) { // fonksiyonumuz api üzerinden gelen datanın localstorage içerisinde var olup olmadığını kontrol eden fonksiyondur. Gelen data 'undefined' olmadığı sürece bu itemleri sayfa üzerine çağırmaktadır.
      const checkDatainBasket = this.basketItems.find(
        element => element === String(id)
      )
      return checkDatainBasket
    },
    placeOrder () { // fonksiyonu siparişin tamamlayan cart içerisini tamamen boşaltıp kategori sayfasına geri yönlendirme yapan fonksiyondur.
      localStorage.removeItem('basketArray')
      this.$router.push('/')
    }
  }
}
</script>
