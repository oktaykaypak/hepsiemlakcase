<template>
  <div class="p_20 item basket">
    <div class="row">
      <div class="column_25">
        <img class="column_75" :src="data.image" alt="">
      </div>
      <div class="column_75">
        <div class="row">
          <div class="column_full text_mid">
            {{ data.name }}
          </div>
        </div>
        <div class="row m_tb_10">
          <div class="column_full text_bold">
            {{ data.price }} {{ data.currency }}
          </div>
        </div>
      </div>
    </div>
    <div class="row m_t_10">
      <div class="column_25 display_flex">
        <div class="btn btn_circle" @click="reduceQuantitiy">
          <i class="bi bi-dash" />
        </div>
        <div class="input_area m_r_10">
          <input v-model="quant" type="text">
        </div>
        <div class="btn btn_circle" @click="addQuantitiy">
          <i class="bi bi-plus" />
        </div>
      </div>
      <div
        class="
          column_75
          display_flex
          content_center
          text_small
          btn btn_remove
          m_lr_auto
          text_uppercase
        "
        @click="removeItem(data.id)"
      >
        Remove
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    quantitiy: {
      default: '1',
      type: String
    },
    data: { // Data içeriğimiz basket.vue içerisinden gönderilmektedir. Bu değişken içerisinde sepet sayfasında listelenecek olan ürünlerin bilgileri yer almaktadır.
      type: Object,
      default: null
    }
  },
  data () {
    return {
      quant: this.quantitiy // quantitiy default olarak componente gönderilen adet sayısını içermektedir. Basket sayfadından props olarak gönderilebilir ya da default olarak verilebilir.
    }
  },
  methods: {
    addQuantitiy () { // addQuantitiy == Miktar arttırma butonudur.
      this.quant++
    },
    reduceQuantitiy () { // reduceQuantitiy == Miktar azaltma butonudur.
      if (this.quant > 1) { // buradaki sorgu ile 1 den az ürün olamayacağı için 1 den büyükse sorgusu koyulmuştur.
        this.quant--
      }
    },
    removeItem (Itemid) { // removeItem == Buradaki fonksiyon remove butonu ile tetiklenmektedir.
      let dataArray = localStorage.getItem('basketArray') // localstorage üzerindeki ürün bilgilerimizi getirmektedir.
      dataArray = dataArray.split(',') // localstorage üzerindeki verilerimiz string olarak tutulduğu için bu string diziye tekrardan split ile çevirmekteyiz.
      const isLargeNumber = element => element === String(Itemid) // Remove edeceğimiz ürünün id'si fonksiyonumuza gelmektedir. Bu id dizi içerisinde aranmaktadır.
      dataArray.splice(dataArray.findIndex(isLargeNumber), 1)// Bulunan index splice fonksiyonu ile silinmektedir.
      localStorage.setItem('basketArray', dataArray)// sepet ürün dizimizin yeni içeriği tekrardan localstorage'a aktarılamktadır.
      window.location.reload()// işlemlerimizin sayfa üzerinde aktif olarak görünebilmesi için yenileme işlemi yapılmaktadır.
    }
  }
}
</script>
