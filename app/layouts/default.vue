<template>
  <div class="layout">
    <navigation-modules-header>
      <slot name="header" />
    </navigation-modules-header>
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
    overflow-x: hidden;
  }
}
</style>
