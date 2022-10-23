<script setup lang="ts">
import { projects } from "@/models/projects";
import Section from "../../components/Section.vue";
import BackToProjects from "../../components/BackToProjects.vue";
import { AVAILABLE_PROJECTS, getImage } from "../../utils/getImage";
import Image from "../../components/Image.vue";
const { grottocenter } = projects;

const getGrottocenterImage = (imageName: string, extension?: string) =>
  getImage(imageName, AVAILABLE_PROJECTS.grottocenter, extension);
</script>

<template>
  <BackToProjects dark-bg />
  <header class="header">
    <h1>
      <img
        class="logo"
        src="/src/assets/images/grottocenter/grottocenter-logo.png"
        alt="Grottocenter logo"
      />
    </h1>
    <a
      class="link link--fancy"
      :href="grottocenter.url"
      target="_blank"
      rel="noopener noreferrer"
      >{{ grottocenter.url }}</a
    >
  </header>

  <Section dark-bg>
    <h2>{{ $t("presentation") }}</h2>
    <div class="content">
      <div class="content__text">
        <p>{{ $t("projects.grottocenter.details.part1") }}</p>
        <p>{{ $t("projects.grottocenter.details.part2") }}</p>
      </div>
      <Image :image="getGrottocenterImage('home')" class="content__img" />
    </div>
  </Section>

  <Section>
    <h2>{{ $t("features") }}</h2>
    <div class="cards">
      <div class="card">
        <h3>{{ $t("notifications") }}</h3>
        <div class="content">
          <div class="content__text">
            {{ $t("projects.grottocenter.details.notifications") }}
          </div>
          <Image :image="getGrottocenterImage('notifications')" />
        </div>
      </div>

      <div class="card">
        <h3>{{ $t("authentication") }}</h3>
        <div class="content">
          <div class="content__text">
            {{ $t("projects.grottocenter.details.auth") }}
          </div>
          <Image :image="getGrottocenterImage('auth', 'gif')" />
        </div>
      </div>

      <div class="card">
        <h3>{{ $t("test-setup") }}</h3>
        <div class="content">
          <div class="content__text">
            {{ $t("projects.grottocenter.details.test-setup") }}
          </div>
          <Image :image="getGrottocenterImage('code-coverage')" />
        </div>
      </div>
    </div>
  </Section>

  <Section dark-bg>
    <h2>{{ $t("technical-overview") }}</h2>
    <div class="content">
      <div class="content__text">
        <!-- eslint-disable-next-line vue/no-v-html -->
        <p v-html="$t('projects.grottocenter.details.client-tech')"></p>
        <!-- eslint-disable-next-line vue/no-v-html -->
        <p v-html="$t('projects.grottocenter.details.server-tech')"></p>
      </div>
    </div>
  </Section>

  <BackToProjects />
</template>

<style scoped lang="scss">
@import "../../assets/styles/components/project-view.scss";

$card-gap: 1rem;
.cards {
  display: flex;
  flex-wrap: wrap;
  gap: $card-gap;
  justify-content: space-evenly;
}
.card {
  background: rgba($black, 0.5);
  border-radius: $border-radius;
  box-shadow: 0 5px 10px rgba(255, 255, 255, 0.19),
    0 0px 6px rgba(255, 255, 255, 0.23);
  flex-basis: calc(33.3333% - $card-gap);
  width: 650px;
  height: fit-content;
  padding: 1rem;
  transition: all $default-transition-duration;
  @media screen and (max-width: 1200px) {
    flex-basis: calc(50% - $card-gap);
  }
  @media screen and (max-width: 720px) {
    flex-basis: calc(100% - $card-gap);
  }
  &:hover {
    background: rgba($black, 1);
    box-shadow: 0 5px 30px rgba($primary-color, 0.3),
      0 0px 12px rgba($primary-color, 0.35);
    scale: 1.01;
  }
}
.content {
  &__img {
    max-width: 700px;
    flex: 1;
  }
}
</style>
