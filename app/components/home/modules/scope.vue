<template>
  <section class="scope">
    <div class="header">
      <ui-icon-lines />
      <h1>{{ $t('home.scope.title') }}</h1>
      <ui-icon-lines />
    </div>
    <svgo-home-scope-hr class="hr" filled />
    <div class="content">
      <h2>{{ $t('home.scope.knowledge.title') }}</h2>
      <p>{{ $t('home.scope.knowledge.description') }}</p>
    </div>
    <div class="more">
      <home-components-scope-details />
      <svgo-home-scope-background filled class="background" />
      <svgo-home-bottom filled class="background-bottom" />
      <svgo-home-doted-line filled class="separator-bottom" />
    </div>
    <div class="equipments">
      <svgo-home-scope-equipments-optical filled />
      <svgo-home-scope-equipments-display filled />
      <svgo-home-scope-equipments-pcb filled />
      <svgo-home-scope-equipments-hdd filled />
      <svgo-home-scope-equipments-wafer filled />
    </div>
  </section>
</template>

<style scoped lang="postcss">
.scope {
  padding: 3rem 6rem;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  .header {
    display: flex;
    align-items: center;
    gap: 1rem;
    width: 100%;
    justify-content: stretch;

    h1 {
      color: $blue-dark;
      width: 33%;
    }

    .home-lines {
      flex: 1;
      height: 6rem;
      color: $blue-light;
    }
  }

  .hr {
    margin-top: 2rem;
    margin-bottom: 6rem;
    width: 100%;
    height: auto;
  }

  .content {
    display: flex;
    flex-direction: column;
    gap: 2rem;
    align-self: flex-start;
    color: $blue-dark;
    @add-mixin container;

    h2 {
      font-size: $text-2xl;
    }

    p {
      white-space: pre-wrap;
      text-wrap: wrap;
    }
  }

  .more {
    position: relative;
    display: flex;
    padding-top: 2rem;
    padding-bottom: 8rem;
    width: 100%;
    justify-content: center;
    align-items: center;

    .background {
      position: absolute;
      bottom: 0;
      left: -6rem;
      height: auto;
      width: clamp(30rem, 50vw, 60rem);
      z-index: -1;
    }

    .background-bottom {
      position: absolute;
      bottom: -1px;
      left: 50%;
      transform: translateX(-50%);
      height: auto;
      width: 100vw;
      z-index: -1;
    }

    .separator-bottom {
      position: absolute;
      bottom: -1.5rem;
      left: 50%;
      transform: translateX(-50%);
      height: auto;
      width: 100vw;
      z-index: -1;
    }
  }
  .equipments {
    display: flex;
    padding: 1.5rem;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    width: fit-content;
    transform: translateY(-60%);
    gap: 1rem;
    background-color: $blue-dark;
    border-radius: $radius-3xl;

    svg {
      width: max(4rem, 12%);
      height: auto;
      color: $blue-light;
    }
  }
}

</style>
