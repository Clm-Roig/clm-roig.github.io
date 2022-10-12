<script setup lang="ts">
import texture from "@/assets/images/texture_green_silver.jpg";
</script>

<template>
  <h2>Projects</h2>

  <ul class="projects">
    <li class="project">
      <img :src="texture" class="project__img project__img--left" />
      <div class="project__text">
        <h3>Project title</h3>
        <p class="project__description">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur vel
          finibus enim. Fusce volutpat posuere ultricies. Nulla facilisi. In hac
          habitasse platea dictumst. Suspendisse blandit efficitur massa.
          Pellentesque auctor risus in est gravida varius.
        </p>
        <p class="project__description">
          Aenean vitae pellentesque turpis, vitae luctus lacus. Aliquam at
          viverra turpis. Interdum et malesuada fames ac ante ipsum primis in
          faucibus.
        </p>
      </div>
    </li>
    <li class="project project--right">
      <div class="project__text">
        <h3>Project title</h3>
        <p class="project__description">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur vel
          finibus enim. Fusce volutpat posuere ultricies. Nulla facilisi. In hac
          habitasse platea dictumst.
        </p>
        <p class="project__description">
          Aenean vitae pellentesque turpis, vitae luctus lacus. Aliquam at
          viverra turpis. Interdum et malesuada fames ac ante ipsum primis in
          faucibus. Aenean vitae pellentesque turpis, vitae luctus lacus.
          Aliquam at viverra turpis.
        </p>
      </div>
      <img :src="texture" class="project__img project__img--right" />
    </li>
    <li class="project">
      <img :src="texture" class="project__img project__img--left" />
      <div class="project__text">
        <h3>Project title</h3>
        <p class="project__description">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur vel
          finibus enim. Fusce volutpat posuere ultricies. Nulla facilisi. In hac
          habitasse platea dictumst. Suspendisse blandit efficitur massa.
          Pellentesque auctor risus in est gravida varius.
        </p>
        <p class="project__description">
          Aenean vitae pellentesque turpis, vitae luctus lacus. Aliquam at
          viverra turpis. Interdum et malesuada fames ac ante ipsum primis in
          faucibus.
        </p>
      </div>
    </li>
  </ul>
</template>

<style scoped lang="scss">
$breakpoint: 1000px;
.projects {
  display: flex;
  flex-direction: column;
  padding-left: 0;
  margin: 0 16px;
}
.project {
  align-items: center;
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  transition: all 0.3s;
  &:hover {
    background-color: $black;
    box-shadow: inset 0 0 0 4px $primary-color, inset 0 0 0 8px $white;
  }
  &__text {
    display: flex;
    flex: 8;
    flex-direction: column;
    min-width: 300px;
    padding: 1rem;
  }
  &__description {
    text-indent: 32px;
  }
  &__img {
    flex: calc(
      210px + 7vw
    ); // empyric computation to make it perfectly responsive
    object-fit: contain;
    max-height: 400px;
    width: 100%;
    &--right {
      object-position: right;
    }
    &--left {
      object-position: left;
    }
    @media screen and (max-width: $breakpoint) {
      object-position: center;
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
