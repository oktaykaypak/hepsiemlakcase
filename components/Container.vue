<template>
  <div class="container">
    <div class="row">
      <div class="column_full m_20 display_flex content_end">
        <Nuxt-link to="/basket" class="btn column_25 btn_light">
          <i class="bi bi-basket text_large"></i> Basket
        </Nuxt-link>
      </div>
    </div>
    <div class="row">
      <item :product="data" v-for="data in product" :key="data" />
    </div>
  </div>
</template>

<script>
import itemService from '../services/getItem'
export default {
  data () {
    return {
      product: null
    }
  },
  mounted () {
    this.getItem()
  },
  methods: {
    async getItem () {
      this.product = await itemService.getItem()
      this.product = this.product.data
    }
  }
}
</script>
