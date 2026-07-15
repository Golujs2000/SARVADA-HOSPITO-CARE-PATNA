// ─────────────────────────────────────────────────────────────
// hooks/useVisitTracker.js
// Tracks unique site visits once per browser session.
// Also tracks phone number link clicks globally.
// Increments 4 Firestore counters atomically:
//   siteStats/total            → all-time count & phoneClicks count
//   siteStats/daily_YYYY-MM-DD → per-day count & phoneClicks count
//   siteStats/monthly_YYYY-MM  → per-month count & phoneClicks count
//   siteStats/yearly_YYYY      → per-year count & phoneClicks count
// ─────────────────────────────────────────────────────────────

import { useEffect } from 'react'
import { doc, setDoc, increment, serverTimestamp } from 'firebase/firestore'
import { db } from '../firebase/config'

const SESSION_KEY = 'mh_visit_tracked'

/**
 * Atomically increments phone click stats in Firestore
 */
export function trackPhoneClick() {
  const now = new Date()
  const yyyy = now.getFullYear()
  const mm = String(now.getMonth() + 1).padStart(2, '0')
  const dd = String(now.getDate()).padStart(2, '0')
  const dayKey   = `${yyyy}-${mm}-${dd}`
  const monthKey = `${yyyy}-${mm}`
  const yearKey  = `${yyyy}`

  return Promise.all([
    setDoc(doc(db, 'siteStats', 'total'),
      { phoneClicks: increment(1), lastPhoneClick: serverTimestamp() }, { merge: true }),
    setDoc(doc(db, 'siteStats', `daily_${dayKey}`),
      { phoneClicks: increment(1), date: dayKey }, { merge: true }),
    setDoc(doc(db, 'siteStats', `monthly_${monthKey}`),
      { phoneClicks: increment(1), month: monthKey }, { merge: true }),
    setDoc(doc(db, 'siteStats', `yearly_${yearKey}`),
      { phoneClicks: increment(1), year: yearKey }, { merge: true }),
  ]).catch(err => console.error('Error tracking phone click:', err))
}

export function useVisitTracker() {
  useEffect(() => {
    // 1. Visit tracker (once per session)
    if (!sessionStorage.getItem(SESSION_KEY)) {
      sessionStorage.setItem(SESSION_KEY, '1')

      const now = new Date()
      const yyyy = now.getFullYear()
      const mm = String(now.getMonth() + 1).padStart(2, '0')
      const dd = String(now.getDate()).padStart(2, '0')
      const dayKey   = `${yyyy}-${mm}-${dd}`
      const monthKey = `${yyyy}-${mm}`
      const yearKey  = `${yyyy}`

      Promise.all([
        setDoc(doc(db, 'siteStats', 'total'),
          { count: increment(1), lastVisit: serverTimestamp() }, { merge: true }),
        setDoc(doc(db, 'siteStats', `daily_${dayKey}`),
          { count: increment(1), date: dayKey }, { merge: true }),
        setDoc(doc(db, 'siteStats', `monthly_${monthKey}`),
          { count: increment(1), month: monthKey }, { merge: true }),
        setDoc(doc(db, 'siteStats', `yearly_${yearKey}`),
          { count: increment(1), year: yearKey }, { merge: true }),
      ]).catch(console.error)
    }

    // 2. Global phone click tracker listener
    const handleGlobalClick = (e) => {
      let target = e.target
      while (target && target !== document.body) {
        if (target.tagName === 'A') {
          const href = target.getAttribute('href')
          if (href && href.startsWith('tel:')) {
            trackPhoneClick()
            break
          }
        }
        target = target.parentElement
      }
    }

    document.addEventListener('click', handleGlobalClick)
    return () => {
      document.removeEventListener('click', handleGlobalClick)
    }
  }, [])
}

