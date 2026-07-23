import { EVENTS } from '@/domains/events';

export const useEvents = () => {
  const today = new Date();

  const upcoming = computed(() =>
    EVENTS
      .filter(event => new Date(event.date) >= today)
      .sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime()),
  );

  const past = computed(() =>
    EVENTS
      .filter(event => new Date(event.date) < today)
      .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()),
  );

  return { upcoming, past };
};
