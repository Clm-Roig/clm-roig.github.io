<script setup lang="ts">
import { projects } from "@/models/projects";
import Section from "../../components/Section.vue";
import BackToProjects from "../../components/BackToProjects.vue";
import ImageList from "../../components/ImageList.vue";
import { AVAILABLE_PROJECTS, getImage } from "../../utils/getImage";
const { mizk } = projects;

const getMizkImage = (imageName: string) =>
  getImage(imageName, AVAILABLE_PROJECTS.mizk);

const imageList1 = [getMizkImage("menu"), getMizkImage("colors")];
const imageList2 = [getMizkImage("image-crop")];
</script>

<template>
  <BackToProjects dark-bg />
  <header class="header">
    <h1>Mizk</h1>
    <a
      class="link link--fancy"
      :href="mizk.url"
      target="_blank"
      rel="noopener noreferrer"
      >{{ mizk.url }}</a
    >
  </header>

  <Section dark-bg>
    <h2>{{ $t("presentation") }}</h2>
    <div class="content">
      <div class="content__text">
        <p>{{ $t("projects.mizk.details.part1") }}</p>
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
          <li>{{ $t("projects.mizk.details.feat1") }}</li>
          <li>{{ $t("projects.mizk.details.feat2") }}</li>
          <li>{{ $t("projects.mizk.details.feat3") }}</li>
          <li>{{ $t("projects.mizk.details.feat4") }}</li>
          <li>{{ $t("projects.mizk.details.feat5") }}</li>
        </ul>
      </div>
    </div>
  </Section>

  <Section dark-bg>
    <h2>{{ $t("technical-overview") }}</h2>
    <div class="content">
      <div class="content__text">
        <!-- eslint-disable-next-line vue/no-v-html -->
        <p v-html="$t('projects.mizk.details.tech1')"></p>
        <!-- eslint-disable-next-line vue/no-v-html -->
        <p v-html="$t('projects.mizk.details.tech2')"></p>
      </div>
    </div>
  </Section>

  <BackToProjects />
</template>

<style scoped lang="scss">
@import "../../assets/styles/components/project-view.scss";
</style>
