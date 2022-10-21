<script setup lang="ts">
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
  <li class="project" :class="rightImg ? 'project--right' : ''">
    <img
      v-if="!rightImg"
      :src="imgPath"
      class="project__img project__img--left"
    />
    <div class="project__text">
      <div class="project__text-header">
        <h3 class="project__title">{{ title }}</h3>
        <router-link
          v-if="internalSlug"
          :to="'/projects/' + internalSlug"
          class="project__more-info"
          >{{ $t("projects.more-info") }}
        </router-link>
      </div>
      <p class="project__description">
        {{ description }}
      </p>
      <p class="project__build-with">
        <b>{{ $t("projects.built-with:") }}</b> {{ builtWith }}
      </p>
      <div v-if="url" class="project__link">
        <a :href="url" target="_blank" rel="noopener noreferrer">{{ url }}</a>
      </div>
    </div>
    <img
      v-if="rightImg"
      :src="imgPath"
      class="project__img project__img--right"
    />
  </li>
</template>

<style scoped lang="scss">
$breakpoint: 1000px;

.project {
  align-items: center;
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  transition: all $default-transition-duration;
  &:hover {
    background-color: $black;
    box-shadow: inset 0 0 0 4px $primary-color, inset 0 0 0 8px $white;
  }
  &__text-header {
    align-items: flex-start;
    display: flex;
    gap: 0.5rem;
    margin-bottom: 16px;
  }
  &__more-info {
    font-size: 0.8rem;
  }
  &__text {
    display: flex;
    flex: 8;
    flex-direction: column;
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
    flex-basis: 400px;
    object-fit: contain;
    max-height: 400px;
    width: 100%;
    transition: all 0.5s ease-in-out;
    z-index: 2;
    &--right {
      object-position: right;
      &:hover {
        transform: translateX(-100px);
      }
    }
    &--left {
      object-position: left;
      &:hover {
        transform: translateX(100px);
      }
    }
    &:hover {
      scale: 1.5;
      cursor: zoom-in;
    }
    @media screen and (max-width: $breakpoint) {
      object-position: center;
      margin-top: 16px;
      &:hover {
        scale: 1.2;
        transform: inherit;
      }
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