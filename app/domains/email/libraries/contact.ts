import type { ContactEmail } from '@/domains/email';
import { EMAIL_TO } from '../constants/contact';

// eslint-disable-next-line complexity
const send = (values: ContactEmail) => {
  const mailtoLink = `mailto:${
    EMAIL_TO
  }?subject=${
    encodeURIComponent(`Contact Request from ${values.personal.name || 'Unknown'}`)
  }&body=${
    encodeURIComponent(`
    Name: ${values.personal.name || 'N/A'}
    Email: ${values.personal.email || 'N/A'}
    Phone: ${values.personal.phone || 'N/A'}
    
    Company: ${values.company.name || 'N/A'}
    Sector: ${values.company.sector || 'N/A'}
    Title: ${values.company.title || 'N/A'}
    
    Requirement: ${values.request.requirement || 'N/A'}
    Subject: ${values.request.subject || 'N/A'}

    Message: ${values.request.message || 'N/A'}
  `)
  }`;

  const link = document.createElement('a');
  link.href = mailtoLink;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};

export const ContactLib = {
  send,
};
