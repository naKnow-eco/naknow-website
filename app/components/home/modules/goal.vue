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
        <nuxt-img src="/img/manufacturing.jpg" alt="Ruan Richard Rodrigues | unsplash.com" />
        <nuxt-img src="/img/circuit.jpg" alt="Anne Nygård | unsplash.com" />
        <nuxt-img src="/img/environment.jpg" alt="Vitaliy Naumenko | unsplash.com" />
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
      <div class="other-points">
        <ui-container-box color="dark" class="tile" spacing="lg"  id="methods">
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
      <ui-icon-lines class="background" color="gold" />
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
  @add-mixin section-padding;

  .open {
    position: relative;
    width: 100%;
    max-width: 80rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2rem;
    padding-left: 0;

    .description-card {
      align-self: flex-start;
      z-index: 1;
    }

    .images {
      position: relative;
      width: 100%;
      top: clamp(-6rem, -6vw, -3rem);
      padding: 0 clamp(0rem, 4vw, 4rem);
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      justify-content: center;
      gap: clamp(1rem, 2vw, 2rem);
      margin-bottom: clamp(-6rem, -6vw, -3rem);

      @add-mixin media lt-SVGA {
        z-index: 1;
      }

      img {
        width: 100%;
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
    padding-left: 0;

    .models {
      position: absolute;
      right: max(calc(14vw - 6rem), 0rem);
      top: clamp(-6rem, -6vw, -3rem);
      width: min(30rem, 90%);
      z-index: 3;

      li {
        list-style-position: outside;
      }
    }

    .goal-points {
      width: 100%;
      display: flex;
      flex-direction: column;
      position: relative;
      height: calc(56rem - 52vw);

      .dataset {
        position: absolute;
        width: clamp(40%, 28rem, 90%);
        z-index: 2;
        top: calc(14rem - 4vw);
        left: $size-padding;

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
      z-index: 2;
    }

    .other-points {
      position: relative;
      align-self: flex-end;
      margin-right: 8vw;
      margin-bottom: 6rem;
      width: clamp(62%, 42rem, 80%);
      margin-top: calc(4rem - 2vw);

      .tile {
        position: absolute;
        max-width: clamp(33%, 18rem, 40%);
        z-index: 3;

        &:nth-child(1) {
          top: calc(4vw - 4rem);
          left: 0;
          transform: translate(-50%, -50%);
        }
        &:nth-child(2) {
          top: calc(4vw - 4rem);
          left: 50%;
          transform: translate(-50%, -50%);
        }
        &:nth-child(3) {
          bottom: calc(4vw - 4rem);
          left: 12%;
          transform: translate(0, 50%);
        }
        &:nth-child(4) {
          bottom: calc(4vw - 4rem);
          right: 0;
          transform: translate(25%, 50%);
        }

        @add-mixin media tablet {
          h3 {
            font-size: 0.875rem;
          }
        }
        @add-mixin media mobile {
          h3 {
            font-size: 0.75rem;
          }
        }
      }
    }

    .arrows {
      width: 100%;
      z-index: -1;
      svg {
        position: absolute;
        width: 100%;
        height: auto;

        &:nth-child(1) {
          position: absolute;
          transform: translateY(-100%);
        }
        &:nth-child(2) {
          position: relative;
          transform: rotate(180deg) scaleY(-1);
        }
      }
    }

    .conclusion {
      width: clamp(33%, 28rem, 100%);
      transform: translateX(calc(10vw - 12.5%));
    }

    .background {
      position: absolute;
      top: -12rem;
      left: 0;
      width: clamp(50%, 28rem, 80%);
      height: calc(100% + 8rem);
      z-index: $z-background;
    }
  }
}
</style>
