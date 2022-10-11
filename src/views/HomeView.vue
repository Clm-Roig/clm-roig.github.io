<script setup lang="ts">
import SkillsView from "./SkillsView.vue";
import ProjectsView from "./ProjectsView.vue";
import ContactView from "./ContactView.vue";
import AboutView from "./AboutView.vue";
</script>

<template>
  <div class="texture-bg"></div>
  <main>
    <div class="side-bar side-bar--left">
      <a class="side-bar__a" href="mailto:clm.roig@gmail.com"
        >clm.roig@gmail.com</a
      >
    </div>

    <div class="side-bar side-bar--right">
      <a
        class="side-bar__a"
        href="https://github.com/clm-roig/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <font-awesome-icon
          class="side-bar__icons"
          :icon="['fa-brands', 'fa-github']"
        ></font-awesome-icon>
      </a>
      <a
        class="side-bar__a"
        href="https://www.linkedin.com/in/clm-roig/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <font-awesome-icon
          class="side-bar__icons"
          :icon="['fa-brands', 'fa-linkedin']"
        ></font-awesome-icon>
      </a>
    </div>

    <header class="header">
      <h1 class="header__h1">Clément Roig</h1>
      <p class="header__what-i-am">Web developer · Musician · Nature lover</p>
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
  </main>

  <footer class="footer section--bg-dark">
    <p>Clément ROIG</p>
    <p class="footer__caption">
      Website using <a href="https://vuejs.org/">Vue.js framework</a> and
      <a href="https://sass-lang.com/">SASS (SCSS)</a>
      only
    </p>
  </footer>
</template>

<style scoped lang="scss">
$side-bar-width: 28px;

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

section {
  padding: 16px $side-bar-width 16px $side-bar-width;
}
.section--bg-dark {
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
  }
}

.footer {
  padding: 16px 0;
  text-align: center;
  &__caption {
    font-size: 80%;
  }
}

.side-bar {
  align-items: center;
  display: flex;
  font-size: 75%;
  padding-left: 4px;
  position: fixed;
  width: $side-bar-width;
  writing-mode: vertical-rl;
  z-index: 10;
  &::after {
    background-color: $white;
    content: "";
    display: block;
    height: 120px;
    width: 2px;
  }

  &__a {
    color: $white;
  }

  &__a:hover {
    color: $primary-color;
    background-color: inherit;
  }

  &--left {
    left: 0;
    top: 0;
    transform: rotateZ(180deg);
    &::after {
      margin-top: 8px;
    }
  }

  &--right {
    bottom: 0;
    right: 0;
    &::after {
      margin-top: 8px;
    }
  }

  &__icons {
    font-size: 24px;
    margin: 8px 0;
  }
}
</style>
