import { Link } from 'react-router-dom'
import { FiCalendar, FiClock, FiActivity, FiPhoneCall } from 'react-icons/fi'
import { FaUserMd, FaPlus, FaHeartbeat, FaHandsHelping } from 'react-icons/fa'

export default function HeroSection() {
  return (
    <section className="relative bg-white pb-12 pt-14 md:pt-0">
      {/* Hero background */}
      <div 
        className="relative h-[600px] md:h-[750px] w-full bg-cover bg-center bg-[image:var(--hero-bg-mobile)] md:bg-[image:var(--hero-bg-desktop)]" 
        style={{ 
          '--hero-bg-mobile': 'url("/gallery/hospital-hero.jpg")', 
          '--hero-bg-desktop': 'url("https://firebasestorage.googleapis.com/v0/b/nova-max-hospital.firebasestorage.app/o/gallery%2F1781313426729_hero%20background%20image.webp?alt=media&token=687cba46-1b9b-4cb7-a8e5-09439bbe1df4")' 
        }}
      >
        <div className="absolute inset-0 bg-white/85 md:bg-transparent" />
        
        {/* Main Content */}
        <div className="absolute inset-0 flex items-center pb-28 md:pb-24 pt-14 md:pt-0">
          <div className="container-max px-4 md:px-12 w-full max-w-3xl">
            <p className="text-primary-600 font-bold tracking-wide mb-2 flex items-center gap-2 text-sm md:text-base">
              <span className="w-6 h-0.5 bg-primary-600 inline-block"></span> Welcome to
            </p>
            <h1 className="font-heading font-black text-4xl sm:text-5xl lg:text-[5rem] uppercase leading-[1.05] drop-shadow-sm mb-4">
              <span className="text-navy-900 block">SARVADA</span>
              <span className="text-accent-500 block">HOSPITO CARE</span>
            </h1>
            
            <h2 className="text-gray-700 font-bold text-lg md:text-xl tracking-wider uppercase mb-3">
              YOUR HEALTH, OUR PRIORITY
            </h2>
            
            <p className="text-gray-600 text-sm md:text-base mb-8 max-w-xl leading-relaxed font-medium">
              We are committed to providing exceptional healthcare services with compassion, advanced technology, and a patient-first approach.
            </p>
            
            {/* Features Row */}
            <div className="flex flex-wrap items-center justify-center md:justify-start gap-3 md:gap-8 mb-8">
              {[
                { label: 'EXPERT DOCTORS', icon: <FaUserMd className="w-6 h-6" /> },
                { label: 'ADVANCED CARE', icon: <FaPlus className="w-6 h-6" /> },
                { label: 'PATIENT FIRST', icon: <FaHeartbeat className="w-6 h-6" /> },
                { label: 'COMPASSIONATE SERVICE', icon: <FaHandsHelping className="w-6 h-6" /> }
              ].map((item, i) => (
                <div key={i} className="flex flex-col items-center gap-2 text-center max-w-[80px]">
                  <div className="w-12 h-12 rounded-full border-2 border-primary-600 flex items-center justify-center text-primary-600 hover:bg-primary-600 hover:text-white transition-colors">
                    {item.icon}
                  </div>
                  <span className="text-[9px] md:text-[10px] font-bold text-primary-700 uppercase leading-tight">{item.label}</span>
                </div>
              ))}
            </div>

            <Link to="/book-appointment" className="inline-flex items-center justify-center gap-2 bg-primary-600 text-white px-6 py-3 rounded-full font-bold hover:bg-primary-700 transition-all shadow-lg hover:-translate-y-0.5 group">
              <div className="bg-white text-primary-600 p-1.5 rounded-full group-hover:scale-110 transition-transform">
                <FiPhoneCall className="w-4 h-4" />
              </div>
              Book an Appointment
            </Link>
          </div>
        </div>
      </div>

      {/* 3 Quick Action Blocks overlapping */}
      <div className="container-max px-4 md:px-8 relative z-20 -mt-16 md:-mt-24 mb-16">
        <div className="grid grid-cols-1 sm:grid-cols-3 shadow-2xl">
          
          <Link to="/hospital-departments" className="bg-primary-700 hover:bg-primary-800 transition-colors text-white p-8 md:p-10 flex flex-col items-center justify-center text-center group">
            <FiActivity className="w-10 h-10 md:w-12 md:h-12 mb-4 opacity-80 group-hover:scale-110 transition-transform" />
            <h3 className="font-heading font-bold text-lg md:text-xl tracking-wider uppercase mb-2">MEDICAL SERVICES</h3>
            <p className="text-xs md:text-sm text-white/80">Explore our wide range of treatments</p>
          </Link>

          <Link to="/contact" className="bg-primary-600 hover:bg-primary-700 transition-colors text-white p-8 md:p-10 flex flex-col items-center justify-center text-center group">
            <FiClock className="w-10 h-10 md:w-12 md:h-12 mb-4 opacity-80 group-hover:scale-110 transition-transform" />
            <h3 className="font-heading font-bold text-lg md:text-xl tracking-wider uppercase mb-2">OPEN 24 / 7</h3>
            <p className="text-xs md:text-sm text-white/80">Emergency care available round the clock</p>
          </Link>

          <Link to="/book-appointment" className="bg-accent-500 hover:bg-accent-600 transition-colors text-white p-8 md:p-10 flex flex-col items-center justify-center text-center group">
            <FiCalendar className="w-10 h-10 md:w-12 md:h-12 mb-4 opacity-80 group-hover:scale-110 transition-transform" />
            <h3 className="font-heading font-bold text-lg md:text-xl tracking-wider uppercase mb-2">REQUEST APPOINTMENT</h3>
            <p className="text-xs md:text-sm text-white/80">Book a visit with our specialists</p>
          </Link>

        </div>
      </div>
    </section>
  )
}
