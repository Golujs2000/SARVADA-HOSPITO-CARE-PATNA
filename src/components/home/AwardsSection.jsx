import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { FiAward, FiStar, FiUsers, FiHeart, FiShield, FiTrendingUp } from 'react-icons/fi'
import { ref, listAll, getDownloadURL } from 'firebase/storage'
import { storage } from '../../firebase/config'

const AWARDS = [
  {
    icon: FiAward,
    title: 'Best Laparoscopic Surgeon',
    desc: 'Recognised as a leading laparoscopic surgeon in Patna for outstanding patient outcomes.',
    color: 'bg-amber-50 border-amber-100 text-amber-500'
  },
  {
    icon: FiStar,
    title: 'Surgical Excellence Award',
    desc: 'Awarded for outstanding contributions to minimally invasive and advanced laparoscopic surgery.',
    color: 'bg-primary-50 border-primary-100 text-primary-600'
  },
  {
    icon: FiUsers,
    title: '10,000+ Successful Operations',
    desc: 'Over 10,000 successful laparoscopic and stone operations performed successfully across Patna and Bihar.',
    color: 'bg-blue-50 border-blue-100 text-blue-600'
  },
  {
    icon: FiHeart,
    title: 'Community Health Hero',
    desc: 'Honoured for over 21 years of dedicated service and compassionate surgical patient care.',
    color: 'bg-rose-50 border-rose-100 text-rose-500'
  },
  {
    icon: FiShield,
    title: 'Certified Laparoscopic Specialist',
    desc: "MBBS, MD certified — Senior Consultant Surgeon.",
    color: 'bg-teal-50 border-teal-100 text-teal-600'
  },
  {
    icon: FiTrendingUp,
    title: 'Advanced Surgical Protocols',
    desc: 'Expertise in keyhole surgical techniques for rapid post-operative recovery.',
    color: 'bg-purple-50 border-purple-100 text-purple-600'
  }
]

const FALLBACK_1_IMAGES = [
  "/gallery/employee_of_the_month_presentation.jpeg",
  "/gallery/patient_discharge_bouquet.jpeg",
  "/gallery/hospital_staff_group_photo.jpeg",
  "/gallery/employee_of_the_month_award.jpeg",
  "/gallery/patient_recovery_victory_staff_group.jpeg",
  "/gallery/doctor_sanjeev_kumar_with_visitors.jpeg"
]

const FALLBACK_2_IMAGES = [
  "/gallery/nurses_day_celebration_01.jpeg",
  "/gallery/nurses_day_celebration_02.jpeg",
  "/gallery/nurses_day_celebration_03.jpeg",
  "/gallery/nurses_day_celebration_04.jpeg",
  "/gallery/nurses_day_celebration_05.jpeg",
  "/gallery/nurses_day_celebration_06.jpeg",
  "/gallery/nurses_day_celebration_07.jpeg",
  "/gallery/newspaper_clipping_successful_surgery.jpeg",
  "/gallery/newspaper_clipping_gist_cancer_01.jpeg",
  "/gallery/newspaper_clipping_small_intestine_surgery_01.jpeg"
]

export default function AwardsSection() {
  const [marquee1, setMarquee1] = useState(FALLBACK_1_IMAGES)
  const [marquee2, setMarquee2] = useState(FALLBACK_2_IMAGES)

  useEffect(() => {
    async function fetchAwardsImages() {
      try {
        const listRef = ref(storage, 'awards/')
        const res = await listAll(listRef)
        if (res.items.length > 0) {
          const urls = await Promise.all(
            res.items.map((itemRef) => getDownloadURL(itemRef))
          )
          const row1 = []
          const row2 = []
          urls.forEach((url, i) => {
            if (i % 2 === 0) {
              row1.push(url)
            } else {
              row2.push(url)
            }
          })
          
          if (row1.length > 0) setMarquee1(row1)
          if (row2.length > 0) {
            setMarquee2(row2)
          } else if (row1.length > 0) {
            setMarquee2(row1)
          }
        }
      } catch (err) {
        console.error("Failed to fetch awards images from Firebase, using fallbacks:", err)
      }
    }
    fetchAwardsImages()
  }, [])
  return (
    <section className="section-padding bg-white overflow-hidden">
      <div className="container-max">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <span className="inline-block bg-amber-50 border border-amber-200 text-amber-600 text-xs font-bold tracking-widest uppercase px-4 py-1.5 rounded-full mb-4">
            Recognition
          </span>
          <h2 className="font-heading text-4xl md:text-5xl font-black text-navy-800 mt-2 leading-tight">
            Awards &amp; <span className="text-amber-500">Achievements</span>
          </h2>
          <p className="text-gray-500 text-lg mt-4 max-w-2xl mx-auto font-medium">
            21+ years of excellence in advanced laparoscopic surgery &amp; stone care — trusted by patients and medical peers across Patna and Bihar.
          </p>
        </motion.div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-16">
          {AWARDS.map(({ icon: Icon, title, desc, color }, i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="bg-white border border-gray-100 rounded-[5px] p-6 shadow-sm hover:shadow-md transition-all duration-300 group"
            >
              <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 ${color}`}>
                <Icon className="w-6 h-6" />
              </div>
              <h3 className="font-heading font-bold text-navy-800 text-lg mb-2">{title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{desc}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Marquees */}
      <div className="flex flex-col gap-4 max-w-[100vw] overflow-hidden py-4 bg-gray-50">
        {/* Marquee 1 */}
        <div className="marquee-row overflow-hidden">
          <div className="flex gap-4" style={{ animation: '80s linear 0s infinite normal none running marquee-scroll', width: 'max-content' }}>
            {[...marquee1, ...marquee1, ...marquee1].map((src, i) => (
              <div key={`m1-${i}`} className="w-64 h-44 flex-shrink-0 rounded-[5px] overflow-hidden shadow-md border border-gray-100 group">
                <img
                  src={src}
                  alt="Award Ceremony"
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Marquee 2 */}
        <div className="marquee-row overflow-hidden">
          <div className="flex gap-4" style={{ animation: '80s linear 0s infinite reverse none running marquee-scroll', width: 'max-content' }}>
            {[...marquee2, ...marquee2, ...marquee2].map((src, i) => (
              <div key={`m2-${i}`} className="w-64 h-44 flex-shrink-0 rounded-[5px] overflow-hidden shadow-md border border-gray-100 group">
                <img
                  src={src}
                  alt="Conference Event"
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
