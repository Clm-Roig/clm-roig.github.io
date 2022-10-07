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

    <h2 class="warning">⚠️ Website in construction ⚠️</h2>
    <h2 class="warning">Come back later!</h2>

    <SkillsView />
    <ProjectsView />

    <h1>Title 1</h1>
    <h2>Title 2</h2>
    <h3>Title 3</h3>
    <h4>Title 4</h4>
    <h5>Title 5</h5>
    <p>Some text</p>
  </main>
</template>

<style scoped style="scss">
@keyframes warning_sign {
  from {
    scale: 0.9;
  }
  to {
    scale: 1.1;
  }
}
.warning {
  animation: 2s linear 0s infinite alternate warning_sign;
  color: #ddaa55;
  line-height: 3rem;
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
  line-height: 3.2rem;
  margin-bottom: 8px;
}
h1 > strong {
  display: block;
}
</style>
