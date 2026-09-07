import { useState, useEffect } from 'react'
import { useParams, Link, useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import {
  FiArrowLeft, FiClock, FiCalendar, FiCheck, FiActivity,
  FiUser, FiArrowRight, FiMapPin, FiInfo, FiChevronRight,
  FiHeart, FiShield, FiPhoneCall
} from 'react-icons/fi'
import SEO from '../components/SEO'
import AyushmanBanner from '../components/home/AyushmanBanner'
import { getCategoryItemBySlug as getDepartmentBySlug } from '../services/categories'
import { useDoctors } from '../hooks/useDoctors'
import { seedDoctors } from '../data/seedData'
import { getInitials } from '../utils/helpers'
import { siteData } from '../data/siteData'

const getDepartmentTheme = (slug) => {
  const themes = {
    'cardiology': {
      bg: 'bg-red-50/50',
      tagline: 'text-red-650',
      iconColor: 'text-red-600',
      btn: 'bg-red-700 hover:bg-red-800 focus:ring-red-550 text-white',
      border: 'border-red-200',
      gradientTo: 'to-red-50/20'
    },
    'pulmonology': {
      bg: 'bg-blue-50/50',
      tagline: 'text-blue-600',
      iconColor: 'text-blue-600',
      btn: 'bg-blue-700 hover:bg-blue-800 focus:ring-blue-550 text-white',
      border: 'border-blue-200',
      gradientTo: 'to-blue-50/20'
    },
    'gastroenterology': {
      bg: 'bg-emerald-50/50',
      tagline: 'text-emerald-600',
      iconColor: 'text-emerald-600',
      btn: 'bg-emerald-700 hover:bg-emerald-800 focus:ring-emerald-550 text-white',
      border: 'border-emerald-200',
      gradientTo: 'to-emerald-50/20'
    },
    'orthopedics': {
      bg: 'bg-amber-50/50',
      tagline: 'text-amber-600',
      iconColor: 'text-amber-600',
      btn: 'bg-amber-700 hover:bg-amber-800 focus:ring-amber-550 text-white',
      border: 'border-amber-200',
      gradientTo: 'to-amber-50/20'
    },
    'neurology': {
      bg: 'bg-indigo-50/50',
      tagline: 'text-indigo-600',
      iconColor: 'text-indigo-600',
      btn: 'bg-indigo-700 hover:bg-indigo-800 focus:ring-indigo-550 text-white',
      border: 'border-indigo-200',
      gradientTo: 'to-indigo-50/20'
    },
    'nephrology': {
      bg: 'bg-cyan-50/50',
      tagline: 'text-cyan-600',
      iconColor: 'text-cyan-600',
      btn: 'bg-cyan-700 hover:bg-cyan-800 focus:ring-cyan-550 text-white',
      border: 'border-cyan-200',
      gradientTo: 'to-cyan-50/20'
    },
    'critical-care': {
      bg: 'bg-rose-50/50',
      tagline: 'text-rose-600',
      iconColor: 'text-rose-600',
      btn: 'bg-rose-700 hover:bg-rose-800 focus:ring-rose-550 text-white',
      border: 'border-rose-200',
      gradientTo: 'to-rose-50/20'
    },
    'pediatrics': {
      bg: 'bg-teal-50/50',
      tagline: 'text-teal-600',
      iconColor: 'text-teal-600',
      btn: 'bg-teal-700 hover:bg-teal-800 focus:ring-teal-550 text-white',
      border: 'border-teal-200',
      gradientTo: 'to-teal-50/20'
    },
    'ayushman-bharat-card': {
      bg: 'bg-emerald-50/50',
      tagline: 'text-emerald-700 font-black',
      iconColor: 'text-emerald-600',
      btn: 'bg-emerald-800 hover:bg-emerald-900 focus:ring-emerald-600 text-white',
      border: 'border-emerald-200',
      gradientTo: 'to-emerald-50/30'
    }
  };

  return themes[slug] || {
    bg: 'bg-primary-50/40',
    tagline: 'text-primary-600',
    iconColor: 'text-primary-600',
    btn: 'bg-primary-600 hover:bg-primary-700 focus:ring-primary-550 text-white',
    border: 'border-primary-200',
    gradientTo: 'to-primary-50/10'
  };
};

const getSpecialistLabel = (name = '') => {
  const lower = name.toLowerCase();
  if (lower.includes('cardio')) return 'Cardiologists';
  if (lower.includes('neuro')) return 'Neurologists';
  if (lower.includes('pediat')) return 'Pediatricians';
  if (lower.includes('ortho')) return 'Orthopedicians';
  if (lower.includes('gastro')) return 'Gastroenterologists';
  if (lower.includes('gyne') || lower.includes('obstet')) return 'Gynecologists';
  if (lower.includes('ophthal') || lower.includes('eye')) return 'Ophthalmologists';
  if (lower.includes('dent') || lower.includes('tooth')) return 'Dentists';
  if (lower.includes('surg')) return 'Surgeons';
  return 'Specialists';
};

export default function ServiceDetail() {
  const { slug } = useParams()
  const navigate = useNavigate()
  const [department, setDepartment] = useState(null)
  const [loading, setLoading] = useState(true)
  const { doctors } = useDoctors()

  useEffect(() => {
    setLoading(true)
    getDepartmentBySlug(slug)
      .then((data) => {
        if (!data) navigate('/hospital-departments', { replace: true })
        else setDepartment(data)
      })
      .finally(() => setLoading(false))
  }, [slug])

  if (loading) {
    return (
      <div className="section-padding container-max">
        <div className="animate-pulse space-y-8">
          <div className="h-48 bg-slate-100 rounded-2xl" />
          <div className="h-6 bg-slate-100 rounded w-1/3" />
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-6">
              {[...Array(3)].map((_, i) => <div key={i} className="h-40 bg-slate-100 rounded-2xl" />)}
            </div>
            <div className="h-96 bg-slate-100 rounded-2xl" />
          </div>
        </div>
      </div>
    )
  }

  if (!department) return null

  const isAyushman = (department.slug === 'ayushman-bharat-card' || slug === 'ayushman-bharat-card')
  const treatments = Array.isArray(department.treatments) ? department.treatments : []
  const features = Array.isArray(department.features) ? department.features : []
  
  let relatedDoctors = []
  if (isAyushman) {
    // Strictly filter Orthopedics and General/Laparoscopic Surgeons only
    // Live Firestore database doctors take highest priority
    const dbDoctors = Array.isArray(doctors) ? doctors : []
    const pool = [...dbDoctors, ...seedDoctors]
    
    const matched = []
    const seenNames = new Set()

    for (const d of pool) {
      const name = (d.name || '').toLowerCase().trim()
      if (seenNames.has(name)) continue

      const specialty = (d.specialty || '').toLowerCase()
      const specs = (Array.isArray(d.specialties) ? d.specialties : []).map((s) => s.toLowerCase())

      // Explicit whitelist for exact empanelled surgeons
      const isWhitelisted = 
        name.includes('ankit pranjal') ||
        name.includes('r. k. prasad') || 
        name.includes('rk prasad') || 
        name.includes('prasad') || 
        name.includes('amarnath') || 
        name.includes('nirmal')

      // Strict exclusions
      const isExcluded = 
        specialty.includes('ent') || 
        specialty.includes('dental') || 
        specialty.includes('maxillo') || 
        specialty.includes('nephro') || 
        specialty.includes('neuro') || 
        specialty.includes('physician') ||
        specialty.includes('critical care')

      const isOrthoOrGeneral = 
        specialty.includes('ortho') || 
        specialty.includes('general surgeon') || 
        specialty.includes('laparoscopic') ||
        specs.includes('orthopedics') ||
        specs.includes('general surgery')

      if (isWhitelisted || (!isExcluded && isOrthoOrGeneral)) {
        // If from seed, check if a live Firestore document exists for this doctor and merge with database profile
        const dbMatch = dbDoctors.find((dbDoc) => (dbDoc.name || '').toLowerCase().trim() === name)
        const finalDoc = dbMatch ? { ...d, ...dbMatch, image: dbMatch.image || d.image } : d
        matched.push(finalDoc)
        seenNames.add(name)
      }
    }
    relatedDoctors = matched
  } else {
    const byId = doctors.filter((d) => (department.doctorIds || []).includes(d.id))
    const byName = doctors.filter((d) =>
      d.specialty === department.name ||
      (Array.isArray(d.specialties) && d.specialties.includes(department.name))
    )
    relatedDoctors = [...new Map([...byId, ...byName].map((d) => [d.id || d.name, d])).values()]
  }

  const theme = getDepartmentTheme(department.slug || slug)

  return (
    <div className="bg-white min-h-screen font-sans text-gray-800">
      <SEO
        title={`${department.name} - ${siteData.hospitalName}`}
        description={`${department.description} Recovery: ${department.recoveryTime || 'Varies'}.`}
        keywords={[department.name, `${department.name} Patna`, `${department.name} hospital Bihar`, ...(department.features || [])]}
      />

      <AyushmanBanner />

      {/* Hero Section — Dynamic Color-Themed Reference Mockup */}
      <section className="relative border-b border-gray-200 py-16 md:py-20 lg:py-24 px-6 md:px-12 overflow-hidden bg-slate-50 min-h-[480px] lg:min-h-[580px] flex items-center">
        {/* Background Image on Right with Fade Overlay */}
        {department.heroImage ? (
          <div className="absolute top-0 right-0 bottom-0 w-full lg:w-[55%] z-0 hidden lg:block">
            <img 
              src={department.heroImage} 
              alt={department.name} 
              className="w-full h-full object-cover animate-pulse-slow animate-float" 
            />
            {/* Fade overlay from left to right */}
            <div className="absolute inset-0 bg-gradient-to-r from-slate-50 via-slate-50/35 to-transparent z-10" />
          </div>
        ) : (
          <div className="absolute inset-y-0 right-0 w-1/2 bg-gradient-to-l from-primary-50/20 to-transparent z-0 hidden lg:block" />
        )}

        {/* Subtle grid pattern background */}
        <div className="absolute inset-0 opacity-[0.02] pointer-events-none z-0" 
             style={{ backgroundImage: 'radial-gradient(#000 1px, transparent 1px)', backgroundSize: '32px 32px' }} />
        
        <div className="container-max relative z-20 w-full">
          <Link to="/hospital-departments" className="inline-flex items-center gap-2 text-primary-600 hover:text-primary-800 text-sm font-semibold mb-6 transition-colors">
            <FiArrowLeft className="w-4 h-4" /> All Departments
          </Link>
          
          <div className={`w-full ${department.heroImage ? 'lg:max-w-[55%] xl:max-w-[60%]' : 'max-w-4xl'}`}>
            {/* Tagline / Category details */}
            <p className={`font-extrabold uppercase tracking-widest text-xs md:text-sm mb-3 ${theme.tagline}`}>
              {isAyushman 
                ? 'GOVERNMENT APPROVED · 100% CASHLESS SURGERY (PM-JAY)'
                : 'COMPASSIONATE CARE. POWERED BY INNOVATION.'}
            </p>

            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-black text-navy-800 mb-4 leading-tight tracking-tight">
              {isAyushman ? (
                <>
                  Ayushman Bharat <span className="text-emerald-700 font-hindi">(PM-JAY)</span> Empanelled Hospital
                </>
              ) : (
                <>
                  Experts in <span className={theme.tagline}>{department.name.replace(/(Department of|Services|Service)/i, '').trim()}</span>. Focused on You.
                </>
              )}
            </h1>

            <p className="text-gray-600 text-base md:text-lg max-w-2xl leading-relaxed font-light mb-6">
              {isAyushman
                ? 'Free cashless surgical hospitalization up to ₹5,00,000 per family per year, specifically approved and empanelled for Orthopedics (हड्डी एवं जोड़ रोग) and General & Laparoscopic Surgery (सामान्य एवं दूरबीन सर्जरी).'
                : department.description}
            </p>

            {/* Mobile Hero Image */}
            {department.heroImage && (
              <div className="w-full h-64 md:h-80 rounded-2xl overflow-hidden mb-6 block lg:hidden shadow-sm border border-gray-150">
                <img 
                  src={department.heroImage} 
                  alt={department.name} 
                  className="w-full h-full object-cover" 
                />
              </div>
            )}

            {/* Feature row matching mockup details */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 py-6 border-t border-b border-gray-200/80 my-8">
              <div className="flex flex-col items-start gap-1 pr-2 md:border-r border-gray-200 last:border-r-0">
                <FiActivity className={`w-6 h-6 mb-1 ${theme.iconColor}`} />
                <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">
                  {isAyushman ? 'Coverage' : 'Advanced'}
                </span>
                <span className="text-sm font-extrabold text-[#1a2e40] -mt-1">
                  {isAyushman ? '₹5 Lakhs Free' : 'Technology'}
                </span>
              </div>
              <div className="flex flex-col items-start gap-1 pr-2 md:border-r border-gray-200 last:border-r-0">
                <FiUser className={`w-6 h-6 mb-1 ${theme.iconColor}`} />
                <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">
                  {isAyushman ? 'Specialty 1' : 'Expert'}
                </span>
                <span className="text-sm font-extrabold text-[#1a2e40] -mt-1">
                  {isAyushman ? 'Orthopedics (हड्डी)' : getSpecialistLabel(department.name)}
                </span>
              </div>
              <div className="flex flex-col items-start gap-1 pr-2 md:border-r border-gray-200 last:border-r-0">
                <FiHeart className={`w-6 h-6 mb-1 ${theme.iconColor}`} />
                <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">
                  {isAyushman ? 'Specialty 2' : 'Comprehensive'}
                </span>
                <span className="text-sm font-extrabold text-[#1a2e40] -mt-1">
                  {isAyushman ? 'General Surgery' : 'Care'}
                </span>
              </div>
              <div className="flex flex-col items-start gap-1 pr-2 last:border-r-0">
                <FiShield className={`w-6 h-6 mb-1 ${theme.iconColor}`} />
                <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">
                  {isAyushman ? 'Hospitalization' : 'Patient First'}
                </span>
                <span className="text-sm font-extrabold text-[#1a2e40] -mt-1">
                  {isAyushman ? '100% Cashless' : 'Approach'}
                </span>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4">
              <Link
                to={`/book-appointment?dept=${encodeURIComponent(department.name)}`}
                className={`inline-flex items-center gap-2 font-bold text-xs tracking-wider uppercase px-8 py-4 rounded-md shadow-md transition-all duration-200 active:scale-95 ${theme.btn}`}
              >
                Book an Appointment <FiArrowRight className="w-4 h-4" />
              </Link>
              
              {/* Category indicator / badge */}
              {department.category && (
                <span className="text-xs font-bold uppercase tracking-wider text-gray-500 bg-gray-100 px-3 py-2 rounded-md">
                  {department.category}
                </span>
              )}
              {department.available && (
                <span className="text-xs font-bold uppercase tracking-wider text-gray-500 bg-gray-100 px-3 py-2 rounded-md flex items-center gap-1.5">
                   <FiClock className="w-3.5 h-3.5" /> {department.available}
                </span>
              )}
            </div>

          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12 md:py-16">
        <div className="container-max">
          <div className="grid lg:grid-cols-3 gap-10 xl:gap-16">

            {/* Left — Main Content Area */}
            <div className="lg:col-span-2 space-y-12">

              {/* Specialized Ayushman Bharat Empanelled Verticals */}
              {(department.slug === 'ayushman-bharat-card' || slug === 'ayushman-bharat-card') && (
                <div className="space-y-8 bg-gradient-to-br from-emerald-50/80 via-teal-50/40 to-emerald-50/80 p-6 md:p-8 rounded-3xl border border-emerald-200 shadow-sm">
                  <div>
                    <div className="flex flex-wrap items-center gap-2 mb-3">
                      <span className="bg-amber-400 text-emerald-950 text-[10px] font-black tracking-widest uppercase px-2.5 py-1 rounded border border-amber-300">
                        OFFICIALLY EMPANELLED SPECIALTIES · PM-JAY
                      </span>
                      <span className="bg-emerald-800 text-white text-[10px] font-bold tracking-wider uppercase px-2 py-1 rounded">
                        100% CASHLESS UP TO ₹5,00,000
                      </span>
                    </div>
                    <h2 className="text-2xl md:text-3xl font-heading font-black text-emerald-950">
                      Surgeries Covered Under Ayushman Bharat
                    </h2>
                    <p className="text-emerald-800 text-sm mt-1 leading-relaxed">
                      Eligible cardholders can receive 100% free surgical care, modular OT hospitalization, certified implants, medicines, and post-operative recovery up to ₹5,00,000 per family per year.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Vertical 1: Orthopedics */}
                    <div className="bg-white p-6 rounded-2xl border border-emerald-200/80 shadow-sm hover:shadow-md transition-all space-y-4 flex flex-col justify-between">
                      <div className="space-y-3">
                        <div className="flex items-center gap-3">
                          <span className="text-3xl">🦴</span>
                          <div>
                            <h3 className="font-heading font-black text-lg text-emerald-950">Orthopedic Surgery</h3>
                            <span className="text-xs text-amber-700 font-bold font-hindi">हड्डी एवं जोड़ प्रत्यारोपण</span>
                          </div>
                        </div>
                        <p className="text-xs text-gray-600 leading-relaxed">
                          Complete cashless joint replacement and emergency trauma procedures with imported quality implants and post-operative physiotherapy.
                        </p>
                        <ul className="space-y-2 text-xs text-gray-700 font-medium">
                          <li className="flex items-center gap-2"><FiCheck className="text-emerald-600 w-4 h-4 flex-shrink-0" /> Total Knee Replacement (TKR)</li>
                          <li className="flex items-center gap-2"><FiCheck className="text-emerald-600 w-4 h-4 flex-shrink-0" /> Total Hip Replacement (THR)</li>
                          <li className="flex items-center gap-2"><FiCheck className="text-emerald-600 w-4 h-4 flex-shrink-0" /> Complex Fracture Fixation & 24/7 Trauma</li>
                          <li className="flex items-center gap-2"><FiCheck className="text-emerald-600 w-4 h-4 flex-shrink-0" /> Arthroscopic Ligament (ACL/Meniscus) Care</li>
                          <li className="flex items-center gap-2"><FiCheck className="text-emerald-600 w-4 h-4 flex-shrink-0" /> Spinal Decompression & Disc Surgery</li>
                        </ul>
                      </div>
                      <Link to="/services/orthopedics" className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-700 hover:text-emerald-900 pt-2 border-t border-gray-100">
                        View Orthopedics Department <FiChevronRight />
                      </Link>
                    </div>

                    {/* Vertical 2: General Surgery */}
                    <div className="bg-white p-6 rounded-2xl border border-emerald-200/80 shadow-sm hover:shadow-md transition-all space-y-4 flex flex-col justify-between">
                      <div className="space-y-3">
                        <div className="flex items-center gap-3">
                          <span className="text-3xl">✂️</span>
                          <div>
                            <h3 className="font-heading font-black text-lg text-emerald-950">General & Laparoscopic Surgery</h3>
                            <span className="text-xs text-amber-700 font-bold font-hindi">सामान्य एवं दूरबीन विधि सर्जरी</span>
                          </div>
                        </div>
                        <p className="text-xs text-gray-600 leading-relaxed">
                          Advanced minimally invasive keyhole operations with minimal blood loss, minimal scarring, and quick 24–48 hour hospital discharge.
                        </p>
                        <ul className="space-y-2 text-xs text-gray-700 font-medium">
                          <li className="flex items-center gap-2"><FiCheck className="text-emerald-600 w-4 h-4 flex-shrink-0" /> Laparoscopic Gallbladder Stone Removal</li>
                          <li className="flex items-center gap-2"><FiCheck className="text-emerald-600 w-4 h-4 flex-shrink-0" /> Laparoscopic & Open Hernia Repair</li>
                          <li className="flex items-center gap-2"><FiCheck className="text-emerald-600 w-4 h-4 flex-shrink-0" /> Emergency Appendectomy</li>
                          <li className="flex items-center gap-2"><FiCheck className="text-emerald-600 w-4 h-4 flex-shrink-0" /> Stapler & Laser Surgery for Piles/Fistula</li>
                          <li className="flex items-center gap-2"><FiCheck className="text-emerald-600 w-4 h-4 flex-shrink-0" /> Gastrointestinal & Soft Tissue Surgery</li>
                        </ul>
                      </div>
                      <Link to="/services/general-surgery" className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-700 hover:text-emerald-900 pt-2 border-t border-gray-100">
                        View General Surgery Department <FiChevronRight />
                      </Link>
                    </div>
                  </div>

                  {/* Documents & Helpdesk Box */}
                  <div className="bg-emerald-950 text-white p-6 rounded-2xl flex flex-col md:flex-row items-center justify-between gap-6 border border-emerald-800/60 shadow-inner">
                    <div className="space-y-1 text-center md:text-left">
                      <span className="text-xs text-amber-300 font-bold uppercase tracking-wider">Required Documents for Instant Cashless Admission</span>
                      <h4 className="text-lg font-bold text-white">Ayushman Card / E-Card + Aadhaar Card</h4>
                      <p className="text-xs text-emerald-200 font-light">Visit our 24/7 Ayushman Bharat Helpdesk counter at the main hospital entrance for instant verification.</p>
                    </div>
                    <div className="flex flex-wrap gap-3">
                      <a href={`tel:${siteData.contact.phone}`} className="px-5 py-3 bg-amber-400 hover:bg-amber-300 text-emerald-950 text-xs font-black rounded-xl transition-all shadow-md flex items-center gap-2">
                        <FiPhoneCall /> Call: {siteData.contact.phone}
                      </a>
                    </div>
                  </div>

                  {/* Empanelled Doctors Grid */}
                  <div className="space-y-4 pt-4 border-t border-emerald-200/80">
                    <div>
                      <span className="text-[10px] font-black text-emerald-800 uppercase tracking-widest bg-emerald-100/80 px-2.5 py-0.5 rounded border border-emerald-200 inline-block mb-1">
                        CLINICAL TEAM · SURGEONS
                      </span>
                      <h3 className="font-heading font-black text-xl text-emerald-950">
                        Empanelled Orthopedic & General Surgery Specialists
                      </h3>
                      <p className="text-xs text-gray-600">
                        Consult our senior empanelled surgeons for 100% cashless PM-JAY treatment, consultations, and operations.
                      </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {relatedDoctors.map((doc) => {
                        const isOrtho = (doc.specialty || '').toLowerCase().includes('ortho') || 
                          (Array.isArray(doc.specialties) && doc.specialties.some(s => s.toLowerCase().includes('ortho')))
                        return (
                          <div key={doc.id || doc.name} className="bg-white p-5 rounded-2xl border border-emerald-200/80 shadow-sm hover:shadow-md transition-all flex flex-col justify-between space-y-4">
                            <div className="flex items-start gap-4">
                              <div className="relative flex-shrink-0">
                                {doc.image ? (
                                  <img src={doc.image} alt={doc.name} className="w-14 h-14 rounded-2xl object-cover border border-emerald-100 shadow-sm" />
                                ) : (
                                  <div className="w-14 h-14 rounded-2xl bg-emerald-50 flex items-center justify-center border border-emerald-200">
                                    <span className="font-bold text-emerald-800 text-lg">{getInitials(doc.name)}</span>
                                  </div>
                                )}
                                <span className="absolute -top-1.5 -right-1.5 text-base">
                                  {isOrtho ? '🦴' : '✂️'}
                                </span>
                              </div>
                              <div className="flex-1 min-w-0">
                                <span className={`text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded inline-block mb-1 ${
                                  isOrtho ? 'bg-amber-100 text-amber-900 border border-amber-200' : 'bg-teal-100 text-teal-900 border border-teal-200'
                                }`}>
                                  {isOrtho ? 'Orthopedics' : 'General & Laparoscopic Surgery'}
                                </span>
                                <h4 className="font-heading font-black text-navy-950 text-base leading-tight">
                                  {doc.name}
                                </h4>
                                <p className="text-xs text-gray-500 mt-0.5">{doc.qualification}</p>
                                <p className="text-[11px] font-bold text-emerald-700 mt-1">
                                  {doc.specialty}
                                </p>
                              </div>
                            </div>

                            <div className="pt-3 border-t border-gray-100 flex items-center justify-between gap-3">
                              <div className="text-[11px] text-gray-500 font-medium">
                                <span className="font-bold text-emerald-800">100% Cashless</span> Surgery with Card
                              </div>
                              <Link
                                to={`/book-appointment?dept=${encodeURIComponent(isOrtho ? 'Orthopedics' : 'General Surgery')}&doctor=${encodeURIComponent(doc.name)}`}
                                className="px-4 py-2 bg-emerald-800 hover:bg-emerald-900 text-white text-xs font-bold rounded-lg transition-colors flex items-center gap-1.5 shadow-sm"
                              >
                                <FiCalendar className="w-3.5 h-3.5" /> Book Appointment
                              </Link>
                            </div>
                          </div>
                        )
                      })}
                    </div>
                  </div>
                </div>
              )}

              {/* Department Overview */}
              {department.longDescription && (
                <div className="prose max-w-none">
                  <h2 className="flex items-center gap-3 text-2xl font-heading font-bold text-navy-900 mb-6 pb-2 border-b border-gray-100">
                    <FiInfo className="text-primary-500 w-6 h-6" /> Overview
                  </h2>
                  <div className="text-gray-700 text-lg leading-relaxed space-y-6 font-light">
                    {department.longDescription.split('\\n').filter(p => p.trim()).map((paragraph, i) => (
                      <p key={i}>{paragraph}</p>
                    ))}
                  </div>
                </div>
              )}

              {/* Key Features */}
              {features.length > 0 && (
                <div>
                  <h2 className="flex items-center gap-3 text-2xl font-heading font-bold text-navy-900 mb-6 pb-2 border-b border-gray-100">
                    <FiCheck className="text-primary-500 w-6 h-6" /> Key Highlights
                  </h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-8">
                    {features.map((f, i) => (
                      <div key={i} className="flex items-start gap-3">
                        <div className="mt-1 flex-shrink-0 w-5 h-5 rounded-full bg-primary-50 flex items-center justify-center">
                          <div className="w-1.5 h-1.5 rounded-full bg-primary-600" />
                        </div>
                        <span className="text-gray-700 text-base leading-relaxed">{f}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Treatments List */}
              {treatments.length > 0 && (
                <div>
                  <h2 className="flex items-center gap-3 text-2xl font-heading font-bold text-navy-900 mb-6 pb-2 border-b border-gray-100">
                    <FiActivity className="text-primary-500 w-6 h-6" /> Treatments & Procedures
                  </h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {treatments.map((t, i) => (
                      <Link
                        key={i}
                        to={`/services/${department.slug}/treatment/${t.slug || i}`}
                        className="group p-5 bg-white border border-gray-200 hover:border-primary-300 rounded-xl transition-all duration-200 hover:shadow-md"
                      >
                        <h3 className="font-semibold text-navy-900 text-base group-hover:text-primary-600 transition-colors pr-4">{t.name}</h3>
                        
                        <div className="flex items-center justify-between mt-3">
                          {t.duration ? (
                            <span className="flex items-center gap-1.5 text-xs text-gray-500">
                              <FiClock className="w-3.5 h-3.5" /> {t.duration}
                            </span>
                          ) : <span />}
                          <span className="text-xs font-semibold text-primary-600 flex items-center gap-1 group-hover:gap-2 transition-all">
                            Details <FiChevronRight />
                          </span>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Right Sidebar — Specialists */}
            <div className="space-y-8 lg:sticky lg:top-24 self-start">
              <div className="bg-slate-50 rounded-2xl border border-gray-200 p-6 md:p-8">
                <h3 className="font-heading font-bold text-xl text-navy-900 mb-2">
                  {isAyushman ? 'Ayushman Empanelled Surgeons' : 'Our Specialists'}
                </h3>
                <p className="text-sm text-gray-600 mb-6">
                  {isAyushman 
                    ? 'Consult our senior Orthopedic & General Surgeons for 100% cashless PM-JAY treatment.' 
                    : `Book a direct consultation with our experts in ${department.name}.`}
                </p>
                
                {relatedDoctors.length > 0 ? (
                  <div className="space-y-6">
                    {relatedDoctors.map((doc) => (
                      <div key={doc.id} className="bg-white rounded-xl border border-gray-200 p-4 shadow-sm hover:shadow-md transition-shadow">
                        <div className="flex items-start gap-4 mb-4">
                          <div className="relative flex-shrink-0">
                            {doc.image ? (
                              <img src={doc.image} alt={doc.name} className="w-14 h-14 rounded-full object-cover border border-gray-100" />
                            ) : (
                              <div className="w-14 h-14 rounded-full bg-slate-100 flex items-center justify-center border border-gray-200">
                                <span className="font-bold text-gray-500 text-lg">{getInitials(doc.name)}</span>
                              </div>
                            )}
                            <span className="absolute bottom-0 right-0 w-3.5 h-3.5 bg-green-500 border-2 border-white rounded-full" />
                          </div>
                          
                          <div className="flex-1 min-w-0 pt-1">
                            <Link to={`/doctors/${doc.slug || doc.id}`} className="font-bold text-navy-900 text-base truncate hover:text-primary-600 transition-colors block">
                              {doc.name}
                            </Link>
                            <p className="text-xs text-gray-500 mt-0.5 truncate">{doc.qualification}</p>
                            {doc.experience && (
                              <p className="text-[11px] font-semibold text-primary-600 mt-1 uppercase tracking-wider">{doc.experience} Exp</p>
                            )}
                          </div>
                        </div>

                        {/* Direct Booking Button for this Doctor */}
                        <Link
                          to={`/book-appointment?dept=${encodeURIComponent(department.name)}&doctor=${encodeURIComponent(doc.name)}`}
                          className="w-full flex items-center justify-center gap-2 bg-navy-900 text-white font-semibold text-sm py-2.5 rounded-lg hover:bg-primary-600 transition-colors"
                        >
                          <FiCalendar className="w-4 h-4" /> Book Appointment
                        </Link>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="text-center py-6 bg-white rounded-xl border border-gray-200">
                    <FiUser className="w-8 h-8 text-gray-300 mx-auto mb-2" />
                    <p className="text-sm text-gray-500">No specialists currently assigned.</p>
                  </div>
                )}
                
                {/* Fallback general booking if they just want the department */}
                <div className="mt-6 pt-6 border-t border-gray-200">
                  <p className="text-xs text-gray-500 text-center mb-3">Not sure who to see?</p>
                  <Link
                    to={`/book-appointment?dept=${encodeURIComponent(department.name)}&from=/services/${department.slug}`}
                    className="w-full flex items-center justify-center gap-2 bg-white border border-gray-300 text-gray-700 font-bold text-sm py-3 rounded-lg hover:bg-gray-50 transition-colors"
                  >
                    General Department Booking
                  </Link>
                </div>
              </div>
            </div>
            
          </div>
        </div>
      </section>
    </div>
  )
}
