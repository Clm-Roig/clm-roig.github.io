<script setup lang="ts">
import { projects } from "@/models/projects";
const { grottocenter } = projects;
</script>

<template>
  <div class="header dark-bg">
    <h1>Grottocenter</h1>
    <a :href="grottocenter.url" target="_blank" rel="noopener noreferrer">{{
      grottocenter.url
    }}</a>
  </div>
  <section class="under-construction">
    <p>⚠ {{ $t("under-construction") }} ⚠</p>
    <router-link class="link link--fancy" to="/">{{
      $t("back-to-projects")
    }}</router-link>
  </section>
</template>

<style scoped lang="scss">
$img-gap: 1rem;

.under-construction {
  background-color: $secondary-color;
  font-size: 2rem;
  margin: 64px auto;
  padding: 1rem;
  text-align: center;
  width: fit-content;
}

.header {
  text-align: center;
}

.dark-bg {
  background-color: $black;
}
</style>
