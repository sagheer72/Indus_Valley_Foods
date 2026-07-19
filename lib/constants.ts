// All company-wide details live here. Edit this one file to update
// phone number, email, or WhatsApp link across the entire website.

export const COMPANY = {
  name: 'Indus Valley Foods',
  owner: 'Sagheer Ahmed',
  location: 'Karachi, Pakistan',
  locationDetail: 'Near Karachi Port & Port Qasim',
  phoneDisplay: '+92 308 2080455',
  phoneHref: 'tel:+923082080455',
  whatsappNumber: '923082080455',
  get whatsappHref() {
    return `https://wa.me/${this.whatsappNumber}`;
  },
  whatsappHrefWithText: (text: string) =>
    `https://wa.me/923082080455?text=${encodeURIComponent(text)}`,
  email: 'sagheerahmed123465@gmail.com',
  get emailHref() {
    return `mailto:${this.email}`;
  },
  emailHrefWithSubject: (subject: string) =>
    `mailto:sagheerahmed123465@gmail.com?subject=${encodeURIComponent(subject)}`,
};

export const NAV_LINKS = [
  { label: 'Home', href: '#home' },
  { label: 'Products', href: '#products' },
  { label: 'Export Process', href: '#process' },
  { label: 'Quality', href: '#quality' },
  { label: 'Catalog', href: '/catalog' },
  { label: 'Contact', href: '#contact' },
];
