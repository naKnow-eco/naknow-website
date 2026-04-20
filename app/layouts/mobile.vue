<template>
  <div class="layout mobile" data-allow-mismatch="class">
    <navigation-modules-header-mobile>
      <slot name="header" />
    </navigation-modules-header-mobile>
    <main>
      <slot />
    </main>
    <navigation-modules-footer>
      <slot name="footer" />
    </navigation-modules-footer>
  </div>
</template>

<style scoped lang="postcss">
.layout {
  display: flex;
  flex-direction: column;
  color: $blue-dark;

  & > main {
    /* overflow: hidden; */
  }
}
</style>
