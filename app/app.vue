<template>
  <nuxt-layout :name="template">
    <nuxt-page />
  </nuxt-layout>
</template>

<script setup lang="ts">
const { isMobileOrTablet } = useDevice();

const template = computed(() => (isMobileOrTablet ? 'mobile' : 'default'));
</script>
