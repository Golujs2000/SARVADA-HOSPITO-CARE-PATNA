import { Link } from 'react-router-dom'
import { FiClock, FiCalendar, FiAward, FiChevronRight } from 'react-icons/fi'
import { getInitials } from '../utils/helpers'

const DAYS_SHORT = ['Mon','Tue','Wed','Thu','Fri','Sat','Sun']
const DAYS_FULL  = ['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday']

const isObgyn = (doc) =>
  /gynaec|gynec|obstet|women|maternity/i.test(doc.specialty || '') ||
  (Array.isArray(doc.specialties) && doc.specialties.some(s => /gynaec|gynec|obstet|women|maternity/i.test(s)))

export default function DoctorCard({ doc, accent }) {
  const resolvedAccent = accent ?? (isObgyn(doc) ? 'rose' : 'primary')
  const isOb = resolvedAccent === 'rose'

  const btnPrimaryClass = isOb 
    ? 'bg-rose-600 hover:bg-rose-700 text-white shadow-rose-600/10' 
    : 'bg-primary-600 hover:bg-primary-700 text-white shadow-primary-600/10'
    
  const btnSecondaryClass = isOb
    ? 'border-rose-600 text-rose-600 hover:bg-rose-50'
    : 'border-primary-600 text-primary-600 hover:bg-primary-50'
    
  const badgeClass = isOb
    ? 'bg-rose-50 border border-rose-200 text-rose-700'
    : 'bg-cyan-50 border border-cyan-200 text-cyan-700'
    
  const pulseDotClass = isOb ? 'bg-rose-500' : 'bg-cyan-500'

  return (
    <div className="bg-white rounded-[12px] border border-gray-150 shadow-sm hover:shadow-md overflow-hidden flex flex-col group hover:-translate-y-1 transition-all duration-300 h-full">
      {/* Top Portrait Column */}
      <div className="w-full aspect-[4/5] bg-slate-50 overflow-hidden relative flex items-center justify-center shrink-0">
        {doc.image ? (
          <img
            src={doc.image}
            alt={doc.name}
            loading="lazy"
            className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center py-10">
            <div className={`w-20 h-20 ${isOb ? 'bg-rose-600' : 'bg-primary-600'} rounded-full flex items-center justify-center shadow-md`}>
              <span className="font-bold text-white text-3xl">{getInitials(doc.name)}</span>
            </div>
          </div>
        )}

        {/* Experience badge */}
        {doc.experience && (
          <div className="absolute top-3 left-3 bg-navy-800/90 backdrop-blur-sm border border-navy-700/50 rounded-[5px] px-2.5 py-1.5 flex items-center gap-1.5 shadow-md z-10">
            <FiAward className="w-3.5 h-3.5 text-amber-400" />
            <p className="text-white font-black text-xs leading-none">{doc.experience}+ Yrs</p>
          </div>
        )}
      </div>

      {/* Info Body */}
      <div className="flex-1 flex flex-col p-4 md:p-5 min-w-0 justify-between">
        <div>
          {/* Header line with Specialty tag */}
          <div className="flex items-center justify-between gap-2 mb-3">
            <span className={`inline-flex items-center gap-1 text-[10px] font-bold px-2.5 py-1 rounded-full uppercase tracking-wider ${badgeClass}`}>
              <span className={`w-1 h-1 rounded-full animate-pulse ${pulseDotClass}`} />
              {doc.specialty}
            </span>
            {doc.consultationFee && (
              <span className="text-[11px] font-semibold text-gray-500 bg-gray-50 border border-gray-100 px-2 py-0.5 rounded-[5px]">
                ₹{doc.consultationFee}
              </span>
            )}
          </div>

          <h3 className="font-heading font-black text-navy-800 text-lg md:text-xl leading-snug mb-2 tracking-tight group-hover:text-primary-600 transition-colors">
            <Link to={`/doctors/${doc.slug || doc.id}`}>{doc.name}</Link>
          </h3>

          {doc.qualification && (
            <p className="text-primary-600 text-xs font-bold mb-2 truncate">
              {doc.qualification.split(',')[0]}
            </p>
          )}

          <p className="text-gray-500 text-xs leading-relaxed mb-4 line-clamp-3">
            {doc.bio
              ? doc.bio
              : `${doc.experience ? doc.experience + '+ years' : ''} ${doc.experience ? 'of expertise in ' : 'Expert in '}${doc.specialty}. View profile for full qualifications and experience details.`.trim()
            }
          </p>
        </div>

        {/* OPD Timings */}
        {doc.availableTime && (
          <div className="pt-3 border-t border-gray-100 w-full mb-4">
            <div className="flex items-start gap-2 text-[11px] text-gray-600">
              <FiClock className={`w-3.5 h-3.5 ${isOb ? 'text-rose-500' : 'text-primary-500'} shrink-0 mt-0.5`} />
              <div>
                <p className="font-bold text-navy-800 leading-tight">OPD Timings</p>
                <p className="text-gray-500 mt-0.5 leading-normal">
                  {doc.availableTime} 
                  {Array.isArray(doc.availableDays) && doc.availableDays.length > 0 && (
                    <span className={`${isOb ? 'text-rose-500' : 'text-primary-500'} font-bold ml-1`}>
                      ({DAYS_SHORT.map((s, i) => doc.availableDays.includes(DAYS_FULL[i]) ? s : null).filter(Boolean).join(', ')})
                    </span>
                  )}
                </p>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Action Buttons */}
      <div className="p-4 bg-slate-50 border-t border-gray-100 grid grid-cols-2 gap-2 mt-auto">
        <Link
          to={`/book-appointment?doctor=${encodeURIComponent(doc.name)}&dept=${encodeURIComponent(doc.specialty)}`}
          className={`w-full py-2.5 ${btnPrimaryClass} font-bold rounded-[5px] text-[10px] md:text-xs transition-all flex items-center justify-center gap-1`}
        >
          <FiCalendar className="w-3.5 h-3.5" /> Book
        </Link>
        <Link
          to={`/doctors/${doc.slug || doc.id}`}
          className={`w-full py-2.5 border ${btnSecondaryClass} font-bold rounded-[5px] text-[10px] md:text-xs transition-all flex items-center justify-center gap-0.5`}
        >
          Profile <FiChevronRight className="w-3.5 h-3.5" />
        </Link>
      </div>
    </div>
  )
}
