<template>
  <div class="container">
    <div class="row m_tb_30">
      <div class="column_full">My Cart ({{ BasketItemCount }})</div>
    </div>
    <div class="row" v-if="basketItems == null">
      <div class="column_full text_center p_30"> Cart Empty</div>
    </div>
    <div v-for="data in product" :key="data" v-else>
      <cart-item
        :quantitiy="quantitiy"
        :data="data"
        v-if="checkDatainBasket(data.id)"
      />
    </div>
    <div class="row m_t_20 shadow p_20">
      <div class="display_flex content_between column_full">
      <div class="column_50 display_flex text_center m_r_10">
        <Nuxt-link to="/" class="btn btn_light p_tb_10 text_uppercase">
          <i class="bi bi-chevron-compact-left "></i> Continue Shopping
        </Nuxt-link>
      </div>
      <div class="column_50 display_flex text_center m_l_10">
        <button   @click="placeOrder" class="btn btn_primary p_tb_10 text_uppercase">
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
      BasketItemCount: 0,
      product: null,
      quantitiy: 1,
      basketItems: null
    }
  },
  mounted () {
    this.getBasketItem()
    this.cartCheck()
  },
  methods: {
    async getBasketItem () {
      this.product = await itemService.getItem()
      this.product = this.product.data
      this.basketItems = localStorage.getItem('basketArray')
      this.basketItems = this.basketItems.split(',')
      this.BasketItemCount = this.basketItems.length
    },
    cartCheck () {
      const dataArray = localStorage.getItem('basketArray')
      if (dataArray === "") {
        localStorage.removeItem('basketArray')
        this.$router.push('/')
      }
    },

    checkDatainBasket (id) {
      const checkDatainBasket = this.basketItems.find(
        element => element === String(id)
      )
      return checkDatainBasket
    },
    placeOrder () {
      localStorage.removeItem('basketArray')
      this.$router.push('/')
    }
  }
}
</script>
