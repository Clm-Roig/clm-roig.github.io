<script setup lang="ts">
import ProjectItem from "../components/ProjectItem.vue";
import { projects } from "@/models/projects";

const { suivie, grottocenter } = projects;
</script>

<template>
  <h2>{{ $t("projects.section-title") }}</h2>

  <ul class="projects">
    <ProjectItem
      :built-with="suivie.builtWith"
      :description="$t('projects.suivie.description')"
      :img-path="suivie.imgPath"
      :title="$t('projects.suivie.title')"
      :url="suivie.url"
    />
    <ProjectItem
      :built-with="grottocenter.builtWith"
      :description="$t('projects.grottocenter.description')"
      :img-path="grottocenter.imgPath"
      :right-img="true"
      :title="$t('projects.grottocenter.title')"
      :url="grottocenter.url"
    />
  </ul>
</template>

<style scoped lang="scss">
$breakpoint: 1000px;
.projects {
  display: flex;
  flex-direction: column;
  padding-left: 0;
  margin: 0 16px;
}
</style>
