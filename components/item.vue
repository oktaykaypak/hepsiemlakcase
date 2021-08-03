<template>
  <div class="column_50 item p_10">
    <div class="row">
      <div class="column_full display_flex content_center">
        <img :src="product.image" alt="image" class="column_75">
      </div>
    </div>
    <div class="row">
      <div class="column_full text_center">
        {{ product.name }}
      </div>
    </div>
    <div class="row m_t_10">
      <div
        class="
          column_50
          content_center
          text_mid
          display_flex
          align_content_center
        "
      >
        {{ product.price }} {{ product.currency }}
      </div>
      <div class="column_50">
        <button
          class="btn btn_primary text_large text_mid"
          @click="addCart(product.id)"
        >
          {{ btnText }}
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import productService from '../services/productCheck'
import AddCart from '../services/AddCart'
export default {
  props: { product: { type: Object, default: null } },
  data () {
    return {
      btnText: 'Add Cart'
    }
  },
  methods: {
    async addCart (basketProductid) { // fonksiyonumuz ürünlerin localstorage üzerine eklenmesi api üzerinden stok kontrolünün yapıldığı fonksiyondur.
      await productService
        .ProductCheck(basketProductid) // productService içerisinde bulunan productCheck fonksiyonumuz ile api üzerinden ürünün 1 adeti için stok kontrolü yapılmaktadır.
        .then((res) => { // gelen cevap eğer 200 ise
          if (res.status === 200) {
            AddCart.AddCart(basketProductid) // AddCart içerisinde bulunan AddCart fonksiyonumuz ile localstorage üzerine ürünümüzün id'si eklenmektedir.
            this.btnText = 'Success' // Müşteriye ürünün eklendiğini bildirmek için başarılı ifadesini göstermekteyiz.
            setTimeout(() => { // Müşteriye verdiğimiz uyarıyı ürün eklendi olarak değiştirmek için timeOut kullanarak düzenledik.
              this.btnText = 'Added Cart'
            }, 2000)
          }
        })
        .catch(() => { // Stok yok uyarısı aldığımızda ise bunu catch ederek müşteriye aynı başarlı işlemde olduğu gibi stokta yok olarak da gösterdik.
          this.btnText = ' Out Of Stock'
          setTimeout(() => { // Verdğimiz uyarıyı tekrardan eski haline getirdik.
            this.btnText = 'Add Cart'
          }, 2000)
        })
    }
  }
}
</script>
