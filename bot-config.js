window.SmartSiteBotConfig = {
  businessName: 'Barco Group',
  title: 'Barco Group',
  subtitle: 'Facilities enquiry assistant',
  botTitle: 'Barco Group Assistant',
  botSubtitle: 'Maintenance and portfolio support',
  whatsappNumber: '',
  genericMessage: 'Hi Barco Group, I would like to enquire about facilities management or property maintenance support.',
  fallback: 'I am not fully sure about that yet. Would you like to send a facilities enquiry to the Barco team?',
  emailSubject: 'Barco Group enquiry',
  languages: {
    en: {
      label: 'EN',
      introMessage: 'Hello 👋 I can help with Barco Group, Barco Assist, maintenance services, client sectors and quote enquiries.',
      fallback: 'I am not fully sure about that yet. Would you like to route your enquiry to the Barco team?',
      inputPlaceholder: 'Ask about Barco Group...',
      sendLabel: 'Send',
      backLabel: 'Back to menu',
      agentLabel: 'Speak to someone',
      agentPrompt: 'No problem — I can prepare a facilities enquiry message.',
      whatsappLabel: 'Prepare enquiry',
      quickReplies: ['What does Barco do?', 'Maintenance services', 'Client sectors', 'COC services', 'Contact']
    }
  },
  parameters: [
    { keywords: ['what','group','barco group','who'], reply: { en: 'Barco Group is the home of Barco Assist, a facilities management and property maintenance division focused on asset longevity, operational efficiency and real-time reporting.' } },
    { keywords: ['assist','barco assist','maintenance','repairs','service','services'], reply: { en: 'Barco Assist provides commercial maintenance, retail maintenance, student accommodation maintenance, holistic building maintenance and full Certificate of Compliance support.' } },
    { keywords: ['sector','sectors','clients','portfolio','facility manager','landlord','body corporate','retail'], reply: { en: 'Barco works with facility managers, retail portfolios, private landlords and body corporates across commercial, retail and residential property environments.' } },
    { keywords: ['coc','certificate','compliance'], reply: { en: 'Barco Assist lists full Certificate of Compliance services as one of its core focus areas, supporting property stakeholders with compliance-led maintenance needs.' } },
    { keywords: ['contact','quote','address','office','enquiry'], reply: { en: 'The public office address is 66A Section St, Paarden Eiland, Cape Town, 7405. You can request a maintenance quote through the contact section.' } }
  ],
  sitePages: [
    { title: 'Homepage', href: 'index.html' },
    { title: 'Privacy Policy', href: 'privacy.html' }
  ],
  autoUpdateFromSite: true
};
