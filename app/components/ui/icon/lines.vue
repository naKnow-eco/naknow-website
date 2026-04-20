<template>
  <div class="home-lines">
    <svgo-home-lines :class="`background-lines ${color}`" filled :style="{
      scale
    }" />
  </div>
</template>

<script setup lang="ts">
withDefaults(defineProps<{
  color?: 'gold' | 'blue';
  scale?: number;
}>(), {
  color: 'gold',
  scale: 1,
});
</script>

<style scoped lang="postcss">
.home-lines {
  overflow: hidden;

  svg {
    height: 3317px;
    width: 2763px;
    transform-origin: top left;

    &.gold { color: $gold-light; }
    &.blue { color: $blue-light; }
  }
}
</style>
