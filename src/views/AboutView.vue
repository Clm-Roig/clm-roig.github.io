<script setup lang="ts">
import gravatar from "@/assets/images/texture_green_silver.jpg";
</script>

<template>
  <h2>About me</h2>
  <figure class="portrait">
    <img class="portrait__gravatar" :src="gravatar" />
    <figcaption class="portrait__caption">Hi, I'm Clément Roig!</figcaption>
  </figure>

  <div class="about-me">
    <p class="about-me__text">
      I'm a human being and also a web developer. I like to build
      <b
        >user-friendly and beautiful web interfaces but also useful and
        practical REST API for other developers</b
      >. I am constantly learning and improving my self to enhance my code
      quality: refactoring, reducing repetitions, testing and documenting my
      code is a <u>core part of my workflow</u>.
    </p>
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
    background-color: transparentize($black, 0.3);
    bottom: 40px;
    left: 40px;
    margin-bottom: -20px; /* remove empty space remaining after moving the block */
    position: relative;
  }
}

.about-me {
  &__text {
    text-indent: 16px;
    margin-top: 16px;
  }
  &__text:first-child {
    margin-top: 0;
  }
}
</style>
