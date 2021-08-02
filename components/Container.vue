<template>
  <div class="container">
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
