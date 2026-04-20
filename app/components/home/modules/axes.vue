<template>
  <section class="axes">
    <h2>{{ $t('home.axes.title') }}</h2>
    <div class="tiles">
      <template v-for="(item, key) in items" :key="key">
        <ui-container-box
          color="white"
          spacing="md"
          shadow-line="blue"
        >
          <h3>{{ $rt(item) }}</h3>
        </ui-container-box>
        <template v-if="key < items.length - 1">
          <svgo-icon-compare-left-right class="arrows" filled />
        </template>
      </template>
    </div>
    <div class="background">
      <nuxt-img src="/img/lens-background.png" alt="Evie S | unsplash.com" />
    </div>
  </section>
</template>

<script lang="ts" setup>
const items = computed(() => $tm('home.axes.values') as string[]);

</script>

<style scoped lang="postcss">
.axes {
  position: relative;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 4rem;
  @add-mixin section-padding;

  h2 {
    align-self: flex-start;
  }

  .tiles {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 4rem;
    padding-left: clamp(0.5rem, 3vw, 2rem);
    padding-right: clamp(0.5rem, 3vw, 2rem);

    h3 {
      text-transform: uppercase;
    }

    .arrows {
      width: 2rem;
      height: 2rem;
    }

    @add-mixin media tablet {
      flex-direction: column;
      align-items: center;
      .arrows { transform: rotate(90deg); }
    }

    @add-mixin media mobile {
      flex-direction: column;
      align-items: center;
      .arrows { transform: rotate(90deg); }
    }
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
