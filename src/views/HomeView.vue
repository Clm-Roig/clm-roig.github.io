<script setup lang="ts">
import SkillsView from "./SkillsView.vue";
import ProjectsView from "./ProjectsView.vue";
import ContactView from "./ContactView.vue";
import AboutView from "./AboutView.vue";
</script>

<template>
  <header class="header">
    <h1 class="header__h1">Clément Roig</h1>
    <p class="header__what-i-am">{{ $t("header.whatIAm") }}</p>
  </header>

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
.header {
  padding: 3rem;
  &__what-i-am {
    animation: slide-from-bottom 1s normal ease-in-out;
    font-family: "Quicksand";
    font-size: 1.25rem;
    text-align: center;
    text-transform: uppercase;
  }
  &__h1 {
    line-height: 3.2rem;
    animation: slide-from-bottom 1s normal ease-in-out;
    @media screen and (max-width: 550px) {
      font-size: 3.5rem;
    }
    @media screen and (max-width: 470px) {
      font-size: 2.9rem;
    }
    @media screen and (max-width: 395px) {
      font-size: 2.5rem;
    }
  }
}

section {
  padding: 32px $sidebar-width;
}
.section--bg-dark {
  background-color: $black;
}
</style>
