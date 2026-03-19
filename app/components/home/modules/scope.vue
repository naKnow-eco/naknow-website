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
      <div class="bottom">
        <svgo-home-bottom filled />
        <svgo-home-doted-line filled />
      </div>
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

    p {
      white-space: pre;
      text-wrap: wrap;
    }
  }

  .more {
    position: relative;
    display: flex;
    padding-top: 2rem;
    height: 50vw;
    width: 100%;
    justify-content: flex-end;
    align-items: center;

    .background {
      position: absolute;
      bottom: 0;
      left: -6rem;
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
      width: calc(100vw - 1rem);
      z-index: -1;

      svg {
        width: 100%;
        height: auto;
      }
    }
  }
  .equipments {
    display: flex;
    width: clamp(60%, 60rem, 100%);
    padding: 1.5rem;
    justify-content: space-between;
    align-items: center;
    gap: 1rem;
    transform: translateY(-60%);
    background-color: $blue-dark;
    border-radius: $radius-3xl;

    svg {
      width: 12%;
      height: auto;
      color: $blue-light;
    }
  }
}
</style>
