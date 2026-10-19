<template>
  <section class="hero" id="about">
    <div class="content">
      <h1 class="title">{{ $t('home.hero.title') }}</h1>
      <svgo-naknow-small class="naknow-small" />
      <p class="description" v-html="$t('home.hero.description')" />
      <div class="links">
        <a class="press-release" href="/NAKNOW_press_release.pdf" download>
          Press release
        </a>
        <span class="separator">|</span>
        <div ref="dropdown" class="dropdown">
          <button
            class="press-release toggle"
            type="button"
            aria-haspopup="true"
            :aria-expanded="documentsOpen"
            aria-controls="association-documents"
            @click="documentsOpen = !documentsOpen"
          >
            <span class="label">naKnow Association</span>
            <span class="caret" :class="{ open: documentsOpen }" aria-hidden="true" />
          </button>          <transition name="dropdown">
            <ul
              v-show="documentsOpen"
              id="association-documents"
              class="documents"
              @click="documentsOpen = false"
            >
              <li v-for="doc in documents" :key="doc.href">
                <a class="document" :href="doc.href" download>{{ doc.label }}</a>
              </li>
            </ul>
          </transition>
        </div>
      </div>
    </div>
    <svgo-home-hero-printed-circuit class="circuit" />
  </section>
</template>

<script setup lang="ts">
const documents = [
  { label: 'Articles of Association', href: '/ArticlesOfTheAssociation.pdf' },
  { label: 'Internal Rules', href: '/InternalRules.pdf' },
  { label: 'Antitrust Compliance Policy', href: '/AntitrustCompliancePolicy.pdf' },
];

const documentsOpen = ref(false);
const dropdown = ref<HTMLElement | null>(null);

const onDocumentClick = (event: MouseEvent) => {
  if (
    documentsOpen.value
    && dropdown.value
    && !dropdown.value.contains(event.target as Node)
  ) {
    documentsOpen.value = false;
  }
};

const onKeydown = (event: KeyboardEvent) => {
  if (event.key === 'Escape') {
    documentsOpen.value = false;
  }
};

onMounted(() => {
  document.addEventListener('click', onDocumentClick);
  document.addEventListener('keydown', onKeydown);
});

onBeforeUnmount(() => {
  document.removeEventListener('click', onDocumentClick);
  document.removeEventListener('keydown', onKeydown);
});
</script>

<style scoped lang="postcss">
.hero {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
  @add-mixin gradient bottom right, 33%;

  .content {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    width: clamp(28rem, 75%, 60rem);
    padding: 6rem;
    gap: 2rem;
    z-index: 1;

    @add-mixin media tablet {
      padding: 4rem;
      padding-top: 6rem;
      padding-bottom: 6rem;
    }
    @add-mixin media mobile {
      padding: 3rem;
      padding-top: 6rem;
      padding-bottom: 6rem;
    }

    .title {
      color: $white-light;
      text-align: start;
      text-transform: uppercase;
    }

    .description {
      color: $white-light;
    }

    .links {
      display: flex;
      align-items: center;
      gap: 0.75rem;
    }

    .separator {
      color: $gold-dark;
    }

    .press-release {
      color: $gold-dark;
      font-weight: 600;
      text-decoration: underline;

      &:hover {
        color: $white-light;
      }
    }

    .dropdown {
      position: relative;
    }

    .toggle {
      display: inline-flex;
      align-items: center;
      gap: 0.5rem;
      padding: 0;
      background: transparent;
      border: none;
      cursor: pointer;
      font: inherit;
      font-weight: 600;
      letter-spacing: inherit;
      text-decoration: none;

      /* text-decoration doesn't propagate into flex items, so the
         underline goes on the text itself rather than the button */
      .label {
        text-decoration: underline;
      }

      &:hover {
        color: $white-light;
      }
    }

    .caret {
      width: 0.5rem;
      height: 0.5rem;
      flex-shrink: 0;
      border-right: 0.125rem solid currentColor;
      border-bottom: 0.125rem solid currentColor;
      transform: rotate(45deg);
      transition: transform 0.2s ease;

      &.open {
        transform: rotate(225deg);
      }
    }

    .documents {
      position: absolute;
      top: calc(100% + 0.75rem);
      left: 0;
      z-index: $z-dropdown;
      display: flex;
      flex-direction: column;
      gap: 0.25rem;
      min-width: 17rem;
      margin: 0;
      padding: 0.875rem 1.25rem;
      list-style: none;
      background-color: $white-light;
      border: 1px solid $gold-dark;
      border-radius: $radius-md;
      box-shadow: 0 0.5rem 1.5rem rgb(0 0 0 / 40%);

      li {
        list-style: none;
      }

      .document {
        display: block;
        padding: 0.375rem 0;
        color: $blue-dark;
        text-decoration: underline;
        white-space: nowrap;

        &:hover {
          color: $gold-dark;
        }
      }
    }

    .naknow-small {
      color: $gold-dark;
      height: 2rem;
      width: auto;
    }
  }

  .circuit {
    position: absolute;
    right: 0;
    bottom: 0;
    height: 100%;
    width: auto;
    color: $blue-light;
  }
}

.dropdown {
  &-enter-active,
  &-leave-active {
    transition: opacity 0.2s ease, transform 0.2s ease;
  }

  &-enter-from,
  &-leave-to {
    opacity: 0;
    transform: translateY(-0.25rem);
  }
}
</style>
