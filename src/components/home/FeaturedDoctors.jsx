import { Link } from 'react-router-dom'
import { useFeaturedDoctors } from '../../hooks/useDoctors'
import { FiFacebook, FiTwitter, FiInstagram } from 'react-icons/fi'

export default function FeaturedDoctors() {
  const { doctors: featured, loading } = useFeaturedDoctors()

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

        {/* Doctors Grid */}
        {loading ? (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[...Array(3)].map((_, i) => (
              <div key={i} className="animate-pulse flex flex-col items-center">
                <div className="w-full h-80 bg-gray-200 rounded mb-6" />
                <div className="w-32 h-6 bg-gray-200 rounded mb-2" />
                <div className="w-24 h-4 bg-gray-200 rounded" />
              </div>
            ))}
          </div>
        ) : featured.length === 0 ? (
          <div className="text-center text-gray-500 py-10">
            No featured doctors configured.
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
            {featured.slice(0, 3).map((doc) => (
              <div key={doc.id} className="flex flex-col items-center text-center group">
                <Link to={`/doctors/${doc.slug || doc.id}`} className="w-full mb-6 overflow-hidden block relative">
                  <img
                    src={doc.image || '/logo.png'}
                    alt={doc.name}
                    className="w-full h-[350px] object-cover object-top grayscale-[20%] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-500"
                  />
                  {/* Subtle overlay border on hover */}
                  <div className="absolute inset-0 border-4 border-transparent group-hover:border-primary-600/20 transition-colors duration-500 pointer-events-none" />
                </Link>
                
                <h3 className="font-heading font-black text-navy-800 text-xl tracking-tight mb-1 hover:text-primary-600 transition-colors">
                  <Link to={`/doctors/${doc.slug || doc.id}`}>{doc.name}</Link>
                </h3>
                
                <p className="text-gray-500 text-xs font-bold mb-1 uppercase tracking-widest">
                  {doc.specialty || 'Surgeon'}
                </p>

                {(doc.qualification || doc.experience) && (
                  <p className="text-gray-400 text-xs mb-4">
                    {[doc.qualification, doc.experience ? `${doc.experience}+ yrs` : ''].filter(Boolean).join(' · ')}
                  </p>
                )}

                {/* Dynamic Social Icons – only shown when URL is set */}
                {(doc.facebook || doc.twitter || doc.instagram) && (
                  <div className="flex items-center gap-5 text-gray-400">
                    {doc.facebook && (
                      <a href={doc.facebook} target="_blank" rel="noopener noreferrer" className="hover:text-primary-600 transition-colors">
                        <FiFacebook className="w-4 h-4" />
                      </a>
                    )}
                    {doc.twitter && (
                      <a href={doc.twitter} target="_blank" rel="noopener noreferrer" className="hover:text-primary-600 transition-colors">
                        <FiTwitter className="w-4 h-4" />
                      </a>
                    )}
                    {doc.instagram && (
                      <a href={doc.instagram} target="_blank" rel="noopener noreferrer" className="hover:text-primary-600 transition-colors">
                        <FiInstagram className="w-4 h-4" />
                      </a>
                    )}
                  </div>
                )}
              </div>
            ))}
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
