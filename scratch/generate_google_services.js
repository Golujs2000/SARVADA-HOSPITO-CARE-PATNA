import fs from 'fs'
import path from 'path'
import { laproStoneSpecialities } from '../src/data/seed/laproStoneSpecialities.js'

const outputPath = path.resolve('google-business-services.txt')

let output = `================================================================
  Sarvada Hospito Care — GOOGLE BUSINESS PROFILE SERVICES
  Anand palace, Bypass Rd, changer, Kankarbagh, Patna, Bihar 800020
  Call: 7079001600 | 7079001700
  https://sarvada-hospito-care.web.app
================================================================

HOW TO ADD:
  Google Business Profile → Edit Profile → Services → Add Service
  Each block = one service entry. Copy SERVICE NAME + DESCRIPTION.
================================================================

`

let totalServices = 0

laproStoneSpecialities.forEach((spec, idx) => {
  output += `━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n`
  output += `  CATEGORY ${idx + 1} — ${spec.name.toUpperCase()}\n`
  output += `━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n\n`

  if (spec.treatments) {
    spec.treatments.forEach((t) => {
      totalServices++
      output += `SERVICE NAME: ${t.name}\n`
      output += `DESCRIPTION:\n`
      
      let desc = t.description || ''
      if (!desc && t.longDescription) {
        desc = t.longDescription
      }
      
      // Clean up description and make sure it is SEO-optimized and under 300 characters
      desc = desc.replace(/\r?\n/g, ' ').trim()
      if (desc && !desc.endsWith('.') && !desc.endsWith('!') && !desc.endsWith('?')) {
        desc += '.'
      }
      
      const suffix = " Care at Sarvada Hospito Care, Patna, under Director Dr. Manmohan Suman."
      
      if (!desc.includes("Manmohan Suman") && !desc.includes("Patna")) {
        // Apply truncation if needed and append
        const maxBaseLength = 295 - suffix.length // 227 characters
        if (desc.length > maxBaseLength) {
          let truncated = desc.slice(0, maxBaseLength - 3)
          const lastSpace = truncated.lastIndexOf(' ')
          if (lastSpace > 150) {
            truncated = truncated.slice(0, lastSpace)
          }
          desc = truncated + '...'
        }
        desc = desc + suffix
      } else {
        // If it already has it, just truncate to 295 characters max
        if (desc.length > 295) {
          let truncated = desc.slice(0, 292)
          const lastSpace = truncated.lastIndexOf(' ')
          if (lastSpace > 200) {
            truncated = truncated.slice(0, lastSpace)
          }
          desc = truncated + '...'
        }
      }
      
      output += `${desc}\n\n---\n\n`
    })
    
    // Remove the trailing separator for this category
    output = output.slice(0, -7) + '\n'
  } else {
    output += `(No treatments listed in seed data)\n\n`
  }
})

// Additional SEO Tips
output += `================================================================
  GOOGLE BUSINESS — ADDITIONAL SEO TIPS
================================================================

HOSPITAL BUSINESS DESCRIPTION (for Google Profile "About" section):
-----------------------------------------------------------------
Sarvada Hospito Care is a specialized surgical clinic in
Anand palace, Bypass Rd, changer, Kankarbagh, Patna, Bihar, offering advanced laparoscopic
surgery, stone treatment, and surgical gastroenterology care. Led by Director
Dr. Manmohan Suman (MBBS, MD - Consultant Physician) along with our expert medical team of specialists.
Services: Laparoscopic Surgery, Kidney & Gallbladder Stone, Liver
Disorders, Pancreas Surgery, Jaundice & Biliary (ERCP), Upper GI
Endoscopy, Colonoscopy, GI Disorders, Liver Biopsy, Piles & Fistula,
Cancer Surgery, Hernia Repair, Thyroid Surgery, and Emergency GI Surgery.
We provide investigation, diagnosis, treatment and prevention of all
gastrointestinal (stomach and intestines) and hepatological (liver,
gallbladder, biliary tree and pancreas) diseases.
Anand palace, Bypass Rd, changer, Kankarbagh, Patna, Bihar 800020.
Call: 7079001600 | 7079001700 | Email: sarvadahospitocarepatna@gmail.com

TOP GOOGLE BUSINESS CATEGORIES TO SELECT:
-----------------------------------------
Primary:   Surgical Center
Secondary: Gastroenterologist
           General Surgeon
           Laparoscopic Surgeon
           Hospital
           Medical Clinic

GOOGLE POSTS / UPDATES — suggested weekly topics:
--------------------------------------------------
1. "Advanced Laparoscopic Surgery — faster recovery, smaller scars — Sarvada Hospito Care"
2. "Kidney stone? Minimally invasive PCNL & Laser treatment available — Call: 7079001600"
3. "Jaundice specialist in Patna — ERCP & biliary surgery under Director Dr. Manmohan Suman"
4. "Upper GI Endoscopy & Colonoscopy — diagnose stomach & colon problems early"
5. "Liver biopsy — accurate diagnosis for liver disease — book appointment today"
6. "Piles, Fissure & Fistula — painless stapler surgery — same-day discharge"
7. "Pancreatic surgery under Director Dr. Manmohan Suman — 21+ years experience"
8. "Gallbladder stone? Laparoscopic removal in 45 mins — go home next day"

================================================================
  Total Services: ${totalServices}  |  Categories: ${laproStoneSpecialities.length}
  Generated for: Sarvada Hospito Care, Patna, Bihar
================================================================
`

fs.writeFileSync(outputPath, output, 'utf-8')
console.log(`Successfully generated ${outputPath} with ${totalServices} services and ${laproStoneSpecialities.length} categories (with grammatically correct Local SEO sentences)!`)
