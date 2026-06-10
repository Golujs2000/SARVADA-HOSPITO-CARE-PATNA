import { Link } from 'react-router-dom'
import { FiCalendar, FiClock, FiActivity } from 'react-icons/fi'

export default function HeroSection() {
  return (
    <section className="relative bg-white pb-12">
      {/* Hero background */}
      <div className="relative h-[500px] md:h-[650px] w-full bg-cover bg-center" style={{ backgroundImage: 'url("/gallery/hospital-hero.jpg")' }}>
        <div className="absolute inset-0 bg-navy-900/60 mix-blend-multiply" />
        
        {/* Main Content */}
        <div className="absolute inset-0 flex items-center">
          <div className="container-max px-6 md:px-12 w-full">
            <h2 className="text-white/90 font-bold text-lg md:text-xl tracking-[0.2em] uppercase mb-3 drop-shadow-md">
              YOUR HEALTH, OUR PRIORITY
            </h2>
            <h1 className="text-white font-heading font-black text-5xl md:text-7xl lg:text-[4.5rem] uppercase max-w-4xl leading-[1.1] drop-shadow-lg">
              ADVANCED SURGERY. <br/> EXPERT CARE.
            </h1>
          </div>
        </div>
      </div>

      {/* 3 Quick Action Blocks overlapping */}
      <div className="container-max px-4 md:px-8 relative z-20 -mt-16 md:-mt-24 mb-16">
        <div className="grid grid-cols-1 md:grid-cols-3 shadow-2xl">
          
          <Link to="/hospital-departments" className="bg-primary-700 hover:bg-primary-800 transition-colors text-white p-8 md:p-10 flex flex-col items-center justify-center text-center group">
            <FiActivity className="w-10 h-10 md:w-12 md:h-12 mb-4 opacity-80 group-hover:scale-110 transition-transform" />
            <h3 className="font-heading font-bold text-lg md:text-xl tracking-wider uppercase mb-2">MEDICAL SERVICES</h3>
            <p className="text-xs md:text-sm text-white/80">Explore our wide range of treatments</p>
          </Link>

          <Link to="/contact" className="bg-primary-600 hover:bg-primary-700 transition-colors text-white p-8 md:p-10 flex flex-col items-center justify-center text-center group">
            <FiClock className="w-10 h-10 md:w-12 md:h-12 mb-4 opacity-80 group-hover:scale-110 transition-transform" />
            <h3 className="font-heading font-bold text-lg md:text-xl tracking-wider uppercase mb-2">TIMETABLES</h3>
            <p className="text-xs md:text-sm text-white/80">View doctor availability and hours</p>
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
