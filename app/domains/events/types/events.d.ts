export {};

declare module '@/domains/events' {
  interface Event {
    date: string;
    title: string;
    linkedInUrl: string;
  }
}
