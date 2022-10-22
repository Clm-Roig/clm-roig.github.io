<script setup lang="ts">
import SkillsView from "./SkillsView.vue";
import ProjectsView from "./ProjectsView.vue";
import ContactView from "./ContactView.vue";
import AboutView from "./AboutView.vue";
import Section from "../components/Section.vue";
</script>

<template>
  <header class="header">
    <h1 class="header__h1">Clément Roig</h1>
    <p class="header__what-i-am">{{ $t("header.whatIAm") }}</p>
  </header>

  <Section id="skills" dark-bg>
    <SkillsView />
  </Section>

  <Section id="projects">
    <ProjectsView />
  </Section>
  <Section id="about" dark-bg>
    <AboutView />
  </Section>
  <Section id="contact">
    <ContactView />
  </Section>
</template>

<style scoped lang="scss">
.header {
  padding: 3rem;
  &__what-i-am {
    @include slide-y-generator("slide-what-i-am", -1rem);
    animation: slide-what-i-am 1s backwards ease-in-out;
    animation-delay: 0.5s;
    font-family: "Quicksand";
    font-size: 1.25rem;
    text-align: center;
    text-transform: uppercase;
  }
  &__h1 {
    @include slide-y-generator("slide-from-bottom-title", 3.2rem);
    animation: slide-from-bottom-title 1s normal ease-in-out;
    line-height: 3.2rem;
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
</style>
