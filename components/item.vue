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
        class="column_50 content_center text_mid display_flex align_content_center"
      >
        {{ product.price }} {{product.currency}}
      </div>
      <div class="column_50">
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
