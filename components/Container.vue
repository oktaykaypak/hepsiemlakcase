<template>
  <div class="container">
    <div class="row">
      <div class="column_full m_20 display_flex content_end">
        <Nuxt-link to="/basket" class="btn column_25 btn_light">
          <i class="bi bi-basket text_large" /> Basket
        </Nuxt-link>
      </div>
    </div>
    <div class="row">
      <item v-for="data in product" :key="data" :product="data" />
    </div>
  </div>
</template>

<script>
import itemService from '../services/getItem'
export default {
  data () {
    return {
      product: null // producct değişkenimiz api üzerinden gelen ürünlerin tutulduğu değişkendir.
    }
  },
  mounted () {
    this.getItem()
  },
  methods: {
    async getItem () { // fonksiyonumuz sayfa mounted olduğu zaman tetiklenip itemService içerisinde bulunan getItem fonksiyonunu çalıştırmaktadır.
      this.product = await itemService.getItem() // Servis üzerindeki fonksiyonlardan gelen datalar değişkenimize aktarılmaktadır.
      this.product = this.product.data // Gelen cevap içerisideki bulunan 'data' json bilgimize erişerek ürün bilgilerini değişkenimize tekrardan aktarıyoruz.
    }
  }
}
</script>
