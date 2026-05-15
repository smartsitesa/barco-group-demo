window.SmartSiteBotConfig = {
  businessName: 'Barco Group',
  title: 'Barco Group',
  subtitle: 'Corporate enquiry assistant',
  botTitle: 'Group Bot',
  botSubtitle: 'Brand and division routing',
  whatsappNumber: '',
  genericMessage: 'Hi Barco Group, I would like to enquire about the group website or one of the divisions.',
  fallback: 'I am not fully sure about that yet. Would you like to route the enquiry to the right Barco division?',
  emailSubject: 'Barco Group enquiry',
  languages: {
    en: {
      label: 'EN', introMessage: 'Hello 👋 I can help explain the new Barco Group structure, divisions, Barco Assist routing and website launch next steps.', fallback: 'I am not fully sure about that yet. Would you like to route the enquiry to the right division?', inputPlaceholder: 'Ask about Barco Group...', sendLabel: 'Send', backLabel: 'Back to menu', agentLabel: 'Speak to someone', agentPrompt: 'No problem — I can prepare a group enquiry message.', whatsappLabel: 'Prepare enquiry', quickReplies: ['What is Barco Group?', 'Barco Assist', 'Divisions', 'Website launch', 'Contact']
    }
  },
  parameters: [
    { keywords: ['group','barco group','holding','parent'], reply: { en: 'Barco Group is positioned as the premium parent brand for the Barco divisions: a corporate home for credibility, governance, client trust and division routing.' } },
    { keywords: ['assist','barco assist','maintenance','repairs','service'], reply: { en: 'Barco Assist should become the focused service website for maintenance, repairs, property support, inspections and facilities assistance.' } },
    { keywords: ['division','divisions','companies','brands'], reply: { en: 'The group structure can separate corporate trust from service conversion: Barco Group for credibility, Barco Assist for maintenance leads, plus future project/facilities divisions.' } },
    { keywords: ['launch','domain','barcogroup','website'], reply: { en: 'The demo is structured for barcogroup.co.za with Cloudflare-ready security headers, privacy page and clear conversion sections.' } },
    { keywords: ['contact','enquiry','quote'], reply: { en: 'For the production version, we should confirm final phone numbers, WhatsApp routing, email addresses, logo files and approved division names before launch.' } }
  ],
  sitePages: [
    { title: 'Homepage', href: 'index.html' },
    { title: 'Privacy Policy', href: 'privacy.html' }
  ],
  autoUpdateFromSite: true
};
