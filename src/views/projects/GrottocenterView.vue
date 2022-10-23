<script setup lang="ts">
import { projects } from "@/models/projects";
import Section from "../../components/Section.vue";
import BackToProjects from "../../components/BackToProjects.vue";
const { grottocenter } = projects;
</script>

<template>
  <BackToProjects dark-bg />
  <header class="header">
    <h1>
      <img
        class="logo"
        src="/src/assets/images/grottocenter/grottocenter-logo.png"
        alt="Grottocenter logo"
      />
    </h1>
    <a
      class="link link--fancy"
      :href="grottocenter.url"
      target="_blank"
      rel="noopener noreferrer"
      >{{ grottocenter.url }}</a
    >
  </header>

  <BackToProjects />
</template>

<style scoped lang="scss">
@import "../../assets/styles/components/project-view.scss";
</style>
