import { useRef, useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useDoctors } from '../../hooks/useDoctors'
import { FiFacebook, FiTwitter, FiInstagram, FiChevronLeft, FiChevronRight } from 'react-icons/fi'

export default function FeaturedDoctors() {
  const { doctors, loading } = useDoctors()
  const scrollRef = useRef(null)
  const [canScrollLeft, setCanScrollLeft] = useState(false)
  const [canScrollRight, setCanScrollRight] = useState(true)

  const checkScrollLimits = () => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current
      setCanScrollLeft(scrollLeft > 10)
      setCanScrollRight(scrollLeft + clientWidth < scrollWidth - 10)
    }
  }

  useEffect(() => {
    const el = scrollRef.current
    if (el) {
      el.addEventListener('scroll', checkScrollLimits)
      window.addEventListener('resize', checkScrollLimits)
      // Initial check
      checkScrollLimits()
    }
    return () => {
      if (el) {
        el.removeEventListener('scroll', checkScrollLimits)
      }
      window.removeEventListener('resize', checkScrollLimits)
    }
  }, [doctors])

  const scroll = (direction) => {
    if (!scrollRef.current) return
    const { clientWidth } = scrollRef.current
    const scrollAmount = direction === 'left' ? -clientWidth * 0.75 : clientWidth * 0.75
    scrollRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' })
  }

  return (
    <section className="py-12 md:py-20 bg-white border-t border-gray-100">
      <div className="container-max px-4 md:px-8">
        
        {/* Header */}
        <div className="text-center mb-10 md:mb-16">
          <h2 className="font-heading text-3xl md:text-4xl font-black text-navy-800 mb-4">
            Our Team
          </h2>
          <div className="w-16 h-0.5 bg-primary-600 mx-auto" />
        </div>

        {/* Doctors Carousel */}
        {loading ? (
          <div className="flex gap-6 overflow-hidden py-4 px-1">
            {[...Array(4)].map((_, i) => (
              <div key={i} className="animate-pulse flex flex-col items-center shrink-0 w-[240px] md:w-[260px] lg:w-[280px]">
                <div className="w-full aspect-[4/5] bg-gray-200 rounded-[8px] mb-6" />
                <div className="w-32 h-6 bg-gray-200 rounded mb-2" />
                <div className="w-24 h-4 bg-gray-200 rounded" />
              </div>
            ))}
          </div>
        ) : doctors.length === 0 ? (
          <div className="text-center text-gray-500 py-10">
            No doctors configured.
          </div>
        ) : (
          <div className="relative">
            {/* Carousel Container */}
            <div
              ref={scrollRef}
              className="flex gap-6 overflow-x-auto no-scrollbar snap-x snap-mandatory py-4 px-1 scroll-smooth"
            >
              {doctors.map((doc) => (
                <div
                  key={doc.id}
                  className="flex flex-col items-center text-center group snap-start shrink-0 w-[240px] md:w-[260px] lg:w-[280px]"
                >
                  <Link to={`/doctors/${doc.slug || doc.id}`} className="w-full aspect-[4/5] mb-5 overflow-hidden block relative rounded-[8px] border border-gray-100 shadow-sm">
                    <img
                      src={doc.image || '/logo.png'}
                      alt={doc.name}
                      className="w-full h-full object-cover object-top grayscale-[20%] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-500"
                      loading="lazy"
                    />
                    {/* Subtle overlay border on hover */}
                    <div className="absolute inset-0 border-4 border-transparent group-hover:border-primary-600/20 transition-colors duration-500 pointer-events-none" />
                  </Link>
                  
                  <h3 className="font-heading font-black text-navy-800 text-lg tracking-tight mb-1 hover:text-primary-600 transition-colors">
                    <Link to={`/doctors/${doc.slug || doc.id}`}>{doc.name}</Link>
                  </h3>
                  
                  <p className="text-gray-500 text-xs font-bold mb-1 uppercase tracking-widest">
                    {doc.specialty || 'Surgeon'}
                  </p>

                  {(doc.qualification || doc.experience) && (
                    <p className="text-gray-500 text-xs mb-4">
                      {[doc.qualification, doc.experience ? `${doc.experience}+ yrs` : ''].filter(Boolean).join(' · ')}
                    </p>
                  )}

                  {/* Dynamic Social Icons – only shown when URL is set */}
                  {(doc.facebook || doc.twitter || doc.instagram) && (
                    <div className="flex items-center gap-5 text-gray-400 mt-1">
                      {doc.facebook && (
                        <a href={doc.facebook} target="_blank" rel="noopener noreferrer" className="hover:text-primary-600 transition-colors p-2.5 -m-2.5" aria-label="Facebook">
                          <FiFacebook className="w-4.5 h-4.5" />
                        </a>
                      )}
                      {doc.twitter && (
                        <a href={doc.twitter} target="_blank" rel="noopener noreferrer" className="hover:text-primary-600 transition-colors p-2.5 -m-2.5" aria-label="Twitter">
                          <FiTwitter className="w-4.5 h-4.5" />
                        </a>
                      )}
                      {doc.instagram && (
                        <a href={doc.instagram} target="_blank" rel="noopener noreferrer" className="hover:text-primary-600 transition-colors p-2.5 -m-2.5" aria-label="Instagram">
                          <FiInstagram className="w-4.5 h-4.5" />
                        </a>
                      )}
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Controls */}
            {(canScrollLeft || canScrollRight) && (
              <div className="flex items-center justify-center gap-4 mt-8">
                <button
                  onClick={() => scroll('left')}
                  disabled={!canScrollLeft}
                  className={`w-11 h-11 rounded-full flex items-center justify-center border transition-all ${
                    canScrollLeft 
                      ? 'bg-white border-gray-200 text-gray-700 hover:bg-gray-50 active:scale-95 shadow-sm' 
                      : 'bg-gray-50 border-gray-100 text-gray-300 cursor-not-allowed'
                  }`}
                  aria-label="Previous"
                >
                  <FiChevronLeft className="w-5 h-5" />
                </button>
                <button
                  onClick={() => scroll('right')}
                  disabled={!canScrollRight}
                  className={`w-11 h-11 rounded-full flex items-center justify-center border transition-all ${
                    canScrollRight 
                      ? 'bg-white border-gray-200 text-gray-700 hover:bg-gray-50 active:scale-95 shadow-sm' 
                      : 'bg-gray-50 border-gray-100 text-gray-300 cursor-not-allowed'
                  }`}
                  aria-label="Next"
                >
                  <FiChevronRight className="w-5 h-5" />
                </button>
              </div>
            )}
          </div>
        )}

        <div className="text-center mt-16">
          <Link to="/doctors" className="inline-block border-2 border-primary-600 text-primary-600 px-8 py-3.5 font-bold text-xs tracking-widest hover:bg-primary-600 hover:text-white transition-colors">
            VIEW ALL DOCTORS
          </Link>
        </div>

      </div>
    </section>
  )
}
