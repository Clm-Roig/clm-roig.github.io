<script setup lang="ts"></script>

<template>
  <div class="timeline">
    <div class="timeline-event">
      <div class="timeline-event__content">
        <p class="timeline-event__year">2016</p>
        <p class="timeline-event__title">
          {{ $t("about.timeline.dut") }}
        </p>
      </div>
    </div>
    <div class="timeline-event">
      <div class="timeline-event__content timeline-event__content--bottom">
        <p class="timeline-event__year">2019</p>
        <p class="timeline-event__title">
          {{ $t("about.timeline.engineer-degree") }}
        </p>
      </div>
    </div>
    <div class="timeline-event">
      <div class="timeline-event__content">
        <p class="timeline-event__year">2019</p>
        <p class="timeline-event__title">
          {{ $t("about.timeline.freelance") }}
        </p>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "../assets/styles/components/timeline.scss";
</style>
