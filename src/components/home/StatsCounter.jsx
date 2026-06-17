// ─────────────────────────────────────────────────────────────
// components/home/StatsCounter.jsx
// Animated number counters for key hospital stats.
// Each counter uses requestAnimationFrame with a cubic-ease-out
// curve and only starts when the element scrolls into view
// (via framer-motion's useInView with once:true).
// Stats are sourced from siteData.stats.
// ─────────────────────────────────────────────────────────────

import { useEffect, useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { FaHeartbeat, FaUserMd, FaAmbulance, FaAward } from 'react-icons/fa'
import { siteData } from '../../data/siteData'

const getIcon = (iconId) => {
  switch (iconId) {
    case 'heartbeat':
      return <FaHeartbeat className="w-6 h-6 md:w-7 md:h-7 text-white" />
    case 'doctor':
      return <FaUserMd className="w-6 h-6 md:w-7 md:h-7 text-white" />
    case 'operations':
      return <FaAmbulance className="w-6 h-6 md:w-7 md:h-7 text-white" />
    case 'established':
      return <FaAward className="w-6 h-6 md:w-7 md:h-7 text-white" />
    default:
      return null
  }
}

function Counter({ value, suffix, duration = 2000 }) {
  const [count, setCount] = useState(0)
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })

  useEffect(() => {
    if (!inView) return
    const start = Date.now()
    const timer = setInterval(() => {
      const elapsed = Date.now() - start
      const progress = Math.min(elapsed / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      setCount(Math.floor(eased * value))
      if (progress >= 1) clearInterval(timer)
    }, 16)
    return () => clearInterval(timer)
  }, [inView, value, duration])

  return (
    <span ref={ref}>
      {count.toLocaleString('en-IN')}
      {suffix}
    </span>
  )
}

export default function StatsCounter() {
  return (
    <section className="relative z-30 w-full bg-[#0071d9] py-8 md:py-10 border-y border-white/10 shadow-lg">
      <div className="container-max px-4 md:px-8 mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-y-6 lg:gap-y-0 lg:divide-x divide-white/20"
        >
          {siteData.stats.map(({ label, value, suffix, iconId }, i) => (
            <div key={label} className="flex items-center justify-center lg:justify-center gap-3 md:gap-4 px-2 md:px-6">
              <div className="w-11 h-11 md:w-14 md:h-14 rounded-xl bg-white/15 flex items-center justify-center flex-shrink-0 shadow-inner">
                {getIcon(iconId)}
              </div>
              <div className="flex flex-col text-left">
                <h3 className="font-heading font-black text-2xl md:text-3xl lg:text-4xl text-white tracking-tight leading-none mb-1">
                  <Counter value={value} suffix={suffix} />
                </h3>
                <p className="text-white/80 font-bold text-[10px] md:text-xs tracking-wide uppercase">{label}</p>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
