<template>
  <header>
    <img class="logo" src="/naknow.svg" alt="naknow logo" />
    <transition-group tag="ul" name="link">
      <li v-for="link in links" :key="link.href" class="link">
        <navigation-components-page-link :to="link.href">
          {{ link.name }}
        </navigation-components-page-link>
      </li>
    </transition-group>
    <svgo-navigation-header-menu
      class="menu-icon"
      filled
      @click="opened = !opened"
    />
  </header>
</template>

<script setup lang="ts">
const opened = ref(false);

const links = computed(() => (opened.value
  ? [
    {
      name: $t('header.links.contact'),
      href: '#contact',
    },
    {
      name: $t('header.links.methods'),
      href: '#methods',
    },
    {
      name: $t('header.links.outputs'),
      href: '#outputs',
    },
    {
      name: $t('header.links.mission'),
      href: '#mission',
    },
    {
      name: $t('header.links.about'),
      href: '#about',
    },
  ]
  : []));
</script>

<style scoped lang="postcss">
header {
  height: 5rem;
  background-color: $white-light;
  z-index: $z-header;
  position: sticky;
  top: 0;
  padding: 1.5rem 3.5rem;
  display: flex;
  flex-direction: row;
  align-items: center;

  ul {
    flex: 1;
    display: inline-flex;
    flex-direction: row-reverse;
    align-items: center;
    gap: 1.5rem;
    padding-right: 1.25rem;

    li {
      list-style: none;
    }
  }

  .menu-icon {
    width: 2rem;
    height: 2rem;
    color: $blue-dark;
    cursor: pointer;
    transform: translateY(0.125rem);
  }

  .logo {
    height: 10rem;
    transform: translateY(2rem);
  }
}
</style>
