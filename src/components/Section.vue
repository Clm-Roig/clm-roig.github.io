<script setup lang="ts">
defineProps<{
  darkBg?: boolean;
  fullWidth?: boolean;
}>();
</script>

<template>
  <section class="section" :class="`${darkBg ? 'section--dark-bg' : ''}`">
    <div :class="`section__content${fullWidth ? '--full-width' : ''}`">
      <slot></slot>
    </div>
  </section>
</template>

<style scoped lang="scss">
.section {
  padding: calc($sidebar-width + 4px);
  &__content {
    max-width: 1200px;
    margin: auto;
    &--full-width {
      max-width: auto;
      margin: none;
    }
  }
  &--dark-bg {
    background-color: darken($black, 1%);
  }
  @media screen and (min-width: 1000px) {
    padding: calc(2 * $sidebar-width);
  }
}
</style>
