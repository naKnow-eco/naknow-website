<template>
  <section class="contact">
    <div class="header">
      <h2>{{ $t('home.contact.title') }}</h2>
      <p>{{ $t('home.contact.description') }}</p>
    </div>
    <ui-container-box color="white" class="contact-form" id="contact" spacing="xl">
      <form @submit.prevent="submit">
        <div class="personal">
          <h3>{{ $t('home.contact.form.personal.title') }}</h3>

          <ui-input-field
            :ref="(el) => form.personal!.name = el as any"
            translation="home.contact.form.personal.name"
            id="contact-personal-name"
            type="text"
            required
          />

          <ui-input-field
            :ref="(el) => form.personal!.phone = el as any"
            translation="home.contact.form.personal.phone"
            id="contact-personal-phone"
            type="tel"
            required
          />

          <ui-input-field
            :ref="(el) => form.personal!.email = el as any"
            translation="home.contact.form.personal.email"
            id="contact-personal-email"
            type="email"
            required
          />
        </div>
        <div class="company">
          <h3>{{ $t('home.contact.form.company.title') }}</h3>

          <ui-input-field
            :ref="(el) => form.company!.sector = el as any"
            translation="home.contact.form.company.sector"
            id="contact-company-sector"
            type="text"
            required
          />

          <ui-input-field
            :ref="(el) => form.company!.name = el as any"
            translation="home.contact.form.company.name"
            id="contact-company-name"
            type="text"
            required
          />

          <ui-input-field
            :ref="(el) => form.company!.title = el as any"
            translation="home.contact.form.company.yourTitle"
            id="contact-company-title"
            type="text"
            required
          />
        </div>
        <div class="request">
          <h3>{{ $t('home.contact.form.request.title') }}</h3>

          <ui-input-field
            :ref="(el) => form.request!.requirement = el as any"
            translation="home.contact.form.request.requirement"
            id="contact-request-requirement"
            type="text"
          />

          <ui-input-field
            :ref="(el) => form.request!.subject = el as any"
            translation="home.contact.form.request.subject"
            id="contact-request-subject"
            type="text"
            required
          />

          <ui-input-field
            :ref="(el) => form.request!.message = el as any"
            translation="home.contact.form.request.message"
            id="contact-request-message"
            type="textarea"
            required
          />
        </div>
        <button class="submit" type="submit">Send</button>
      </form>
    </ui-container-box>
  </section>
</template>

<script setup lang="ts">
import {
  ContactLib,
  type ContactEmail,
  type ContactEmailRef,
} from '@/domains/email';

import { MapLib } from '@/utils/dictionary';

const form = reactive<ContactEmailRef>({
  personal: {
    name: null,
    phone: null,
    email: null,
  },
  company: {
    sector: null,
    name: null,
    title: null,
  },
  request: {
    requirement: null,
    subject: null,
    message: null,
  },
});

const submit = () => {
  Object.values(form).forEach((section) => {
    Object.values(section).forEach((field) => {
      field?.checkStatus();
    });
  });

  if (!Object.values(form)
    .every((section) => Object.values(section)
      .every((field) => field?.isValid))
  ) return;

  const values = MapLib.values(form,
    (section) => MapLib.values(section,
      (field) => (field?.value ?? null))) as ContactEmail;

  ContactLib.send(values);
};
</script>

<style scoped lang="postcss">
.contact {
  position: relative;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 2rem;

  @add-mixin container;

  .header {
    position: sticky;
    top: 6rem;
    display: flex;
    flex-direction: column;
    align-self: flex-start;
    gap: 1rem;
    padding-top: 6rem;
    padding-bottom: 4rem;
    width: 24rem;
  }

  .contact-form {
    flex: 1;
    position: relative;
    top: 6rem;
    z-index: 1;

    form {
      display: grid;
      gap: 4rem;
      grid-template-columns: repeat(2, 1fr);

      div {
        display: flex;
        flex-direction: column;
        gap: 1rem;

        h3 {
          text-transform: uppercase;
        }
      }

      .request {
        grid-column: span 2;
      }

      .submit {
        justify-self: flex-start;
        padding: 0.5rem 1rem;
        background-color: $blue-dark;
        color: $white-light;
        border-radius: $radius-lg;
        @add-mixin shadow;

        @add-mixin transition-bounce 0.4s, 1.1;
        transition-property: all;

        &:hover {
          background-color: $blue-light;
          color: $blue-dark;
          scale: 1.05;
        }
        &:focus {
          outline-color: $gold-light;
          scale: 1.05;
        }
      }
    }
  }
}
</style>