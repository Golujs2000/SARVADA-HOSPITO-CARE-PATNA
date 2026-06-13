import { FiHeart, FiUsers, FiClock, FiCreditCard, FiShield, FiThumbsUp } from 'react-icons/fi'

const features = [
  { icon: FiHeart, title: 'COMPREHENSIVE CARE' },
  { icon: FiUsers, title: 'QUALIFIED DOCTORS' },
  { icon: FiClock, title: '24/7 SERVICE' },
  { icon: FiCreditCard, title: 'AFFORDABLE PRICES' },
  { icon: FiShield, title: 'PROFESSIONAL STAFF' },
  { icon: FiThumbsUp, title: '1000+ HAPPY CLIENTS' },
]

export default function WhyChooseUs() {
  return (
    <section className="bg-slate-50 relative overflow-hidden py-16 md:py-24">
      <div className="container-max px-4 md:px-8">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-center">
          
          {/* Image */}
          <div className="w-full lg:w-5/12 relative mb-8 lg:mb-0">
            <img 
              src="https://firebasestorage.googleapis.com/v0/b/nova-max-hospital.firebasestorage.app/o/gallery%2F1781112398923_SARVADA%20HOSPITO%20CARE01.webp?alt=media&token=b9f5adf4-1e65-43e0-88e5-db1eb9408a4a" 
              alt="Sarvada Hospito Care Facility" 
              className="w-full h-auto rounded-lg shadow-xl object-cover"
              style={{ maxHeight: '600px' }}
            />
          </div>

          {/* Right: Content */}
          <div className="w-full lg:w-7/12">
            <h2 className="font-heading font-black text-navy-800 text-3xl md:text-4xl mb-4 text-center lg:text-left">
              What Makes Us Different
            </h2>
            <p className="text-gray-500 text-sm md:text-base mb-10 max-w-2xl text-center lg:text-left leading-relaxed">
              In this section you can learn more about the qualities that make our medical center stand out among the rest. We pride ourselves on delivering comprehensive care, maintaining a highly qualified team of doctors, and providing affordable prices.
            </p>

            {/* 2x3 Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-10">
              {features.map((feature, i) => {
                const Icon = feature.icon
                return (
                  <div key={i} className="flex items-center gap-5 group">
                    <div className="w-14 h-14 shrink-0 rounded-full bg-white border-2 border-primary-200 flex items-center justify-center group-hover:bg-primary-600 transition-colors duration-300 shadow-sm">
                      <Icon className="w-6 h-6 text-primary-600 group-hover:text-white transition-colors duration-300" />
                    </div>
                    <div>
                      <h3 className="font-heading font-bold text-navy-800 text-sm uppercase tracking-wider mb-1">
                        {feature.title}
                      </h3>
                      {/* Decorative Line */}
                      <div className="w-8 h-0.5 bg-primary-400 group-hover:w-16 transition-all duration-300" />
                    </div>
                  </div>
                )
              })}
            </div>
            
          </div>
        </div>
      </div>
    </section>
  )
}
