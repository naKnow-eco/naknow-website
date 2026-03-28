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
    <span
      class="menu-icon"
      :class="{ open: opened }"
      @click="opened = !opened"
    >
      <svgo-navigation-header-menu filled />
    </span>
  </header>
</template>

<script setup lang="ts">
const opened = ref(true);

const checkScreenWidth = () => {
  opened.value = window.innerWidth >= 800;
};

onMounted(() => {
  checkScreenWidth();
  window.addEventListener("resize", checkScreenWidth);
});

onUnmounted(() => {
  window.removeEventListener("resize", checkScreenWidth);
});

const links = computed(() =>
  opened.value
    ? [
        {
          name: $t("header.links.contact"),
          href: "#contact",
        },
        {
          name: $t("header.links.methods"),
          href: "#methods",
        },
        {
          name: $t("header.links.outputs"),
          href: "#outputs",
        },
        {
          name: $t("header.links.mission"),
          href: "#mission",
        },
        {
          name: $t("header.links.about"),
          href: "#about",
        },
      ]
    : [],
);
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
    display: inline-flex;
    width: 2rem;
    height: 2rem;
    color: $blue-dark;
    cursor: pointer;
    transition: transform 0.3s ease;

    svg {
      width: 100%;
      height: 100%;
    }

    &.open {
      transform: rotate(180deg);
    }
  }

  .logo {
    height: 10rem;
    transform: translateY(2rem);
  }
}
</style>
