<template>
  <div class="container">
    <div class="row">
      <div class="column_full">My Cart {{ BasketItemCount }}</div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      BasketItemCount: 3
    }
  },
  mounted () {
    this.getBasketItem()
  },
  methods: {
    async getBasketItem () {}
  }
}
</script>
