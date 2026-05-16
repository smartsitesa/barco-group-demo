window.SmartSiteBotConfig = {
  businessName: 'Barco Group',
  title: 'Barco Group',
  subtitle: 'Facilities enquiry assistant',
  botTitle: 'Barco Group Assistant',
  botSubtitle: 'Maintenance and portfolio support',
  whatsappNumber: '', // Add approved Barco WhatsApp number before enabling direct WhatsApp routing.
  contactUrl: 'https://barcoassist.co.za/contact_us',
  genericMessage: 'Hi Barco Group, I would like to enquire about facilities management or property maintenance support. Service/property type: Location: Urgency: Name: Contact:',
  fallback: 'I am not fully sure about that yet. Would you like to send a facilities enquiry to the Barco team?',
  emailSubject: 'Barco Group enquiry',
  languages: {
    en: {
      label: 'EN',
      introMessage: 'Hello 👋 I can help with Barco Group, Barco Assist, maintenance services, client sectors and quote enquiries. For a quote, include service/property type, location, urgency and contact details.',
      fallback: 'I am not fully sure about that yet. Would you like to route your enquiry to the Barco team?',
      inputPlaceholder: 'Ask about Barco Group...',
      sendLabel: 'Send',
      backLabel: 'Back to menu',
      agentLabel: 'Speak to someone',
      agentPrompt: 'No problem — I can prepare a maintenance quote enquiry with service/property type, location, urgency and your contact details.',
      whatsappLabel: 'Prepare enquiry',
      quickReplies: ['What does Barco do?', 'Maintenance services', 'Client sectors', 'COC services', 'Quote details', 'Contact']
    }
  },
  parameters: [
    { keywords: ['what','group','barco group','who'], reply: { en: 'Barco Group is the home of Barco Assist, a facilities management and property maintenance division focused on asset longevity, operational efficiency and real-time reporting.' } },
    { keywords: ['assist','barco assist','maintenance','repairs','service','services'], reply: { en: 'Barco Assist provides commercial maintenance, retail maintenance, student accommodation maintenance, holistic building maintenance and full Certificate of Compliance support.' } },
    { keywords: ['sector','sectors','clients','portfolio','facility manager','landlord','body corporate','retail'], reply: { en: 'Barco works with facility managers, retail portfolios, private landlords and body corporates across commercial, retail and residential property environments.' } },
    { keywords: ['coc','certificate','compliance'], reply: { en: 'Barco Assist lists full Certificate of Compliance services as one of its core focus areas, supporting property stakeholders with compliance-led maintenance needs.' } },
    { keywords: ['quote details','quote','maintenance quote','request quote'], reply: { en: 'For a useful maintenance quote, include your name, company, phone/email, property location, property type, service needed and urgency. The site routes quote requests through the Barco Assist contact form until direct WhatsApp/email details are confirmed.' }, links: [{ label: 'Open quote form', href: 'https://barcoassist.co.za/contact_us' }] },
    { keywords: ['contact','address','office','enquiry'], reply: { en: 'The public office address is 66A Section St, Paarden Eiland, Cape Town, 7405. Direct phone, WhatsApp and email details still need client confirmation; use the quote form for now.' }, links: [{ label: 'Open contact form', href: 'https://barcoassist.co.za/contact_us' }] }
  ],
  sitePages: [
    { title: 'Homepage', href: 'index.html' },
    { title: 'Privacy Policy', href: 'privacy.html' }
  ],
  autoUpdateFromSite: true
};
