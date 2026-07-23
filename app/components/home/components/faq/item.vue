<template>
  <div :class="['faq-item', { open: isOpen }]">
    <button
      class="question"
      type="button"
      :aria-expanded="isOpen"
      @click="toggle"
    >
      <span class="text">{{ question }}</span>
      <span class="icon" aria-hidden="true" />
    </button>
    <transition
      name="answer"
      @enter="startTransition"
      @after-enter="endTransition"
      @before-leave="startTransition"
      @after-leave="endTransition"
    >
      <div v-show="isOpen" class="answer-wrapper">
        <div class="answer">
          <p
            v-for="(paragraph, paragraphIndex) in text"
            :key="`p-${paragraphIndex}`"
            class="answer-block"
          >
            {{ $rt(paragraph) }}
          </p>
          <ul v-if="items.length" class="answer-list">
            <li
              v-for="(item, itemIndex) in items"
              :key="`li-${itemIndex}`"
            >
              {{ $rt(item) }}
            </li>
          </ul>
        </div>
      </div>
    </transition>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  question: string;
  text: string[];
  items: string[];
}>();

const isOpen = defineModel<boolean>('open', { default: false });

const toggle = () => {
  isOpen.value = !isOpen.value;
};

const startTransition = (el: Element) => {
  const element = el as HTMLElement;
  element.style.height = `${element.scrollHeight}px`;
};

const endTransition = (el: Element) => {
  const element = el as HTMLElement;
  element.style.height = '';
};
</script>

<style scoped lang="postcss">
.faq-item {
  border-bottom: 1px solid $blue-light;

  .question {
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    gap: 1rem;
    padding: 1.25rem 0;
    background: transparent;
    border: none;
    color: $blue-dark;
    cursor: pointer;
    text-align: start;

    .text {
      @add-mixin font-heading;
      font-size: $text-lg;
      font-weight: 600;
    }

    .icon {
      position: relative;
      width: 1.25rem;
      height: 1.25rem;
      flex-shrink: 0;
      color: $gold-dark;
      transition: transform 0.3s ease;

      &::before,
      &::after {
        content: '';
        position: absolute;
        background-color: currentColor;
        transition: transform 0.3s ease;
      }

      &::before {
        width: 100%;
        height: 0.125rem;
        top: 50%;
        left: 0;
        transform: translateY(-50%);
      }

      &::after {
        width: 0.125rem;
        height: 100%;
        top: 0;
        left: 50%;
        transform: translateX(-50%);
      }
    }

    &:hover {
      color: $blue-light;
    }

    &:focus-visible {
      outline: 2px solid $gold-light;
      outline-offset: 0.25rem;
      border-radius: $radius-sm;
    }
  }

  &.open {
    .question {
      .icon {
        transform: rotate(45deg);
      }
    }
  }

  .answer-wrapper {
    overflow: hidden;
    transition: height 0.3s ease;
  }

  .answer {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    padding-bottom: 1.5rem;

    .answer-block {
      margin: 0;
    }

    .answer-list {
      display: flex;
      flex-direction: column;
      gap: 0.5rem;
      padding-left: 1.5rem;

      li {
        list-style: outside '\2022  ';
      }
    }
  }
}

.answer {
  &-enter-from,
  &-leave-to {
    height: 0 !important;
  }
}
</style>
