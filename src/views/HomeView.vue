<script setup lang="ts">
import SkillsView from "./SkillsView.vue";
import ProjectsView from "./ProjectsView.vue";
import ContactView from "./ContactView.vue";
</script>

<template>
  <main>
    <div class="texture-bg"></div>

    <div class="top-wrapper">
      <h1><strong>Hi, I'm Clément Roig</strong>I'm a front-end developer!</h1>
      <img class="gravatar" src="../assets/images/gravatar.jpg" />
    </div>

    <h2 class="warning">⚠️ Website in construction ⚠️</h2>
    <h2 class="warning">Come back later!</h2>

    <section class="bg-dark">
      <SkillsView />
    </section>

    <section>
      <ProjectsView />
    </section>
    <section class="bg-dark">
      <ContactView />
    </section>
  </main>

  <footer>
    <p>Clément ROIG</p>
    <p class="caption">
      Website using <a href="https://vuejs.org/">Vue.js framework</a> and
      <a href="https://sass-lang.com/">SASS (SCSS)</a>
      only
    </p>
  </footer>
</template>

<style scoped lang="scss">
section {
  padding: 16px 0 16px 0;
}
.bg-dark {
  background-color: $black;
}

.texture-bg {
  background: url("../assets/images/texture_green_silver.jpg");
  background-attachment: fixed;
  filter: blur(5px) brightness(150%);
  height: 100vh;
  opacity: 0.1;
  overflow: "hidden";
  position: fixed;
  width: 100vw;
}

@keyframes warning_sign {
  from {
    scale: 0.8;
  }
  to {
    scale: 1;
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
.top-wrapper {
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

footer {
  text-align: center;
  margin-bottom: 16px;
}

.caption {
  font-size: 80%;
}
</style>
