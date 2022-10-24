<script setup lang="ts">
defineProps<{
  title?: string;
}>();
</script>

<template>
  <div class="card">
    <div class="card__content">
      <h3 v-if="title">{{ title }}</h3>
      <slot></slot>
    </div>
  </div>
</template>

<style scoped lang="scss">
.card {
  border-radius: $border-radius;
  height: fit-content;
  overflow: hidden;
  padding: 4px;
  transition: all $default-transition-duration;
  z-index: 1;
  &__content {
    background: $black;
    padding: 1rem;
    z-index: 1;
  }
  &:hover {
    background: rgba($black, 1);
    box-shadow: 0 3px 15px rgba($white, 0.3), 0 0px 6px rgba($white, 0.35);
    scale: 1.01;
  }

  &::before {
    background: linear-gradient(
      45deg,
      $primary-color 0%,
      lighten($black, 10%) 100%
    );
    background-size: cover;
    background-position-x: 0;
    border-radius: inherit;
    content: "";
    height: 100%;
    left: 0;
    position: absolute;
    top: 0;
    transition: all $default-transition-duration;
    width: 100%;
    z-index: 0;
  }
}
</style>
