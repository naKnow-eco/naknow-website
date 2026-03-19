import type { UiInputField } from '#components';

export {};

declare module '@/domains/email' {
  interface ContactEmail {
    personal: {
      name: string | null;
      email: string | null;
      phone: string | null;
    };
    company: {
      name: string | null;
      sector: string | null;
      title: string | null;
    };
    request: {
      requirement: string | null;
      subject: string | null;
      message: string | null;
    };
  }

  type ContactEmailRef = MapDeep<ContactEmail, InstanceType<typeof UiInputField> | null>;
}
