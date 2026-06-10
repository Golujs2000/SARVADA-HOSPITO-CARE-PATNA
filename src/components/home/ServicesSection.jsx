import { Link } from 'react-router-dom'
import { FiHeart, FiActivity, FiTool, FiUser, FiUsers, FiEye } from 'react-icons/fi'
import { useCategories } from '../../hooks/useCategories'

const iconMap = {
  heart: FiHeart,
  brain: FiActivity,
  bone: FiTool,
  child: FiUser,
  female: FiUsers,
  ribbon: FiEye,
}

export default function ServicesSection() {
  const { categories: departments, loading } = useCategories()
  // Show a nice grid of 6 to match the template look
  const displayed = departments.slice(0, 6)

  return (
    <section className="relative py-20 md:py-28 bg-cover bg-center" style={{ backgroundImage: 'url("/gallery/hospital-1.jpg")' }}>
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-navy-900/90 mix-blend-multiply" />
      
      <div className="container-max px-4 md:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h2 className="font-heading font-black text-white text-3xl md:text-4xl mb-4">
            Our Medical Services
          </h2>
          <p className="text-white/70 text-sm md:text-base leading-relaxed">
            In this section you can learn more about the diverse range of medical services and specialties we offer. We provide comprehensive care across multiple disciplines with advanced infrastructure.
          </p>
        </div>

        {/* Services Grid */}
        {loading ? (
          <div className="grid grid-cols-2 md:grid-cols-3 gap-y-12 gap-x-8">
             {[...Array(6)].map((_, i) => (
              <div key={i} className="flex flex-col items-center animate-pulse">
                <div className="w-16 h-16 rounded-full bg-white/10 mb-4" />
                <div className="w-32 h-4 bg-white/10 rounded mb-2" />
                <div className="w-48 h-3 bg-white/10 rounded" />
              </div>
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-2 md:grid-cols-3 gap-y-16 gap-x-8">
            {displayed.map((spec) => {
              const Icon = iconMap[spec.icon] || FiActivity
              return (
                <Link to={`/services/${spec.slug || spec.id}`} key={spec.id} className="flex flex-col items-center text-center group">
                  <div className="w-16 h-16 mb-5 flex items-center justify-center">
                    <Icon className="w-12 h-12 text-accent-300 group-hover:text-white transition-colors duration-300" strokeWidth={1.5} />
                  </div>
                  <h3 className="font-heading font-bold text-white text-lg tracking-wide mb-3 group-hover:text-accent-300 transition-colors uppercase">
                    {spec.name}
                  </h3>
                  <p className="text-white/60 text-sm leading-relaxed max-w-xs line-clamp-3">
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
