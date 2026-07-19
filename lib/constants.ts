// All company-wide details live here. Edit this one file to update
// phone number, email, or WhatsApp link across the entire website.

export const COMPANY = {
  name: 'Indus Valley Foods',
  owner: 'Sagheer Ahmed',
  location: 'Karachi, Pakistan',
  locationDetail: 'Sourced & Shipped from Karachi, Pakistan',
  phoneDisplay: '+92 312 3059907',
  phoneHref: 'tel:+923123059907',
  whatsappNumber: '923123059907',
  get whatsappHref() {
    return `https://wa.me/${this.whatsappNumber}`;
  },
  whatsappHrefWithText: (text: string) =>
    `https://wa.me/923123059907?text=${encodeURIComponent(text)}`,
  email: 'indusvalleyfoods.pk@gmail.com',
  get emailHref() {
    return `mailto:${this.email}`;
  },
  emailHrefWithSubject: (subject: string) =>
    `mailto:indusvalleyfoods.pk@gmail.com?subject=${encodeURIComponent(subject)}`,
};

export const NAV_LINKS = [
  { label: 'Home', href: '#home' },
  { label: 'Products', href: '#products' },
  { label: 'About', href: '#about' },
  { label: 'Process', href: '#process' },
  { label: 'Catalog', href: '/catalog' },
  { label: 'Contact', href: '#contact' },
];
