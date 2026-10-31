import { ContactDetails } from './types';

/**
 * RULE 6: Updating social links or contact details requires editing ONLY this file (/src/data/contact.ts).
 * All URLs and contact numbers match Ashutosh Gautam's verified resume credentials.
 */
export const CONTACT_DATA: ContactDetails = {
  email: 'ashugoutam007@gmail.com',
  phone: '+91 7566282475',
  phoneHref: '+917566282475',
  location: 'Vadodara / Rajkot / Satna, India',
  socialLinks: [
    {
      id: 'linkedin',
      platform: 'LinkedIn',
      label: 'Connect on LinkedIn',
      url: 'https://www.linkedin.com/in/ashutosh-gautam-960a19253/',
      handle: 'in/ashutosh-gautam-960a19253',
      primary: true,
    },
    {
      id: 'github',
      platform: 'GitHub',
      label: 'View GitHub Repositories',
      url: 'https://github.com/Ashu29y',
      handle: 'github.com/Ashu29y',
      primary: true,
    },
    {
      id: 'ijtsrd-paper',
      platform: 'Published Research',
      label: 'IJTSRD Journal Paper (PDF)',
      url: 'https://www.ijtsrd.com/papers/ijtsrd99889.pdf',
      handle: 'IJTSRD Vol. 9 Issue 6',
      primary: false,
    },
  ],
};
