import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import {
  FiHeart, FiTarget, FiEye,
  FiCheckCircle, FiPhone, FiCalendar, FiArrowRight,
  FiShield, FiStar,
} from 'react-icons/fi'
import SEO from '../components/SEO'
import { siteData } from '../data/siteData'

export default function About() {
  return (
    <>
      <SEO
        title={`About Us — ${siteData.name}`}
        description={`Learn about Sarvada Hospital (A Unit of Servada Hospito Care Pvt. Ltd.) in Kankarbagh, Patna — an ISO 9001:2020 certified hospital offering advanced laparoscopic surgery, ICU, ICCU, dialysis, orthopedic care, and multi-specialty treatment.`}
        keywords={[
          'about Sarvada Hospital Patna',
          'Sarvada Hospital Kankarbagh',
          'laparoscopic surgeon Patna',
          'multispeciality hospital Patna Bihar',
          'dialysis centre Patna',
          'icu iccu hospital Patna',
          'outstation patient care Patna',
          'patients from Nepal',
          'patients from Jharkhand',
          'patients from UP'
        ]}
      />

      <main className="flex-1 bg-white">
        {/* ── Hero ──────────────────────────────────────────────── */}
        <section className="relative min-h-[75vh] flex items-center overflow-hidden py-16 md:py-24">
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary-100/60 rounded-full blur-[120px]"></div>
            <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-accent-100/40 rounded-full blur-[100px]"></div>
          </div>
          
          <div className="container-max relative z-10">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-primary-600 font-bold text-sm tracking-widest uppercase mb-3">
                  Patna's Leading Multi-specialty Hospital
                </motion.p>
                <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="font-heading text-4xl md:text-5xl lg:text-[3.5rem] font-black text-navy-800 leading-[1.1] mb-5 tracking-tight">
                  Advanced Surgery. <span className="text-primary-600">Expert Care.</span>
                </motion.h1>
                <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="inline-flex items-center gap-2 bg-white border border-primary-200 text-primary-800 text-sm font-semibold px-4 py-2 rounded-full shadow-sm mb-5">
                  <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse flex-shrink-0"></span>Serving Patna — Expert Laparoscopic & Multi-specialty Care
                </motion.div>
                <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} className="text-gray-600 text-base md:text-lg leading-relaxed mb-7 max-w-xl">
                  Sarvada Hospital (A Unit of Servada Hospito Care Pvt. Ltd.) is Patna's trusted multi-specialty healthcare centre, offering advanced laparoscopic surgery, ICU, ICCU, dialysis, orthopedic surgery, cardiology, neurosurgery, gynecology, and emergency care.
                </motion.p>
                
                <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }} className="flex flex-wrap gap-2.5 mb-8">
                  <div className="inline-flex items-center gap-1.5 text-xs font-semibold text-navy-700 bg-white border border-primary-100 px-3 py-1.5 rounded-full shadow-sm">
                    <FiCalendar className="w-3.5 h-3.5 text-primary-500" />Est. 2020
                  </div>
                  <div className="inline-flex items-center gap-1.5 text-xs font-semibold text-navy-700 bg-white border border-primary-100 px-3 py-1.5 rounded-full shadow-sm">
                    <FiShield className="w-3.5 h-3.5 text-primary-500" />MBBS, MD
                  </div>
                  <div className="inline-flex items-center gap-1.5 text-xs font-semibold text-navy-700 bg-white border border-primary-100 px-3 py-1.5 rounded-full shadow-sm">
                    <FiStar className="w-3.5 h-3.5 text-primary-500" />Patna's #1 Stone Surgeon
                  </div>
                </motion.div>
                
                <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }} className="flex flex-wrap gap-4">
                  <Link className="btn-accent btn-shimmer gap-2 text-base px-8 py-4 shadow-lg shadow-accent-500/25 font-bold rounded-xl" to="/book-appointment">
                    <FiCalendar /> Book Appointment
                  </Link>
                  <a href={`tel:${siteData.contact.phone}`} className="inline-flex items-center gap-2 px-8 py-4 bg-white hover:bg-primary-50 border-2 border-primary-200 text-primary-700 font-semibold rounded-xl transition-all duration-200 text-base shadow-sm">
                    <FiPhone /> Call Now
                  </a>
                </motion.div>
              </div>
              
              <motion.div initial={{ opacity: 0, x: 40 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.3 }} className="hidden lg:flex items-center justify-center relative">
                <div className="absolute w-[110%] h-[110%] bg-primary-100/25 rounded-full blur-[90px] -z-10"></div>
                <div className="relative w-full max-w-md">
                  <div className="relative rounded-3xl bg-gradient-to-br from-primary-50 via-white to-accent-50/60 border-2 border-primary-100/70 shadow-2xl shadow-primary-200/30 pt-6 pb-0 px-4">
                    <div className="absolute top-3 left-3 w-6 h-6 border-t-2 border-l-2 border-primary-400 rounded-tl-lg"></div>
                    <div className="absolute top-3 right-3 w-6 h-6 border-t-2 border-r-2 border-primary-400 rounded-tr-lg"></div>
                    <img
                      alt="Dr. Manmohan Suman"
                      className="w-full h-auto max-h-[460px] object-cover object-top rounded-2xl relative z-10"
                      src="https://firebasestorage.googleapis.com/v0/b/patna-lapro-stone-healthcare.firebasestorage.app/o/gallery%2F1780637150378_ChatGPT%20Image%20Jun%205%2C%202026%2C%2010_52_07%20AM.webp?alt=media&token=2757b4ff-274f-4fe7-8700-2668bc751dcc"
                    />
                    
                    <div className="absolute -bottom-16 left-3 right-3 z-20">
                      <div className="bg-white/90 backdrop-blur-md border border-primary-100 rounded-2xl shadow-xl px-5 py-4">
                        <div className="flex items-start justify-between gap-3 mb-3">
                          <div>
                            <h3 className="font-heading font-black text-base text-primary-900 leading-tight">Dr. Manmohan Suman</h3>
                            <p className="text-primary-600 font-bold text-[10px] tracking-wide uppercase mt-0.5">MBBS, MD</p>
                            <p className="text-gray-500 text-[11px] font-medium mt-0.5">Consultant Physician</p>
                          </div>
                          <div className="w-9 h-9 rounded-xl bg-amber-50 border border-amber-100 flex items-center justify-center text-amber-500 flex-shrink-0">
                            <FiStar className="w-4 h-4" />
                          </div>
                        </div>
                        <div className="h-px bg-gray-100 mb-3"></div>
                        <div className="grid grid-cols-3 divide-x divide-gray-100 text-center">
                          <div className="px-2">
                            <p className="font-heading font-black text-lg text-primary-700 leading-none">21</p>
                            <p className="text-[10px] text-gray-400 font-semibold mt-0.5">Yrs Exp.</p>
                          </div>
                          <div className="px-2">
                            <p className="font-heading font-black text-lg text-primary-700 leading-none">50K+</p>
                            <p className="text-[10px] text-gray-400 font-semibold mt-0.5">Patients</p>
                          </div>
                          <div className="px-2">
                            <p className="font-heading font-black text-lg text-primary-700 leading-none">10K+</p>
                            <p className="text-[10px] text-gray-400 font-semibold mt-0.5">Operations</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* ── Story ──────────────────────────────────────────────── */}
        <section className="section-padding bg-slate-50 border-t border-gray-100">
          <div className="container-max max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-white rounded-3xl p-8 sm:p-10 border border-gray-100 shadow-md relative overflow-hidden"
            >
              {/* Vertical accent bar */}
              <div className="absolute top-0 left-0 w-2 h-full bg-gradient-to-b from-primary-500 to-primary-700" />

              {/* Hospital Staff Image */}
              <div className="rounded-2xl overflow-hidden mb-6 -mx-2 sm:-mx-4">
                <img
                  src="https://firebasestorage.googleapis.com/v0/b/patna-lapro-stone-healthcare.firebasestorage.app/o/gallery%2F1780379448531_hospital_staff.webp?alt=media&token=571ebf7f-59e4-4698-986c-c4802076dfdd"
                  alt="Sarvada Hospital — Our Team"
                  className="w-full h-auto object-contain"
                />
              </div>
              
              <span className="inline-block bg-primary-100 text-primary-700 text-xs font-bold tracking-widest uppercase px-3 py-1.5 rounded-full mb-4">
                Our Story
              </span>
              
              <h2 className="font-heading text-3xl md:text-4xl font-black text-navy-800 leading-tight mb-6">
                Building Trust, <span className="text-primary-600">One Patient at a Time</span>
              </h2>
              
              <div className="space-y-4 text-gray-600 leading-relaxed text-base sm:text-lg">
                <p>
                  Sarvada Hospital was established at Anand Palace, Bypass Road, Changer, Kankarbagh, Patna with a focused mission — to bring world-class healthcare, advanced laparoscopic surgeries, and multi-specialty treatments to Bihar.
                </p>
                <p>
                  Led by <strong className="text-navy-800">Dr. Manmohan Suman</strong> (MBBS, MD), a senior Consultant Physician with years of clinical experience in internal medicine, critical care, and emergency care. His medical expertise is coupled with a genuine concern for his patients' well-being, supported by a staff dedicated to patient comfort and prompt attention.
                </p>
                <p>
                  We are proud to have served over <strong className="text-navy-800">50,000 satisfied patients</strong> and performed more than <strong className="text-navy-800">10,000 successful operations</strong>, backed by prestigious recognitions including over <strong className="text-navy-800">150 awards</strong>.
                </p>
                <p>
                  Today, our reputation extends far beyond Patna. We are the preferred healthcare destination for patients traveling from <strong className="text-navy-800">Nepal</strong>, neighboring states like <strong className="text-navy-800">Jharkhand</strong> and <strong className="text-navy-800">Uttar Pradesh (UP)</strong>, as well as all <strong className="text-navy-800">38 districts of Bihar</strong>, seeking trusted laparoscopic surgeries and liver, pancreas, and stone treatments.
                </p>
              </div>
              
              <div className="mt-8 flex flex-wrap gap-3">
                <div className="flex items-center gap-2 border rounded-full px-4 py-2 text-sm font-medium bg-blue-50 border-blue-200 text-blue-700">
                  <FiCheckCircle className="w-4 h-4" /> Laparoscopic Surgery
                </div>
                <div className="flex items-center gap-2 border rounded-full px-4 py-2 text-sm font-medium bg-primary-50 border-primary-200 text-primary-700">
                  <FiHeart className="w-4 h-4" /> Stone Treatment
                </div>
                <div className="flex items-center gap-2 border rounded-full px-4 py-2 text-sm font-medium bg-teal-50 border-teal-200 text-teal-700">
                  <FiShield className="w-4 h-4" /> Liver & Pancreas Care
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* ── Mission & Vision ─────────────────────────────────── */}
        <section className="section-padding bg-white border-t border-gray-100">
          <div className="container-max">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
              <span className="inline-block bg-primary-100 text-primary-700 text-xs font-bold tracking-widest uppercase px-4 py-1.5 rounded-full mb-4">Our Purpose</span>
              <h2 className="font-heading text-4xl md:text-5xl font-black text-navy-800 mt-2 leading-tight">Mission & <span className="text-primary-600">Vision</span></h2>
            </motion.div>
            <div className="grid md:grid-cols-2 gap-8">
              <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="relative bg-white rounded-3xl p-8 shadow-card border border-gray-100 overflow-hidden">
                <div className="absolute top-0 left-0 w-1.5 h-full bg-gradient-to-b from-primary-400 to-primary-600 rounded-l-3xl"></div>
                <div className="w-14 h-14 bg-primary-50 border border-primary-200 rounded-2xl flex items-center justify-center mb-6">
                  <FiTarget className="w-7 h-7 text-primary-600" />
                </div>
                <h3 className="font-heading text-2xl font-bold text-navy-800 mb-4">Our Mission</h3>
                <p className="text-gray-600 leading-relaxed">To provide expert, evidence-based, and accessible surgical care to every patient in Bihar — using advanced laparoscopic techniques for minimal pain, rapid recovery, and lasting outcomes with the highest standards of safety.</p>
              </motion.div>
              <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }} className="relative bg-white rounded-3xl p-8 shadow-card border border-gray-100 overflow-hidden">
                <div className="absolute top-0 left-0 w-1.5 h-full bg-gradient-to-b from-accent-400 to-accent-600 rounded-l-3xl"></div>
                <div className="w-14 h-14 bg-accent-50 border border-accent-200 rounded-2xl flex items-center justify-center mb-6">
                  <FiEye className="w-7 h-7 text-accent-600" />
                </div>
                <h3 className="font-heading text-2xl font-bold text-navy-800 mb-4">Our Vision</h3>
                <p className="text-gray-600 leading-relaxed">To be Bihar's most trusted surgical centre — where patients receive world-class minimally invasive care, families feel genuinely supported, and every surgery is performed with precision, compassion, and clinical excellence.</p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* ── CTA ──────────────────────────────────────────────── */}
        <section className="section-padding bg-gradient-to-br from-primary-50 via-white to-accent-50/40 border-t border-primary-100">
          <div className="container-max text-center">
            <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <span className="inline-block bg-primary-100 text-primary-700 text-xs font-bold tracking-widest uppercase px-4 py-1.5 rounded-full mb-4">Get In Touch</span>
              <h2 className="font-heading text-4xl md:text-5xl font-black text-navy-800 mt-2 mb-4 leading-tight">Ready to Start <span className="text-primary-600">Your Healing Journey?</span></h2>
              <p className="text-gray-500 text-lg mb-10 max-w-xl mx-auto">Book an appointment today or call us anytime. Dr. Manmohan Suman and our expert medical team are here to help.</p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link to="/book-appointment" className="btn-accent btn-shimmer gap-2 text-base px-8 py-4 shadow-lg shadow-accent-500/25 font-bold rounded-xl">
                  <FiCalendar /> Book Appointment
                </Link>
                <a href={`tel:${siteData.contact.phone}`} className="inline-flex items-center gap-2 px-8 py-4 bg-white hover:bg-primary-50 border-2 border-primary-200 text-primary-700 font-semibold rounded-xl transition-all duration-200 text-base shadow-sm">
                  <FiPhone /> Call Now
                </a>
                <Link to="/doctors" className="inline-flex items-center gap-2 px-8 py-4 bg-white hover:bg-gray-50 border-2 border-gray-200 text-gray-700 font-semibold rounded-xl transition-all duration-200 text-base shadow-sm">
                  Meet Our Doctors <FiArrowRight />
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
    </>
  )
}
