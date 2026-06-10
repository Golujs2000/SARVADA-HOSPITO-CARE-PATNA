// ─────────────────────────────────────────────────────────────
// components/home/Testimonials.jsx
// Patient testimonial carousel — white background.
// ─────────────────────────────────────────────────────────────

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FiStar, FiChevronLeft, FiChevronRight } from 'react-icons/fi'

const testimonials = [
  {
    name: 'Usahri Hasanpura',
    location: 'Patna, Bihar',
    dept: 'Koch’s Abdomen & Cysticercosis',
    rating: 5,
    date: '4 months ago',
    text: 'मरीज को कोख (Koch’s) एब्डोमेन के साथ सिस्टिसरकोसिस की समस्या थी। इसका सही और समय पर निदान डॉ. संजीव कुमार, जीआई सर्जन, पटना द्वारा किया गया। डॉ. संजीव कुमार की सटीक जांच, सही निर्णय और बेहतरीन इलाज की वजह से मरीज की जान बच सकी। वे बहुत ही अनुभवी, समझदार और मरीजों के प्रति संवेदनशील डॉक्टर हैं। हम उनके और उनकी पूरी मेडिकल टीम के तहेदिल से आभारी हैं। गैस्ट्रो और जटिल पेट की बीमारियों के लिए हम डॉ. संजीव कुमार की पूरी तरह से सिफारिश करते हैं। 🙏',
    initials: 'UH',
    verified: true,
  },
  {
    name: 'Puja Kumari',
    location: 'Patna, Bihar',
    dept: 'Fistula, Piles & Stone Surgery',
    rating: 5,
    date: '8 months ago',
    text: 'A good doctor with very polite behaviour. A real gentleman with good knowledge of laproscopy surgery of all types of fistula and piles. Specialist in all types of stone surgery. He has good polite and experienced supporting staff',
    initials: 'PK',
    verified: true,
  },
  {
    name: 'Mamta Kumari',
    location: 'Patna, Bihar',
    dept: 'Gastroenterology & GI Surgery',
    rating: 5,
    date: '8 months ago',
    text: 'To be very first, very polite and friendly Doctor. Having patience to listen to the problems very deeply. Well known for all kind of fistula, piles and stone surgery both open and laproscopy. Having good experience of liver diseases and pancreatic problems. Good supporting staff and good culture',
    initials: 'MK',
    verified: true,
  },
  {
    name: 'Akhilesh Kumar Pandey',
    location: 'Patna, Bihar',
    dept: 'Laparoscopic Gallstone Surgery',
    rating: 5,
    date: '4 months ago',
    text: 'Dr. Manmohan Suman is one of the best gastro surgeons in Patna, Bihar. He successfully performed laparoscopic gallstone surgery on my 70-year-old mother. She recovered very well, within two days of the surgery, and was discharged on the third day. The hospital staff and nursing sisters were extremely caring, supportive, and professional. Overall, the experience was excellent. Dr. Manmohan Suman is truly the best surgeon in Bihar. Highly recommended!',
    initials: 'AP',
    verified: true,
  },
  {
    name: 'Naziya Bano',
    location: 'Patna, Bihar',
    dept: 'Pancreatitis, Jaundice & ERCP',
    rating: 5,
    date: '4 months ago',
    text: 'We consulted Dr. Manmohan Suman gastro surgeon in Patna for a case of stone with pancreatitis and jaundice. The doctor diagnosed the problem accurately and explained everything in a very clear and reassuring manner. ERCP was performed successfully, and the patient improved significantly after the procedure. The hospital staff were supportive, caring, and maintained good cleanliness. Post-procedure care and guidance were excellent. He has two centres in Patna: Chirayu Health Care, Kankarbagh and Medimax Hospital. Best ERCP doctor in Bihar.',
    initials: 'NB',
    verified: true,
  },
  {
    name: 'Nitesh Yadav',
    location: 'Patna, Bihar',
    dept: 'Koch’s Abdomen & Cysticercosis',
    rating: 5,
    date: '4 months ago',
    text: 'Dr. Manmohan Suman, GI Surgeon and top gastroenterologist of Patna, Bihar, made an accurate and timely diagnosis of Koch’s abdomen with cysticercosis, which saved the patient’s life. He is highly experienced and trustworthy. We are truly grateful for his care.',
    initials: 'NY',
    verified: true,
  },
  {
    name: 'Rajesh Prasad',
    location: 'Patna, Bihar',
    dept: 'Laparoscopic Gallbladder Surgery',
    rating: 5,
    date: 'April 2026',
    text: 'I had severe gallstone pain for over a year. Dr. Manmohan Suman performed my laparoscopic cholecystectomy and I was discharged the very next morning. Absolutely no large scar, very little pain and I was back to work in a week. Excellent surgeon and wonderful team at Sarvada Hospital.',
    initials: 'RP',
    verified: true,
  },
  {
    name: 'Sunita Kumari',
    location: 'Muzaffarpur, Bihar',
    dept: 'Kidney Stone (PCNL)',
    rating: 5,
    date: 'March 2026',
    text: 'I had a 2.5 cm kidney stone and was told I needed PCNL surgery. Dr. Manmohan Suman explained everything clearly, the surgery was smooth and I had zero complications. The stone is completely cleared on my CT scan follow-up. Truly grateful to the doctor and staff.',
    initials: 'SK',
    verified: true,
  },
  {
    name: 'Manoj Kumar Sinha',
    location: 'Hajipur, Bihar',
    dept: 'Laparoscopic Hernia Repair',
    rating: 5,
    date: 'February 2026',
    text: 'I had a right inguinal hernia that was causing a lot of discomfort. The laparoscopic repair by Dr. Manmohan Suman was superb — I walked the same evening, went home next day and resumed my business in a week. Zero recurrence after 6 months. Highly recommended.',
    initials: 'MK',
    verified: true,
  },
  {
    name: 'Geeta Devi',
    location: 'Ara, Bihar',
    dept: 'Jaundice (Obstructive)',
    rating: 5,
    date: 'January 2026',
    text: 'My husband was diagnosed with obstructive jaundice from a CBD stone. Dr. Manmohan Suman arranged ERCP and then laparoscopic cholecystectomy. His bilirubin came back to normal in 10 days. The doctor is very calm, explains everything and the care was exceptional. Thank you!',
    initials: 'GD',
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
          className="text-center mb-14"
        >
          <span className="inline-block bg-amber-50 border border-amber-200 text-amber-600 text-xs font-bold tracking-widest uppercase px-4 py-1.5 rounded-full mb-4">
            Patient Stories
          </span>
          <h2 className="font-heading text-4xl md:text-5xl font-black text-navy-800 mt-2 leading-tight">
            What Our Patients{' '}
            <span className="text-amber-500">Say</span>
          </h2>
          <p className="text-gray-500 text-lg mt-4 max-w-xl mx-auto">
            Real stories from real patients who trusted us with their health.
          </p>
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
