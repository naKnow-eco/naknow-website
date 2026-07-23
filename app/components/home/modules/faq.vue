<template>
  <section class="faq" id="faq">
    <div class="header">
      <h2>{{ $t('faq.title') }}</h2>
    </div>

    <ui-container-box color="white" class="faq-card" spacing="lg">
      <div
        v-for="(section, sectionIndex) in $tm('faq.sections')"
        :key="sectionIndex"
        class="section"
      >
        <h3 class="section-title">{{ $rt(section.title) }}</h3>
        <home-components-faq-item
          v-for="(question, questionIndex) in section.questions"
          :key="questionIndex"
          :question="$rt(question.question)"
          :text="question.answer.text || []"
          :items="question.answer.items || []"
        />
      </div>
    </ui-container-box>
  </section>
</template>

<script setup lang="ts">
// FAQ content is loaded through vue-i18n $tm/$rt, matching the rest of the site.
</script>

<style scoped lang="postcss">
.faq {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
  @add-mixin section-padding;

  .header {
    width: 100%;
    max-width: 80rem;
    display: flex;
    flex-direction: column;
    gap: 0.5rem;

    h2 {
      width: 100%;
      text-align: start;
    }
  }

  .faq-card {
    width: 100%;
    max-width: 80rem;
    display: flex;
    flex-direction: column;
    gap: 3rem;

    .section {
      display: flex;
      flex-direction: column;
      gap: 0.5rem;

      .section-title {
        color: $gold-dark;
        text-transform: uppercase;
        margin-top: 2rem;
        margin-bottom: 0.5rem;
      }
    }
  }
}
</style>
