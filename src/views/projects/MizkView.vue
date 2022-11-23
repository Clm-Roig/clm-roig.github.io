<script setup lang="ts">
import { projects } from "@/models/projects";
import Section from "../../components/Section.vue";
import BackToProjects from "../../components/BackToProjects.vue";
// import { AVAILABLE_PROJECTS, getImage } from "../../utils/getImage";
const { mizk } = projects;

// const getMizkImage = (imageName: string) =>
//   getImage(imageName, AVAILABLE_PROJECTS.mizk);
</script>

<template>
  <BackToProjects dark-bg />
  <header class="header">
    <h1>Mizk</h1>
    <a
      class="link link--fancy"
      :href="mizk.url"
      target="_blank"
      rel="noopener noreferrer"
      >{{ mizk.url }}</a
    >
  </header>

  <Section dark-bg>
    <h2>Page en construction...</h2>
  </Section>

  <BackToProjects />
</template>

<style scoped lang="scss">
@import "../../assets/styles/components/project-view.scss";
</style>
