<template>
  <nuxt-layout :name="template">
    <nuxt-page />
  </nuxt-layout>
</template>

<script setup lang="ts">
const { isMobileOrTablet } = useDevice();

const template = computed(() => (isMobileOrTablet ? 'mobile' : 'default'));

const {
  t, locale,
} = useI18n();

useSeoMeta({
  title: t('home.hero.title'),
  ogTitle: t('home.hero.title'),
  ogLocale: locale,
  description: t('home.hero.description'),
  ogDescription: t('home.hero.description'),
});

</script>
