<script setup lang="ts">
import type { Image } from "../models/Images";

const imgFolder = "/src/assets/images/";

defineProps<{
  images: Array<Image>;
}>();
</script>

<template>
  <ul class="image-list">
    <li v-for="img in images" :key="img.path">
      <figure>
        <img
          :src="imgFolder + img.path"
          :alt="img.alt ? img.alt : img.caption"
        />
        <figcaption>
          {{ img.caption }}
        </figcaption>
      </figure>
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
    & img {
      width: 100%;
    }
    @media screen and (max-width: 950px) {
      flex-basis: calc(50% - $flex-gap);
    }
  }
  & figcaption {
    font-weight: bold;
    text-align: center;
    text-transform: uppercase;
  }
}
</style>
