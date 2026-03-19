<template>
  <div class="layout mobile">
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
  overflow: hidden;

  & > main {
    overflow: hidden;
  }
}
</style>
