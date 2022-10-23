<script setup lang="ts">
import type { Image as ImageType } from "../models/Images";
import Image from "./Image.vue";

defineProps<{
  images: Array<ImageType>;
}>();
</script>

<template>
  <ul class="image-list">
    <li v-for="img in images" :key="img.path">
      <Image :image="img" />
    </li>
  </ul>
</template>

<style scoped lang="scss">
$flex-gap: 1rem;

.image-list {
  display: flex;
  gap: $flex-gap;
  flex: 1;
  flex-wrap: wrap;
  justify-content: space-evenly;
  & li {
    list-style-type: none;
    flex: 1;
    flex-basis: calc(25% - $flex-gap);
    min-width: 200px;
    max-width: 350px;

    @media screen and (max-width: 950px) {
      flex-basis: calc(50% - $flex-gap);
    }
  }
}
</style>
