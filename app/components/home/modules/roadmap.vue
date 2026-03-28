<template>
  <section class="roadmap" id="mission">
    <div class="header">
      <h2>{{ $t('home.roadmap.title') }}</h2>
      <div class="objectives">
        <home-components-objectives-card
          v-for="(card, key) in $tm('home.roadmap.objectives')"
          :key="key"
          :text="$rt(card)"
          :name="`${key}`"
        />
      </div>
    </div>
    <div class="graph">
      <nuxt-img src="/img/roadmap.png" alt="Roadmap Graph" />
    </div>
    <div class="full">
      <svgo-home-roadmap-background filled class="background" />
      <div class="bottom">
        <svgo-home-bottom filled />
        <svgo-home-doted-line filled />
      </div>
    </div>
  </section>
</template>

<style scoped lang="postcss">
.roadmap {
  display: flex;
  flex-direction: column;
  gap: 2rem;
  align-items: center;
  padding: 3rem 6rem 3rem 6rem;

  .header {
    @add-mixin container;

    h2 {
      margin: 0;
    }

    .objectives {
      margin-top: 4rem;
      width: 100%;
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 4rem;
      padding: 2rem;
    }
  }

  .graph {
    width: 100%;
  }

  .full {
    position: relative;
    display: flex;
    padding-top: 2rem;
    height: 4vw;
    width: 100%;
    z-index: 1;

    .background {
      position: absolute;
      bottom: 0;
      right: -3rem;
      height: auto;
      width: 50vw;
      z-index: -1;
    }
    .bottom {
      position: absolute;
      bottom: 2.2rem;
      left: 50%;
      transform: translate(-50%, 100%);
      height: auto;
      width: 100vw;
      z-index: -1;

      svg {
        width: 100%;
        height: auto;
      }
    }
  }
}

@media (max-width: 800px) {
  .roadmap {
    padding: 2rem;

    .header {
      .objectives {
        grid-template-columns: repeat(2, 1fr);
        gap: 2rem;
        margin-top: 2rem;
        padding: 1rem;
      }
    }

    .full {
      height: 6vw;
    }
  }
}

@media (max-width: 640px) {
  .roadmap {
    padding: 1.5rem 1rem;

    .header {
      .objectives {
        grid-template-columns: 1fr;
        gap: 1.5rem;
        margin-top: 1.5rem;
        padding: 0.5rem;
      }
    }

    .full {
      height: 8vw;

      .background {
        right: -1rem;
        width: 70vw;
      }
    }
  }
}
</style>
