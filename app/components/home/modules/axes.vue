<template>
  <section class="axes">
    <h2>{{ $t('home.axes.title') }}</h2>
    <div class="tiles">
      <ui-container-box
        v-for="(item, key) in $tm('home.axes.values')"
        :key="key"
        color="white"
        spacing="md"
        shadow-line="blue"
      >
        {{ $rt(item) }}
      </ui-container-box>
    </div>
    <div class="background">
      <nuxt-img src="/img/lens-background.png" />
    </div>
  </section>
</template>

<style scoped lang="postcss">
.axes {
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 4rem;
  padding-top: 2rem;
  padding-bottom: 6rem;
  @add-mixin container;

  .tiles {
    display: flex;
    flex-direction: row;
    justify-content: center;
    gap: 4rem;
  }

  .background {
    position: absolute;
    bottom: 0;
    right: 0;
    width: 100%;
    height: auto;
    z-index: -1;

    img {
      width: 100%;
      height: auto;
      transform: translate(30%, 45%);
    }
  }
}
</style>
