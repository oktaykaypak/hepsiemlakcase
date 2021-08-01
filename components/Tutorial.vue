<template>
  <div class="container">
    <div class="row">
      <item :product="product" />
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      product: { name: 'deneme', price: 15 }
    }
  }
}
</script>
