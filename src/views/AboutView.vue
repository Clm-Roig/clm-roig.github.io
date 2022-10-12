<script setup lang="ts">
import TimelineComponent from "../components/TimelineComponent.vue";
</script>

<template>
  <h2>About me</h2>
  <figure class="portrait">
    <img
      class="portrait__gravatar"
      src="/src/assets/images/gravatar_no_bg.png"
    />
    <figcaption class="portrait__caption">
      Hi, I'm <b>Clément Roig</b>!
    </figcaption>
  </figure>

  <div class="about-me">
    <p class="about-me__text">
      I'm a human being and also a web developer. I like to build
      <b
        >user-friendly and beautiful web interfaces but also useful and
        practical REST API for other developers</b
      >. I have graduated in <b>computer science engineering</b> in 2019. I am
      constantly learning and improving my self to enhance my code quality:
      refactoring, reducing repetitions, testing and documenting my code is a
      <u>core part of my workflow</u>.
    </p>

    <TimelineComponent />

    <p class="about-me__text">
      I am thriving by developing solution for meaningful organizations, which
      work on fields like
      <b
        >education, health, protection of the environment, climate change
        fighting or knowledge sharing</b
      >.
    </p>
    <p class="about-me__text">
      When I'm not pixel-perfecting a web interface or pushing an API
      refactoring on GitHub, I'm making music at the
      <a href="https://onyx-studio.fr" rel="noopener noreferrer">Onyx Studio</a
      >. You will also find me hiking in the Ariège Pyrenees (South of France),
      picking mushrooms or chestnuts.
    </p>
    <img class="forest-picture" src="/src/assets/images/forest.jpg" />
  </div>
</template>

<style scoped lang="scss">
.portrait {
  align-items: center;
  display: flex;
  flex-direction: column;
  &__gravatar {
    height: auto;
    width: 200px;
  }

  &__caption {
    position: relative;
  }
}

.about-me {
  margin: auto;
  max-width: 1000px;
  &__text {
    text-indent: 2rem;
  }
  &__text:first-child {
    margin-top: 0;
  }
}

.forest-picture {
  display: block;
  height: auto;
  margin: auto;
  margin-top: 16px;
  width: 100%;
}
</style>
