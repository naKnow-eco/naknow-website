<template>
  <header :class="['header-desktop', { open: opened }]">
    <img class="logo" src="/naknow.svg" alt="naknow logo" />
    <transition-group tag="ul" name="link" class="links">
      <li v-for="link in links" :key="link.href" class="link">
        <navigation-components-page-link :to="link.href" :external="link.external">
          {{ link.name }}
        </navigation-components-page-link>
        <ul v-if="link.subLinks" class="sub-links">
          <li v-for="subLink in link.subLinks" :key="subLink.href" class="sub-link">
            <navigation-components-page-link :to="subLink.href" :external="subLink.external">
              {{ subLink.name }}
            </navigation-components-page-link>
          </li>
        </ul>
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
import { NAV_LINKS } from '@/domains/navigation';

const opened = ref(false);

const links = computed(() => {
  if (!opened.value) return [];
  return NAV_LINKS.map((link) => ({
    ...link,
    name: $t(link.name),
    href: $te(link.href) ? $t(link.href) : link.href,
    subLinks: link.subLinks?.map((subLink) => ({
      ...subLink,
      name: $t(subLink.name),
      href: $te(subLink.href) ? $t(subLink.href) : subLink.href,
    })),
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

  .links {
    flex: 1;
    display: inline-flex;
    flex-direction: row;
    justify-content: flex-end;
    align-items: center;
    gap: 1.5rem;
    padding-right: 1.25rem;
    transition: transform 0.5s ease;
    transform: translateX(1rem);

    .link {
      list-style: none;
      position: relative;

      a {
        @add-mixin media lt-WXGA {
          font-size: 0.875rem;
        }
        @add-mixin media lt-SVGA {
          font-size: 0.75rem;
        }
      }

      .sub-links {
        position: absolute;
        bottom: 0;
        left: 50%;
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 1.5rem;
        padding: 1.5rem;
        background-color: $white-light;
        border-radius: $radius-lg;
        @add-mixin shadow;
        transition: all 0.3s ease 0.15s;
        width: max-content;
        transform: translateY(100%) translateX(-50%);

        .sub-link {
          list-style: none;
        }
      }

      &:not(:hover) {
        .sub-links {
          opacity: 0;
          transform: translateY(calc(100% - 0.5rem)) translateX(-50%);
          pointer-events: none;
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
