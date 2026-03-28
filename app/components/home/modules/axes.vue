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
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 4rem;
  padding-top: 2rem;
  padding-bottom: 6rem;
  padding-left: 6rem;

  h2 {
    align-self: flex-start;
  }

  .tiles {
    display: flex;
    flex-direction: row;
    justify-content: center;
    gap: 4rem;
    padding-left: clamp(0.5rem, 3vw, 2rem);
    padding-right: clamp(0.5rem, 3vw, 2rem);
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

@media (max-width: 800px) {
  .axes {
    padding-left: 3rem;
    padding-right: 2rem;
    padding-top: 1.5rem;
    padding-bottom: 4rem;
    gap: 2rem;

    .tiles {
      flex-wrap: wrap;
      gap: 2rem;
    }
  }
}

@media (max-width: 640px) {
  .axes {
    padding: 1.5rem 1rem;
    gap: 1.5rem;

    h2 {
      font-size: $text-lg;
    }

    .tiles {
      flex-direction: column;
      align-items: center;
      gap: 1rem;
      padding-left: 0;
      padding-right: 0;
    }

    .background {
      display: none;
    }
  }
}
</style>
