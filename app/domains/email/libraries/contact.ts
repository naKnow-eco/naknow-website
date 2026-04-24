import type { ContactEmail } from '@/domains/email';
import { CONTACT_URL } from '../constants/contact';
import { DictionaryLib } from '@/utils/dictionary';

const send = async (values: ContactEmail) => await fetch(CONTACT_URL, {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
  },
  body: JSON.stringify(DictionaryLib.flatten(values, '_')),
})
  .then((res) => {
    if (!res.ok) throw new Error(`Server error ${res.status}: ${res.statusText}`);
    return res.json();
  });

export const ContactLib = {
  send,
};
