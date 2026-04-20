<template>
  <client-only>
    <nuxt-layout :name="layout" :key="layout">
      <nuxt-page />
    </nuxt-layout>
    <template #fallback>
      <nuxt-layout name="default" key="default">
        <nuxt-page />
      </nuxt-layout>
    </template>
  </client-only>
</template>

<script setup lang="ts">
const device = useDevice();

const layout = computed(() => (device.isMobileOrTablet ? 'mobile' : 'default'));

const {
  t, locale,
} = useI18n();

useSeoMeta({
  title: `naKnow | ${t('home.hero.title')}`,
  ogTitle: `naKnow | ${t('home.hero.title')}`,
  ogLocale: locale,
  description: t('home.hero.description'),
  ogDescription: t('home.hero.description'),
});

</script>
