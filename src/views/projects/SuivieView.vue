<script setup lang="ts">
import { projects } from "@/models/projects";
import Section from "../../components/Section.vue";
const { suivie } = projects;
</script>

<template>
  <Section dark-bg class="back-to-projects">
    <router-link
      class="link link--fancy"
      :to="{ path: '/', hash: '#projects' }"
      >{{ "< " + $t("back-to-projects") }}</router-link
    >
  </Section>
  <header class="header">
    <h1>
      <img
        class="logo"
        src="/src/assets/images/suivie/suivie-logo.png"
        alt="SuiVie logo"
      />
    </h1>
    <a
      class="link link--fancy"
      :href="suivie.url"
      target="_blank"
      rel="noopener noreferrer"
      >{{ suivie.url }}</a
    >
  </header>
  <Section dark-bg>
    <h2>{{ $t("presentation") }}</h2>
    <div class="content">
      <div class="content__text">
        <p>{{ $t("projects.suivie.details.part1") }}</p>
        <p>{{ $t("projects.suivie.details.part2") }}</p>
        <p>{{ $t("projects.suivie.details.part3") }}</p>
        <ul class="classic-ul">
          <li>{{ $t("projects.suivie.details.reason1") }}</li>
          <li>{{ $t("projects.suivie.details.reason2") }}</li>
        </ul>
      </div>
      <div class="content__images image-list">
        <figure>
          <img src="/src/assets/images/suivie/home.jpg" />
          <figcaption>{{ $t("projects.suivie.images.home") }}</figcaption>
        </figure>
        <figure>
          <img src="/src/assets/images/suivie/trackers.jpg" />
          <figcaption>{{ $t("projects.suivie.images.trackers") }}</figcaption>
        </figure>
      </div>
    </div>
  </Section>

  <Section>
    <h2>{{ $t("features") }}</h2>
    <div class="content content--images-first content--align-center">
      <div class="content__images image-list">
        <figure>
          <img src="/src/assets/images/suivie/custom-validate.jpg" />
          <figcaption>
            {{ $t("projects.suivie.images.custom-validate") }}
          </figcaption>
        </figure>
        <figure>
          <img src="/src/assets/images/suivie/create.jpg" />
          <figcaption>{{ $t("projects.suivie.images.create") }}</figcaption>
        </figure>
      </div>
      <div class="content__text">
        <ul class="classic-ul">
          <li>{{ $t("projects.suivie.details.feat1") }}</li>
          <li>{{ $t("projects.suivie.details.feat2") }}</li>
          <li>{{ $t("projects.suivie.details.feat3") }}</li>
          <li>{{ $t("projects.suivie.details.feat4") }}</li>
          <li>{{ $t("projects.suivie.details.feat5") }}</li>
          <li>{{ $t("projects.suivie.details.feat6") }}</li>
        </ul>
      </div>
    </div>
  </Section>

  <Section>
    <ul class="image-list">
      <li>
        <figure>
          <img src="/src/assets/images/suivie/dark-mode.jpg" />
          <figcaption>
            {{ $t("projects.suivie.images.dark-mode") }}
          </figcaption>
        </figure>
      </li>
      <li>
        <figure>
          <img src="/src/assets/images/suivie/manage.jpg" />
          <figcaption>{{ $t("projects.suivie.images.manage") }}</figcaption>
        </figure>
      </li>
      <li>
        <figure>
          <img src="/src/assets/images/suivie/stats.jpg" />
          <figcaption>{{ $t("projects.suivie.images.stats") }}</figcaption>
        </figure>
      </li>
      <li>
        <figure>
          <img src="/src/assets/images/suivie/settings.jpg" />
          <figcaption>{{ $t("projects.suivie.images.settings") }}</figcaption>
        </figure>
      </li>
    </ul>
  </Section>

  <Section dark-bg>
    <h2>{{ $t("technical-overview") }}</h2>
    <div class="content">
      <div class="content__text">
        <!-- eslint-disable-next-line vue/no-v-html -->
        <p v-html="$t('projects.suivie.details.tech1')"></p>
        <!-- eslint-disable-next-line vue/no-v-html -->
        <p v-html="$t('projects.suivie.details.tech2')"></p>
      </div>
    </div>
  </Section>

  <Section class="back-to-projects">
    <router-link
      class="link link--fancy"
      :to="{ path: '/', hash: '#projects' }"
      >{{ "< " + $t("back-to-projects") }}</router-link
    >
  </Section>
</template>

<style scoped lang="scss">
$flex-gap: 1rem;

.header {
  padding: 16px 0;
  text-align: center;
}

.content {
  display: flex;
  gap: $flex-gap;
  flex-wrap: wrap;
  &__text {
    flex: 1;
    text-align: justify;
  }
  &__images {
    flex: 1;
  }
  @media screen and (max-width: 1250px) {
    flex-direction: column;
  }
  &--images-first {
    @media screen and (max-width: 1250px) {
      flex-direction: column-reverse;
    }
  }
  &--align-center {
    align-items: center;
  }
}
.image-list {
  display: flex;
  gap: $flex-gap;
  flex-wrap: wrap;
  justify-content: space-evenly;
  & figure {
    list-style-type: none;
    flex: 1;
    flex-basis: calc(25% - $flex-gap);
    min-width: 200px;
    max-width: 350px;
    & img {
      width: 100%;
    }
    @media screen and (max-width: 950px) {
      flex-basis: calc(50% - $flex-gap);
    }
  }
  & figcaption {
    font-weight: bold;
    text-align: center;
    text-transform: uppercase;
  }
}
.logo {
  margin: auto;
  width: 50vw;
  max-width: 200px;
  filter: invert(1);
}

p {
  margin-bottom: 16px;
}

.back-to-projects {
  padding: 32px 0;
  text-align: center;
}

.classic-ul {
  display: flex;
  flex-direction: column;
  gap: 16px;
  list-style-type: disclosure-closed;
  padding-left: 2rem;
}
</style>
