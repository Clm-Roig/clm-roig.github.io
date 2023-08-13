<script setup lang="ts">
import { ENGLISH_CV_LINK, FRENCH_CV_LINK, MY_EMAIL } from "../constants";
</script>

<template>
  <h2>{{ $t("contact.section-title") }}</h2>
  <div class="contact">
    <!-- <p>{{ $t("contact.text") }}</p> -->

    <div class="mail-resume">
      <a
        class="link link--fancy mail-resume__link"
        :href="$i18n.locale === 'fr' ? FRENCH_CV_LINK : ENGLISH_CV_LINK"
        target="_blank"
        rel="noopener noreferrer"
      >
        <font-awesome-icon
          class="contact__icon"
          size="2xl"
          :icon="['fa-regular', 'circle-down']"
        ></font-awesome-icon>
        <p>
          {{ $t("contact.download-cv") }}
        </p>
      </a>
      <a
        class="link link--fancy mail-resume__link"
        href="mailto:{{ MY_EMAIL }}"
      >
        <font-awesome-icon
          class="contact__icon"
          size="2xl"
          :icon="['fa-regular', 'envelope']"
        ></font-awesome-icon>
        <p>{{ MY_EMAIL }}</p>
      </a>
    </div>

    <div class="social-networks">
      <a
        class="link link--alt social-networks__link"
        href="https://www.linkedin.com/in/clm-roig/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <font-awesome-icon
          size="2xl"
          :icon="['fa-brands', 'fa-linkedin']"
        ></font-awesome-icon>
      </a>
      <a
        class="link link--alt social-networks__link"
        href="https://github.com/clm-roig/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <font-awesome-icon
          size="2xl"
          :icon="['fa-brands', 'fa-github']"
        ></font-awesome-icon>
      </a>
    </div>
  </div>
</template>

<style scoped lang="scss">
.contact {
  align-items: center;
  display: flex;
  flex-direction: column;
  gap: 16px;

  &__icon {
    transition: $default-transition-duration all;
    color: $primary-color-light;
  }
  a:hover &__icon {
    color: $black;
  }
}

.social-networks {
  display: flex;
  gap: 16px;
  &__link:hover {
    background-color: transparent;
    color: $white;
    scale: 1.1;
  }
}

.mail-resume {
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
  justify-content: center;
  &__link {
    padding: 8px;
    text-align: center;
  }
}
</style>
