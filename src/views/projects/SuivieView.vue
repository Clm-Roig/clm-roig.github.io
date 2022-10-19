<script setup lang="ts">
import { projects } from "@/models/projects";
const { suivie } = projects;
</script>

<template>
  <section class="back-to-projects dark-bg">
    <router-link :to="{ path: '/', hash: '#projects' }">{{
      "< " + $t("back-to-projects")
    }}</router-link>
  </section>
  <div class="header">
    <h1>
      <img
        class="logo"
        src="/src/assets/images/suivie/suivie-logo.png"
        alt="SuiVie logo"
      />
    </h1>
    <a :href="suivie.url" target="_blank" rel="noopener noreferrer">{{
      suivie.url
    }}</a>
  </div>
  <section>
    <article class="dark-bg">
      <h2>{{ $t("presentation") }}</h2>
      <p class="text">{{ $t("projects.suivie.details.part1") }}</p>
      <p class="text">{{ $t("projects.suivie.details.part2") }}</p>
      <p class="text">{{ $t("projects.suivie.details.part3") }}</p>
      <ul class="classic-ul">
        <li>{{ $t("projects.suivie.details.reason1") }}</li>
        <li>{{ $t("projects.suivie.details.reason2") }}</li>
      </ul>
    </article>
    <article>
      <ul class="images">
        <li>
          <figure>
            <img src="/src/assets/images/suivie/home.jpg" />
            <figcaption>{{ $t("projects.suivie.images.home") }}</figcaption>
          </figure>
        </li>
        <li>
          <figure>
            <img src="/src/assets/images/suivie/trackers.jpg" />
            <figcaption>{{ $t("projects.suivie.images.trackers") }}</figcaption>
          </figure>
        </li>
        <li>
          <figure>
            <img src="/src/assets/images/suivie/custom-validate.jpg" />
            <figcaption>
              {{ $t("projects.suivie.images.custom-validate") }}
            </figcaption>
          </figure>
        </li>
        <li>
          <figure>
            <img src="/src/assets/images/suivie/create.jpg" />
            <figcaption>{{ $t("projects.suivie.images.create") }}</figcaption>
          </figure>
        </li>
      </ul>
    </article>
    <article class="dark-bg">
      <h2>{{ $t("features") }}</h2>
      <ul class="classic-ul">
        <li>{{ $t("projects.suivie.details.feat1") }}</li>
        <li>{{ $t("projects.suivie.details.feat2") }}</li>
        <li>{{ $t("projects.suivie.details.feat3") }}</li>
        <li>{{ $t("projects.suivie.details.feat4") }}</li>
        <li>{{ $t("projects.suivie.details.feat5") }}</li>
      </ul>
    </article>
    <article>
      <ul class="images">
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
    </article>
    <article class="dark-bg">
      <h2>{{ $t("technical-overview") }}</h2>
      <!-- eslint-disable-next-line vue/no-v-html -->
      <p class="text" v-html="$t('projects.suivie.details.tech1')"></p>
      <p class="text">{{ $t("projects.suivie.details.tech2") }}</p>
    </article>
  </section>

  <section class="back-to-projects">
    <router-link :to="{ path: '/', hash: '#projects' }">{{
      "< " + $t("back-to-projects")
    }}</router-link>
  </section>
</template>

<style scoped lang="scss">
$img-gap: 1rem;

.header {
  padding: 16px 0;
  text-align: center;
}
.images {
  display: flex;
  gap: $img-gap;
  flex-wrap: wrap;
  justify-content: space-evenly;
  & li {
    list-style-type: none;
    flex: 1;
    flex-basis: calc(25% - $img-gap);
    min-width: 200px;
    max-width: 350px;
    & img {
      width: 100%;
    }
    @media screen and (max-width: 950px) {
      flex-basis: calc(50% - $img-gap);
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
.dark-bg {
  background-color: $black;
}
.text {
  margin-bottom: 16px;
}
article {
  padding: 16px $sidebar-width;
}

.back-to-projects {
  padding: 32px 0;
  text-align: center;
}

.classic-ul {
  list-style-type: disclosure-closed;
  padding-left: 2rem;
}
</style>
