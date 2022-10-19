<script setup lang="ts">
import SkillsView from "./SkillsView.vue";
import ProjectsView from "./ProjectsView.vue";
import ContactView from "./ContactView.vue";
import AboutView from "./AboutView.vue";
</script>

<template>
  <section id="skills" class="section--bg-dark">
    <SkillsView />
  </section>

  <section id="projects">
    <ProjectsView />
  </section>
  <section id="about" class="section--bg-dark">
    <AboutView />
  </section>
  <section id="contact">
    <ContactView />
  </section>
</template>

<style scoped lang="scss">
section {
  padding: 16px $sidebar-width 16px $sidebar-width;
}
.section--bg-dark {
  background-color: $black;
}
</style>
