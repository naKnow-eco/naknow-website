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
  width: 100%;
  padding-top: 12rem;
  padding-bottom: 16rem;
}

.details {
  position: relative;
  width: clamp(16rem, 25vw, 26rem);
  aspect-ratio: 1 / 1;
  transform: translateX(22%);

  img {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    scale: 0.9;
    transform-origin: bottom left;
    height: auto;
    border-bottom-left-radius: calc($radius-xl / 1.08);
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
    width: clamp(16rem, 33vw, 26rem);
    position: absolute;
    top: 2vw;
    left: 3vw;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    transform: translate(-67.5%, -75%);
    z-index: 1;
    container-type: inline-size;

    h4 {
      text-transform: uppercase;
      color: $white-light;
      line-height: 1.3;
      text-align: end;
      margin: 0;
    }
  }

  .box-2.box {
    position: absolute;
    bottom: 0;
    right: 0;
    width: clamp(16rem, 33vw, 26rem);
    display: flex;
    justify-content: center;
    align-items: center;
    transform: translate(90%, 50%);
    z-index: -1;
    container-type: inline-size;

    ul {
      list-style-position: inside;
      padding: 0;
      margin: 0;
    }
  }

  @add-mixin media tablet {
    .box-2.box {
      transform: translate(50%, 90%);
    }
  }

  @add-mixin media mobile {
    .box-2.box {
      transform: translate(6vw, 90%);

      &:deep(.shadow-line) {
        top: -2rem;
        right: -1rem;
        left: inherit;
      }
    }
  }
}
</style>
