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
  padding: 12rem 0 12rem 0;
}

.details {
  position: relative;
  width: clamp(16rem, 25vw, 26rem);
  aspect-ratio: 1 / 1;

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
    width: clamp(14rem, 18vw, 18rem);
    position: absolute;
    top: 0;
    left: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    transform: translate(-66%, -48%);
    z-index: 1;
    container-type: inline-size;

    h4 {
      text-transform: uppercase;
      color: $white-light;
      font-size: clamp(1rem, 6cqw, 1.5rem);
      line-height: 1.3;
      margin: 0;
    }

    :deep(.inner-box) {
      padding: 1rem;
    }
  }

  .box-2.box {
    position: absolute;
    bottom: 0;
    right: 0;
    width: clamp(16rem, 22vw, 26rem);
    display: flex;
    justify-content: center;
    align-items: center;
    transform: translate(90%, 50%);
    z-index: 2;
    container-type: inline-size;

    ul {
      list-style-position: inside;
      padding: 0;
      margin: 0;
    }

    li {
      font-size: clamp(1rem, 5cqw, 1.25rem);
      line-height: 1.4;
    }

    :deep(.inner-box) {
      padding: 1rem;
    }
  }
}

@media (max-width: 800px) {
  .details-wrapper {
    padding: 6rem 0;
    min-height: 60vh;
  }

  .details {
    .box-1.box {
      transform: translate(-50%, -30%);
    }

    .box-2.box {
      transform: translate(50%, 60%);
    }
  }
}

@media (max-width: 640px), :global(.mobile) .details-wrapper {
  padding: 8rem 1rem;
  min-height: auto;
}

@media (max-width: 640px), :global(.mobile) .details-wrapper .details {
  width: 100%;
  aspect-ratio: auto;
  min-height: 50vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;

  img {
    position: relative;
    width: 60%;
    scale: 1;
    transform: none;
  }

  .background {
    display: none;
  }

  .box-1.box {
    position: relative;
    transform: none;
    width: 90%;
    top: auto;
    left: auto;
  }

  .box-2.box {
    position: relative;
    transform: none;
    width: 90%;
    bottom: auto;
    right: auto;
  }
}
</style>
