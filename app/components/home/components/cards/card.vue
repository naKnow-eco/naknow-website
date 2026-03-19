<template>
  <div class="card-wrapper">
    <div class="foreground card">
      <h3>{{ text }}</h3>
    </div>
    <div class="middleground card">
      <component :is="`svgo-home-cards-${name}`" alt="Card Image" />
    </div>
    <div class="background card" />
  </div>
</template>

<script setup lang="ts">
defineProps<{
  text: string;
  name: string;
}>();
</script>

<style scoped lang="postcss">
.card-wrapper {
  display: flex;
  position: relative;
  aspect-ratio: 16 / 9;
  width: 18rem;
  z-index: $z-base;

  .card {
    position: absolute;
    overflow: hidden;
    border-radius: $radius-lg;
    inset: 0;
    display: flex;
    justify-content: flex-end;
    align-items: flex-end;
    @add-mixin transition-bounce 0.6s, 1.1;

    &.background {
      background-color: $gray-light;
      z-index: -1;
    }

    h3 {
      color: $blue-dark;
    }

    &.middleground {
      background-color: $blue-dark;
      z-index: 0;

      svg {
        width: auto;
        height: 100%;
        color: $blue-light;
      }
    }

    &.foreground {
      background-color: $white-light;
      text-wrap: wrap;
      text-align: end;
      z-index: 1;
      padding: 1rem;
      @add-mixin shadow;
      text-transform: uppercase;
    }
  }

  &:hover, .layout.mobile & {
    .background { transform: translate(-1rem, -1rem); }
    .middleground { transform: translate(2rem, 2rem); }
    .foreground { transform: translate(4rem, -3rem); }
  }
}
</style>
