<script setup lang="ts">
import SkillsView from "./SkillsView.vue";
import ProjectsView from "./ProjectsView.vue";
</script>

<template>
  <main>
    <section class="wrapper">
      <h1><strong>Hi, I'm Clément Roig</strong>I'm a front-end developer!</h1>
      <img class="gravatar" src="../assets/images/gravatar.jpg" />
    </section>

    <h2 class="warning">⚠️ Website in construction! Come back later 😉</h2>

    <SkillsView />
    <ProjectsView />
  </main>
</template>

<style scoped style="scss">
@keyframes warning_sign {
  from {
    scale: 0.7;
  }
  to {
    scale: 1.3;
  }
}
.warning {
  animation: 3s linear 0s infinite alternate warning_sign;
  color: #ddaa55;
  font-size: 3rem;
  text-align: center;
}
.gravatar {
  width: 100px;
}
.wrapper {
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
}
h1 {
  text-align: center;
}
h1 > strong {
  display: block;
  font-size: 150%;
}
</style>
