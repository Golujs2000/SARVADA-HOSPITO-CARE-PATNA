// ─────────────────────────────────────────────────────────────
// data/siteData.js
// Central configuration for Sarvada Hospito Care.
// Update this file when clinic details change rather than
// hunting through components.
// ─────────────────────────────────────────────────────────────

export const siteData = {
  name: 'Sarvada Hospito Care',
  shortName: 'Sarvada Hospito Care',
  tagline: 'A Unit of Servada Hospito Care Pvt. Ltd. — ISO 9001:2020 Certified Hospital',
  description:
    'Sarvada Hospito Care (A Unit of Servada Hospito Care Pvt. Ltd.) is an ISO 9001:2020 certified premier multi-specialty hospital located at Anand Palace, Bypass Road, Pillar no 55, Kankarbagh, Patna, Bihar 800020. We offer 24/7 Emergency & Trauma, ICU, advanced Surgical Services, Urology, Gynecology, and cashless treatments for Orthopedics and General Surgery under the Ayushman Bharat Card (PM-JAY) scheme.',
  founded: '2018',
  url: 'https://sarvada-hospito-care.web.app',
  logo: '/favicon.png',

  // ── Contact & Location ───────────────────────────────────────
  contact: {
    address: 'Anand palace, Bypass Rd, Pillar no 55, Kankarbagh, Patna, Bihar 800020',
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
      'Sarvada Hospito Care',
      'Ayushman Card hospital Patna',
      'Ayushman Bharat hospital Kankarbagh',
      'PMJAY empanelled hospital Patna',
      'cashless treatment Ayushman card Patna',
      'best Ayushman hospital in Patna Bihar',
      'PM-JAY cashless hospital Kankarbagh',
      'Ayushman card hospital list Patna',
      'Sarvada hospital Ayushman card approved',
      'multi-specialty hospital Patna',
      'best hospital in Patna Bihar',
      'emergency care hospital Patna',
      'ICU hospital Patna',
      'cardiologist Patna',
      'best orthopedic surgeon Patna',
      'general medicine doctor Patna',
      'neurology hospital Patna',
      'gynecology hospital Patna',
      'dialysis center Patna',
      'trauma care Patna',
      'best pathology lab Patna',
      'ultrasound center Patna',
      'pediatrics and neonatology Patna',
      '24/7 ambulance service Patna',
      'advanced surgical services Patna',
      'best medical facility Kankarbagh',
      'top rated hospital Bihar',
      'affordable healthcare Patna',
      'comprehensive hospital departments Patna',
      'dental surgeon Patna',
      'plastic surgery hospital Patna',
      'laparoscopic surgery Patna',
      'kidney specialist Patna',
      'patients from Nepal',
      'patients from Jharkhand',
      'patients from West Bengal',
      'patients from Bihar districts',
      'hospital in Kankarbagh Patna',
      'best hospital in Kankarbagh Bypass Road',
      'emergency trauma center Patna Kankarbagh',
      'Patna hospital contact number',
      'laparoscopic surgeon in Kankarbagh Patna',
      'best medical clinic Patna',
      'multi specialty clinic in Kankarbagh Patna',
      'doctors in Kankarbagh Patna',
      'doctor consult fee Patna',
      'dialysis hospital Kankarbagh'
    ],
    ogImage: '/og-image.jpg',
  },

  // ── Regional Reach ───────────────────────────────────────────
  reach: [
    {
      region: 'Bihar Districts',
      title: 'Statewide Coverage',
      description: 'Deeply integrated across all 38 districts of Bihar for comprehensive secondary and tertiary medical care.',
      stat: '38 Districts',
      highlight: 'Statewide Reach',
      color: 'from-rose-500 to-pink-600',
      light: 'bg-rose-500/10 text-rose-600 border-rose-500/10'
    },
    {
      region: 'Jharkhand',
      title: 'Deoghar & Surrounding',
      description: 'Serving patients traveling from Deoghar and surrounding regions of Jharkhand for high-quality, reliable healthcare.',
      stat: 'Deoghar Region',
      highlight: 'Interstate Hub',
      color: 'from-emerald-500 to-teal-600',
      light: 'bg-emerald-500/10 text-emerald-600 border-emerald-500/10'
    },
    {
      region: 'West Bengal',
      title: 'Siliguri & Beyond',
      description: 'A trusted healthcare destination for patients from Siliguri and neighboring areas in West Bengal.',
      stat: 'Siliguri Hub',
      highlight: 'Eastern Care',
      color: 'from-amber-500 to-orange-600',
      light: 'bg-amber-500/10 text-amber-600 border-amber-500/10'
    }
  ],

  // ── Homepage Stats Counter ───────────────────────────────────
  stats: [
    { label: 'Happy Patients', value: 5000, suffix: '+', iconId: 'heartbeat' },
    { label: 'Expert Doctors', value: 10, suffix: '+', iconId: 'doctor' },
    { label: 'Operations', value: 2000, suffix: '+', iconId: 'operations' },
    { label: 'Established', value: 2018, suffix: '', iconId: 'established' },
  ],

  mapEmbed:
    'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3598.6297856669707!2d85.1487686!3d25.583980899999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39ed595017e2221f%3A0x3c137a9b323f3f6d!2sSARVADA%20HOSPITO%20CARE%20PATNA!5e0!3m2!1sen!2sin!4v1781096205670!5m2!1sen!2sin',
  mapLink:
    'https://maps.google.com/?cid=4329007621147770733',

  // ── Departments / Specialties (used in appointment form) ─────
  departments: [
    'Pulmonology',
    'Trauma Care',
    'Day Care',
    'Burn Care',
    'General Surgery',
    'Laparoscopy',
    'Orthopedics',
    'Neuro & Spine Surgery',
    'Plastic & Cosmetic Surgery',
    'Obstetrics & Gynecology',
    'Paediatrics',
    'General Medicine',
    'Gastroenterology',
    'Cardiology',
    'Nephrology & Dialysis',
    'Urology',
    'Critical Care',
    'Psychiatry',
    'Dental & Ortho Dental Surgery',
    'ENT & Head & Neck Surgery',
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
    { name: 'Ayushman Bharat Card (PM-JAY) Accepted', icon: '💳' },
  ],
}

export default siteData
