<template>
  <div class="column_50 item p_10">
    <div class="row">
      <div class="column_full display_flex content_center">
        <img :src="product.image" alt="image" class="column_75" />
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
          Add Cart
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import productService from '../services/productCheck'
export default {
  props: ['product'],
  methods: {
    async addCart (id) {
      await productService.ProductCheck(id).then((res) => {
        if (res.status === 200) {
          console.log('anan')
        }
      }).catch((err) => {
        console.log(err.response.data.message)
      }
      )
    }
  }
}
</script>
