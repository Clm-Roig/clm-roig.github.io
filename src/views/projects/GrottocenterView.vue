<script setup lang="ts">
import { projects } from "@/models/projects";
import Section from "../../components/Section.vue";
const { grottocenter } = projects;
</script>

<template>
  <Section dark-bg class="back-to-projects">
    <router-link
      class="link link--fancy"
      :to="{ path: '/', hash: '#projects' }"
    >
      {{ "< " + $t("back-to-projects") }}
    </router-link>
  </Section>
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
  <Section class="under-construction">
    <p>⚠ {{ $t("under-construction") }} ⚠</p>
    <router-link class="link link--fancy" to="/">{{
      $t("back-to-projects")
    }}</router-link>
  </Section>
</template>

<style scoped lang="scss">
$flex-gap: 1rem;

.header {
  padding: 16px 0;
  text-align: center;
}

.under-construction {
  background-color: $secondary-color;
  font-size: 2rem;
  margin: 32px auto;
  padding: 1rem;
  text-align: center;
  width: fit-content;
}

.logo {
  margin: auto;
  width: 50vw;
  max-width: 200px;
}

p {
  margin-bottom: 16px;
}

.back-to-projects {
  padding: 32px 0;
  text-align: center;
}
</style>
