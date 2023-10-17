<template>
  <div class="tag" :class="name">
    <ul>
      <li class="tag__name">{{ name }}</li>
    </ul>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

const tagName: string[] = ['paid', 'pending', 'draft'];
export default Vue.extend({
  props: {
    name: {
      type: String,
      required: true,
      validator: (value: string) => tagName.includes(value),
    },
  },
});
</script>

<style scoped lang="scss">
@import "@/assets/scss/abstracts/_variables.scss";
.tag {
  width: 100px;
  border-radius: 6px;
  padding: 14px $spacing-l;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: $spacing-xs;
  &__name {
    text-transform: capitalize;
    font-weight: 700;
  }
}
</style>
