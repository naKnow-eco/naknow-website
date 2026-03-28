<template>
  <div class="details-wrapper">
    <div class="details">
      <ui-container-box
        class="box-1"
        color="dark"
        spacing="xl"
      >
        <h4>{{ $t('home.scope.details.title') }}</h4>
      </ui-container-box>
      <nuxt-img src="/img/hand.png" alt="Hand with cpu" />
      <div class="background" />
      <ui-container-box
        class="box-2"
        color="white"
        border="gold"
        spacing="xl"
        shadow-line="blue"
      >
        <ul>
          <li v-for="(item, key) in $tm('home.scope.details.values')" :key="key">
            {{ $rt(item) }}
          </li>
        </ul>
      </ui-container-box>
    </div>
  </div>
</template>

<style scoped lang="postcss">
.details-wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 20%;
  box-sizing: content-box;
  padding-top: 4rem;
  padding-bottom: 8rem;
  padding-left: 16rem;
  padding-right: 22rem;
}

.details {
  position: relative;
  width: 100%;
  aspect-ratio: 1 / 1;

  img {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    scale: 1.15;
    transform-origin: bottom left;
    height: auto;
    border-bottom-left-radius: calc($radius-xl / 1.15);
    z-index: 1;
  }

  .background {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: $gray-light;
    z-index: 0;
    border-radius: $radius-xl;
  }

  .box-1.box {
    width: 18rem;
    position: absolute;
    top: 0;
    left: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    transform: translate(-66%, -48%);
    z-index: 1;

    h4 {
      text-transform: uppercase;
      color: $white-light;
    }

    :deep(.inner-box) {
      padding: 2rem;
    }
  }

  .box-2.box {
    position: absolute;
    bottom: 0;
    right: 0;
    width: clamp(20vw, 26rem, 140%);
    display: flex;
    justify-content: center;
    align-items: center;
    transform: translate(90%, 50%);
    z-index: -1;

    :deep(.inner-box) {
      padding: 2rem;
    }
  }
}
</style>
