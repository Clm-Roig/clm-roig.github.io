<script setup lang="ts">
import SkillsView from "./SkillsView.vue";
import ProjectsView from "./ProjectsView.vue";
import ContactView from "./ContactView.vue";
import AboutView from "./AboutView.vue";
</script>

<template>
  <div class="texture-bg"></div>
  <main>
    <div class="lateral-left">
      <a href="mailto:clm.roig@gmail.com">clm.roig@gmail.com</a>
    </div>

    <section class="top">
      <div class="top-text">
        <h1>Clément Roig</h1>
      </div>
      <p class="what-i-am">Web developer · Musician · Nature lover</p>
    </section>

    <section class="bg-dark">
      <SkillsView />
    </section>

    <section>
      <ProjectsView />
    </section>
    <section class="bg-dark">
      <AboutView />
    </section>
    <section>
      <ContactView />
    </section>
  </main>

  <footer class="bg-dark">
    <p>Clément ROIG</p>
    <p class="caption">
      Website using <a href="https://vuejs.org/">Vue.js framework</a> and
      <a href="https://sass-lang.com/">SASS (SCSS)</a>
      only
    </p>
  </footer>
</template>

<style scoped lang="scss">
$lateral-width: 32px;

section {
  padding: 16px $lateral-width 16px $lateral-width;
}
.bg-dark {
  background-color: $black;
}

.texture-bg {
  background: url("../assets/images/texture_green_silver.jpg");
  background-attachment: fixed;
  filter: blur(5px) brightness(200%);
  height: 100vh;
  opacity: 0.1;
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
  font-size: 1.8rem;
  text-align: center;
}
.gravatar {
  width: 150px;
}

.top-text {
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.what-i-am {
  font-size: 1.5rem;
  text-align: center;
}

h1 {
  font-size: 3.6rem;
  line-height: 2.5rem;
  margin-top: 32px;
  text-transform: uppercase;
}

footer {
  padding: 16px 0;
  text-align: center;
}

.caption {
  font-size: 80%;
}

.lateral-left {
  display: flex;
  position: fixed;
  bottom: 0;
  align-items: center;
  font-size: 75%;
  left: 0;
  width: $lateral-width;
  writing-mode: vertical-rl;
  transform: rotateZ(180deg);
  z-index: 10;
  &::before {
    background-color: $primary-color;
    content: "";
    display: block;
    height: 100px;
    margin-bottom: 8px;
    width: 2px;
  }
}
</style>
