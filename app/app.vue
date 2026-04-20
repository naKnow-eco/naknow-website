<template>
  <nuxt-layout :name="template">
    <nuxt-page />
  </nuxt-layout>
</template>

<script setup lang="ts">
const device = useDevice();

const getTemplateName = () => (device.isMobileOrTablet ? 'mobile' : 'default');

const template = ref<'mobile' | 'default'>(getTemplateName());

onMounted(() => {
  template.value = getTemplateName();
});

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
