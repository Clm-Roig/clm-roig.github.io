<script setup lang="ts">
import TimelineComponent from "../components/TimelineComponent.vue";
</script>

<template>
  <h2>{{ $t("about.section-title") }}</h2>
  <figure class="portrait">
    <img
      class="portrait__gravatar"
      src="/src/assets/images/gravatar_no_bg.png"
    />
    <!-- eslint-disable vue/no-v-html -->
    <figcaption
      class="portrait__caption"
      v-html="$t('about.greeting')"
    ></figcaption>
    <!-- eslint-enable vue/no-v-html -->
  </figure>

  <div class="about-me">
    <!-- eslint-disable-next-line vue/no-v-html -->
    <p class="about-me__text" v-html="$t('about.part1')" />

    <TimelineComponent />

    <div class="about-me__block-2">
      <!-- eslint-disable-next-line vue/no-v-html -->
      <p class="about-me__text" v-html="$t('about.part2')"></p>
      <!-- eslint-disable-next-line vue/no-v-html -->
      <p class="about-me__text" v-html="$t('about.part3')"></p>
    </div>
    <img class="forest-picture" src="/src/assets/images/forest.jpg" />
  </div>
</template>

<style scoped lang="scss">
.portrait {
  align-items: center;
  display: flex;
  flex-direction: column;
  &__gravatar {
    height: auto;
    width: 200px;
  }

  &__caption {
    position: relative;
    margin-bottom: 8px;
  }
}

.about-me {
  margin: auto;
  max-width: 1100px;
  &__text:first-child {
    margin-top: 0;
  }
  &__block-2 {
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
    & p {
      flex: 1;
      flex-basis: 300px;
    }
  }
}

.forest-picture {
  display: block;
  height: auto;
  margin: auto;
  margin-top: 16px;
  width: 100%;
  max-width: 650px;
}
</style>
