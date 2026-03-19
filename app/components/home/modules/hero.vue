<template>
  <section class="hero" id="about">
    <div class="content">
      <h1 class="title">{{ $t('home.hero.title') }}</h1>
      <svgo-naknow-small class="naknow-small" />
      <p class="description" v-html="$t('home.hero.description')" />
    </div>
    <svgo-home-hero-printed-circuit class="circuit" />
  </section>
</template>

<style scoped lang="postcss">
.hero {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
  @add-mixin gradient bottom right, 33%;

  .content {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    width: clamp(20rem, 50%, 60rem);
    padding: 6rem;
    gap: 2rem;

    .title {
      color: $white-light;
      text-align: start;
      text-transform: uppercase;
    }

    .description {
      color: $white-light;
    }

    .naknow-small {
      color: $gold-dark;
      height: 2rem;
      width: auto;
    }
  }

  .circuit {
    position: absolute;
    right: 0;
    bottom: 0;
    height: 100%;
    width: auto;
    color: $blue-light;
  }
}
</style>
