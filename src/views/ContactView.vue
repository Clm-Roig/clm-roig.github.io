<script setup lang="ts"></script>

<template>
  <h2>{{ $t("contact.section-title") }}</h2>
  <div class="contact">
    <p><a href="mailto:clm.roig@gmail.com">clm.roig@gmail.com</a></p>
    <a
      class="contact__link"
      href="https://www.linkedin.com/in/clm-roig/"
      target="_blank"
      rel="noopener noreferrer"
    >
      <font-awesome-icon
        class="contact__icon"
        size="2xl"
        :icon="['fa-brands', 'fa-linkedin']"
      ></font-awesome-icon>
    </a>
    <a
      class="contact__link"
      href="https://github.com/clm-roig/"
      target="_blank"
      rel="noopener noreferrer"
    >
      <font-awesome-icon
        class="contact__icon"
        size="2xl"
        :icon="['fa-brands', 'fa-github']"
      ></font-awesome-icon>
    </a>
  </div>
</template>

<style scoped lang="scss">
.contact {
  align-items: center;
  display: flex;
  flex-direction: column;
  gap: 16px;
  &__link:hover {
    background-color: transparent;
    color: $white;
    scale: 1.1;
  }
}
</style>
