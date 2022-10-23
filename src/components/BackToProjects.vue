<script setup lang="ts">
import Section from "./Section.vue";

defineProps<{
  darkBg?: boolean;
}>();
</script>

<template>
  <Section class="back-to-projects" :dark-bg="darkBg">
    <router-link
      class="link link--fancy"
      :to="{ path: '/', hash: '#projects' }"
      >{{ "< " + $t("back-to-projects") }}</router-link
    >
  </Section>
</template>

<style scoped lang="scss">
.back-to-projects {
  padding: 32px 0;
  text-align: center;
}
</style>
