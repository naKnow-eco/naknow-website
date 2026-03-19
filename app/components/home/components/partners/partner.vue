<template>
  <nuxt-link
    class="partner"
    :href="value.url"
    target="_blank"
    rel="noopener noreferrer"
  >
    <nuxt-img :src="value.logo" :alt="value.name" />
    <p>{{ value.name }}</p>
  </nuxt-link>
</template>

<script setup lang="ts">
import type { Partner } from '@/domains/partners';

withDefaults(defineProps<{
  value: Partner;
}>(), {

});
</script>

<style scoped lang="postcss">
.partner {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  color: $blue-dark;
  text-transform: uppercase;
  align-items: center;
  justify-content: center;

  img {
    width: auto;
    height: 4rem;
    object-fit: contain;
  }
}
</style>
