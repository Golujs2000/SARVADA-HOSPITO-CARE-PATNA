// Seed data for Sarvada Hospital — initial Firestore population
// Run seedFirestore() in browser console after importing

import { db } from '../firebase/config'
import { 
  collection, addDoc, getDocs, deleteDoc, serverTimestamp,
  query, where, updateDoc 
} from 'firebase/firestore'

export const seedDoctors = [
  {
    name: 'Dr. Manmohan Suman',
    specialty: 'Consultant Physician',
    qualification: 'MBBS, MD',
    experience: 21,
    bio: 'Dr. Manmohan Suman (MBBS, MD) is a senior Consultant Physician, Ex-Gastro Surgeon (IGIMS, Patna), Ex-Surgeon (VMMC College & Safdarjung Hospital, New Delhi), and Jaundice, Stone, Pancreas & Liver Specialist with 21 years of clinical experience. His medical expertise is coupled with a genuine concern for his patients, supported by a staff dedicated to patient comfort and prompt attention.',
    image: 'https://firebasestorage.googleapis.com/v0/b/patna-lapro-stone-healthcare.firebasestorage.app/o/gallery%2F1780637150378_ChatGPT%20Image%20Jun%205%2C%202026%2C%2010_52_07%20AM.webp?alt=media&token=2757b4ff-274f-4fe7-8700-2668bc751dcc',
    email: 'sarvadahospitocarepatna@gmail.com',
    phone: '7079001600',
    consultationFee: 500,
    availableDays: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
    availableTime: '9:00 AM – 6:00 PM',
    specialties: [
      'Laparoscopic Surgery',
      'Kidney Stone & Kidney Cancer',
      'Liver Disorders',
      'Pancreas Disorders',
      'Jaundice & Biliary Disorders',
      'General & Gastrointestinal Surgery',
      'Gastro-Intestinal Disorder',
      'Upper G.I. Endoscopy / Colonoscopy',
      'Colorectal Surgeon',
      'Piles, fissure and fistula in Ano',
      'Pancreatic stone',
      'Fissure Laser Surgery',
      'Gall bladder stone',
      'Liver',
      'ERCP — for CBD stone',
      'Stomach cancer',
      'Hernia'
    ],
    currentPosition: 'Sr. Consultant, Medimax Hospital, Patna',
    previousPosition: 'Ex-Gastro Surgeon, IGIMS, Patna | Ex-Surgeon, VMMC College & Safdarjung Hospital, New Delhi',
    rating: 4.9,
    reviewCount: 350,
    featured: true,
  },
]

import { allSpecialities } from './seed/index.js'

export const seedSpecialities = allSpecialities

export const seedBlogs = [
  {
    title: 'Laparoscopic Surgery: What You Need to Know Before Your Procedure',
    slug: 'laparoscopic-surgery-what-to-know',
    excerpt: 'Dr. Manmohan Suman explains how laparoscopic (keyhole) surgery works, its advantages over open surgery, and what patients should expect before, during, and after the procedure.',
    content: `<h2>What is Laparoscopic Surgery?</h2><p>Laparoscopic surgery, also called keyhole surgery or minimally invasive surgery, is a modern surgical technique where operations are performed through small incisions (0.5–1.5 cm) using a camera (laparoscope) and specialized instruments. The surgeon views the operation on a monitor.</p><h2>Advantages Over Open Surgery</h2><ul><li><strong>Smaller incisions</strong> — 3–4 small cuts instead of one large one</li><li><strong>Less pain</strong> after surgery</li><li><strong>Shorter hospital stay</strong> — often go home next day</li><li><strong>Faster recovery</strong> — back to normal in days, not weeks</li><li><strong>Less blood loss</strong> and lower risk of infection</li><li><strong>Better cosmetic result</strong> — minimal scarring</li></ul><h2>Common Laparoscopic Procedures We Perform</h2><ul><li>Gallbladder removal (Cholecystectomy)</li><li>Hernia repair</li><li>Appendix removal (Appendectomy)</li><li>Liver cyst & abscess drainage</li><li>Colectomy (partial bowel removal)</li></ul><h2>What to Expect</h2><p>You will receive general anesthesia. The procedure typically takes 30–90 minutes. Most patients are walking the same evening and discharged the next morning. Full recovery takes 1–2 weeks compared to 4–6 weeks for open surgery.</p><p>Book a consultation at Sarvada Hospital, Anand palace, Bypass Rd, changer, Kankarbagh, Patna. Call: <strong>7079001600 / 7079001700</strong>.</p>`,
    author: 'Dr. Manmohan Suman',
    category: 'Laparoscopic Surgery',
    image: '',
    tags: ['laparoscopic surgery', 'keyhole surgery', 'minimally invasive', 'Patna', 'Dr Manmohan Suman'],
    published: true,
    views: 0,
  },
  {
    title: 'Kidney Stones: When Do You Need Surgery?',
    slug: 'kidney-stones-when-surgery',
    excerpt: 'Dr. Manmohan Suman explains different treatment options for kidney stones — from medical therapy to PCNL and ureteroscopy — and when surgery becomes necessary.',
    content: `<h2>Understanding Kidney Stones</h2><p>Kidney stones (urolithiasis / पथरी) are hard deposits of minerals and salts that form in your kidneys. They can affect any part of the urinary tract — from kidneys to bladder. Passing stones can be extremely painful.</p><h2>When Can Stones Pass Naturally?</h2><p>Stones smaller than 5 mm have a good chance of passing with increased fluids and pain medication. Stones between 5–7 mm may pass with medical expulsive therapy (alpha-blockers). Stones larger than 7–8 mm usually require intervention.</p><h2>Treatment Options</h2><ul><li><strong>Medical Expulsive Therapy</strong> — tablets to relax the ureter and allow stone passage (for small stones)</li><li><strong>ESWL</strong> — Shockwave lithotripsy to break stones externally (for stones 1–2 cm)</li><li><strong>Ureteroscopy + Laser</strong> — telescope passed to break stones in the ureter (gold standard for ureteric stones)</li><li><strong>PCNL</strong> — keyhole surgery for large kidney stones >2 cm</li></ul><h2>When is Surgery Urgently Needed?</h2><ul><li>Stone causing complete kidney obstruction</li><li>Infected blocked kidney (pyelonephritis/urosepsis) — emergency</li><li>Solitary kidney with obstruction</li><li>Severe pain not controlled with medications</li></ul><p>Book a consultation at Sarvada Hospital, Kankarbagh, Patna. Call: <strong>7079001600</strong>.</p>`,
    author: 'Dr. Manmohan Suman',
    category: 'Kidney & Stone',
    image: '',
    tags: ['kidney stones', 'PCNL', 'ureteroscopy', 'stone surgery Patna', 'Dr Manmohan Suman'],
    published: true,
    views: 0,
  },
  {
    title: 'Jaundice: When Is It a Surgical Emergency?',
    slug: 'jaundice-surgical-emergency',
    excerpt: 'Dr. Manmohan Suman explains the difference between medical and surgical jaundice, red-flag symptoms, and when you need emergency surgery.',
    content: `<h2>What Causes Jaundice?</h2><p>Jaundice (yellowing of skin and eyes) occurs when bilirubin builds up in the blood. It can be due to liver disease (medical jaundice) or blockage of the bile duct (surgical/obstructive jaundice).</p><h2>Surgical Causes of Jaundice</h2><ul><li><strong>CBD Stones</strong> — gallstones blocking the common bile duct</li><li><strong>Cholangitis</strong> — infected bile duct (surgical emergency)</li><li><strong>Carcinoma of bile duct</strong> (Cholangiocarcinoma)</li><li><strong>Carcinoma of pancreatic head</strong> (most common cause of painless jaundice)</li><li><strong>Biliary stricture</strong> — narrowing of bile duct after surgery or injury</li></ul><h2>Red Flag Symptoms Needing Urgent Evaluation</h2><ul><li>Jaundice + High fever + Rigors (Charcot's triad) — Cholangitis emergency</li><li>Rapidly worsening jaundice</li><li>Severe itching with pale stools and dark urine</li><li>Painless progressive jaundice (may indicate cancer)</li></ul><h2>Treatment</h2><p>ERCP (Endoscopic stone removal), laparoscopic surgery, biliary drainage, or surgery depending on the cause. Early evaluation is critical.</p><p>Consult our specialist doctors at Sarvada Hospital, Kankarbagh, Patna. Call: <strong>7079001600 / 7079001700</strong>.</p>`,
    author: 'Dr. Manmohan Suman',
    category: 'Jaundice & Liver',
    image: '',
    tags: ['jaundice', 'obstructive jaundice', 'cholangitis', 'ERCP', 'Patna', 'Dr Manmohan Suman'],
    published: true,
    views: 0,
  },
]

export const seedHospitalServices = [
  {
    name: 'OPD Consultation (ओपीडी परामर्श)',
    icon: '🩺',
    category: 'Consultation',
    available: 'OPD Hours',
    description: 'Individual consultation with Dr. Manmohan Suman (MBBS, MD). Detailed surgical evaluation, diagnostic review, and treatment planning for all general and laparoscopic surgical conditions.',
    relatedSpecialties: ['Laparoscopic Surgery', 'Stone Treatment', 'Liver & Pancreas', 'General Surgery'],
    order: 1,
  },
  {
    name: 'Online Consultation (ऑनलाइन परामर्श)',
    icon: '📱',
    category: 'Consultation',
    available: '24 Hours',
    description: 'Consult with Dr. Manmohan Suman via video or phone call. Share reports and scans for expert surgical opinion from the comfort of your home.',
    relatedSpecialties: [],
    order: 2,
  },
  {
    name: 'Laparoscopic Surgery (लेप्रोस्कोपिक सर्जरी)',
    icon: '🔬',
    category: 'Surgery',
    available: 'By Appointment',
    description: 'Advanced minimally invasive laparoscopic surgeries — gallbladder, hernia, appendix, liver, and gastrointestinal procedures with minimal pain and fast recovery.',
    relatedSpecialties: ['Laparoscopic Surgery'],
    order: 3,
  },
  {
    name: 'Stone Surgery (पथरी सर्जरी)',
    icon: '🫘',
    category: 'Surgery',
    available: 'OPD & Emergency',
    description: 'Complete stone management — kidney, ureteric, and bladder stones using PCNL, ureteroscopy, laser lithotripsy, and medical therapy.',
    relatedSpecialties: ['Kidney & Ureteric Stone'],
    order: 4,
  },
  {
    name: 'Emergency Surgery (आपातकालीन सर्जरी)',
    icon: '🚑',
    category: 'Emergency',
    available: '24 Hours',
    description: 'Round-the-clock emergency surgical care for acute abdomen, obstructed hernia, appendicitis, intestinal obstruction, and trauma.',
    relatedSpecialties: ['General Surgery', 'Emergency Surgery'],
    order: 5,
  },
  {
    name: 'I.C.U & Indoor Care (आईसीयू और इनडोर सेवा)',
    icon: '🩺',
    category: 'Infrastructure',
    available: '24 × 7',
    description: 'Modern, fully equipped ICU and indoor recovery rooms for complex post-operative monitoring and high-dependency patient care.',
    relatedSpecialties: ['General Surgery', 'Laparoscopic Surgery', 'Stone Treatment'],
    order: 6,
  },
  {
    name: 'ICU Anaesthesia Support (आईसीयू संज्ञाहरण सहायता)',
    icon: '💉',
    category: 'Support',
    available: '24 × 7',
    description: 'ICU critical care and anaesthesia support managed 24/7 by highly qualified anaesthetic doctors to ensure maximum safety.',
    relatedSpecialties: [],
    order: 7,
  },
  {
    name: 'Neurology & Neurosurgery (न्यूरोलॉजी और न्यूरोसर्जरी)',
    icon: '🧠',
    category: 'Department',
    available: 'By Appointment',
    description: 'Outpatient consultations and neuro-trauma management overseen by highly qualified Neurosurgeons and neurophysicians.',
    relatedSpecialties: [],
    order: 8,
  },
]

// Clear a collection and re-seed it
async function clearAndSeed(colName, items) {
  const snap = await getDocs(collection(db, colName))
  
  // If seeding specialities, preserve the custom uploaded thumbnails
  const preservedThumbnails = {}
  if (colName === 'specialities') {
    snap.docs.forEach((d) => {
      const data = d.data()
      // If the thumbnail is set or the icon is a custom URL (starts with http), preserve them
      if (data.slug && (data.thumbnail || (data.icon && data.icon.startsWith('http')))) {
        preservedThumbnails[data.slug] = {
          icon: data.icon,
          thumbnail: data.thumbnail || '',
        }
      }
    })
  }

  await Promise.all(snap.docs.map((d) => deleteDoc(d.ref)))
  
  for (const item of items) {
    const docData = { ...item }
    if (colName === 'specialities' && preservedThumbnails[item.slug]) {
      docData.icon = preservedThumbnails[item.slug].icon
      docData.thumbnail = preservedThumbnails[item.slug].thumbnail
    }
    await addDoc(collection(db, colName), { ...docData, createdAt: serverTimestamp() })
  }
}

export async function seedSpecialitiesAndServices() {
  console.log('Seeding specialities...')
  await clearAndSeed('specialities', seedSpecialities)
  console.log('Seeding hospitalServices...')
  await clearAndSeed('hospitalServices', seedHospitalServices)
  console.log('✅ Specialities & Services seeded!')
}

export async function seedFirestore() {
  try {
    console.log('Seeding doctors...')
    await clearAndSeed('doctors', seedDoctors)

    console.log('Seeding blogs...')
    await clearAndSeed('blogs', seedBlogs)

    console.log('✅ Seeding complete!')
  } catch (err) {
    console.error('Seeding error:', err)
  }
}

export async function seedJaundiceSpecialityOnly() {
  const specRef = collection(db, 'specialities')

  // Find unified spec in local seedSpecialities
  const unifiedSpec = seedSpecialities.find((s) => s.slug === 'jaundice-biliary-disorders')
  if (!unifiedSpec) throw new Error('Could not find jaundice-biliary-disorders in seed data')

  // 1. Update/Add Jaundice & Biliary Disorders
  const qUpdate = query(specRef, where('slug', '==', 'jaundice-biliary-disorders'))
  const snapUpdate = await getDocs(qUpdate)

  let docData = { ...unifiedSpec }
  if (!snapUpdate.empty) {
    const docSnap = snapUpdate.docs[0]
    const existingData = docSnap.data()
    if (existingData.thumbnail) docData.thumbnail = existingData.thumbnail
    if (existingData.icon && existingData.icon.startsWith('http')) docData.icon = existingData.icon

    await updateDoc(docSnap.ref, {
      ...docData,
      updatedAt: serverTimestamp()
    })
  } else {
    await addDoc(specRef, {
      ...docData,
      createdAt: serverTimestamp()
    })
  }

  // 2. Delete Jaundice, Ascites & Biliary Disorder
  const qDelete = query(specRef, where('slug', '==', 'jaundice-ascites-biliary'))
  const snapDelete = await getDocs(qDelete)
  if (!snapDelete.empty) {
    await Promise.all(snapDelete.docs.map((d) => deleteDoc(d.ref)))
  }
}
