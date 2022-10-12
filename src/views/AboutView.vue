<script setup lang="ts">
import gravatar from "@/assets/images/gravatar_no_bg.png";
</script>

<template>
  <h2>About me</h2>
  <div class="wrapper">
    <img class="gravatar" :src="gravatar" />
    <p>Hi, I'm Clément Roig!</p>
  </div>
</template>

<style scoped lang="scss">
.gravatar {
  width: 200px;
  height: auto;
}
.wrapper {
  display: flex;
  align-items: center;
  flex-direction: column;
}
</style>
