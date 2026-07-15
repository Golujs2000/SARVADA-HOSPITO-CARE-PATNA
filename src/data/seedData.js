// Seed data for Sarvada Hospito Care — initial Firestore population
// Run seedFirestore() in browser console after importing

import { db } from '../firebase/config'
import { 
  collection, addDoc, getDocs, deleteDoc, serverTimestamp,
  query, where, updateDoc, doc
} from 'firebase/firestore'

export const seedDoctors = [
  {
    name: 'Dr. Manmohan Suman',
    specialty: 'Director, CEO & Consultant Physician',
    qualification: 'MBBS, MD',
    experience: 21,
    bio: 'Dr. Manmohan Suman (MBBS, MD) is the Director, CEO, and Senior Consultant Physician at Sarvada Hospito Care. With over 21 years of experience, including work at IGIMS Patna and Safdarjung Hospital New Delhi, he leads our clinical services, specializing in critical care, internal medicine, jaundice, liver, and pancreatic disorders.',
    image: '/doctor-manmohan-suman.png',
    email: 'sarvadahospitocarepatna@gmail.com',
    phone: '7079001600',
    consultationFee: 500,
    availableDays: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
    availableTime: '9:00 AM – 6:00 PM',
    specialties: [
      'General Medicine',
      'Critical Care',
      'Gastroenterology',
      'Cardiology',
      'Pulmonology'
    ],
    currentPosition: 'Director, CEO & Senior Consultant, Sarvada Hospito Care, Patna',
    previousPosition: 'Ex-Gastro Surgeon, IGIMS, Patna | Ex-Surgeon, VMMC College & Safdarjung Hospital, New Delhi',
    rating: 4.9,
    reviewCount: 350,
    featured: true,
  },
  {
    name: 'Dr. R. K. Prasad',
    specialty: 'Laparoscopic & General Surgeon',
    qualification: 'MBBS, MS',
    experience: 22,
    bio: 'Dr. R. K. Prasad (MBBS, MS) is a senior Laparoscopic and General Surgeon with over 22 years of surgical experience. He specializes in minimally invasive keyhole operations, complex gastrointestinal surgeries, and general surgical procedures, providing compassionate care and advanced treatment.',
    image: '/hospital-staff.png',
    email: 'sarvadahospitocarepatna@gmail.com',
    phone: '7079001600',
    consultationFee: 500,
    availableDays: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
    availableTime: '9:00 AM – 4:00 PM',
    specialties: [
      'Laparoscopy',
      'General Surgery'
    ],
    currentPosition: 'Sr. Consultant Surgeon, Sarvada Hospito Care, Patna',
    previousPosition: 'Ex-Senior Resident, Indira Gandhi Institute of Medical Sciences (IGIMS), Patna',
    rating: 4.9,
    reviewCount: 420,
    featured: true,
  },
  {
    name: 'Dr. Shalini Priya',
    specialty: 'Consultant Physician',
    qualification: 'MBBS, MD (Internal Medicine)',
    experience: 15,
    bio: 'Dr. Shalini Priya (MBBS, MD) is a highly experienced Consultant Physician specializing in Internal Medicine, critical care management, and long-term diagnostic planning. She has spent over 15 years treating complex systemic conditions and infectious diseases.',
    image: '/hospital-staff.png',
    email: 'sarvadahospitocarepatna@gmail.com',
    phone: '7079001700',
    consultationFee: 500,
    availableDays: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
    availableTime: '11:00 AM – 6:00 PM',
    specialties: [
      'General Medicine',
      'Critical Care'
    ],
    currentPosition: 'Consultant Physician, Sarvada Hospito Care, Patna',
    previousPosition: 'Ex-Consultant, Medanta Hospital, Patna',
    rating: 4.8,
    reviewCount: 280,
    featured: true,
  },
  {
    name: 'Dr. Amarnath Kumar',
    specialty: 'Consultant General & GI Surgeon',
    qualification: 'MBBS, MS, MCh',
    experience: 12,
    bio: 'Dr. Amarnath Kumar (MBBS, MS, MCh) is a highly skilled Consultant General & GI Surgeon at Sarvada Hospito Care, Patna. Specializing in advanced laparoscopy, hepatobiliary procedures, and complex gastrointestinal surgeries, he is committed to delivering state-of-the-art surgical care with minimal recovery times.',
    image: '/hospital-staff.png',
    email: 'sarvadahospitocarepatna@gmail.com',
    phone: '7079001600',
    consultationFee: 500,
    availableDays: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
    availableTime: '10:00 AM – 5:00 PM',
    specialties: [
      'General Surgery',
      'Laparoscopy',
      'Gastroenterology'
    ],
    currentPosition: 'Consultant General & Gastrointestinal Surgeon, Sarvada Hospito Care, Patna',
    previousPosition: 'Ex-Senior Resident Surgeon, leading medical institutions in Bihar',
    rating: 4.8,
    reviewCount: 120,
    featured: false,
  },
  {
    name: 'Dr. Md. Faizul Haque',
    specialty: 'Consultant Urologist',
    qualification: 'MBBS, MCh (Urology)',
    experience: 8,
    bio: 'Dr. Md. Faizul Haque is a dedicated Consultant Urologist at Sarvada Hospito Care, Patna. He completed his MCh in Urology from Utkal University in 2020 and specializes in urinary tract disorders, kidney stones, prostate treatment, and reconstructive urology, ensuring patient-centric, high-success clinical outcomes.',
    image: '/hospital-staff.png',
    email: 'sarvadahospitocarepatna@gmail.com',
    phone: '7079001600',
    consultationFee: 500,
    availableDays: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
    availableTime: '11:00 AM – 4:00 PM',
    specialties: [
      'Urology',
      'Nephrology & Dialysis'
    ],
    currentPosition: 'Consultant Urologist, Sarvada Hospito Care, Patna',
    previousPosition: 'Ex-Urology Specialist, Utkal University (MCh - 2020)',
    rating: 4.7,
    reviewCount: 95,
    featured: false,
  },
  {
    name: 'Dr. Gunjan Kumar',
    specialty: 'Consultant Critical Care Specialist',
    qualification: 'MBBS, MD, FNB (Critical Care)',
    experience: 10,
    bio: 'Dr. Gunjan Kumar is a Senior Consultant in Critical Care Medicine at Sarvada Hospito Care, Patna. He completed his MBBS and MD from the prestigious IGIMS, Patna, followed by a Fellowship (FNB) in Critical Care from Medanta. He specializes in mechanical ventilation, sepsis resuscitation, and advanced multi-organ support.',
    image: '/hospital-staff.png',
    email: 'sarvadahospitocarepatna@gmail.com',
    phone: '7079001700',
    consultationFee: 500,
    availableDays: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
    availableTime: '9:00 AM – 5:00 PM',
    specialties: [
      'Critical Care',
      'General Medicine',
      'Trauma Care'
    ],
    currentPosition: 'Senior Consultant - Critical Care Medicine, Sarvada Hospito Care, Patna',
    previousPosition: 'Ex-Critical Care Specialist, Medanta Hospital | Ex-Resident, IGIMS, Patna',
    rating: 4.9,
    reviewCount: 150,
    featured: false,
  },
  {
    name: 'Dr. Jitendra Kumar Singh',
    specialty: 'Senior Consultant ENT & Head & Neck Surgeon',
    qualification: 'MBBS, MS (ENT), PGDHHM',
    experience: 11,
    bio: 'Dr. Jitendra Kumar Singh is a Senior Consultant - ENT and Head & Neck (Oto-Rhino-Laryngologist) at Sarvada Hospito Care, Patna. He completed his MBBS from AFMC, Pune, PGDHHM from Symbiosis, Pune, and MS (ENT) from Command Hospital, Kolkata. With over 10.5 years of experience in the armed forces healthcare services and management, he is an expert in microscopy and endoscopic ENT surgeries, allergy, vertigo, obstructive sleep apnea (OSA), and endonasal pituitary tumor surgery.',
    image: '/hospital-staff.png',
    email: 'sarvadahospitocarepatna@gmail.com',
    phone: '7079001600',
    consultationFee: 500,
    availableDays: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
    availableTime: '10:00 AM – 6:00 PM',
    specialties: [
      'ENT & Head & Neck Surgery',
      'General Surgery'
    ],
    currentPosition: 'Senior Consultant - ENT & Head & Neck Surgery, Sarvada Hospito Care, Patna',
    previousPosition: 'Ex-Armed Forces Health Care Services (10.5+ Years) | Ex-Senior Resident & Designate Assistant Professor, NSMCH, Bihta',
    rating: 4.8,
    reviewCount: 210,
    featured: false,
  },
  {
    name: 'Dr. Nirmal Kumar',
    specialty: 'Consultant Anesthesiologist & General Surgeon',
    qualification: 'MBBS, DA (Anesthesia), MS',
    experience: 14,
    bio: 'Dr. Nirmal Kumar (MBBS, DA, MS) is a dual-qualified Consultant Anesthesiologist and Laparoscopic Surgeon at Sarvada Hospito Care, Patna. He brings comprehensive expertise in surgical interventions alongside advanced perioperative anesthesia care, ensuring safe outcomes for both emergency and elective procedures.',
    image: '/hospital-staff.png',
    email: 'sarvadahospitocarepatna@gmail.com',
    phone: '7079001600',
    consultationFee: 500,
    availableDays: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
    availableTime: '9:00 AM – 5:00 PM',
    specialties: [
      'Laparoscopy',
      'General Surgery',
      'Critical Care',
      'Trauma Care'
    ],
    currentPosition: 'Consultant Anesthesiologist & Laparoscopic Surgeon, Sarvada Hospito Care, Patna',
    previousPosition: 'Senior Resident Surgeon & Anesthesiologist, leading medical centers in Bihar',
    rating: 4.8,
    reviewCount: 165,
    featured: false,
  },
  {
    name: 'Dr. Rajaram Yadav',
    specialty: 'Consultant Nephrologist',
    qualification: 'MBBS, MD, DM (Nephrology)',
    experience: 9,
    bio: 'Dr. Rajaram Yadav is an expert Consultant Nephrologist at Sarvada Hospito Care, Patna. Holding a DM in Nephrology from IGIMS, Patna, and having served as an Ex-Resident at AIIMS New Delhi and Assistant Professor at PMCH, he provides advanced treatment for chronic kidney disease, dialysis management, and acute renal disorders.',
    image: '/hospital-staff.png',
    email: 'sarvadahospitocarepatna@gmail.com',
    phone: '7079001700',
    consultationFee: 500,
    availableDays: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
    availableTime: '12:00 PM – 5:00 PM',
    specialties: [
      'Nephrology & Dialysis',
      'General Medicine'
    ],
    currentPosition: 'Consultant Nephrologist, Sarvada Hospito Care & Assistant Professor, PMCH, Patna',
    previousPosition: 'Ex-Resident, AIIMS, New Delhi | Ex-Nephrologist, IGIMS, Patna',
    rating: 4.8,
    reviewCount: 140,
    featured: false,
  },
  {
    name: 'Dr. Rakesh Kumar',
    specialty: 'Oral & Maxillofacial Surgeon',
    qualification: 'BDS, MDS',
    experience: 11,
    bio: 'Dr. Rakesh Kumar (BDS, MDS) is an experienced Oral & Maxillofacial Surgeon at Sarvada Hospito Care, Patna. With over 11 years of clinical experience, he specializes in corrective jaw surgeries, facial trauma reconstruction, oral tumors, dental implants, and complex extractions.',
    image: '/hospital-staff.png',
    email: 'sarvadahospitocarepatna@gmail.com',
    phone: '7079001600',
    consultationFee: 500,
    availableDays: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
    availableTime: '10:00 AM – 5:00 PM',
    specialties: [
      'Dental & Ortho Dental Surgery',
      'Plastic & Cosmetic Surgery'
    ],
    currentPosition: 'Senior Consultant Oral & Maxillofacial Surgeon, Sarvada Hospito Care, Patna',
    previousPosition: 'Oral Surgeon and Dental Consultant, Patna',
    rating: 4.9,
    reviewCount: 180,
    featured: false,
  },
  {
    name: 'Dr. Sanjay Kumar',
    specialty: 'Consultant Nephrologist & Renal Specialist',
    qualification: 'MBBS, MD (Nephrology)',
    experience: 24,
    bio: 'Dr. Sanjay Kumar is a highly experienced Consultant Nephrologist and General Physician with over 24 years of clinical experience in Patna. He completed his MBBS from A N Magadh Medical College in 2002 and his MD in Nephrology from PMCH in 2013, specializing in kidney care, hypertension, and systemic diseases.',
    image: '/hospital-staff.png',
    email: 'sarvadahospitocarepatna@gmail.com',
    phone: '7079001700',
    consultationFee: 500,
    availableDays: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
    availableTime: '9:00 AM – 4:00 PM',
    specialties: [
      'Nephrology & Dialysis',
      'General Medicine'
    ],
    currentPosition: 'Senior Nephrologist & General Physician, PMCH & Sarvada Hospito Care, Patna',
    previousPosition: 'Ex-Consultant Nephrologist, Dr. Sanjay Kumar Clinic, Sadikpur',
    rating: 4.9,
    reviewCount: 310,
    featured: false,
  },
  {
    name: 'Dr. Anil Kumar Singh',
    specialty: 'Consultant Neurosurgeon',
    qualification: 'MBBS, MS (Neurosurgery)',
    experience: 12,
    bio: 'Dr. Anil Kumar Singh (MBBS, MS) is a prominent Consultant Neurosurgeon at Sarvada Hospito Care, Patna. Serving as a Senior Resident in Neurosurgery at PMCH, he is widely recognized for his expertise in neuro-trauma management, brain tumor surgery, and spinal decompression procedures.',
    image: '/hospital-staff.png',
    email: 'sarvadahospitocarepatna@gmail.com',
    phone: '7079001600',
    consultationFee: 500,
    availableDays: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
    availableTime: '10:00 AM – 5:00 PM',
    specialties: [
      'Neuro & Spine Surgery',
      'Trauma Care'
    ],
    currentPosition: 'Consultant Neurosurgeon & Senior Resident (Neuro), PMCH & Sarvada Hospito Care, Patna',
    previousPosition: 'Resident Surgeon, PMCH, Patna',
    rating: 4.8,
    reviewCount: 195,
    featured: false,
  },
  {
    name: 'Dr. Ankit Pranjal',
    specialty: 'Consultant Orthopedic Surgeon',
    qualification: 'MBBS (Hons), DNB (Orthopedics)',
    experience: 7,
    bio: 'Dr. Ankit Pranjal is a highly distinguished Consultant Orthopedic Surgeon at Sarvada Hospito Care, Patna. A gold medalist during his MBBS honors, he completed his DNB in Orthopedics and specializes in joint replacement, complex fracture fixation, sports injuries, and spine management.',
    image: '/hospital-staff.png',
    email: 'sarvadahospitocarepatna@gmail.com',
    phone: '7079001600',
    consultationFee: 500,
    availableDays: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
    availableTime: '9:00 AM – 5:00 PM',
    specialties: [
      'Orthopedics',
      'Trauma Care'
    ],
    currentPosition: 'Consultant Orthopedic Surgeon, Sarvada Hospito Care, Patna',
    previousPosition: 'Orthopedic Specialist, Patna',
    rating: 4.8,
    reviewCount: 110,
    featured: false,
  },
  {
    name: 'Dr. Ashutosh Kumar Sinha',
    specialty: 'Senior Interventional Cardiologist & Electrophysiologist',
    qualification: 'MBBS, MD, DM (Cardiology), FACC, FHRS',
    experience: 16,
    bio: 'Dr. Ashutosh Kumar Sinha is a highly qualified Senior Interventional Cardiologist and Electrophysiologist at Sarvada Hospito Care, Patna. He holds advanced certifications from the International Board of Heart Rhythm Examiners (IBHRE, USA) and is a Fellow of the American College of Cardiology (FACC) and Heart Rhythm Society (FHRS). He specializes in complex angioplasties, pacemaker/ICD implantations, and cardiac arrhythmia management.',
    image: '/hospital-staff.png',
    email: 'sarvadahospitocarepatna@gmail.com',
    phone: '7079001600',
    consultationFee: 500,
    availableDays: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
    availableTime: '9:00 AM – 6:00 PM',
    specialties: [
      'Cardiology',
      'General Medicine'
    ],
    currentPosition: 'Senior Consultant Interventional Cardiologist, Sarvada Hospito Care, Patna',
    previousPosition: 'Ex-Consultant Cardiologist, leading cardiac centers in India and USA',
    rating: 4.9,
    reviewCount: 240,
    featured: false,
  },
  {
    name: 'Dr. Debish Anand',
    specialty: 'Consultant Neuro & Spine Surgeon',
    qualification: 'MBBS, MS, MCh, DrNB (Neurosurgery)',
    experience: 10,
    bio: 'Dr. Debish Anand is an outstanding Consultant Neuro & Spine Surgeon at Sarvada Hospito Care, Patna. With extensive experience including tenure at CNMCH Kolkata, TMH Jamshedpur, and NMCH Sasaram, he specializes in high-precision brain tumor excision, cervical spine fusion, and neurotrauma resuscitation.',
    image: '/hospital-staff.png',
    email: 'sarvadahospitocarepatna@gmail.com',
    phone: '7079001600',
    consultationFee: 500,
    availableDays: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
    availableTime: '10:00 AM – 5:00 PM',
    specialties: [
      'Neuro & Spine Surgery',
      'Trauma Care'
    ],
    currentPosition: 'Consultant Neurosurgeon, Sarvada Hospito Care, Patna',
    previousPosition: 'Ex-Assistant Professor, NMCH Sasaram | Ex-Specialist, TMH Jamshedpur | Ex-Consultant, CNMCH Kolkata',
    rating: 4.8,
    reviewCount: 130,
    featured: false,
  },
  {
    name: 'Dr. Girijanand Jha',
    specialty: 'Consultant Pediatrician & Neonatologist',
    qualification: 'MBBS, DNB (Pediatrics)',
    experience: 12,
    bio: 'Dr. Girijanand Jha is a dedicated Consultant Pediatrician and Neonatologist at Sarvada Hospito Care, Patna. He completed his DNB in Pediatrics from Tata Motors Hospital, Jamshedpur, followed by a Fellowship in Neonatology from the National Neonatology Forum, New Delhi. He specializes in newborn intensive care (NICU), pediatric emergencies, and childhood vaccination plans.',
    image: '/hospital-staff.png',
    email: 'sarvadahospitocarepatna@gmail.com',
    phone: '7079001700',
    consultationFee: 500,
    availableDays: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
    availableTime: '10:00 AM – 4:00 PM',
    specialties: [
      'Paediatrics'
    ],
    currentPosition: 'Senior Consultant Pediatrician & Neonatologist, Sarvada Hospito Care, Patna',
    previousPosition: 'Ex-Pediatrician, Tata Motors Hospital Jamshedpur',
    rating: 4.8,
    reviewCount: 155,
    featured: false,
  },
  {
    name: 'Dr. Himanshu Kumar',
    specialty: 'Consultant Neurosurgeon',
    qualification: 'MBBS, MS, MCh (Neurosurgery)',
    experience: 9,
    bio: 'Dr. Himanshu Kumar is a prominent Consultant Neurosurgeon at Sarvada Hospito Care, Patna. He specializes in general neurosurgery, neuro-oncology, spinal stabilization, and endoscopic cranial procedures, bringing precision and state-of-the-art neurosurgical care to patients across Bihar.',
    image: '/hospital-staff.png',
    email: 'sarvadahospitocarepatna@gmail.com',
    phone: '7079001600',
    consultationFee: 500,
    availableDays: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
    availableTime: '11:00 AM – 5:00 PM',
    specialties: [
      'Neuro & Spine Surgery',
      'General Surgery'
    ],
    currentPosition: 'Consultant Neurosurgeon, Sarvada Hospito Care, Patna',
    previousPosition: 'Consultant Neurosurgeon, PMCH, Patna',
    rating: 4.7,
    reviewCount: 88,
    featured: false,
  },
  {
    name: 'Dr. Jitendra Mohan Jha',
    specialty: 'Consultant Gastroenterologist & Hepatologist',
    qualification: 'MBBS, DNB, DrNB, MRCP (London)',
    experience: 11,
    bio: 'Dr. Jitendra Mohan Jha is a highly trusted Gastroenterologist and Hepatologist at Sarvada Hospito Care, Patna. With specialized training from AIIMS Hospital (Secunderabad) and consultant experience at Manipal Hospital (Delhi) and Accord Hospital (Faridabad), he is an expert in diagnosing and treating chronic liver diseases, pancreatitis, inflammatory bowel disease, and performing therapeutic endoscopies.',
    image: '/hospital-staff.png',
    email: 'sarvadahospitocarepatna@gmail.com',
    phone: '7079001600',
    consultationFee: 500,
    availableDays: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
    availableTime: '9:00 AM – 5:00 PM',
    specialties: [
      'Gastroenterology',
      'General Medicine'
    ],
    currentPosition: 'Senior Consultant Gastroenterologist, Sarvada Hospito Care, Patna',
    previousPosition: 'Ex-Consultant, Manipal Hospital Delhi | Ex-Consultant, Accord Hospital Faridabad | AIIMS Secunderabad',
    rating: 4.9,
    reviewCount: 225,
    featured: false,
  },
  {
    name: 'Dr. Ketan Jha',
    specialty: 'Consultant Chest Physician & Pulmonologist',
    qualification: 'MBBS, MD (Respiratory Medicine)',
    experience: 8,
    bio: 'Dr. Ketan Jha is a Consultant Chest Physician and Interventional Pulmonologist at Sarvada Hospito Care, Patna. He completed his MBBS from UCMS, Delhi, and MD in Respiratory Medicine from MGM Indore, followed by Senior Residency at GMC Bhopal. He specializes in asthma, COPD, tuberculosis care, and interventional pulmonology.',
    image: '/hospital-staff.png',
    email: 'sarvadahospitocarepatna@gmail.com',
    phone: '7079001700',
    consultationFee: 500,
    availableDays: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
    availableTime: '10:00 AM – 4:00 PM',
    specialties: [
      'Pulmonology',
      'General Medicine'
    ],
    currentPosition: 'Consultant Chest Physician & Pulmonologist, Sarvada Hospito Care, Patna',
    previousPosition: 'Ex-Senior Resident, GMC Bhopal | Ex-Resident, MGM Indore',
    rating: 4.8,
    reviewCount: 115,
    featured: false,
  },
  {
    name: 'Dr. Krishna Kumar Pankaj',
    specialty: 'Consultant Physician',
    qualification: 'MBBS, MD (Internal Medicine)',
    experience: 12,
    bio: 'Dr. Krishna Kumar Pankaj is a dedicated Consultant Physician at Sarvada Hospito Care, Patna. He completed his MBBS from Medical College Kolkata and MD in Internal Medicine from Kolkata National Medical College, specializing in infectious diseases, chronic lifestyle disorders, diabetes, and acute medical conditions.',
    image: '/hospital-staff.png',
    email: 'sarvadahospitocarepatna@gmail.com',
    phone: '7079001700',
    consultationFee: 500,
    availableDays: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
    availableTime: '11:00 AM – 6:00 PM',
    specialties: [
      'General Medicine'
    ],
    currentPosition: 'Consultant Physician, Sarvada Hospito Care, Patna',
    previousPosition: 'Ex-Resident, Kolkata National Medical College',
    rating: 4.8,
    reviewCount: 105,
    featured: false,
  },
  {
    name: 'Dr. Rahul Kumar Gupta',
    specialty: 'Chief Medical Officer & Laparoscopic Surgeon',
    qualification: 'MBBS, MS (General Surgery)',
    experience: 10,
    bio: 'Dr. Rahul Kumar Gupta is the Chief Medical Officer (CMO) and Consultant Laparoscopic Surgeon at Sarvada Hospito Care, Patna. He leads our emergency response and surgical triage, specializing in appendectomies, trauma resuscitation, hernia mesh repair, and minimally invasive general surgeries.',
    image: '/hospital-staff.png',
    email: 'sarvadahospitocarepatna@gmail.com',
    phone: '7079001600',
    consultationFee: 500,
    availableDays: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
    availableTime: '9:00 AM – 6:00 PM',
    specialties: [
      'General Surgery',
      'Laparoscopy',
      'Trauma Care'
    ],
    currentPosition: 'Chief Medical Officer & Surgeon, Sarvada Hospito Care, Patna',
    previousPosition: 'Ex-Surgical Consultant, Patna',
    rating: 4.8,
    reviewCount: 190,
    featured: false,
  },
  {
    name: 'Dr. Nishu Kumar Jha',
    specialty: 'Resident Doctor (Obstetrics & Gynecology)',
    qualification: 'MBBS',
    experience: 4,
    bio: 'Dr. Nishu Kumar Jha is a dedicated Resident Doctor in the Obstetrics & Gynecology department at Sarvada Hospito Care, Patna. Associated with Patna Medical College and Hospital (PMCH), she provides continuous patient monitoring, pre-natal counsel, post-natal care, and assists in complex deliveries and gynecological procedures.',
    image: '/hospital-staff.png',
    email: 'sarvadahospitocarepatna@gmail.com',
    phone: '7079001700',
    consultationFee: 500,
    availableDays: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
    availableTime: '9:00 AM – 5:00 PM',
    specialties: [
      'Obstetrics & Gynecology'
    ],
    currentPosition: 'Obstetrics & Gynecology Resident Doctor, PMCH & Sarvada Hospito Care, Patna',
    previousPosition: 'Resident Physician, PMCH, Patna',
    rating: 4.6,
    reviewCount: 45,
    featured: false,
  },
];

import { hospitalDepartments } from './seed/hospitalDepartments.js'
import { surgicalServices } from './seed/surgicalServices.js'
import { criticalCare } from './seed/criticalCare.js'
import { diagnostics } from './seed/diagnostics.js'
import { patientFacilities } from './seed/patientFacilities.js'

export const seedBlogs = [
  {
    title: 'Laparoscopic Surgery: What You Need to Know Before Your Procedure',
    slug: 'laparoscopic-surgery-what-to-know',
    excerpt: 'Dr. Manmohan Suman explains how laparoscopic (keyhole) surgery works, its advantages over open surgery, and what patients should expect before, during, and after the procedure.',
    content: `<h2>What is Laparoscopic Surgery?</h2><p>Laparoscopic surgery, also called keyhole surgery or minimally invasive surgery, is a modern surgical technique where operations are performed through small incisions (0.5–1.5 cm) using a camera (laparoscope) and specialized instruments. The surgeon views the operation on a monitor.</p><h2>Advantages Over Open Surgery</h2><ul><li><strong>Smaller incisions</strong> — 3–4 small cuts instead of one large one</li><li><strong>Less pain</strong> after surgery</li><li><strong>Shorter hospital stay</strong> — often go home next day</li><li><strong>Faster recovery</strong> — back to normal in days, not weeks</li><li><strong>Less blood loss</strong> and lower risk of infection</li><li><strong>Better cosmetic result</strong> — minimal scarring</li></ul><h2>Common Laparoscopic Procedures We Perform</h2><ul><li>Gallbladder removal (Cholecystectomy)</li><li>Hernia repair</li><li>Appendix removal (Appendectomy)</li><li>Liver cyst & abscess drainage</li><li>Colectomy (partial bowel removal)</li></ul><h2>What to Expect</h2><p>You will receive general anesthesia. The procedure typically takes 30–90 minutes. Most patients are walking the same evening and discharged the next morning. Full recovery takes 1–2 weeks compared to 4–6 weeks for open surgery.</p><p>Book a consultation at Sarvada Hospito Care, Anand palace, Bypass Rd, changer, Kankarbagh, Patna. Call: <strong>7079001600 / 7079001700</strong>.</p>`,
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
    content: `<h2>Understanding Kidney Stones</h2><p>Kidney stones (urolithiasis / पथरी) are hard deposits of minerals and salts that form in your kidneys. They can affect any part of the urinary tract — from kidneys to bladder. Passing stones can be extremely painful.</p><h2>When Can Stones Pass Naturally?</h2><p>Stones smaller than 5 mm have a good chance of passing with increased fluids and pain medication. Stones between 5–7 mm may pass with medical expulsive therapy (alpha-blockers). Stones larger than 7–8 mm usually require intervention.</p><h2>Treatment Options</h2><ul><li><strong>Medical Expulsive Therapy</strong> — tablets to relax the ureter and allow stone passage (for small stones)</li><li><strong>ESWL</strong> — Shockwave lithotripsy to break stones externally (for stones 1–2 cm)</li><li><strong>Ureteroscopy + Laser</strong> — telescope passed to break stones in the ureter (gold standard for ureteric stones)</li><li><strong>PCNL</strong> — keyhole surgery for large kidney stones >2 cm</li></ul><h2>When is Surgery Urgently Needed?</h2><ul><li>Stone causing complete kidney obstruction</li><li>Infected blocked kidney (pyelonephritis/urosepsis) — emergency</li><li>Solitary kidney with obstruction</li><li>Severe pain not controlled with medications</li></ul><p>Book a consultation at Sarvada Hospito Care, Kankarbagh, Patna. Call: <strong>7079001600</strong>.</p>`,
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
    content: `<h2>What Causes Jaundice?</h2><p>Jaundice (yellowing of skin and eyes) occurs when bilirubin builds up in the blood. It can be due to liver disease (medical jaundice) or blockage of the bile duct (surgical/obstructive jaundice).</p><h2>Surgical Causes of Jaundice</h2><ul><li><strong>CBD Stones</strong> — gallstones blocking the common bile duct</li><li><strong>Cholangitis</strong> — infected bile duct (surgical emergency)</li><li><strong>Carcinoma of bile duct</strong> (Cholangiocarcinoma)</li><li><strong>Carcinoma of pancreatic head</strong> (most common cause of painless jaundice)</li><li><strong>Biliary stricture</strong> — narrowing of bile duct after surgery or injury</li></ul><h2>Red Flag Symptoms Needing Urgent Evaluation</h2><ul><li>Jaundice + High fever + Rigors (Charcot's triad) — Cholangitis emergency</li><li>Rapidly worsening jaundice</li><li>Severe itching with pale stools and dark urine</li><li>Painless progressive jaundice (may indicate cancer)</li></ul><h2>Treatment</h2><p>ERCP (Endoscopic stone removal), laparoscopic surgery, biliary drainage, or surgery depending on the cause. Early evaluation is critical.</p><p>Consult our specialist doctors at Sarvada Hospito Care, Kankarbagh, Patna. Call: <strong>7079001600 / 7079001700</strong>.</p>`,
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
    description: 'Individual consultation with our experienced consultant physicians and surgeons. Detailed surgical evaluation, diagnostic review, and treatment planning for all general and laparoscopic surgical conditions.',
    relatedSpecialties: ['Laparoscopic Surgery', 'Stone Treatment', 'Liver & Pancreas', 'General Surgery'],
    order: 1,
  },
  {
    name: 'Online Consultation (ऑनलाइन परामर्श)',
    icon: '📱',
    category: 'Consultation',
    available: '24 Hours',
    description: 'Consult with our specialist doctors via video or phone call. Share reports and scans for expert surgical opinion from the comfort of your home.',
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

export async function seedDepartmentsAndServices() {
  console.log('Clearing and seeding 6 new collections...')

  const collections = [
    'hospitalDepartments', 'surgicalServices', 'criticalCare', 
    'patientFacilities', 'diagnostics', 'treatments'
  ]

  // 1. Clear all 6 collections
  for (const col of collections) {
    const snap = await getDocs(collection(db, col))
    await Promise.all(snap.docs.map(d => deleteDoc(d.ref)))
  }

  // 2. Helper to insert categories and extract treatments
  const seedCategory = async (colName, items) => {
    for (const item of items) {
      const { treatments, ...docData } = item
      // add category item
      const docRef = await addDoc(collection(db, colName), { ...docData, createdAt: serverTimestamp() })
      
      // add treatments
      if (Array.isArray(treatments) && treatments.length > 0) {
        for (const t of treatments) {
          await addDoc(collection(db, 'treatments'), {
            ...t,
            parentId: docRef.id,
            parentCollection: colName,
            createdAt: serverTimestamp()
          })
        }
      }
    }
  }

  // 3. Seed data
  await seedCategory('hospitalDepartments', hospitalDepartments)
  await seedCategory('surgicalServices', surgicalServices)
  await seedCategory('criticalCare', criticalCare)
  await seedCategory('diagnostics', diagnostics)
  await seedCategory('patientFacilities', patientFacilities)

  console.log('✅ 5 Categories & Treatments seeded!')
}

export async function seedFirestore() {
  try {
    console.log('Seeding doctors...')
    const snapDocs = await getDocs(collection(db, 'doctors'))
    await Promise.all(snapDocs.docs.map(d => deleteDoc(d.ref)))
    for (const doc of seedDoctors) {
      await addDoc(collection(db, 'doctors'), { ...doc, createdAt: serverTimestamp() })
    }

    console.log('Seeding blogs...')
    const snapBlogs = await getDocs(collection(db, 'blogs'))
    await Promise.all(snapBlogs.docs.map(d => deleteDoc(d.ref)))
    for (const blog of seedBlogs) {
      await addDoc(collection(db, 'blogs'), { ...blog, createdAt: serverTimestamp() })
    }

    console.log('✅ Seeding complete!')
  } catch (err) {
    console.error('Seeding error:', err)
  }
}

// Non-destructive: push only NEW departments and critical care entries to Firestore.
// Safe to run multiple times — checks slug before inserting to avoid duplicates.
export async function seedNewDepts() {
  const newHospitalDepts = hospitalDepartments.filter(d =>
    ['consultant-physician', 'general-physician', 'critical-care-medicine'].includes(d.slug)
  )
  const newCriticalCareEntries = criticalCare.filter(d =>
    ['critical-care-physician-consultation'].includes(d.slug)
  )

  let added = 0
  let skipped = 0

  const pushCategory = async (colName, items) => {
    for (const item of items) {
      const existing = await getDocs(
        query(collection(db, colName), where('slug', '==', item.slug))
      )
      if (!existing.empty) {
        console.log('Skipping existing: ' + item.name)
        skipped++
        continue
      }

      const { treatments, ...docData } = item
      const docRef = await addDoc(collection(db, colName), {
        ...docData,
        createdAt: serverTimestamp(),
      })

      if (Array.isArray(treatments) && treatments.length > 0) {
        for (const t of treatments) {
          await addDoc(collection(db, 'treatments'), {
            ...t,
            parentId: docRef.id,
            parentCollection: colName,
            createdAt: serverTimestamp(),
          })
        }
      }

      console.log('Added: ' + item.name + ' (' + (treatments?.length || 0) + ' treatments)')
      added++
    }
  }

  await pushCategory('hospitalDepartments', newHospitalDepts)
  await pushCategory('criticalCare', newCriticalCareEntries)

  console.log('Done! Added: ' + added + ', Skipped: ' + skipped)
  return { added, skipped }
}

export async function syncAyushmanFacility() {
  const ayushmanItem = patientFacilities.find(f => f.slug === 'ayushman-bharat-card')
  if (!ayushmanItem) {
    throw new Error('Ayushman Bharat facility data not found in seed file')
  }

  const q = query(collection(db, 'patientFacilities'), where('slug', '==', 'ayushman-bharat-card'))
  const snap = await getDocs(q)

  let docId
  const { treatments, ...docData } = ayushmanItem

  if (snap.empty) {
    const docRef = await addDoc(collection(db, 'patientFacilities'), {
      ...docData,
      createdAt: serverTimestamp()
    })
    docId = docRef.id
  } else {
    docId = snap.docs[0].id
    await updateDoc(doc(db, 'patientFacilities', docId), {
      ...docData,
      updatedAt: serverTimestamp()
    })
  }

  const tQ = query(collection(db, 'treatments'), where('parentId', '==', docId))
  const tSnap = await getDocs(tQ)

  for (const d of tSnap.docs) {
    await deleteDoc(d.ref)
  }

  if (Array.isArray(treatments) && treatments.length > 0) {
    for (const t of treatments) {
      await addDoc(collection(db, 'treatments'), {
        ...t,
        parentId: docId,
        parentCollection: 'patientFacilities',
        createdAt: serverTimestamp()
      })
    }
  }
}

