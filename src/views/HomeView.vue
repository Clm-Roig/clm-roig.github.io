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

    <div class="lateral-right">
      <a href="mailto:clm.roig@gmail.com">clm.roig@gmail.com</a>
    </div>

    <section class="top">
      <div class="top-text">
        <h1>Clément Roig</h1>
      </div>
      <p class="what-i-am">Web developer · Musician · Nature lover</p>
    </section>

    <section id="skills" class="bg-dark">
      <SkillsView />
    </section>

    <section id="projects">
      <ProjectsView />
    </section>
    <section id="about" class="bg-dark">
      <AboutView />
    </section>
    <section id="contact">
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
$lateral-width: 24px;

section {
  padding: 16px $lateral-width 16px $lateral-width;
}
.bg-dark {
  background-color: $black;
}

.texture-bg {
  background: url("../assets/images/texture_green_silver.jpg");
  background-attachment: fixed;
  filter: blur(5px) brightness(110%);
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

.top {
  padding: 3rem;
}

.top-text {
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.what-i-am {
  animation: slide-from-bottom 1s normal ease-in-out;
  font-family: "Quicksand";
  font-size: 1.25rem;
  text-align: center;
  text-transform: uppercase;
}

@keyframes slide-from-bottom {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

h1 {
  line-height: 3.2rem;
  animation: slide-from-bottom 1s normal ease-in-out;
}

footer {
  padding: 16px 0;
  text-align: center;
}

.caption {
  font-size: 80%;
}

.lateral-left > a,
.lateral-right > a {
  color: $white;
}

.lateral-left > a:hover,
.lateral-right > a:hover {
  color: $black;
}

.lateral-left,
.lateral-right {
  display: flex;
  position: fixed;
  align-items: center;
  font-size: 75%;
  width: $lateral-width;
  writing-mode: vertical-rl;
  z-index: 10;
  &::after {
    background-color: $white;
    content: "";
    display: block;
    height: 120px;
    width: 2px;
  }
}
.lateral-left {
  top: 0;
  left: 0;
  transform: rotateZ(180deg);
  &::after {
    margin-top: 8px;
  }
}

.lateral-right {
  bottom: 0;
  right: 0;
  &::after {
    margin-top: 8px;
  }
}
</style>
