<script setup lang="ts"></script>

<template>
  <div class="texture-bg"></div>
  <main>
    <div class="side-bar side-bar--left">
      <div class="side-bar--left__locale-changer">
        <select v-model="$i18n.locale">
          <option
            v-for="locale in $i18n.availableLocales"
            :key="`locale-${locale}`"
            :value="locale"
          >
            {{ locale }}
          </option>
        </select>
      </div>
      <a class="side-bar__link" href="mailto:clm.roig@gmail.com"
        >clm.roig@gmail.com</a
      >
    </div>

    <div class="side-bar side-bar--right">
      <a
        class="side-bar__link"
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
        class="side-bar__link"
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
    <!-- eslint-disable-next-line vue/no-v-html-->
    <p class="footer__caption" v-html="$t('built-using')"></p>
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

@keyframes slide-from-bottom {
  from {
    opacity: 0;
    transform: translateY(50px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.dark-bg {
  background-color: $black;
}

.texture-bg {
  background: url("@/assets/images/texture_green_silver.jpg");
  background-attachment: fixed;
  filter: blur(5px) brightness(110%);
  height: 100vh;
  opacity: 0.1;
  position: fixed;
  width: 100vw;
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
    transform: translateX(-8px);
  }

  &--left {
    animation: slide-side-bar-left-from-top 1s normal ease-in-out;
    left: 0;
    top: 0;
    transform: rotateZ(180deg);
    &__locale-changer {
      margin-bottom: 8px;
      & select {
        border: none;
      }
    }
    &::after {
      margin-top: 8px;
    }
  }

  &--right {
    animation: slide-from-bottom 1s normal ease-in-out;
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
