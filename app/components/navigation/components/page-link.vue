<template>
  <nuxt-link
    :to="to"
    :class="['page-link', { active: isPageLink }]"
    :target="external ? '_blank' : undefined"
  >
    <slot />
  </nuxt-link>
</template>

<script setup lang="ts">
const props = withDefaults(defineProps<{
  to: string;
  external?: boolean;
}>(), {

});

const route = useRoute();

const isPageLink = computed(() => {
  if (route.path.replace(/\/$/, '') !== props.to.replace(/\/?#.*$/, '')) return false;
  const hash = props.to.match(/(#.*)$/)?.[1];
  if (!hash) return false;
  return route.hash === hash;
});
</script>

<style scoped lang="postcss">
.page-link {
  color: $blue-dark;

  &.active { color: $gold-dark; }

  &:hover {
    color: $blue-light;
    &.active { color: $gold-light; }
  }
}
</style>
