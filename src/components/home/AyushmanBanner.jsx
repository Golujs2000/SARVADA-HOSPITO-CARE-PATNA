import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { FiPhoneCall, FiInfo, FiChevronRight } from 'react-icons/fi'
import { siteData } from '../../data/siteData'

const SmartCardIcon = () => (
  <svg className="w-16 h-12 text-white shrink-0 drop-shadow-lg" viewBox="0 0 64 44" fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Card Base with rich green gradient */}
    <rect width="64" height="44" rx="6" fill="url(#cardGrad)" stroke="#FFE082" strokeWidth="1.2" />

    {/* Tricolor Stripes on the side */}
    <path d="M50 0H64V44H50L44 0Z" fill="url(#triGrad)" opacity="0.9" />

    {/* Gold chip */}
    <rect x="6" y="12" width="10" height="8" rx="1.5" fill="#FFC107" stroke="#FFA000" strokeWidth="0.5" />
    <line x1="6" y1="16" x2="16" y2="16" stroke="#795548" strokeWidth="0.5" />
    <line x1="11" y1="12" x2="11" y2="20" stroke="#795548" strokeWidth="0.5" />

    {/* Medical Heart */}
    <path d="M28 13C28 10 24 10 23 12C22 10 18 10 18 13C18 17 23 20 23 20C23 20 28 17 28 13Z" fill="#E53935" />

    {/* Concentric circles representing emblem wheel */}
    <circle cx="56" cy="22" r="4" stroke="#0D47A1" strokeWidth="0.75" />
    <circle cx="56" cy="22" r="1.5" fill="#0D47A1" />

    {/* Card text mockup lines */}
    <rect x="6" y="26" width="22" height="2" rx="1" fill="#FFFFFF" opacity="0.8" />
    <rect x="6" y="30" width="14" height="2" rx="1" fill="#FFFFFF" opacity="0.6" />

    {/* PM-JAY Label */}
    <text x="34" y="37" fill="#FFFFFF" fontSize="6.5" fontWeight="bold" fontFamily="sans-serif">PM-JAY</text>

    {/* Gradients */}
    <defs>
      <linearGradient id="cardGrad" x1="0" y1="0" x2="64" y2="44" gradientUnits="userSpaceOnUse">
        <stop stopColor="#0B462C" />
        <stop offset="0.5" stopColor="#198754" />
        <stop offset="1" stopColor="#0B462C" />
      </linearGradient>
      <linearGradient id="triGrad" x1="44" y1="22" x2="64" y2="22" gradientUnits="userSpaceOnUse">
        <stop stopColor="#FF9933" />
        <stop offset="0.5" stopColor="#FFFFFF" />
        <stop offset="1" stopColor="#138808" />
      </linearGradient>
    </defs>
  </svg>
)

export default function AyushmanBanner() {
  const phone1 = siteData.contact.phone
  const phone2 = siteData.contact.phone2 || '7079001700'

  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className="w-full relative z-30"
    >
      {/* Subtle National Tricolor Border Line at Top */}
      <div className="h-[4px] w-full grid grid-cols-3">
        <div className="bg-[#FF9933]"></div>
        <div className="bg-white"></div>
        <div className="bg-[#138808]"></div>
      </div>

      {/* Main Banner Container */}
      <div className="bg-gradient-to-r from-emerald-950 via-teal-900 to-emerald-950 text-white py-3.5 md:py-4 px-4 sm:px-6 md:px-8 border-b border-emerald-800/40 shadow-md">
        <div className="container-max mx-auto flex flex-col lg:flex-row items-center justify-between gap-4">

          {/* Left Block: Icon & Informative Copy */}
          <Link
            to="/facilities-diagnostics"
            className="flex flex-col sm:flex-row items-center text-center sm:text-left gap-4 flex-1 group cursor-pointer"
          >
            <div className="transition-transform duration-300 group-hover:scale-105">
              <SmartCardIcon />
            </div>

            <div className="space-y-1">
              <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2">
                <span className="bg-amber-400 text-emerald-950 text-[10px] font-black tracking-widest uppercase px-2 py-0.5 rounded border border-amber-300">
                  EMPANELLED FOR ORTHOPEDICS & GENERAL SURGERY · सरकार द्वारा अधिकृत
                </span>
              </div>

              <h2 className="text-lg md:text-xl font-heading font-black tracking-wide text-white group-hover:text-amber-300 transition-colors">
                Ayushman Bharat Card <span className="text-amber-300">(PM-JAY)</span> Accepted Here
              </h2>

              <p className="text-emerald-100 text-xs sm:text-sm font-medium leading-relaxed">
                Free Cashless Treatment up to <span className="text-amber-300 font-bold">₹5,00,000</span> for <span className="text-amber-200 font-semibold underline decoration-amber-400/50">Orthopedics & General Surgery</span> · <span className="font-hindi text-amber-200">हड्डी रोग एवं जनरल सर्जरी का आयुष्मान कार्ड से मुफ़्त इलाज।</span>
              </p>
            </div>
          </Link>

          {/* Right Block: Helpline Numbers & CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center gap-3 w-full lg:w-auto shrink-0 border-t border-emerald-800/40 lg:border-t-0 pt-3 lg:pt-0">
            {/* Phone Info Block */}
            <div className="flex items-center gap-3 bg-teal-950/60 border border-emerald-700/30 px-4 py-2 rounded-xl shadow-inner w-full sm:w-auto justify-center sm:justify-start">
              {/* Pulsing Green Call Icon */}
              <div className="w-9 h-9 rounded-full bg-emerald-500/20 flex items-center justify-center relative flex-shrink-0">
                <span className="absolute inset-0 rounded-full bg-emerald-500/30 animate-ping"></span>
                <FiPhoneCall className="text-emerald-400 w-4 h-4 z-10" />
              </div>

              <div className="text-left">
                <span className="block text-[10px] text-emerald-300 font-bold uppercase tracking-wider">Ayushman Helpdesk</span>
                <div className="flex gap-2 text-sm md:text-base font-black tracking-wide text-white">
                  <a href={`tel:${phone1}`} className="hover:text-amber-300 transition-colors">{phone1}</a>
                  <span className="text-emerald-700">|</span>
                  <a href={`tel:${phone2}`} className="hover:text-amber-300 transition-colors">{phone2}</a>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex items-center gap-2 w-full sm:w-auto justify-center">
              <Link
                to="/services/ayushman-bharat-card"
                className="flex items-center justify-center gap-1.5 px-4 py-2 bg-emerald-800 hover:bg-emerald-700 border border-emerald-600/50 text-white rounded-xl text-xs font-bold transition-all w-full sm:w-auto shadow-sm"
              >
                <FiInfo size={14} /> Details
              </Link>
              <a
                href={`tel:${phone1}`}
                className="flex items-center justify-center gap-1.5 px-5 py-2 bg-amber-400 hover:bg-amber-500 text-emerald-950 rounded-xl text-xs font-black transition-all hover:scale-[1.02] active:scale-95 w-full sm:w-auto shadow-md"
              >
                Call Now <FiChevronRight size={14} />
              </a>
            </div>
          </div>

        </div>
      </div>
    </motion.div>
  )
}
