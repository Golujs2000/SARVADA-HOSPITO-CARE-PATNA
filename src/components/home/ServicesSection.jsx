import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { FiArrowRight, FiHeart, FiActivity, FiEye, FiTool, FiUser, FiUsers } from 'react-icons/fi'
import { useSpecialities } from '../../hooks/useSpecialities'

const iconMap = {
  heart: FiHeart,
  brain: FiActivity,
  bone: FiTool,
  child: FiUser,
  female: FiUsers,
  ribbon: FiEye,
}

const specialityImages = {
  'laparoscopic-surgery': '/speciality/laparoscopic-surgery.png',
  'kidney-ureteric-stone': '/speciality/kidney-ureteric-stone.png',
  'liver-disorders': '/speciality/liver-disorders.png',
  'pancreas-disorders': '/speciality/pancreas-disorders.png',
  'jaundice-biliary-disorders': '/speciality/jaundice-biliary-disorders.png',
  'general-gi-surgery': '/speciality/general-gi-surgery.png',
  'colorectal-surgeon': '/speciality/general-gi-surgery.png',
  'piles-fissure-fistula': '/speciality/general-gi-surgery.png',
  'pancreatic-stone': '/speciality/pancreas-disorders.png',
  'fissure-laser-surgery': '/speciality/general-gi-surgery.png',
  'gall-bladder-stone': '/speciality/laparoscopic-surgery.png',
  'liver': '/speciality/liver-disorders.png',
  'ercp-cbd-stone': '/speciality/jaundice-biliary-disorders.png',
  'stomach-cancer': '/speciality/general-gi-surgery.png',
  'hernia': '/speciality/laparoscopic-surgery.png',
  'jaundice-ascites-biliary': '/speciality/jaundice-biliary-disorders.png',
  'endoscopy-colonoscopy': '/speciality/general-gi-surgery.png',
}

export default function ServicesSection() {
  const { specialities, loading } = useSpecialities()
  const displayed = specialities.slice(0, 20)

  return (
    <section className="section-padding bg-slate-50/70 border-b border-primary-50">
      <div className="container-max">

        {/* Section header — title left, description right */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-8 items-end mb-14"
        >
          <div>
            <span className="text-primary-600 font-bold text-xs tracking-widest uppercase mb-3 block">
              Quality Service
            </span>
            <h2 className="font-heading font-bold text-navy-800 text-4xl md:text-5xl leading-tight">
              Advanced Laparoscopic & Stone Treatment Specialities
            </h2>
          </div>
          <p className="text-gray-500 text-base leading-relaxed md:text-right">
            We provide investigation, diagnosis, treatment and prevention of all gastrointestinal (stomach and intestines) and hepatological (liver, gallbladder, biliary tree and pancreas) diseases — advanced laparoscopic surgery and comprehensive care by Dr. Manmohan Suman (MBBS, MD), Consultant Physician, Ex-Gastro Surgeon (IGIMS, Patna), Ex-Surgeon (Safdarjung Hospital, New Delhi).
          </p>
        </motion.div>

        {/* 3×3 grid */}
        {loading ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {[...Array(9)].map((_, i) => (
              <div key={i} className="h-32 bg-white/60 rounded-2xl animate-pulse" />
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {displayed.map((spec, i) => {
              const Icon = iconMap[spec.icon]
              const isUrl = spec.icon && (spec.icon.startsWith('http') || spec.icon.startsWith('/') || spec.icon.includes('.'))
              const local3dIcon = specialityImages[spec.slug || spec.id]
              const isEmoji = !Icon && spec.icon && !isUrl

              return (
                <motion.div
                  key={spec.id}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.06 }}
                >
                  <Link
                    to={`/services/${spec.slug || spec.id}`}
                    className="flex flex-col bg-white rounded-3xl p-6 shadow-sm border border-gray-100 hover:shadow-md hover:border-primary-100 hover:-translate-y-1 transition-all duration-300 group h-full"
                  >
                    {/* Big Image box at the top */}
                    <div className="w-full h-40 bg-gradient-to-br from-primary-50/40 via-white to-cyan-50/20 rounded-2xl flex items-center justify-center mb-5 border border-primary-50/40 relative overflow-hidden group-hover:from-primary-50 group-hover:to-cyan-50 transition-colors shadow-inner">
                      {isUrl ? (
                        <img src={spec.icon} alt={spec.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                      ) : local3dIcon ? (
                        <img src={local3dIcon} alt={spec.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                      ) : isEmoji ? (
                        <span className="text-5xl leading-none group-hover:scale-108 transition-transform duration-500">{spec.icon}</span>
                      ) : Icon ? (
                        <Icon className="w-10 h-10 text-primary-600 group-hover:scale-108 transition-transform duration-500" />
                      ) : (
                        <FiHeart className="w-10 h-10 text-primary-600 group-hover:scale-108 transition-transform duration-500" />
                      )}
                    </div>

                    {/* Text block below */}
                    <div className="flex-1 flex flex-col justify-between">
                      <div>
                        <h3 className="font-heading font-black text-navy-800 text-lg mb-2 group-hover:text-primary-700 transition-colors leading-snug">
                          {spec.name}
                        </h3>
                        <p className="text-gray-500 text-sm leading-relaxed line-clamp-3">
                          {spec.description || 'Expert laparoscopic & surgical treatment for lasting relief.'}
                        </p>
                      </div>

                      {/* Learn More link */}
                      <div className="flex items-center gap-1.5 text-xs font-bold text-primary-600 mt-4 group-hover:text-primary-750 transition-colors">
                        <span>Learn More</span>
                        <FiArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  </Link>
                </motion.div>
              )
            })}
          </div>
        )}

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Link to="/services" className="btn-secondary">
            View All Specialities <FiArrowRight />
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
