import { motion } from 'framer-motion'
import {
  FiShield, FiDroplet, FiUsers, FiAward, FiHeart, FiActivity,
} from 'react-icons/fi'

const reasons = [
  {
    icon: FiActivity,
    title: 'Advanced Laparoscopic Surgery',
    desc: 'State-of-the-art laparoscopic OT with HD camera and energy devices — minimal incisions, less pain, rapid recovery.',
    color: 'from-cyan-500 to-blue-600',
    light: 'bg-cyan-500/10 text-cyan-500 border-cyan-500/10',
  },
  {
    icon: FiUsers,
    title: 'Expert Surgeon — Dr. Manmohan Suman',
    desc: 'MBBS, MD — 21 Years Experience. Sr. Consultant Medimax Hospital, Patna. Ex-Gastro Surgeon (IGIMS, Patna), Ex-Surgeon (Safdarjung Hospital, New Delhi).',
    color: 'from-primary-500 to-indigo-600',
    light: 'bg-primary-500/10 text-primary-500 border-primary-500/10',
  },
  {
    icon: FiShield,
    title: 'High Safety Standards',
    desc: 'Rigorous pre-operative evaluation, evidence-based surgical protocols, and careful post-op monitoring for the safest outcomes.',
    color: 'from-emerald-500 to-teal-600',
    light: 'bg-emerald-500/10 text-emerald-500 border-emerald-500/10',
  },
  {
    icon: FiAward,
    title: '10,000+ Successful Operations',
    desc: 'Over 10,000 successful laparoscopic and stone operations — including PCNL, ureteroscopy, cholecystectomy, hernia, appendectomy and more.',
    color: 'from-amber-500 to-orange-600',
    light: 'bg-amber-500/10 text-amber-500 border-amber-500/10',
  },
  {
    icon: FiDroplet,
    title: 'Comprehensive Stone Care',
    desc: 'Complete stone management — ureteroscopy, laser lithotripsy, RIRS (flexible ureteroscopy), ESWL, medical therapy, bladder stone surgery, and PCNL — all under one roof in Patna.',
    color: 'from-blue-500 to-cyan-600',
    light: 'bg-blue-500/10 text-blue-500 border-blue-500/10',
  },
  {
    icon: FiHeart,
    title: 'Compassionate Patient Care',
    desc: 'We treat every patient with empathy, transparency, and respect. Detailed counselling before every surgery — no surprises.',
    color: 'from-rose-500 to-pink-600',
    light: 'bg-rose-500/10 text-rose-500 border-rose-500/10',
  },
]

export default function WhyChooseUs() {
  return (
    <section className="section-padding bg-slate-50/40 relative overflow-hidden">
      {/* Decorative backdrop blobs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-24 left-1/4 w-[500px] h-[500px] bg-primary-100/30 rounded-full blur-[120px]" />
        <div className="absolute bottom-24 right-1/4 w-[400px] h-[400px] bg-cyan-100/20 rounded-full blur-[100px]" />
      </div>

      <div className="container-max relative z-10">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-flex items-center gap-1.5 bg-primary-50 border border-primary-200 text-primary-600 text-xs font-bold tracking-widest uppercase px-4 py-1.5 rounded-full mb-3 shadow-sm">
            <span className="w-1.5 h-1.5 rounded-full bg-primary-500 animate-pulse" />
            Healthcare Excellence
          </span>
          <h2 className="font-heading font-black text-navy-800 text-4xl md:text-5xl leading-tight mt-2">
            Why Patna Gastro, Lapro &amp; Stone <span className="text-primary-600">Healthcare</span>
          </h2>
          <p className="text-gray-500 text-lg mt-4 max-w-2xl mx-auto leading-relaxed">
            We combine world-class surgical technology, veteran medical leadership, and absolute transparency to ensure your safe, rapid recovery.
          </p>
        </motion.div>

        {/* Grid layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map(({ icon: Icon, title, desc, color, light }, i) => {
            const indexStr = String(i + 1).padStart(2, '0')
            
            // First item: Double Width Dark Card
            if (i === 0) {
              return (
                <motion.div
                  key={title}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                  className="lg:col-span-2 bg-navy-800 rounded-[32px] p-8 md:p-10 flex flex-col justify-between min-h-[280px] relative overflow-hidden group border border-navy-700/50 shadow-xl hover:shadow-2xl transition-all duration-300"
                >
                  {/* Decorative glowing background gradients */}
                  <div className="absolute -right-20 -top-20 w-80 h-80 bg-gradient-to-br from-cyan-500/10 to-blue-600/5 rounded-full blur-[80px] group-hover:scale-110 transition-transform duration-700 pointer-events-none" />
                  
                  {/* Watermark Index Number */}
                  <span className="absolute top-6 right-8 font-heading font-black text-7xl md:text-8xl text-white/5 select-none pointer-events-none tracking-tighter">
                    {indexStr}
                  </span>

                  <div className="relative z-10 max-w-xl">
                    {/* Glowing Icon Wrapper */}
                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-cyan-400 to-blue-600 flex items-center justify-center mb-6 shadow-lg shadow-cyan-500/20 group-hover:scale-105 transition-transform duration-500">
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="font-heading font-black text-white text-2xl mb-3 tracking-tight group-hover:text-cyan-300 transition-colors">
                      {title}
                    </h3>
                    <p className="text-white/70 text-sm leading-relaxed">
                      {desc}
                    </p>
                  </div>

                  <div className="relative z-10 flex flex-wrap gap-2 mt-8">
                    <span className="text-xs font-bold bg-white/5 text-cyan-300 border border-cyan-500/20 px-3.5 py-1.5 rounded-full uppercase tracking-wider">HD Laparoscopic OT</span>
                    <span className="text-xs font-bold bg-white/5 text-cyan-300 border border-cyan-500/20 px-3.5 py-1.5 rounded-full uppercase tracking-wider">Advanced Energy Devices</span>
                    <span className="text-xs font-bold bg-white/5 text-cyan-300 border border-cyan-500/20 px-3.5 py-1.5 rounded-full uppercase tracking-wider">Fast-Track Recovery</span>
                  </div>
                </motion.div>
              )
            }

            // Normal Cards: Clean Glassmorphism
            return (
              <motion.div
                key={title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
                className="bg-white border border-gray-100/90 rounded-[32px] p-8 shadow-card hover:shadow-card-hover hover:border-primary-100 hover:-translate-y-1 transition-all duration-300 group relative overflow-hidden"
              >
                {/* Watermark Index Number */}
                <span className="absolute top-6 right-8 font-heading font-black text-6xl text-slate-100 select-none pointer-events-none group-hover:text-primary-50 transition-colors tracking-tighter">
                  {indexStr}
                </span>

                {/* Styled Icon wrapper */}
                <div className={`w-14 h-14 rounded-2xl ${light} flex items-center justify-center mb-6 border transition-all duration-300 group-hover:bg-gradient-to-br ${color} group-hover:text-white group-hover:border-transparent group-hover:shadow-md`}>
                  <Icon className="w-6 h-6 transition-transform group-hover:scale-105 duration-300" />
                </div>

                <h3 className="font-heading font-bold text-navy-800 text-lg mb-3 tracking-tight group-hover:text-primary-700 transition-colors">
                  {title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed">
                  {desc}
                </p>
              </motion.div>
            )
          })}
        </div>

        {/* Lower link */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mt-14"
        >
          <a href="/about" className="inline-flex items-center gap-2 text-primary-600 font-extrabold text-sm hover:gap-3.5 transition-all group">
            <span>Learn more about our clinical mission</span>
            <svg stroke="currentColor" fill="none" strokeWidth="2.5" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" /></svg>
          </a>
        </motion.div>
      </div>
    </section>
  )
}
