<script setup lang="ts">
import { projects } from "@/models/projects";
import Section from "../../components/Section.vue";
import ImageList from "../../components/ImageList.vue";
import BackToProjects from "../../components/BackToProjects.vue";
import { AVAILABLE_PROJECTS, getImage } from "../../utils/getImage";
const { suivie } = projects;

const getSuivieImage = (imageName: string) =>
  getImage(imageName, AVAILABLE_PROJECTS.suivie);

const imageList1 = [getSuivieImage("home"), getSuivieImage("trackers")];
const imageList2 = [
  getSuivieImage("custom-validate"),
  getSuivieImage("create"),
];
const imageList3 = [
  getSuivieImage("dark-mode"),
  getSuivieImage("manage"),
  getSuivieImage("stats"),
  getSuivieImage("settings"),
];
</script>

<template>
  <BackToProjects dark-bg />
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
      <ImageList :images="imageList1" />
    </div>
  </Section>

  <Section>
    <h2>{{ $t("features") }}</h2>
    <div class="content content--images-first content--align-center">
      <ImageList :images="imageList2" />
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
    <ImageList :images="imageList3" />
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

  <BackToProjects />
</template>

<style scoped lang="scss">
@import "../../assets/styles/components/project-view.scss";
.logo {
  filter: invert(1);
}
</style>
