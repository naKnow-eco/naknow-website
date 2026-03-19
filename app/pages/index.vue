<template>
  <div class="page">
    <home-modules-hero />
    <home-modules-cards />
    <home-modules-scope />
    <div class="protect-overflow">
      <home-modules-roadmap />
      <home-modules-goal />
      <home-modules-axes />
    </div>
    <home-modules-partners />
    <home-modules-contact />
  </div>
</template>

<style scoped lang="postcss" >
.page {
  @add-mixin page;

  .protect-overflow {
    @add-mixin page;
     overflow: hidden;
  }
}
</style>
