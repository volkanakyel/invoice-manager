<template>
  <div class="tag">
    <ul>
      <li>{{ tagState }}</li>
    </ul>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  props: {
    tagState: {
      type: String,
      required: true,
    },
  },
});
</script>

<style scoped lang="scss">
.tag {
  background-color: rgba(51, 214, 159, 0.06);
  border-radius: 6px;
  padding: 14px $spacing-l;
  color: #33d69f;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: $spacing-xs;
  span {
    width: 5px;
    height: 5px;
    border-radius: $border-round;
    background-color: #33d69f;
  }
  li {
    font-weight: 700;
  }
}
</style>
