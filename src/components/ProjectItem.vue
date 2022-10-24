<script setup lang="ts">
import Card from "./Card.vue";

defineProps<{
  builtWith: string;
  description: string;
  imgPath: string;
  internalSlug?: string;
  rightImg?: boolean;
  title: string;
  url?: string;
}>();
</script>

<template>
  <li>
    <Card>
      <div class="project" :class="rightImg ? 'project--right' : ''">
        <img
          v-if="!rightImg"
          :src="imgPath"
          class="project__img project__img--left"
        />
        <div class="project__text">
          <div class="project__text-header">
            <h3 class="project__title">{{ title }}</h3>
            <router-link v-if="internalSlug" :to="'/projects/' + internalSlug">
              <button>{{ $t("projects.more-info") }}</button>
            </router-link>
          </div>
          <p class="project__description">
            {{ description }}
          </p>
          <p class="project__build-with">
            <b>{{ $t("projects.built-with:") }}</b> {{ builtWith }}
          </p>
          <div v-if="url" class="project__link">
            <a
              class="link link--fancy"
              :href="url"
              target="_blank"
              rel="noopener noreferrer"
              >{{ url }}</a
            >
          </div>
        </div>
        <img
          v-if="rightImg"
          :src="imgPath"
          class="project__img project__img--right"
        />
      </div>
    </Card>
  </li>
</template>

<style scoped lang="scss">
$breakpoint: 820px;

.project {
  display: flex;
  align-items: center;
  transition: all $default-transition-duration;
  &__text-header {
    align-items: flex-start;
    display: flex;
    gap: 0.5rem;
    margin-bottom: 16px;
  }
  &__title {
    width: fit-content;
  }
  &__more-info {
    font-size: 0.8rem;
  }
  &__text {
    display: flex;
    flex-direction: column;
    flex: 8;
    min-width: 300px;
    padding: 16px 1rem;
    @media screen and (max-width: $breakpoint) {
      padding-top: 0;
    }
  }
  &__description {
    text-indent: 24px;
  }
  &__build-with {
    margin-top: 8px;
  }
  &__link {
    margin-top: 8px;
  }

  &__img {
    border-radius: $border-radius;
    flex: 2;
    max-height: 400px;
    max-width: 100%;
    transition: all 0.5s ease-in-out;
    z-index: 2;
    &--right {
      object-position: right;
    }
    &--left {
      object-position: left;
    }

    @media screen and (max-width: $breakpoint) {
      object-position: center;
      margin-bottom: $card-gap;
    }
  }
  @media screen and (max-width: $breakpoint) {
    flex-direction: column;
    &--right {
      flex-direction: column-reverse;
    }
  }
}
</style>
