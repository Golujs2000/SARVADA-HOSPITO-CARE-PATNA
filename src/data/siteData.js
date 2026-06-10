// ─────────────────────────────────────────────────────────────
// data/siteData.js
// Central configuration for Sarvada Hospital.
// Update this file when clinic details change rather than
// hunting through components.
// ─────────────────────────────────────────────────────────────

export const siteData = {
  name: 'Sarvada Hospital',
  shortName: 'Sarvada Hospital',
  tagline: 'A Unit of Servada Hospito Care Pvt. Ltd. — ISO 9001:2020 Certified Hospital',
  description:
    'Sarvada Hospital (A Unit of Servada Hospito Care Pvt. Ltd.) is an ISO 9001:2020 certified premier healthcare center located at Anand Palace, Bypass Road, Changer, Kankarbagh, Patna, Bihar 800020. Offering advanced laparoscopic surgery, ICU, ICCU, dialysis, orthopedic surgery, cardiology, neurosurgery, gynecology, and emergency care.',
  founded: '2020',
  url: 'https://sarvada-hospito-care.web.app',
  logo: '/favicon.png',

  // ── Contact & Location ───────────────────────────────────────
  contact: {
    address: 'Anand palace, Bypass Rd, changer, Kankarbagh, Patna, Bihar 800020',
    phone: '7079001600',
    phone2: '7079001700',
    phone3: '',
    phone4: '',
    email: 'sarvadahospitocarepatna@gmail.com',
    hours: 'Open 24/7 | Emergency Care Available',
  },

  // ── Social Media Links ───────────────────────────────────────
  social: {
    facebook: 'https://facebook.com/patnalaprostonecare',
    instagram: 'https://instagram.com/patnalaprostonecare',
    twitter: 'https://twitter.com/patnalapro',
    youtube: 'https://youtube.com/@patnalaprostonecare',
    linkedin: 'https://linkedin.com/company/patnalaprostonecare',
  },

  // ── Team & Operational Stats ─────────────────────────────────
  team: {
    totalStaff: 10,
    nurses: 3,
    technicians: 3,
    pharmacist: true,
    ambulance: false,
    available247: false,
    consultationFee: 500,
  },

  // ── SEO Configuration ────────────────────────────────────────
  seo: {
    keywords: [
      'Sarvada Hospital',
      'laparoscopic surgery Patna',
      'Dr Manmohan Suman surgeon Patna',
      'kidney stone treatment Patna',
      'laparoscopy specialist Patna Bihar',
      'liver specialist Patna',
      'pancreas specialist Patna',
      'jaundice treatment Patna',
      'stone surgery Patna',
      'gallbladder surgery Patna',
      'hernia surgery Patna',
      'appendix surgery Patna',
      'best surgeon Patna Bihar',
      'Medimax Hospital surgeon',
      'Sri Krishna Nagar Patna clinic',
      'MS surgeon Patna',
      'best laparoscopic surgeon in Patna',
      'gastro specialist Patna',
      'gallbladder stone surgery cost in Patna',
      'kidney stone removal Patna',
      'Dr Manmohan Suman Kankarbagh',
      'gastrointestinal surgeon Patna',
      'Sarvada Hospital contact number',
      'laparoscopy cost Patna',
      'kidney stone operation cost Patna',
      'best hospital for stone surgery Patna',
      'obstructive jaundice specialist Patna',
      'hernia treatment in Patna',
      'appendix surgery in Patna',
      'colorectal surgeon Patna',
      'piles laser surgery Patna',
      'fissure laser surgery Patna',
      'pancreatic stone treatment Patna',
      'ERCP for CBD stone Patna',
      'stomach cancer surgery Patna',
      'ascites treatment Patna',
      'hepatitis B treatment Patna',
      'hepatitis C treatment Patna',
      'biliary disorder specialist Patna',
      'patients from Nepal',
      'patients from Jharkhand',
      'patients from Uttar Pradesh',
      'patients from UP',
      'laparoscopy specialist Nepal',
      'best stone surgeon Jharkhand',
      'gastro specialist Bihar districts',
    ],
    ogImage: '/og-image.jpg',
  },

  // ── Regional Reach ───────────────────────────────────────────
  reach: [
    {
      region: 'Nepal',
      title: 'International Care',
      description: 'Trusted by international patients from border cities and major hubs including Birgunj, Biratnagar, Janakpur, and Kathmandu seeking advanced laparoscopic surgery & liver care.',
      stat: 'Nepal Reach',
      highlight: 'Cross-Border Care',
      color: 'from-sky-500 to-blue-600',
      light: 'bg-sky-500/10 text-sky-600 border-sky-500/10'
    },
    {
      region: 'Jharkhand',
      title: 'Interstate Trust',
      description: 'Serving patients traveling from Ranchi, Dhanbad, Bokaro, Jamshedpur, and Hazaribagh for high-success laparoscopic stone surgeries and specialized gastroenterology.',
      stat: 'Jharkhand Reach',
      highlight: 'Interstate Hub',
      color: 'from-emerald-500 to-teal-600',
      light: 'bg-emerald-500/10 text-emerald-600 border-emerald-500/10'
    },
    {
      region: 'Uttar Pradesh (UP)',
      title: 'Eastern UP Care',
      description: 'Eastern Uttar Pradesh cities like Gorakhpur, Varanasi, Deoria, Ghazipur, and Ballia rely on our clinic for expert surgical consultations under Dr. Manmohan Suman.',
      stat: 'UP Reach',
      highlight: 'Preferred Referral',
      color: 'from-amber-500 to-orange-600',
      light: 'bg-amber-500/10 text-amber-600 border-amber-500/10'
    },
    {
      region: 'Bihar Districts',
      title: 'Statewide Coverage',
      description: 'Deeply integrated across all 38 districts of Bihar (Patna, Gaya, Muzaffarpur, Bhagalpur, Darbhanga, Saharsa, Purnia, etc.) for secondary and tertiary laparoscopic care.',
      stat: '38 Districts',
      highlight: 'Statewide Reach',
      color: 'from-rose-500 to-pink-600',
      light: 'bg-rose-500/10 text-rose-600 border-rose-500/10'
    }
  ],

  // ── Homepage Stats Counter ───────────────────────────────────
  stats: [
    { label: 'Satisfied Patients', value: 50000, suffix: '+', emoji: '😊' },
    { label: 'Years Experience', value: 21, suffix: '+', emoji: '👨‍⚕️' },
    { label: 'Successful Operations', value: 10000, suffix: '+', emoji: '🩺' },
    { label: 'Awards Received', value: 150, suffix: '+', emoji: '🏆' },
  ],

  mapEmbed:
    'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3598.6297856669707!2d85.1487686!3d25.583980899999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39ed595017e2221f%3A0x3c137a9b323f3f6d!2sSARVADA%20HOSPITO%20CARE%20PATNA!5e0!3m2!1sen!2sin!4v1781096205670!5m2!1sen!2sin',

  // ── Departments / Specialties (used in appointment form) ─────
  departments: [
    'Pulmonology',
    'Trauma Care',
    'Day Care',
    'Burn Care',
    'General Surgery',
    'Laparoscopy',
    'Ortho & Spinal Surgery',
    'Neuro Surgery',
    'Plastic & Cosmetic Surgery',
    'Gynecology & Obstetrics',
    'General Medicine',
    'Gastroenterology',
    'Cardiology',
    'Nephrology & Dialysis',
    'Psychiatry',
    'Dental & Ortho Dental Surgery',
    'Pathology & Radiology (Ultrasound, X-Ray, Doppler)',
    'Burn Unit Care'
  ],

  // ── Facilities ───────────────────────────────────────────────
  facilities: [
    { name: 'ICU, ICCU, IPD & OPD Care', icon: '🏥' },
    { name: 'Advanced Laparoscopy', icon: '🔬' },
    { name: 'Dialysis & Burn Unit', icon: '🔥' },
    { name: 'General & Ortho Surgery', icon: '🦴' },
    { name: 'Neuro & Spinal Surgery', icon: '🧠' },
    { name: 'Nephrology & Cardiology', icon: '❤️' },
    { name: 'Pathology & 24/7 Pharmacy', icon: '🧪' },
    { name: 'Gynecology & Pediatrics', icon: '🤰' },
    { name: 'X-Ray, Ultrasound & Doppler', icon: '🩻' },
    { name: '24/7 AC HDU & Emergency Care', icon: '🚨' },
    { name: '24/7 Ambulance Service', icon: '🚑' },
  ],
}

export default siteData
