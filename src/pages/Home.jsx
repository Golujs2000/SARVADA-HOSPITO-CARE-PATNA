// ─────────────────────────────────────────────────────────────
// pages/Home.jsx
// The main homepage — composes all home section components.
// ─────────────────────────────────────────────────────────────

import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { FiMapPin, FiPhone, FiMail, FiCalendar } from 'react-icons/fi'
import SEO from '../components/SEO'
import { useSpecialities } from '../hooks/useSpecialities'
import HeroSection from '../components/home/HeroSection'
import StatsCounter from '../components/home/StatsCounter'
import WhyChooseUs from '../components/home/WhyChooseUs'
import ServicesSection from '../components/home/ServicesSection'
import FeaturedDoctors from '../components/home/FeaturedDoctors'
import Testimonials from '../components/home/Testimonials'
import BlogPreview from '../components/home/BlogPreview'
import GalleryStrip from '../components/home/GalleryStrip'
import TreatmentGallery from '../components/home/TreatmentGallery'
import AppointmentForm from '../components/home/AppointmentForm'
import PatientReach from '../components/home/PatientReach'
import AwardsSection from '../components/home/AwardsSection'
import { siteData } from '../data/siteData'

const hospitalSchema = {
  '@context': 'https://schema.org',
  '@type': 'MedicalClinic',
  name: siteData.name,
  url: siteData.url,
  logo: `${siteData.url}/patna-lapro-logo.png`,
  description: siteData.description,
  telephone: `+91${siteData.contact.phone}`,
  email: siteData.contact.email,
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Anand palace, Bypass Rd, changer, Kankarbagh',
    addressLocality: 'Patna',
    addressRegion: 'Bihar',
    postalCode: '800020',
    addressCountry: 'IN',
  },
  openingHoursSpecification: [
    { '@type': 'OpeningHoursSpecification', dayOfWeek: ['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'], opens: '09:00', closes: '17:00' },
  ],
  medicalSpecialty: [],
  availableService: [],
  sameAs: [siteData.social.facebook, siteData.social.instagram],
}

export default function Home() {
  const { specialities } = useSpecialities()
  const specNames = specialities.map(s => s.name)

  return (
    <>
      <SEO
        description="Sarvada Hospital (A Unit of Servada Hospito Care Pvt. Ltd.) — ISO 9001:2020 Certified Hospital in Kankarbagh, Patna. Providing advanced laparoscopic surgery, ICU, ICCU, dialysis, gynecology, and 24/7 emergency care."
        keywords={[
          'laparoscopic surgery Patna',
          'Dr Manmohan Suman',
          'kidney stone treatment Patna',
          'gallbladder stone Patna',
          'jaundice specialist Patna',
          'liver specialist Patna',
          'stone hospital Patna Bihar',
          'laparoscopy clinic Nepal',
          'stone specialist Jharkhand',
          'laparoscopic surgeon UP',
          'gastro surgeon Bihar'
        ]}
        jsonLd={{
          ...hospitalSchema,
          medicalSpecialty: specNames.length > 0 ? specNames : ['Laparoscopic Surgery', 'Urology', 'General Surgery', 'Gastroenterology'],
          availableService: specNames.length > 0
            ? specNames.map(name => ({ '@type': 'MedicalTherapy', name }))
            : hospitalSchema.availableService
        }}

      />

      {/* 1. Hero */}
      <HeroSection />

      {/* 2. Stats ticker */}
      <StatsCounter />

      {/* 3. Specialities / Services */}
      <ServicesSection />

      {/* 4. Why Choose Us */}
      <WhyChooseUs />

      {/* 4b. Awards & Achievements */}
      <AwardsSection />

      {/* 5. Regional Patient Reach */}
      <PatientReach />

      {/* 6. Featured Doctors */}
      <FeaturedDoctors />

      {/* 7. World Class Facility */}
      <GalleryStrip />

      {/* 7b. Treatment Gallery */}
      <TreatmentGallery />

      {/* 8. Patient Testimonials */}
      <Testimonials />

      {/* 9. Book Appointment */}
      <section id="book-appointment" className="section-padding bg-gradient-to-b from-primary-50/60 via-white to-slate-50 border-t border-primary-100">
        <div className="container-max">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-10"
          >
            <span className="inline-block bg-primary-100 text-primary-700 text-xs font-bold tracking-widest uppercase px-4 py-1.5 rounded-full mb-4">
              Book Now
            </span>
            <h2 className="font-heading text-4xl md:text-5xl font-black text-navy-800 mt-2">
              Schedule Your <span className="text-primary-600">Appointment</span>
            </h2>
            <p className="text-gray-500 text-lg mt-4 max-w-xl mx-auto">
              Fill the form below and our team will confirm your appointment within 30 minutes.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <AppointmentForm />
          </motion.div>
        </div>
      </section>

      {/* 10. Blog / Health Tips */}
      <BlogPreview />

      {/* 11. Location */}
      <section className="section-padding bg-gradient-to-b from-slate-50 to-white">
        <div className="container-max">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <span className="inline-block bg-primary-100 text-primary-700 text-xs font-bold tracking-widest uppercase px-4 py-1.5 rounded-full mb-4">
              Find Us
            </span>
            <h2 className="font-heading text-4xl md:text-5xl font-black text-navy-800 mt-2">Our Location</h2>
            <p className="text-gray-500 text-lg mt-4 max-w-xl mx-auto">Conveniently located in the heart of the city with ample parking.</p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-10 items-center">
            {/* Map */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="h-96 rounded-[5px] overflow-hidden shadow-xl border border-gray-100 ring-1 ring-primary-100"
            >
              <iframe
                src={siteData.mapEmbed}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Sarvada Hospital Location"
              />
            </motion.div>

            {/* Contact info */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-5"
            >
              {[
                { icon: FiMapPin, label: 'Address',  value: siteData.contact.address,   href: null,                                    color: 'bg-blue-50 text-blue-600' },
                { 
                  icon: FiPhone,  
                  label: 'Phone',    
                  value: [
                    siteData.contact.phone,
                    siteData.contact.phone2,
                    siteData.contact.phone3,
                    siteData.contact.phone4
                  ].filter(Boolean),      
                  isPhones: true,                                
                  color: 'bg-green-50 text-green-600' 
                },
                { icon: FiMail,   label: 'Email',    value: siteData.contact.email,      href: `mailto:${siteData.contact.email}`,      color: 'bg-purple-50 text-purple-600' },
              ].map(({ icon: Icon, label, value, href, isPhones, color }) => (
                <div key={label} className="flex gap-4 p-4 bg-white rounded-[5px] border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                  <div className={`w-12 h-12 ${color} rounded-[5px] flex items-center justify-center flex-shrink-0`}>
                    <Icon className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-navy-800 text-sm mb-0.5">{label}</h4>
                    {isPhones ? (
                      <div className="flex flex-col gap-1">
                        {value.map((ph) => (
                          <a key={ph} href={`tel:${ph}`} className="text-gray-600 text-sm hover:text-primary-600 transition-colors block">
                            {ph}
                          </a>
                        ))}
                      </div>
                    ) : href ? (
                      <a href={href} className="text-gray-600 text-sm hover:text-primary-600 transition-colors">{value}</a>
                    ) : (
                      <p className="text-gray-600 text-sm leading-relaxed">{value}</p>
                    )}
                  </div>
                </div>
              ))}

              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-7 py-3.5 bg-primary-600 hover:bg-primary-700 text-white font-bold rounded-xl transition-all duration-200 shadow-lg shadow-primary-600/25 mt-2"
              >
                <FiCalendar /> Get Directions &amp; Contact
              </Link>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  )
}
