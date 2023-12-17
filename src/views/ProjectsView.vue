<script setup lang="ts">
import ProjectItem from "../components/ProjectItem.vue";
import { projects } from "@/models/projects";

const { suivie, grottocenter, mizk, batailLog, larsenToulousaine } = projects;
</script>

<template>
  <h2>{{ $t("projects.section-title") }}</h2>

  <ul class="projects">
    <ProjectItem
      :built-with="larsenToulousaine.builtWith"
      :description="$t('projects.larsenToulousaine.description')"
      :img-path="larsenToulousaine.imgPath"
      __comment="TODO: uncomment internal slug
    when dedicated page done"
      __internal-slug="larsenToulousaine.internalSlug"
      :project-type="larsenToulousaine.projectType"
      :title="$t('projects.larsenToulousaine.title')"
      :url="larsenToulousaine.url"
    />
    <ProjectItem
      :built-with="batailLog.builtWith"
      :description="$t('projects.batailLog.description')"
      :img-path="batailLog.imgPath"
      __comment="TODO: uncomment internal slug
    when dedicated page done"
      __internal-slug="batailLog.internalSlug"
      :project-type="batailLog.projectType"
      :right-img="true"
      :title="$t('projects.batailLog.title')"
      :url="batailLog.url"
    />
    <ProjectItem
      :built-with="suivie.builtWith"
      :description="$t('projects.suivie.description')"
      :img-path="suivie.imgPath"
      :internal-slug="suivie.internalSlug"
      :project-type="suivie.projectType"
      :url="suivie.url"
      :title="$t('projects.suivie.title')"
    />
    <ProjectItem
      :built-with="grottocenter.builtWith"
      :description="$t('projects.grottocenter.description')"
      :img-path="grottocenter.imgPath"
      :internal-slug="grottocenter.internalSlug"
      :project-type="grottocenter.projectType"
      :right-img="true"
      :title="$t('projects.grottocenter.title')"
      :url="grottocenter.url"
    />
    <ProjectItem
      :built-with="mizk.builtWith"
      :description="$t('projects.mizk.description')"
      :img-path="mizk.imgPath"
      :internal-slug="mizk.internalSlug"
      :project-type="mizk.projectType"
      :title="$t('projects.mizk.title')"
      :url="mizk.url"
    />
  </ul>
</template>

<style scoped lang="scss">
$breakpoint: 1000px;
.projects {
  display: flex;
  flex-direction: column;
  gap: $card-gap;
  padding-left: 0;
}
</style>
