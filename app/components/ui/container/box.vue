<template>
  <div :class="[
    'box',
    `spacing-${spacing}`,
    `border-${border}`,
    { 'shadow-line': shadowLine }
  ]">
    <div :class="[
      'inner-box',
      color,
    ]">
      <slot />
    </div>
    <ui-icon-lines v-if="shadowLine" :class="['shadow-line', shadowLine]" :scale="0.6" />
  </div>
</template>

<script setup lang="ts">
withDefaults(defineProps<{
  color?: 'gold' | 'dark' | 'light' | 'white';
  border?: 'gold' | 'blue';
  spacing?: 'sm' | 'md' | 'lg' | 'xl';
  shadowLine?: 'gold' | 'blue';
}>(), {
  color: 'white',
  spacing: 'md',
});
</script>

<style scoped lang="postcss">
.box {
  position: relative;
  @add-mixin shadow;

  &.spacing-sm {
    border-radius: $radius-sm;
    .inner-box {
      padding: 0.5rem;
      border-radius: $radius-sm;
    }

    .shadow-line {
      top: 0.5rem;
      left: -0.5rem;
    }
  }

  &.spacing-md {
    border-radius: $radius-md;
    .inner-box{
      padding: 1rem;
      border-radius: $radius-md;
    }

    .shadow-line {
      top: 1rem;
      left: -1rem;
    }
  }

  &.spacing-lg {
    border-radius: $radius-lg;
    .inner-box {
      padding: 2rem;
      border-radius: $radius-lg;
      @add-mixin media tablet { padding: 1.75rem; }
      @add-mixin media mobile { padding: 1.5rem; }
    }

    .shadow-line {
      top: 1.5rem;
      left: -1.5rem;
    }
  }

  &.spacing-xl {
    border-radius: $radius-xl;
    .inner-box {
      padding: 4rem;
      border-radius: $radius-xl;
      @add-mixin media tablet { padding: 3rem; }
      @add-mixin media mobile { padding: 2rem; }
    }

    .shadow-line {
      top: 2rem;
      left: -2rem;
    }
  }

  .inner-box {
    &.dark {
      background-color: $blue-dark;
      color: $white-light;
    }

    &.white {
      background-color: $white-light;
      color: $blue-dark;
    }

    &.light {
      background-color: $blue-light;
      color: $white-light;
    }

    &.gold {
      background-color: $gold-light;
      color: $blue-dark;
    }

    &.lined {
      background-color: $white-light;
      border: 1px solid $gold-dark;
      color: $blue-dark;
    }
  }

  &.border-gold {
    .inner-box {
      border: 1px solid $gold-light;
    }
  }

  &.border-blue {
    .inner-box {
      border: 1px solid $blue-light;
    }
  }

  .shadow-line {
    position: absolute;
    width: 100%;
    height: 100%;
    z-index: -1;

    &.gold {
      color: $gold-light;
    }
    &.blue {
      color: $blue-light;
    }
  }
}
</style>
