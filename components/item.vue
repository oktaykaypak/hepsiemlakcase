<template>
  <div class="column_50 item p_10">
    <div class="row">
      <div class="column_full display_flex content_center">
        <img src="../assets/image/a.jpeg" alt="image" class="column_75" />
      </div>
    </div>
    <div class="row">
      <div class="column_full text_center">
        {{ product.name }}
      </div>
    </div>
    <div class="row m_t_10">
      <div
        class="column_25 text_bold text_large display_flex align_content_center"
      >
        {{ product.price }}₺
      </div>
      <div class="column_75">
        <NuxtLink to="/about">
          <button class="btn btn_primary text_large text_mid">Add Cart</button>
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['product']
}
</script>
