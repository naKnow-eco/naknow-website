<template>
  <section class="partners">
    <h2>{{ $t('home.partners.title') }}</h2>
    <div class="tiles">
      <home-components-partners-partner
        v-for="(partner, key) in PARTNERS"
        :key="key"
        :value="partner"
      />
    </div>
    <div class="bottom">
      <svgo-home-bottom filled />
      <svgo-home-doted-line filled />
      <ui-container-box color="white" class="france-2030" spacing="lg">
        <svgo-naknow-full filled />
        <p>{{ $t('home.partners.france2030') }}</p>
        <svgo-home-partners-france-2030 filled />
      </ui-container-box>
    </div>
  </section>
</template>

<script setup lang="ts">
import { PARTNERS } from '@/domains/partners';
</script>

<style scoped lang="postcss">
.partners {
  display: flex;
  flex-direction: column;
  gap: 2rem;
  align-items: center;

  @add-mixin container;

  .tiles {
    padding: 2rem;
    display: flex;
    flex-wrap: wrap;
    gap: 4rem 8rem;
    justify-content: center;
    align-items: stretch;
  }

  .bottom {
    width: calc(100vw - 1rem);
    position: relative;

    svg {
      width: 100%;
      height: auto;
    }

    .france-2030 {
      position: absolute;
      display: flex;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      height: 10rem;

      &:deep(.inner-box) {
        display: flex;
        gap: 1rem;
        flex-direction: row;
        align-items: center;
      }

      svg {
        height: 100%;
        width: auto;
      };
    }
  }
}
</style>
