// ─────────────────────────────────────────────────────────────
// components/home/Testimonials.jsx
// Patient testimonial carousel — white background.
// ─────────────────────────────────────────────────────────────

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FiStar, FiChevronLeft, FiChevronRight } from 'react-icons/fi'

const testimonials = [
  {
    name: 'Sonal Kumar',
    location: 'Google Review',
    dept: 'Patient Experience',
    rating: 5,
    date: '2 days ago',
    text: 'My experience here was excellent. The hospital maintains a very high standard of cleanliness, which creates a positive environment. The doctors and nursing staff are very helpful, compassionate, and experienced they took great care of me every step of the way. The entire admission and discharge process was very smooth and hassle-free. I would definitely recommend this hospital to anyone.',
    initials: 'SK',
    verified: true,
  },
  {
    name: 'Nikhil Pratap',
    location: 'Google Review',
    dept: 'Patient Experience',
    rating: 5,
    date: '20 Jan 2025',
    text: 'The level of service received in this hospital is highly commendable. The staff were proactive about care and great cheerleaders for their patients. The staff were helpful, professional, and went out of their way to make me as comfortable as possible.',
    initials: 'NP',
    verified: true,
  },
]

export default function Testimonials() {
  const [active, setActive] = useState(0)
  const totalPages = Math.ceil(testimonials.length / 2)

  const prev = () => setActive((a) => (a === 0 ? totalPages - 1 : a - 1))
  const next = () => setActive((a) => (a === totalPages - 1 ? 0 : a + 1))

  return (
    <section className="relative section-padding overflow-hidden bg-white">

      {/* Faint quote mark decoration */}
      <div className="absolute top-8 right-8 md:right-20 text-[14rem] font-serif text-gray-900/[0.03] leading-none select-none pointer-events-none">"</div>

      <div className="container-max relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-heading text-3xl md:text-4xl font-black text-navy-800 mt-2 mb-4">
            Testimonials
          </h2>
          <div className="w-16 h-0.5 bg-primary-600 mx-auto" />
        </motion.div>

        <div className="max-w-6xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.3 }}
              className="grid md:grid-cols-2 gap-6"
            >
              {[0, 1].map((offset) => {
                const index = active * 2 + offset
                const item = testimonials[index]
                if (!item) return null

                return (
                  <div
                    key={item.name}
                    className="relative bg-gray-50 border border-gray-200 rounded-3xl p-6 md:p-8 flex flex-col justify-between h-full shadow-sm hover:shadow-md transition-all duration-300"
                  >
                    {/* Accent corner */}
                    <div className="absolute top-0 left-0 w-1.5 h-full rounded-l-3xl bg-gradient-to-b from-amber-400 via-primary-400 to-accent-400" />

                    <div>
                      {/* Stars */}
                      <div className="flex gap-1 mb-4">
                        {[...Array(item.rating)].map((_, i) => (
                          <FiStar key={i} className="w-4 h-4 text-amber-400 fill-amber-400" />
                        ))}
                      </div>

                      <p className="text-gray-700 text-[15px] md:text-[16px] leading-relaxed italic mb-6">
                        "{item.text}"
                      </p>
                    </div>

                    <div className="flex items-center gap-3.5 mt-auto pt-4 border-t border-gray-100">
                      <div className="w-12 h-12 bg-gradient-to-br from-primary-500 to-accent-500 rounded-full flex items-center justify-center flex-shrink-0 shadow-md">
                        <span className="font-heading font-bold text-white text-base">{item.initials}</span>
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2 flex-wrap">
                          <p className="font-heading font-bold text-navy-800 text-sm md:text-[15px] truncate">{item.name}</p>
                          {item.verified && (
                            <span className="inline-flex items-center gap-0.5 text-[10px] bg-green-50 border border-green-200 text-green-600 px-2 py-0.5 rounded-full font-medium shrink-0">
                              <svg className="w-2.5 h-2.5" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                              </svg>
                              Verified
                            </span>
                          )}
                        </div>
                        <p className="text-[11px] text-gray-400 mt-0.5">{item.location} · {item.date}</p>
                        <span className="text-[11px] bg-primary-50 text-primary-600 px-2.5 py-0.5 rounded-full font-medium mt-1.5 inline-block border border-primary-200 truncate max-w-full">
                          {item.dept}
                        </span>
                      </div>
                    </div>
                  </div>
                )
              })}
            </motion.div>
          </AnimatePresence>

          {/* Controls */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <button onClick={prev} className="w-11 h-11 bg-gray-100 border border-gray-200 rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors">
              <FiChevronLeft className="w-5 h-5 text-gray-700" />
            </button>
            <div className="flex gap-2">
              {[...Array(totalPages)].map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActive(i)}
                  className={`h-2 rounded-full transition-all duration-300 ${i === active ? 'w-8 bg-amber-400' : 'w-2 bg-gray-300 hover:bg-gray-400'}`}
                />
              ))}
            </div>
            <button onClick={next} className="w-11 h-11 bg-gray-100 border border-gray-200 rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors">
              <FiChevronRight className="w-5 h-5 text-gray-700" />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
