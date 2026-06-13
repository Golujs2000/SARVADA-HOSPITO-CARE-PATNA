import { Link } from 'react-router-dom'
import { FiActivity } from 'react-icons/fi'
import { useCategories } from '../../hooks/useCategories'

export default function ServicesSection() {
  const { categories: departments, loading } = useCategories()
  // Filter to show both Surgical Services and Hospital Departments
  const displayed = departments.filter(d => d.category === 'Surgical Services' || d.category === 'Hospital Departments')

  return (
    <section className="py-20 md:py-28 bg-slate-50 border-y border-gray-100">
      <div className="container-max px-4 md:px-8">
        
        {/* Header */}
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h2 className="font-heading font-black text-navy-900 text-3xl md:text-4xl mb-4">
            Our Medical Services
          </h2>
          <p className="text-gray-600 text-sm md:text-base leading-relaxed">
            In this section you can learn more about the diverse range of medical services and specialties we offer. We provide comprehensive care across multiple disciplines with advanced infrastructure.
          </p>
        </div>

        {/* Services Grid */}
        {loading ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
             {[...Array(8)].map((_, i) => (
              <div key={i} className="flex flex-col items-center bg-white p-6 rounded-2xl border border-gray-100 shadow-sm animate-pulse">
                <div className="w-20 h-20 rounded-full bg-gray-100 mb-5" />
                <div className="w-32 h-4 bg-gray-100 rounded mb-3" />
                <div className="w-48 h-3 bg-gray-100 rounded" />
              </div>
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {displayed.map((spec) => {
              const isUrl = spec.icon && (spec.icon.startsWith('http') || spec.icon.startsWith('/') || spec.icon.includes('.'))
              return (
                <Link to={`/services/${spec.slug || spec.id}`} key={spec.id} className="flex flex-col items-center text-center group bg-white rounded-2xl p-6 shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-primary-100 hover:-translate-y-1">
                  <div className="w-20 h-20 mb-5 flex items-center justify-center bg-primary-50 rounded-full group-hover:bg-primary-100 transition-colors duration-300 ring-4 ring-white shadow-inner">
                    {spec.icon ? (
                      isUrl ? (
                        <img src={spec.icon} alt={spec.name} className="w-10 h-10 object-contain opacity-90 group-hover:opacity-100 transition-opacity group-hover:scale-110 duration-300" />
                      ) : (
                        <span className="text-4xl drop-shadow-sm group-hover:scale-110 transition-transform duration-300">{spec.icon}</span>
                      )
                    ) : (
                      <FiActivity className="w-10 h-10 text-primary-500 group-hover:text-primary-600 transition-colors duration-300" strokeWidth={1.5} />
                    )}
                  </div>
                  <h3 className="font-heading font-bold text-navy-800 text-lg tracking-wide mb-3 group-hover:text-primary-600 transition-colors">
                    {spec.name}
                  </h3>
                  <p className="text-gray-500 text-sm leading-relaxed line-clamp-3">
                    {spec.description || 'Expert medical treatment and comprehensive care for a rapid recovery.'}
                  </p>
                </Link>
              )
            })}
          </div>
        )}

      </div>
    </section>
  )
}
