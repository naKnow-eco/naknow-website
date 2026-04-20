<template>
  <section class="roadmap" id="mission">
    <div class="header">
      <h2>{{ $t("home.roadmap.title") }}</h2>
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
        <svgo-home-bottom filled class="waves" />
        <svgo-home-doted-line filled class="doted-line" />
      </div>
    </div>
  </section>
</template>

<style scoped lang="postcss">
.roadmap {
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  align-items: center;
  min-width: 0;
  overflow-x: hidden;
  @add-mixin section-padding;

  .header {
    @add-mixin container;

    h2 {
      margin: 0;
      text-transform: none;
    }

    .objectives {
      margin-top: 4rem;
      width: 100%;
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 4rem;
      padding: 2rem;

      @add-mixin media tablet {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        align-items: stretch;
        justify-content: space-evenly;
        & > * {
          width: calc(40%);
        }
      }

      @add-mixin media mobile {
        grid-template-columns: 1fr;
      }
    }
  }

  .graph {
    width: 100%;

    img {
      width: 100%;
      height: auto;

      @add-mixin media tablet { scale: 1.1; }
      @add-mixin media mobile { scale: 1.2; }
    }
  }

  .full {
    position: relative;
    display: flex;
    width: 100vw;
    z-index: 1;

    .background {
      position: absolute;
      bottom: 1px;
      right: -6rem;
      height: auto;
      width: 50vw;
      z-index: -1;
    }

    .bottom {
      height: fit-content;
      width: 100vw;
      position: relative;
      bottom: -1rem;
      height: 5rem;
      overflow: hidden;

      svg {
        width: 100%;
        height: auto;
        position: absolute;
        left: 0;
      }

      .waves {
        bottom: 1rem;
      }

      .doted-line {
        bottom: 0;
      }
    }
  }
}
</style>
