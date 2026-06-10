import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import {
  FiArrowRight, FiAward, FiCalendar, FiStar,
  FiBookOpen, FiActivity, FiGlobe, FiBriefcase
} from 'react-icons/fi'
import { useFeaturedDoctors } from '../../hooks/useDoctors'

export default function FeaturedDoctors() {
  const { doctors: featured, loading } = useFeaturedDoctors()

  return (
    <section className="relative section-padding overflow-hidden bg-gradient-to-br from-slate-50 via-white to-primary-50/20 border-t border-b border-gray-100">
      {/* Decorative backdrop elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-12 left-10 w-[400px] h-[400px] bg-primary-100/40 rounded-full blur-[120px]" />
        <div className="absolute bottom-12 right-10 w-[300px] h-[300px] bg-accent-100/30 rounded-full blur-[100px]" />
      </div>

      <div className="container-max relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-flex items-center gap-1.5 bg-primary-50 border border-primary-200 text-primary-600 text-xs font-bold tracking-widest uppercase px-4 py-1.5 rounded-full mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-primary-500 animate-pulse" />
            Meet Our Experts
          </span>
          <h2 className="font-heading text-4xl md:text-5xl font-black text-navy-800 mt-2 leading-tight">
            Our Principal <span className="text-primary-600">Surgeon</span>
          </h2>
          <p className="text-gray-500 text-lg mt-4 max-w-2xl mx-auto leading-relaxed">
            World-class medical expertise combined with genuine compassion and care.
          </p>
        </motion.div>

        {loading ? (
          <div className="max-w-4xl mx-auto bg-white rounded-3xl p-10 shadow-md animate-pulse h-[400px]" />
        ) : featured.length === 0 ? (
          <div className="text-center py-10 bg-white rounded-3xl border border-gray-100 shadow-sm max-w-4xl mx-auto">
            <p className="text-gray-400 text-lg">No featured doctors configured.</p>
          </div>
        ) : (
          <div className="max-w-5xl mx-auto">
            {featured.map((doc, idx) => {
              // Parse positions list from database values
              const positions = []
              if (doc.currentPosition) {
                const parts = doc.currentPosition.split(/,\s*(.+)/)
                positions.push({
                  title: parts[0]?.trim() || 'Current Position',
                  org: parts[1]?.trim() || ''
                })
              }
              if (doc.previousPosition) {
                const past = doc.previousPosition.split('|')
                past.forEach((p) => {
                  const parts = p.split(/,\s*(.+)/)
                  positions.push({
                    title: parts[0]?.trim() || 'Ex Position',
                    org: parts[1]?.trim() || ''
                  })
                })
              }

              return (
                <div key={doc.id} className="grid lg:grid-cols-12 gap-10 items-start">
                  
                  {/* Left Column: Portrait & Stats as a separate Card */}
                  <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="lg:col-span-5 w-full flex flex-col items-center bg-white rounded-3xl border border-primary-100/60 shadow-xl p-6 hover:shadow-2xl transition-all duration-300"
                  >
                    <div className="relative w-full max-w-[320px] aspect-[4/5] rounded-2xl overflow-hidden bg-gradient-to-br from-primary-50 to-accent-50/50 border border-primary-100 p-2 shadow-inner">
                      
                      {/* Floating Experience Badge */}
                      {doc.experience && (
                        <div className="absolute top-4 left-4 bg-navy-800/90 backdrop-blur-sm border border-navy-700/50 rounded-2xl px-3 py-1.5 flex items-center gap-2 shadow-lg z-20">
                          <FiAward className="text-amber-500 w-4 h-4 animate-bounce" />
                          <div>
                            <p className="text-white font-black text-xs leading-none">{doc.experience}+ Years</p>
                            <p className="text-primary-300 text-[8px] font-bold uppercase tracking-wider mt-0.5">Experience</p>
                          </div>
                        </div>
                      )}

                      {/* Doctor Image */}
                      <img
                        src={doc.image}
                        alt={doc.name}
                        className="w-full h-full object-cover object-top rounded-xl group-hover:scale-102 transition-transform duration-700"
                      />
                      
                      {/* Overlay card at bottom of image */}
                      <div className="absolute bottom-4 left-4 right-4 bg-white/90 backdrop-blur-sm border border-primary-100 rounded-xl px-4 py-2.5 shadow-md flex items-center justify-between">
                        <div>
                          <p className="text-[10px] text-gray-400 font-bold uppercase tracking-wider">Rating</p>
                          <div className="flex items-center gap-1 mt-0.5">
                            <FiStar className="text-amber-500 fill-amber-500 w-3.5 h-3.5" />
                            <span className="text-xs font-black text-navy-800">{doc.rating || '4.9'}</span>
                            <span className="text-[10px] text-gray-400">({doc.reviewCount || '350'}+ reviews)</span>
                          </div>
                        </div>
                        <div className="text-right">
                          <p className="text-[10px] text-gray-400 font-bold uppercase tracking-wider">OPD Fee</p>
                          <p className="text-xs font-black text-primary-600 mt-0.5">₹{doc.consultationFee || '500'}</p>
                        </div>
                      </div>
                    </div>

                    {/* Quick Info Grid below portrait */}
                    <div className="grid grid-cols-3 divide-x divide-gray-100 w-full max-w-[320px] bg-slate-50/70 border border-gray-100 rounded-2xl p-4 mt-5 text-center">
                      <div>
                        <p className="font-heading font-black text-lg text-primary-700 leading-none">21+</p>
                        <p className="text-[9px] text-gray-400 font-semibold mt-1">Yrs Exp.</p>
                      </div>
                      <div>
                        <p className="font-heading font-black text-lg text-primary-700 leading-none">10K+</p>
                        <p className="text-[9px] text-gray-400 font-semibold mt-1">Surgeries</p>
                      </div>
                      <div>
                        <p className="font-heading font-black text-lg text-primary-700 leading-none">50K+</p>
                        <p className="text-[9px] text-gray-400 font-semibold mt-1">Patients</p>
                      </div>
                    </div>

                    {/* Action buttons */}
                    <div className="flex flex-col gap-2.5 w-full max-w-[320px] mt-6 shrink-0">
                      <Link
                        to={`/book-appointment?doctor=${encodeURIComponent(doc.name)}&dept=${encodeURIComponent(doc.specialty)}`}
                        className="w-full text-center py-3.5 bg-primary-600 hover:bg-primary-700 text-white font-bold rounded-xl text-sm transition-all shadow-lg shadow-primary-600/20 flex items-center justify-center gap-2"
                      >
                        <FiCalendar className="w-4 h-4" /> Book Appointment
                      </Link>
                      <Link
                        to={`/doctors/${doc.slug || doc.id}`}
                        className="w-full text-center py-3.5 border-2 border-primary-200 text-primary-700 hover:bg-primary-50 font-bold rounded-xl text-sm transition-all flex items-center justify-center gap-2"
                      >
                        View Full Profile <FiArrowRight className="w-4 h-4" />
                      </Link>
                    </div>

                  </motion.div>

                  {/* Right Column: Info & Details directly on layout background */}
                  <motion.div
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.15 }}
                    className="lg:col-span-7 flex flex-col justify-center space-y-6 w-full"
                  >
                    <div>
                      {/* Specialty Badge */}
                      <span className="inline-flex items-center gap-1.5 text-xs font-bold text-cyan-700 bg-cyan-50 border border-cyan-200 px-3.5 py-1.5 rounded-full mb-3 shadow-sm uppercase tracking-wider">
                        <span className="w-1.5 h-1.5 rounded-full bg-cyan-500 animate-pulse" />
                        {doc.specialty || 'Consultant Physician'}
                      </span>
                      
                      {/* Name */}
                      <h3 className="font-heading font-black text-navy-800 text-4xl sm:text-5xl leading-tight tracking-tight mb-2">
                        {doc.name}
                      </h3>
                    </div>

                    {/* Bio / Description */}
                    <p className="text-gray-650 text-base leading-relaxed">
                      {doc.bio || 'Dr. Manmohan Suman is a senior surgeon with 21 years of clinical experience specializing in laparoscopic surgery, stone treatment, and hepatobiliary care.'}
                    </p>

                    {/* Qualifications Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {doc.qualification?.split(',').map((q, idx) => {
                        const icons = [FiBookOpen, FiAward, FiActivity, FiGlobe]
                        const Icon = icons[idx % icons.length]
                        return (
                          <div key={idx} className="flex items-center gap-3 bg-white border border-gray-100 rounded-2xl p-4 shadow-sm hover:shadow-md transition-shadow">
                            <div className="w-11 h-11 rounded-xl bg-slate-50 border border-gray-100 flex items-center justify-center text-primary-500 shrink-0 shadow-inner">
                              <Icon className="w-4.5 h-4.5" />
                            </div>
                            <span className="text-xs font-bold text-navy-850">{q.trim()}</span>
                          </div>
                        )
                      })}
                    </div>

                    {/* Affiliations / Positions Bars */}
                    {positions.length > 0 && (
                      <div className="space-y-3">
                        {positions.map((pos, idx) => (
                          <div key={idx} className="flex items-center gap-4 bg-navy-800 border border-navy-750 rounded-2xl p-4 text-white shadow-md hover:bg-navy-850 transition-colors">
                            <div className="w-11 h-11 rounded-xl bg-[#243F68] border border-navy-700/50 flex items-center justify-center text-primary-300 shrink-0">
                              <FiBriefcase className="w-4.5 h-4.5 text-cyan-300" />
                            </div>
                            <div>
                              <p className="text-sm font-bold text-white leading-none">{pos.title}</p>
                              {pos.org && (
                                <p className="text-[11px] font-bold text-cyan-400 mt-1.5 uppercase tracking-wider">{pos.org}</p>
                              )}
                            </div>
                          </div>
                        ))}
                      </div>
                    )}



                  </motion.div>

                </div>
              )
            })}
          </div>
        )}
        
      </div>
    </section>
  )
}
