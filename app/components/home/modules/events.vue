<template>
  <section class="events" id="events">
    <div class="content">
      <h2>{{ $t('home.events.title') }}</h2>

      <div v-if="upcoming.length > 0" class="group">
        <h3>{{ $t('home.events.upcoming') }}</h3>
        <ul class="event-list">
          <li v-for="event in upcoming" :key="event.linkedInUrl" class="event-item">
            <ui-container-box class="event-card" color="white" spacing="md">
              <time :datetime="event.date">{{ formatDate(event.date) }}</time>
              <nuxt-link
                external
                :href="event.linkedInUrl"
                target="_blank"
                rel="noopener noreferrer"
                class="event-link"
              >
                <span>{{ event.title }}</span>
                <svgo-social-linkedin filled class="linkedin-icon" />
              </nuxt-link>
            </ui-container-box>
          </li>
        </ul>
      </div>

      <div v-if="past.length > 0" class="group">
        <h3>{{ $t('home.events.past') }}</h3>
        <ul class="event-list">
          <li v-for="event in past" :key="event.linkedInUrl" class="event-item">
            <ui-container-box class="event-card" color="white" spacing="md">
              <time :datetime="event.date">{{ formatDate(event.date) }}</time>
              <nuxt-link
                external
                :href="event.linkedInUrl"
                target="_blank"
                rel="noopener noreferrer"
                class="event-link"
              >
                <span>{{ event.title }}</span>
                <svgo-social-linkedin filled class="linkedin-icon" />
              </nuxt-link>
            </ui-container-box>
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const { upcoming, past } = useEvents();

const formatDate = (date: string): string =>
  new Date(date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
</script>

<style scoped lang="postcss">
.events {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  @add-mixin section-padding;

  .content {
    @add-mixin container;
    display: flex;
    flex-direction: column;
    gap: 3rem;
  }

  h2 {
    margin: 0;
  }

  .group {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;

    h3 {
      margin: 0;
      font-size: 1.25rem;
    }
  }

  .event-list {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 1.5rem;
    list-style: none;
    padding: 0;
    margin: 0;

    @add-mixin media mobile {
      grid-template-columns: 1fr;
    }
  }

  .event-item {
    display: flex;
  }

  .event-card {
    width: 100%;

    &:deep(.inner-box) {
      display: flex;
      flex-direction: column;
      gap: 0.75rem;
    }

    time {
      font-size: 0.875rem;
      color: $blue-light;
      font-weight: 500;
    }
  }

  .event-link {
    display: inline-flex;
    align-items: flex-start;
    gap: 0.75rem;
    color: $blue-dark;
    text-decoration: none;
    font-weight: 500;

    &:hover {
      text-decoration: underline;
    }

    .linkedin-icon {
      flex-shrink: 0;
      width: 1.25rem;
      height: auto;
      color: $blue-light;
    }
  }
}
</style>
