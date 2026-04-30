<template>
  <header :class="['header-mobile', { open: opened }]">
    <div class="menu">
      <img class="logo" src="/naknow.svg" alt="naknow logo" />
      <span
        class="menu-icon"
        @click="opened = !opened"
      >
        <svgo-navigation-header-menu filled />
      </span>
    </div>
    <transition name="links">
      <div v-if="opened" class="links">
        <ul>
          <li v-for="link in links" :key="link.href" class="link">
            <navigation-components-page-link
              :to="link.href"
              :external="link.external"
              @click.native="opened = false"
            >
              {{ link.name }}
            </navigation-components-page-link>
          </li>
        </ul>
      </div>
    </transition>
  </header>
</template>

<script setup lang="ts">
import { NAV_LINKS } from '~/domains/navigation';

const opened = ref(false);

const links = computed(() => NAV_LINKS.map((link) => ({
  ...link,
  name: $t(link.name),
  href: $te(link.href) ? $t(link.href) : link.href,
})));
</script>

<style scoped lang="postcss">
.header-mobile {
  display: flex;
  flex-direction: column;
  width: 100%;
  z-index: $z-header;
  position: sticky;
  top: 0;
  background-color: $white-light;

  .menu {
    width: 100%;
    height: 5rem;
    padding: 1.5rem 3.5rem;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }

  .links {
    transition: max-height 0.5s ease;
    background-color: $white-light;
    max-height: 20rem;
    overflow: hidden;
    box-sizing: border-box;

    ul {
      width: 100%;
      flex: 1;
      display: inline-flex;
      flex-direction: column;
      align-items: flex-end;
      gap: 1.5rem;
      padding: 1.25rem;
    }

    li {
      list-style: none;
    }
  }

  .menu-icon {
    display: inline-flex;
    width: 2rem;
    height: 2rem;
    color: $blue-dark;
    cursor: pointer;
    transition: transform 0.3s ease;
    transform: rotate(90deg);

    svg {
      width: 100%;
      height: 100%;
      transform: translateY(0.125rem);
    }

  }

  .logo {
    height: 10rem;
    transform: translateY(2rem);
    z-index: 1;
  }

  &.open {
    .menu-icon {
      transform: rotate(90deg) scaleX(-1);
    }
  }
}

.links {
  &-enter-from,
  &-leave-to {
    max-height: 0 !important;
  }
}
</style>
