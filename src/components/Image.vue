<script setup lang="ts">
import type { Image } from "../models/Images";

const getImagePath = (imageName: string) => {
  return new URL(`/src/assets/images/${imageName}`, import.meta.url).href;
};

const props = defineProps<{
  image: Image;
}>();

const imgPath = getImagePath(props.image.path);
</script>

<template>
  <figure>
    <a :href="imgPath" target="_blank">
      <img :src="imgPath" :alt="image.alt ? image.alt : image.caption" />
    </a>
    <figcaption>
      {{ image.caption }}
    </figcaption>
  </figure>
</template>

<style scoped lang="scss">
img {
  width: 100%;
  &:hover {
    cursor: zoom-in;
  }
}
figure {
  width: 100%;
}
figcaption {
  font-weight: bold;
  text-align: center;
  text-transform: uppercase;
}
</style>
