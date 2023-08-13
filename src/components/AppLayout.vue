<script setup lang="ts">
import { ref } from "vue";
import { MY_EMAIL } from "../constants";
import LanguageSwitcher from "./LanguageSwitcher.vue";

const isEmailCopied = ref(false);

function copyEmail() {
  navigator.clipboard.writeText(MY_EMAIL);
  isEmailCopied.value = true;
  setTimeout(() => (isEmailCopied.value = false), 2000);
}
</script>

<template>
  <div class="texture-bg"></div>
  <main>
    <div class="side-bar side-bar--left">
      <div class="side-bar--left__locale-changer">
        <LanguageSwitcher />
      </div>
      <a class="link side-bar__link" :href="'mailto:' + MY_EMAIL">{{
        MY_EMAIL
      }}</a>
      &nbsp;
      <div class="side-bar__copy-email">
        <button class="side-bar__copy-email-btn" @click="copyEmail">
          <font-awesome-icon :icon="['fa-regular', 'copy']"></font-awesome-icon>
        </button>
        <p class="side-bar__copy-email-text">
          {{ isEmailCopied ? $t("email-is-copied") + "🎉" : $t("copy-email") }}
        </p>
      </div>
    </div>

    <div class="side-bar side-bar--right">
      <a
        class="link side-bar__link"
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
        class="link side-bar__link"
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

    <slot></slot>
  </main>

  <footer class="footer dark-bg">
    <p>Clément ROIG</p>

    <i18n-t
      keypath="built-using"
      tag="p"
      class="footer__caption"
      scope="global"
    >
      <template #vueLink>
        <a
          class="link link--fancy"
          href="https://vuejs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          {{ $t("vue-framework") }}
        </a>
      </template>
      <template #sassLink>
        <a
          class="link link--fancy"
          href="https://sass-lang.com/"
          target="_blank"
          rel="noopener noreferrer"
          >SASS (SCSS)</a
        >
      </template>
      <template #vueI18nLink>
        <a
          class="link link--fancy"
          href="https://kazupon.github.io/vue-i18n/"
          target="_blank"
          rel="noopener noreferrer"
          >Vue I18n</a
        >
      </template>
    </i18n-t>

    <LanguageSwitcher :with-legend="true" />
  </footer>
</template>

<style scoped lang="scss">
@keyframes slide-side-bar-left-from-top {
  from {
    opacity: 0;
    transform: translateY(-50px) rotateZ(180deg);
  }
  to {
    opacity: 1;
    transform: translateY(0) rotateZ(180deg);
  }
}

.dark-bg {
  background-color: $black;
}

.texture-bg {
  background: radial-gradient(
      at 0% 0%,
      lighten($background-color, 10%) 0,
      transparent 30%
    ),
    radial-gradient(
      at 75% 40%,
      lighten($background-color, 9%) 0,
      transparent 50%
    ),
    radial-gradient(
      at 0% 80%,
      lighten($background-color, 8%) 0,
      transparent 80%
    );
  background-attachment: fixed;
  height: 100vh;
  position: fixed;
  width: 100vw;
}

.footer {
  padding: 32px 0;
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
  width: $sidebar-width;
  writing-mode: vertical-rl;
  z-index: 10;
  &::after {
    background-color: $white;
    content: "";
    display: block;
    height: 120px;
    width: 2px;
  }

  &__link {
    color: $white;
  }

  &__link:hover {
    color: $primary-color;
    background-color: inherit;
    transform: translateX(-4px);
  }

  &__copy-email {
    position: relative;
  }

  &__copy-email-btn {
    padding: 4px;
    rotate: 180deg;
    z-index: 2;
  }

  &__copy-email-btn:hover + &__copy-email-text {
    right: 32px;
    transition: all $default-transition-duration ease-in-out;
  }

  &__copy-email-text {
    position: absolute;
    right: -150px;
    top: -2px;
    transition: all $default-transition-duration ease-in-out;
    rotate: 180deg;
    white-space: nowrap;
    writing-mode: initial;
  }

  &--left {
    animation: slide-side-bar-left-from-top 1s normal ease-in-out;
    left: 0;
    top: 0;
    transform: rotateZ(180deg);
    &__locale-changer {
      margin-bottom: 8px;
    }
    &::after {
      margin-top: 8px;
    }
  }

  &--right {
    @include slide-y-generator("slide-from-top-50", 50px);
    animation: slide-from-top-50 1s normal ease-in-out;
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
