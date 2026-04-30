<template>
  <header :class="['header-desktop', { open: opened }]">
    <img class="logo" src="/naknow.svg" alt="naknow logo" />
    <transition-group tag="ul" name="link">
      <li v-for="link in links" :key="link.href" class="link">
        <navigation-components-page-link :to="link.href" :external="link.external">
          {{ link.name }}
        </navigation-components-page-link>
      </li>
    </transition-group>
    <span
      class="menu-icon"
      @click="opened = !opened"
    >
      <svgo-navigation-header-menu filled />
    </span>
  </header>
</template>

<script setup lang="ts">
import { NAV_LINKS } from '~/domains/navigation';

const opened = ref(false);

const links = computed(() => {
  if (!opened.value) return [];
  return NAV_LINKS.map((link) => ({
    ...link,
    name: $t(link.name),
    href: $te(link.href) ? $t(link.href) : link.href,
  }));
});
</script>

<style scoped lang="postcss">
.header-desktop {
  height: 5rem;
  background-color: $white-light;
  z-index: $z-header;
  position: sticky;
  top: 0;
  width: 100%;
  padding: 1.5rem 3.5rem;
  display: flex;
  flex-direction: row;
  align-items: center;

  ul {
    flex: 1;
    display: inline-flex;
    flex-direction: row;
    justify-content: flex-end;
    align-items: center;
    gap: 1.5rem;
    padding-right: 1.25rem;
    transition: transform 0.5s ease;
    transform: translateX(1rem);

    li {
      list-style: none;
      a {
        @add-mixin media lt-WXGA {
          font-size: 0.875rem;
        }
        @add-mixin media lt-SVGA {
          font-size: 0.75rem;
        }
      }
    }
  }

  .menu-icon {
    display: inline-flex;
    width: 2rem;
    height: 2rem;
    color: $blue-dark;
    cursor: pointer;
    transition: transform 0.3s ease;

    svg {
      width: 100%;
      height: 100%;
      transform: translateY(0.125rem);
    }

  }

  .logo {
    height: 10rem;
    transform: translateY(2rem);
  }

  &.open {
    ul {
      transform: translateX(0);
    }
    .menu-icon {
      transform: scaleX(-1) translateX(25%);
    }
  }
}

.link {
  &-enter-active,
  &-leave-active {
    transition: all 0.3s ease;
    transition-delay: 0.2s;
  }
  &-enter-from,
  &-leave-to {
    opacity: 0;
  }
}
</style>
