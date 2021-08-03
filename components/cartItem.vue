<template>
  <div class="p_20 item basket">
    <div class="row">
      <div class="column_25">
        <img class="column_75" :src="data.image" alt="" />
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
          <i class="bi bi-dash"></i>
        </div>
        <div class="input_area m_r_10">
          <input v-model="quant" type="text" />
        </div>
        <div class="btn btn_circle" @click="addQuantitiy">
          <i class="bi bi-plus"></i>
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
  props: ['quantitiy', 'data'],
  data () {
    return {
      quant: this.quantitiy
    }
  },
  methods: {
    addQuantitiy () {
      this.quant++
    },
    reduceQuantitiy () {
      if (this.quant > 1) {
        this.quant--
      }
    },
    removeItem (Itemid) {
      let dataArray = localStorage.getItem('basketArray')
      dataArray = dataArray.split(',')
      const isLargeNumber = element => element === String(Itemid)
      dataArray.splice(dataArray.findIndex(isLargeNumber), 1)
      console.log(dataArray, Itemid)
      localStorage.setItem('basketArray', dataArray)
      window.location.reload()
    }
  }
}
</script>
