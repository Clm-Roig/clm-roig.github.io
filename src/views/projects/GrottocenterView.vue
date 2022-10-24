<script setup lang="ts">
import { projects } from "@/models/projects";
import Section from "../../components/Section.vue";
import BackToProjects from "../../components/BackToProjects.vue";
import { AVAILABLE_PROJECTS, getImage } from "../../utils/getImage";
import Image from "../../components/Image.vue";
import Card from "../../components/Card.vue";
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
      <Card :title="$t('notifications')" class="card">
        <div class="text card__text">
          {{ $t("projects.grottocenter.details.notifications") }}
        </div>
        <Image :image="getGrottocenterImage('notifications')" />
      </Card>

      <Card :title="$t('authentication')" class="card">
        <div class="text card__text">
          {{ $t("projects.grottocenter.details.auth") }}
        </div>
        <Image :image="getGrottocenterImage('auth', 'gif')" />
      </Card>

      <Card :title="$t('test-setup')" class="card">
        <div class="text card__text">
          {{ $t("projects.grottocenter.details.test-setup") }}
        </div>
        <Image :image="getGrottocenterImage('code-coverage')" />
      </Card>

      <Card :title="$t('advanced-search')" class="card">
        <div class="text card__text">
          {{ $t("projects.grottocenter.details.advanced-search") }}
        </div>
        <Image :image="getGrottocenterImage('advanced-search', 'gif')" />
      </Card>

      <Card :title="$t('user-management')" class="card">
        <div class="text card__text">
          {{ $t("projects.grottocenter.details.user-management") }}
        </div>
        <Image :image="getGrottocenterImage('user-management', 'gif')" />
      </Card>
    </div>
  </Section>

  <Section dark-bg>
    <h2>{{ $t("technical-overview") }}</h2>
    <div class="content">
      <div>
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

.text {
  text-align: justify;
}
.cards {
  display: flex;
  flex-wrap: wrap;
  gap: $card-gap;
  justify-content: space-evenly;
}

.card {
  flex-basis: calc(33.3333% - $card-gap);
  width: 650px;
  &__text {
    margin-bottom: 1rem;
  }
  @media screen and (max-width: 1200px) {
    flex-basis: calc(50% - $card-gap);
  }
  @media screen and (max-width: 720px) {
    flex-basis: calc(100% - $card-gap);
  }
}

.content {
  &__img {
    max-width: 700px;
    flex: 1;
  }
}
</style>
