<template>
  <ui-container-box class="objective" color="white" shadow-line="blue">
    <h3 class="text">{{ text }}</h3>
    <div class="image">
      <component :is="`svgo-home-objectives-${name}`" alt="Card Image" />
    </div>
  </ui-container-box>
</template>

<script setup lang="ts">
defineProps<{
  text: string;
  name: string;
}>();
</script>

<style scoped lang="postcss">
.objective {
  display: flex;
  position: relative;
  flex-shrink: 1;

  .text {
    width: 100%;
    padding: 1rem 1rem 1rem 3rem;
    font-weight: 400;
  }

  .image {
    position: absolute;
    top: 0;
    left: 0;
    transform: translate(-1rem, -1rem);
    width: 4rem;
    height: 4rem;

    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0.5rem;
    z-index: 1;
    svg {
      color: $white-light;
      width: 100%;
      height: 100%;
    }

    &::after {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: $blue-dark;
      border-radius: $radius-lg;
      z-index: -1;
    }

    &::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: $blue-light;
      border-radius: $radius-lg;
      transform: translate(-0.5rem, -0.5rem);
      z-index: -1;
    }
  }

}
</style>
