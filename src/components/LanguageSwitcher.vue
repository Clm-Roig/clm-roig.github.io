<script setup lang="ts">
defineProps<{
  withLegend?: boolean;
}>();
</script>

<template>
  <div class="switcher">
    <p v-if="withLegend" class="switcher__legend">
      {{ $t("change-language:") }}
    </p>
    <select v-model="$i18n.locale" class="switcher__select">
      <option
        v-for="locale in $i18n.availableLocales"
        :key="`locale-${locale}`"
        :value="locale"
      >
        {{ locale }}
      </option>
    </select>
  </div>
</template>

<style scoped lang="scss">
.switcher {
  align-items: baseline;
  display: flex;
  justify-content: center;
  &__legend {
    display: inline;
    font-size: 80%;
    margin-right: 8px;
  }
  &__select {
    border: none;
  }
}
</style>
