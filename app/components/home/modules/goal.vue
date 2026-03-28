<template>
  <section class="goal" id="outputs">
    <div class="open">
      <h2>{{ $t("home.goal.title") }}</h2>
      <ui-container-box class="description-card" color="white" spacing="lg">
        <h3>{{ $t("home.goal.open.title") }}</h3>
        <ul>
          <li v-for="(item, key) in $tm('home.goal.open.values')" :key="key">
            {{ $rt(item) }}
          </li>
        </ul>
      </ui-container-box>
      <div class="images">
        <nuxt-img src="/img/manufacturing.jpg" />
        <nuxt-img src="/img/circuit.jpg" />
        <nuxt-img src="/img/environment.jpg" />
      </div>
    </div>
    <div class="content">
      <ui-container-box class="models" color="white" spacing="lg">
        <ul>
          <li v-for="(item, key) in $tm('home.goal.models.values')" :key="key">
            {{ $rt(item) }}
          </li>
        </ul>
      </ui-container-box>
      <div class="goal-points">
        <ui-container-box class="dataset" color="light" spacing="lg">
          <h3>{{ $t("home.goal.dataset.title") }}</h3>
          <ul>
            <li
              v-for="(item, key) in $tm('home.goal.dataset.values')"
              :key="key"
            >
              {{ $rt(item) }}
            </li>
          </ul>
          <div class="links">
            <ui-container-box color="gold">
              <ui-button-external-link
                translation="home.goal.dataset.knowledge"
              />
            </ui-container-box>
            <ui-container-box color="gold">
              <ui-button-external-link
                translation="home.goal.dataset.environmental"
              />
            </ui-container-box>
          </div>
        </ui-container-box>
      </div>
      <svgo-home-goal-earth filled class="earth" />
      <div class="other-points" id="methods">
        <ui-container-box color="dark" class="tile" spacing="lg">
          <h3>{{ $t("home.goal.other.review") }}</h3>
        </ui-container-box>
        <ui-container-box color="dark" class="tile" spacing="lg">
          <h3>{{ $t("home.goal.other.modelling") }}</h3>
        </ui-container-box>
        <ui-container-box color="dark" class="tile" spacing="lg">
          <h3>{{ $t("home.goal.other.analyses") }}</h3>
        </ui-container-box>
        <ui-container-box color="dark" class="tile" spacing="lg">
          <h3>{{ $t("home.goal.other.documentation") }}</h3>
        </ui-container-box>
        <div class="arrows">
          <svgo-home-goal-line-angle filled />
          <svgo-home-goal-line-angle filled />
        </div>
      </div>
      <ui-container-box class="conclusion" color="light" spacing="lg">
        <h3>{{ $t("home.goal.conclusion") }}</h3>
      </ui-container-box>
      <ui-icon-lines class="background" />
    </div>
  </section>
</template>

<style scoped lang="postcss">
.goal {
  width: 100%;
  display: flex;
  position: relative;
  flex-direction: column;
  align-items: center;
  gap: 2rem;

  .open {
    position: relative;
    width: 100%;
    max-width: 80rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2rem;

    .description-card {
      position: absolute;
      left: 0;
      top: 0;
    }

    .images {
      width: 100%;
      padding: 4rem;
      display: grid;
      grid-template-columns: repeat(3, 25%);
      justify-content: center;
      gap: 4rem;

      img {
        border-radius: $radius-lg;
        aspect-ratio: 1 / 1;
        flex-shrink: 1;
        object-fit: cover;
        @add-mixin shadow;
      }
    }
  }

  .content {
    position: relative;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2rem;

    .models {
      position: absolute;
      right: 14rem;
      top: -10rem;
      width: 26rem;
      z-index: 2;

      li {
        list-style-position: outside;
      }
    }

    .goal-points {
      width: 100%;
      display: flex;
      flex-direction: column;
      position: relative;

      .dataset {
        position: absolute;
        width: 40%;
        z-index: 0;
        top: 0;
        left: 8rem;

        h3 {
          color: $white-light;
        }

        .links {
          position: absolute;
          bottom: -2rem;
          left: 0rem;
          display: flex;
          flex-direction: column;
          gap: 1rem;
          transform: translateY(100%);
        }
      }
    }

    .earth {
      align-self: flex-end;
      width: 60%;
      height: auto;
      z-index: 1;
    }

    .other-points {
      position: relative;
      width: 100%;
      height: 26rem;
      margin-top: -2rem;

      .tile {
        position: absolute;
        width: 20%;
        container-type: inline-size;

        h3 {
          height: 5rem;
          color: $white-light;
          text-align: center;
          display: flex;
          justify-content: center;
          align-items: center;
          font-size: clamp(1rem, 5cqi, 1.75rem);
          line-height: 1.3;
          margin: 0;
          padding: 0.5rem;
        }
        @add-mixin shadow;

        &:nth-child(1) {
          top: 0;
          left: calc(50% - 6rem);
        }
        &:nth-child(2) {
          top: 0;
          left: calc(50% - 12rem);
          transform: translateX(-100%);
        }
        &:nth-child(3) {
          top: 14rem;
          left: calc(22% + 6rem);
        }
        &:nth-child(4) {
          top: 14rem;
          right: 12rem;
        }
      }
    }

    .arrows {
      position: absolute;
      top: 0;
      left: 25%;
      width: 62%;
      z-index: -1;
      svg {
        position: absolute;
        width: 100%;
        height: auto;

        &:nth-child(1) {
          transform: translate(0, -40%);
        }
        &:nth-child(2) {
          transform: translate(0, 80%) rotate(180deg) scaleY(-1);
        }
      }
    }

    .conclusion {
      width: 28rem;
      transform: translateX(20%);
    }

    .background {
      position: absolute;
      top: -12rem;
      left: 0;
      width: 50%;
      height: calc(100% + 8rem);
      z-index: $z-background;
    }
  }
}
</style>
