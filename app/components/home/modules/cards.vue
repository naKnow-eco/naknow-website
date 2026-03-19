<template>
  <div class="cards">
    <home-components-cards-card
      v-for="(card, key) in $tm('home.cards')"
      :key="key"
      :text="$rt(card)"
      :name="`${key}`"
    />
  </div>
</template>

<style scoped lang="postcss">
.cards {
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: stretch;
  flex-wrap: wrap;
  width: 100%;
  gap: 6rem;
  padding: 0 4rem;

  @add-mixin media mobile {
    padding-top: 3rem;
    flex-direction: column;
    gap: 8rem;
    align-items: center;
  }

  @add-mixin media tablet {

  }
}
</style>
