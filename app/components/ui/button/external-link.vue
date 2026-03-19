<template>
  <nuxt-link
    external
    :href="$t(`${translation}.link`)"
    class="external-link"
    target="_blank"
    rel="noopener noreferrer"
  >
    <span>{{$t(`${translation}.text`)}}</span>
    <svgo-icon-external filled />
  </nuxt-link>
</template>

<script setup lang="ts">
withDefaults(defineProps<{
  translation: string;
}>(), {

});
</script>

<style scoped lang="postcss">
.external-link {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;

  .nuxt-icon {
    width: 1rem;
    height: auto;
    margin-bottom: inherit;
  }
}
</style>
