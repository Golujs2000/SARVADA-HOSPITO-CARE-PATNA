// ─────────────────────────────────────────────────────────────
// data/seed/laproStoneSpecialities.js
// Specialities & Treatments for Sarvada Hospital
// Led by Dr. Manmohan Suman (MBBS, MD)
// ─────────────────────────────────────────────────────────────

export const laproStoneSpecialities = [

  // ── 1. Laparoscopic Surgery ────────────────────────────────
  {
    name: 'Laparoscopic Surgery',
    slug: 'laparoscopic-surgery',
    icon: '🔬',
    category: 'Surgery',
    available: 'OPD & Emergency',
    description: 'Advanced minimally invasive laparoscopic surgeries by Dr. Manmohan Suman. Smaller cuts, faster recovery, and less pain compared to open surgery.',
    longDescription: `Sarvada Hospital is a premier centre for advanced laparoscopic (keyhole) surgery in Patna, Bihar. Led by Dr. Manmohan Suman, a senior consultant with over 21 years of experience, we perform minimally invasive procedures for gallbladder stones, hernias, appendicitis, and bariatric weight loss. Using high-definition laparoscopes and specialized instruments, our keyhole surgeries ensure smaller cuts, minimal pain, shorter hospital stays (usually 24–48 hours), and a rapid return to daily activities.`,
    features: ['Gallbladder Removal', 'Hernia Repair', 'Appendix Removal', 'Ovarian Cystectomy', 'Bariatric Weight Loss', 'Minimal Scarring'],
    costEstimate: '₹20,000 – ₹1,80,000',
    recoveryTime: '1 – 7 days',
    order: 1,
    treatments: [
      {
        name: 'Laparoscopic Cholecystectomy (Gallbladder Removal)',
        slug: 'laparoscopic-cholecystectomy',
        cost: '₹25,000 – ₹60,000',
        duration: '45–90 min',
        recovery: '2–5 days',
        description: 'Minimally invasive removal of the gallbladder through small incisions (4-port, 3-port, or single-port technique). The gold standard treatment for gallstones.',
        longDescription: `Laparoscopic Cholecystectomy is the gold standard surgical procedure for removing the gallbladder affected by gallstones (पित्ताशय की पथरी). At Sarvada Hospital, Dr. Manmohan Suman (MBBS, MD) performs this minimally invasive surgery with over 21 years of surgical expertise, making it one of the safest and most reliable gallbladder removal centres in Patna, Bihar.

During the procedure, 3–4 tiny incisions (each less than 1 cm) are made in the abdomen. A high-definition laparoscope (camera) is inserted to give the surgeon a magnified view of the gallbladder and surrounding structures. The cystic duct and artery are carefully identified, clipped, and divided before the gallbladder is removed through one of the small incisions. The entire procedure typically takes 45–90 minutes under general anaesthesia.

Patients benefit from significantly less post-operative pain, smaller scars, shorter hospital stay (usually 24–48 hours), and a much faster return to normal daily activities compared to traditional open surgery. Most patients in Patna and surrounding areas of Bihar — including Gaya, Nalanda, Vaishali, and Muzaffarpur — travel to our centre for this procedure due to Dr. Manmohan Suman's expertise as a former gastro surgeon at IGIMS Patna and Safdarjung Hospital, New Delhi.

If you are experiencing symptoms like upper abdominal pain after meals, bloating, nausea, or have been diagnosed with gallstones on ultrasound, consult Dr. Manmohan Suman at Sarvada Hospital, Anand palace, Bypass Rd, changer, Kankarbagh, Patna, Bihar 800020. Call 7079001600 or 7079001700 to book your appointment.`,
        indications: ['Symptomatic gallstones', 'Acute cholecystitis', 'Biliary colic'],
        benefits: ['Small cuts', 'Hospital stay 1–2 days', 'Less pain & blood loss'],
        preparation: ['Ultrasound abdomen', 'LFT, CBC tests', 'Fast 6–8 hrs'],
        steps: [
          { step: '01', title: 'Consultation', desc: 'Scan reviewed; surgical fitness assessed.' },
          { step: '02', title: 'Procedure', desc: 'Gallbladder removed laparoscopically under general anesthesia.' },
          { step: '03', title: 'Discharge', desc: 'Patient is discharged within 24–48 hours.' },
        ],
        faqs: [
          { question: 'Is gallbladder removal safe?', answer: 'Yes, it is one of the most common and safest laparoscopic procedures.' },
        ],
      },
      {
        name: 'Laparoscopic Appendectomy',
        slug: 'laparoscopic-appendectomy',
        cost: '₹20,000 – ₹45,000',
        duration: '30–60 min',
        recovery: '2–4 days',
        description: 'Emergency or elective removal of the inflamed appendix through laparoscopy.',
        longDescription: `Laparoscopic Appendectomy is the preferred surgical method for treating acute appendicitis (अपेंडिक्स की सूजन) at Sarvada Hospital. Dr. Manmohan Suman, a senior laparoscopic surgeon in Patna with extensive experience at IGIMS and Safdarjung Hospital, performs this minimally invasive procedure to safely remove the inflamed appendix through 2–3 tiny keyhole incisions.

Appendicitis is a medical emergency — the inflamed appendix can rupture if not treated promptly, leading to peritonitis and life-threatening infection. Recognising the urgency, our hospital provides 24-hour emergency surgical services for acute appendicitis cases across Patna and Bihar.

The laparoscopic approach offers significant advantages over traditional open appendectomy: smaller incisions mean less pain, lower risk of wound infection, quicker recovery, and better cosmetic results. Most patients are able to walk the same evening and are discharged within 24–48 hours. Full recovery typically takes just 1–2 weeks, compared to 4–6 weeks with open surgery.

Patients from Patna City, Danapur, Phulwari Sharif, Hajipur, and other parts of Bihar trust our team for emergency appendicitis surgery. If you or a family member is experiencing sudden severe pain in the lower right abdomen, fever, nausea, or vomiting, seek immediate medical attention. Contact Sarvada Hospital at 7079001600 for emergency consultation.`,
        indications: ['Acute appendicitis', 'Recurrent appendicitis'],
        benefits: ['Same-day discharge', 'Less pain', 'Faster return to normal life'],
        preparation: ['Ultrasound or CT scan', 'CBC, CRP blood tests'],
        steps: [
          { step: '01', title: 'Diagnosis', desc: 'Clinical presentation and scans confirm appendicitis.' },
          { step: '02', title: 'Surgery', desc: 'Appendix is removed laparoscopically.' },
          { step: '03', title: 'Recovery', desc: 'Discharge in 1-2 days; full recovery in 2 weeks.' },
        ],
        faqs: [
          { question: 'Is appendicitis an emergency?', answer: 'Yes, an inflamed appendix can rupture and cause severe infection.' },
        ],
      },
      {
        name: 'Laparoscopic Abdominal Surgery (All Types)',
        slug: 'laparoscopic-abdominal-surgery',
        cost: '₹25,000 – ₹2,00,000',
        duration: '30 min – 3 hrs',
        recovery: '2–10 days',
        description: 'Comprehensive laparoscopic surgery for all abdominal conditions — gallbladder, appendix, hernia, intestinal, liver, and gynaecological procedures.',
        longDescription: `Laparoscopic Abdominal Surgery (लैप्रोस्कोपिक पेट की सर्जरी) at Sarvada Hospital covers the full spectrum of minimally invasive abdominal procedures. Dr. Manmohan Suman (MBBS, MD), with 21+ years of surgical expertise and training at IGIMS Patna and Safdarjung Hospital New Delhi, performs advanced laparoscopic operations for virtually every abdominal condition.

Our laparoscopic capabilities include cholecystectomy (gallbladder removal), appendectomy, hernia repair (inguinal, umbilical, incisional), intestinal surgery, liver cyst drainage, splenectomy, ovarian cystectomy, and more. All procedures are performed through 2–4 small keyhole incisions (0.5–1.5 cm), offering patients significantly less pain, faster recovery, shorter hospital stay, and minimal scarring compared to traditional open surgery.

Patients from across Patna, Bihar — including Gaya, Muzaffarpur, Bhagalpur, Darbhanga, Chapra, and Purnea — choose our centre for laparoscopic surgery due to Dr. Manmohan Suman's expertise, affordable costs, and the hospital's modern infrastructure at Anand palace, Bypass Rd, changer, Kankarbagh, Patna, Bihar 800020. Call 7079001600 to book your consultation.`,
        indications: ['Gallstones', 'Appendicitis', 'Hernia', 'Ovarian cysts', 'Intestinal disorders', 'Liver conditions'],
        benefits: ['2–4 small incisions', 'Less pain & blood loss', 'Faster recovery', 'Shorter hospital stay', 'Minimal scarring'],
        preparation: ['Pre-operative blood tests', 'Ultrasound or CT scan', 'Anaesthesia fitness', 'Fasting 6–8 hours'],
        steps: [
          { step: '01', title: 'Evaluation', desc: 'Complete clinical and diagnostic workup for surgical planning.' },
          { step: '02', title: 'Surgery', desc: 'Laparoscopic procedure performed under general anaesthesia.' },
          { step: '03', title: 'Recovery', desc: 'Early mobilisation, discharge within 24–72 hours.' },
        ],
        faqs: [
          { question: 'Can all abdominal surgeries be done laparoscopically?', answer: 'Most abdominal surgeries can be performed laparoscopically. Dr. Manmohan Suman evaluates each case to determine the best approach.' },
        ],
      },
      {
        name: 'Laparoscopic Hernia Repair (TEP/TAPP)',
        slug: 'laparoscopic-hernia-repair',
        cost: '₹30,000 – ₹80,000',
        duration: '45–90 min',
        recovery: '3–7 days',
        description: 'Advanced laparoscopic hernia repair using TEP or TAPP technique with mesh placement for inguinal, umbilical, and incisional hernias.',
        longDescription: `Laparoscopic Hernia Repair (लैप्रोस्कोपिक हर्निया सर्जरी) at Sarvada Hospital is performed using the TEP (Totally Extra-Peritoneal) or TAPP (Trans-Abdominal Pre-Peritoneal) technique. Dr. Manmohan Suman specialises in tension-free mesh repair through 3 small keyhole incisions, offering a superior alternative to traditional open hernia surgery.

The laparoscopic approach is particularly advantageous for bilateral (both-sided) inguinal hernias and recurrent hernias, as both sides can be repaired through the same three incisions. A lightweight mesh is placed behind the abdominal wall muscles to reinforce the weak area, providing a durable repair with very low recurrence rates (less than 1–2%).

Patients experience significantly less post-operative pain, can walk within hours of surgery, and return to normal activities within 1–2 weeks — compared to 4–6 weeks with open surgery. This is especially beneficial for working professionals and labourers in Patna and Bihar who cannot afford prolonged rest.

If you have a swelling in the groin, around the navel, or at a previous surgical scar that increases on standing or coughing, consult Dr. Manmohan Suman at Sarvada Hospital. Call 7079001600 for an appointment.`,
        indications: ['Inguinal hernia (one or both sides)', 'Umbilical hernia', 'Incisional hernia', 'Recurrent hernia'],
        benefits: ['Tension-free mesh repair', 'Both sides repaired in one surgery', 'Less pain', 'Faster return to work'],
        preparation: ['Ultrasound abdomen', 'Blood tests (CBC, PT/INR)', 'ECG & anaesthesia fitness'],
        steps: [
          { step: '01', title: 'Diagnosis', desc: 'Clinical examination and ultrasound confirm hernia type.' },
          { step: '02', title: 'Surgery', desc: 'Laparoscopic mesh repair under general anaesthesia.' },
          { step: '03', title: 'Discharge', desc: 'Same-day or next-day discharge; resume work in 1–2 weeks.' },
        ],
        faqs: [
          { question: 'Is laparoscopic hernia repair better than open?', answer: 'Yes, it offers less pain, faster recovery, and lower recurrence rates, especially for bilateral and recurrent hernias.' },
        ],
      },
      {
        name: 'Bariatric (Weight Loss) Surgery',
        slug: 'bariatric-weight-loss-surgery',
        cost: '₹1,50,000 – ₹3,50,000',
        duration: '2–3 hrs',
        recovery: '7–14 days',
        description: 'Laparoscopic bariatric surgery for morbid obesity — sleeve gastrectomy and gastric bypass for sustainable weight loss.',
        longDescription: `Bariatric Surgery (मोटापा कम करने की सर्जरी) at Sarvada Hospital offers a life-changing solution for patients suffering from morbid obesity (BMI > 35) and obesity-related health conditions such as type 2 diabetes, hypertension, sleep apnoea, and joint problems. Dr. Manmohan Suman performs laparoscopic sleeve gastrectomy and Roux-en-Y gastric bypass — the two most effective and globally proven bariatric procedures.

Laparoscopic Sleeve Gastrectomy involves removing approximately 75–80% of the stomach, creating a narrow tube-shaped stomach that limits food intake and reduces hunger hormones. Patients typically lose 60–70% of their excess weight within 12–18 months.

Gastric Bypass additionally reroutes the small intestine to reduce calorie absorption. Both procedures are performed through 4–5 small laparoscopic incisions under general anaesthesia.

Obesity is a growing health concern in Bihar, with sedentary lifestyles and dietary changes contributing to rising BMI levels across Patna, Gaya, Muzaffarpur, and other cities. Bariatric surgery is not cosmetic — it is a medically necessary procedure that can reverse diabetes, normalise blood pressure, and add years to life.

Consult Dr. Manmohan Suman at Sarvada Hospital, Anand palace, Bypass Rd, changer, Kankarbagh, Patna 800020. Call 7079001600 for a bariatric surgery evaluation.`,
        indications: ['BMI > 35 (morbid obesity)', 'BMI > 30 with diabetes/hypertension', 'Failed diet and exercise programs'],
        benefits: ['60–70% excess weight loss', 'Diabetes remission', 'Improved heart health', 'Better quality of life'],
        preparation: ['Endocrinology evaluation', 'Psychiatric counselling', 'Endoscopy', 'Blood tests & ECG'],
        steps: [
          { step: '01', title: 'Assessment', desc: 'BMI calculation, metabolic workup, and dietary counselling.' },
          { step: '02', title: 'Surgery', desc: 'Laparoscopic sleeve gastrectomy or gastric bypass.' },
          { step: '03', title: 'Follow-up', desc: 'Regular dietary guidance and weight monitoring for 12–18 months.' },
        ],
        faqs: [
          { question: 'What is the minimum BMI for bariatric surgery?', answer: 'Generally BMI > 35, or BMI > 30 with obesity-related health conditions like diabetes.' },
        ],
      },
    ],
  },

  // ── 2. Kidney Stone & Kidney Cancer ──────────────────────
  {
    name: 'Kidney Stone & Kidney Cancer',
    slug: 'kidney-ureteric-stone',
    icon: '🫘',
    category: 'Urology',
    available: 'OPD & Emergency',
    description: 'Comprehensive management of kidney stones and kidney cancer — from medical dissolution to PCNL, laser lithotripsy, and radical or partial nephrectomy surgeries.',
    longDescription: `Our Urology department offers comprehensive care for kidney stones and renal masses in Patna, Bihar. We specialize in advanced, minimally invasive stone removal techniques including PCNL (Percutaneous Nephrolithotomy) for large stones, URS (Ureteroscopy) with laser lithotripsy, and medical dissolution therapy. We also provide expert surgical oncology services, including partial and radical nephrectomy for kidney cancer, ensuring maximum preservation of healthy kidney tissue.`,
    features: ['Renal Colic Management', 'PCNL', 'Kidney Cancer Nephrectomy', 'Ureteroscopy (URS)', 'RIRS', 'Stone Prevention'],
    costEstimate: '₹15,000 – ₹1,80,000',
    recoveryTime: '1 – 7 days',
    order: 2,
    treatments: [
      {
        name: 'PCNL (Percutaneous Nephrolithotomy)',
        slug: 'pcnl-percutaneous-nephrolithotomy',
        cost: '₹60,000 – ₹1,20,000',
        duration: '60–180 min',
        recovery: '3–5 days',
        description: 'Minimally invasive surgical procedure to remove large kidney stones (>2 cm) through a small puncture in the back.',
        longDescription: `PCNL (Percutaneous Nephrolithotomy) is the most effective surgical procedure for removing large kidney stones (गुर्दे की बड़ी पथरी) greater than 2 cm in size, including complex staghorn calculi. At Sarvada Hospital, Dr. Manmohan Suman — a renowned stone and laparoscopic specialist in Patna — performs PCNL with a high success rate and minimal complications.

During PCNL, a small puncture (approximately 1 cm) is made in the patient's back under fluoroscopic (X-ray) and ultrasound guidance. Through this tract, a nephroscope is inserted directly into the kidney. The stone is then fragmented using pneumatic or ultrasonic lithotripsy and the fragments are extracted. For very large or hard stones, laser energy may also be used. A DJ stent is typically placed to ensure smooth urine drainage and is removed after 2–4 weeks.

Bihar has one of the highest incidences of kidney stones in India due to climatic conditions, hard water, and dietary habits. Patients from across Bihar — Patna, Gaya, Bhagalpur, Muzaffarpur, Chapra, Darbhanga, and Purnea — visit Sarvada Hospital for expert stone management. Dr. Manmohan Suman's extensive training at IGIMS Patna and Safdarjung Hospital New Delhi ensures internationally standardised surgical protocols for every patient.

The advantages of PCNL over open surgery include a much smaller incision, significantly less blood loss, shorter hospital stay (3–5 days), and faster recovery. Most patients can return to light work within a week. If you have been diagnosed with a large kidney stone or are experiencing severe flank pain, blood in urine, or recurrent urinary infections, schedule a consultation today. Call 7079001600 or visit us at Anand palace, Bypass Rd, changer, Kankarbagh, Patna, Bihar 800020.`,
        indications: ['Large kidney stones >2 cm', 'Staghorn calculi'],
        benefits: ['Keyhole procedure — no large cut', 'High stone clearance rate'],
        preparation: ['CT KUB / USG', 'Urine culture'],
        steps: [
          { step: '01', title: 'Imaging', desc: 'CT scan maps the stone location and size.' },
          { step: '02', title: 'Access & Removal', desc: 'Puncture created, stone fragmented and extracted.' },
          { step: '03', title: 'Post-op Stent', desc: 'DJ stent placed and removed after 2–4 weeks.' },
        ],
        faqs: [
          { question: 'What is the recovery time?', answer: 'Most patients return to light activities in 3–5 days.' },
        ],
      },
      {
        name: 'Kidney Cancer Surgery (Radical & Partial Nephrectomy)',
        slug: 'kidney-cancer-nephrectomy',
        cost: '₹70,000 – ₹1,80,000',
        duration: '90–180 min',
        recovery: '4–7 days',
        description: 'Surgical removal of the entire kidney or part containing the tumor for kidney cancer.',
        longDescription: `Kidney Cancer Surgery (गुर्दे के कैंसर की सर्जरी) at Sarvada Hospital includes both Radical Nephrectomy (complete kidney removal) and Partial Nephrectomy (tumour-only removal preserving the healthy kidney). Dr. Manmohan Suman, a senior surgeon in Patna with 21+ years of experience, carefully evaluates each case to determine the most appropriate surgical approach.

Renal Cell Carcinoma (RCC) is the most common form of kidney cancer in adults. When detected early, surgical resection offers the best chance of complete cure. For smaller tumours (< 4 cm), partial nephrectomy is preferred as it preserves maximum kidney function. For larger masses or those involving major vessels, radical nephrectomy with regional lymph node dissection is performed.

At our centre in Patna, we utilise advanced imaging (Contrast CT/MRI) for precise preoperative staging and surgical planning. Our fully equipped ICU and anaesthesia team provide round-the-clock postoperative monitoring to ensure safe recovery.

Patients across Bihar and eastern India choose Sarvada Hospital for kidney cancer surgery due to Dr. Manmohan Suman's expertise, affordable treatment costs, and personalised care. If you have been diagnosed with a renal mass or kidney cancer, early consultation is critical. Contact us at 7079001600, Anand palace, Bypass Rd, changer, Kankarbagh, Patna.`,
        indications: ['Renal cell carcinoma', 'Large renal mass'],
        benefits: ['Complete tumor clearance', 'Laparoscopic options available'],
        preparation: ['CT/MRI', 'Renal function tests'],
        steps: [
          { step: '01', title: 'Staging', desc: 'Contrast scans evaluate the tumor extent.' },
          { step: '02', title: 'Excision', desc: 'Surgical removal of the kidney/tumor.' },
          { step: '03', title: 'Monitoring', desc: 'Close monitoring of renal parameters post-surgery.' },
        ],
        faqs: [],
      },
      {
        name: 'Bladder Stone & Prostate Surgery (TURP/Open)',
        slug: 'bladder-stone-prostate-surgery',
        cost: '₹30,000 – ₹90,000',
        duration: '1–2 hrs',
        recovery: '5–10 days',
        description: 'Surgical management of bladder stones and benign prostate enlargement (BPH) through TURP or open prostatectomy.',
        longDescription: `Bladder Stone and Prostate Surgery (मूत्राशय की पथरी और प्रोस्टेट सर्जरी) at Sarvada Hospital addresses two common urological conditions — bladder calculi and benign prostatic hyperplasia (BPH). Dr. Manmohan Suman offers both TURP (Transurethral Resection of the Prostate) and open prostatectomy based on the size of the prostate and severity of symptoms.

Bladder stones form when urine stagnates in the bladder, often due to an enlarged prostate obstructing the urinary outflow. Symptoms include painful urination, blood in urine, frequent urination, and difficulty passing urine. TURP is a minimally invasive endoscopic procedure where the enlarged prostate tissue is shaved from inside using a resectoscope — no external incision is needed.

For very large prostates (> 80–100 grams), open prostatectomy may be recommended. Both procedures relieve urinary obstruction, improve urine flow, and allow simultaneous removal of bladder stones.

BPH and bladder stones are extremely common in men above 50 years across Bihar. Patients from Patna, Gaya, Bhagalpur, Muzaffarpur, and Darbhanga visit Sarvada Hospital for expert urological surgery. Contact us at Anand palace, Bypass Rd, changer, Kankarbagh, Patna 800020. Call 7079001600.`,
        indications: ['Bladder stones', 'BPH with urinary retention', 'Recurrent UTI due to prostate enlargement'],
        benefits: ['No external incision (TURP)', 'Immediate relief of urinary symptoms', 'Short hospital stay'],
        preparation: ['Urine culture', 'PSA blood test', 'Ultrasound KUB', 'Uroflowmetry'],
        steps: [
          { step: '01', title: 'Evaluation', desc: 'PSA, ultrasound, uroflowmetry to assess prostate and stones.' },
          { step: '02', title: 'Surgery', desc: 'TURP or open prostatectomy with stone removal.' },
          { step: '03', title: 'Recovery', desc: 'Catheter removed in 2–3 days; full recovery in 1–2 weeks.' },
        ],
        faqs: [
          { question: 'Is TURP painful?', answer: 'TURP is done under spinal anaesthesia. There is minimal pain, and most patients recover quickly.' },
        ],
      },
    ],
  },

  // ── 3. Liver Disorders ────────────────────────────────────
  {
    name: 'Liver Disorders',
    slug: 'liver-disorders',
    icon: '🫀',
    category: 'Digestive',
    available: 'OPD Hours',
    description: 'Expert surgical and medical management of liver conditions, including cyst drainages, trauma repair, and resections.',
    longDescription: `The Liver Disorders department at Sarvada Hospital provides specialized medical and surgical care for hepatological diseases. Our services include percutaneous drainage of liver abscesses, surgical management of benign and malignant liver tumors (hepatectomy), and emergency treatment for liver trauma. Under the guidance of Dr. Manmohan Suman, patients receive comprehensive care supported by our fully equipped ICU and round-the-clock anaesthesia team.`,
    features: ['Abscess Drainage', 'Cyst Drainage', 'Trauma Repair', 'Splenectomy', 'Portal Shunts'],
    costEstimate: '₹10,000 – ₹3,00,000',
    recoveryTime: '3 – 14 days',
    order: 3,
    treatments: [
      {
        name: 'Liver Cyst & Abscess Drainage',
        slug: 'liver-abscess-cyst-drainage-old',
        cost: '₹15,000 – ₹60,000',
        duration: '30–60 min',
        recovery: '5–10 days',
        description: 'Percutaneous or laparoscopic drainage of liver abscesses and symptomatic cysts.',
        longDescription: `Liver Cyst and Abscess Drainage (लिवर फोड़ा / सिस्ट ड्रेनेज) is a critical procedure for patients suffering from pyogenic or amoebic liver abscesses and large symptomatic hepatic cysts. At Sarvada Hospital, Dr. Manmohan Suman provides both percutaneous (needle/pigtail catheter) and laparoscopic drainage options, selecting the best approach based on abscess size, location, and patient condition.

Liver abscesses are common in Bihar and eastern India, often caused by amoebic infections or secondary bacterial spread. Left untreated, they can rupture into the abdominal or chest cavity causing life-threatening complications. Our hospital provides emergency evaluation with ultrasound-guided diagnostic aspiration followed by definitive drainage.

The percutaneous approach involves placing a pigtail catheter under ultrasound or CT guidance, allowing the pus to drain continuously. For large, complex, or multiloculated abscesses, Dr. Manmohan Suman may perform laparoscopic drainage for more complete evacuation. Both methods avoid the need for major open surgery and offer rapid symptom relief — fever, pain, and toxaemia improve within 24–48 hours in most cases.

If you are experiencing high fever with right upper abdominal pain, tenderness, and jaundice, seek urgent evaluation at Sarvada Hospital. Our ICU and indoor care facilities at Sri Krishna Nagar, Patna ensure comprehensive round-the-clock monitoring. Call 7079001600 for emergency consultation.`,
        indications: ['Pyogenic liver abscess', 'Amoebic abscess', 'Symptomatic liver cysts'],
        benefits: ['Avoids major open surgery', 'Immediate relief from pain and fever'],
        preparation: ['USG/CT Abdomen', 'Coagulation profile'],
        steps: [
          { step: '01', title: 'Scan Guidance', desc: 'USG/CT scans define the borders.' },
          { step: '02', title: 'Catheter Placement', desc: 'Pigtail catheter placed to drain fluid.' },
          { step: '03', title: 'Follow-up', desc: 'Catheter removed when drainage stops.' },
        ],
        faqs: [],
      },
      {
        name: 'Liver Surgery (Trauma, Cancer & Resection)',
        slug: 'liver-surgery-trauma-cancer',
        cost: '₹50,000 – ₹3,00,000',
        duration: '2–5 hrs',
        recovery: '10–21 days',
        description: 'Major liver surgery including hepatectomy for liver cancer, liver trauma repair, and jaundice-related liver procedures.',
        longDescription: `Liver Surgery (लिवर सर्जरी) at Sarvada Hospital encompasses a wide range of complex hepatic procedures — from emergency liver trauma repair to planned hepatectomy for liver cancer and surgical management of obstructive jaundice. Dr. Manmohan Suman, with specialized training at IGIMS Patna and Safdarjung Hospital New Delhi, performs both open and laparoscopic liver surgeries with high precision.

Liver Trauma Surgery: Road accidents and blunt abdominal injuries can cause liver lacerations and haemorrhage. Our hospital provides emergency surgical intervention including perihepatic packing, hepatorrhaphy (liver suturing), and segmental resection when needed.

Liver Cancer Surgery: Hepatocellular carcinoma (HCC) and metastatic liver tumours are treated with anatomical or non-anatomical hepatectomy (removal of the affected liver segment). Dr. Manmohan Suman carefully evaluates liver function reserves before planning resection to ensure safe outcomes.

Jaundice-related Liver Surgery: Obstructive jaundice caused by bile duct tumours, hilar cholangiocarcinoma (Klatskin tumour), or benign strictures may require biliary bypass surgery or liver resection.

Patients from across Bihar — Patna, Gaya, Bhagalpur, Muzaffarpur, Darbhanga, and Purnea — trust Sarvada Hospital for complex liver surgery. Early diagnosis is critical for liver cancer. Contact us at Anand palace, Bypass Rd, changer, Kankarbagh, Patna 800020. Call 7079001600.`,
        indications: ['Liver cancer (HCC)', 'Liver trauma', 'Obstructive jaundice', 'Liver abscess (complex)', 'Liver metastasis'],
        benefits: ['Expert hepatobiliary surgeon', 'Emergency trauma services', 'Both open and laparoscopic options'],
        preparation: ['CT scan triple-phase', 'Liver function tests', 'Tumour markers (AFP)', 'Anaesthesia fitness'],
        steps: [
          { step: '01', title: 'Imaging', desc: 'Triple-phase CT or MRI to map the tumour and liver anatomy.' },
          { step: '02', title: 'Surgery', desc: 'Hepatectomy, trauma repair, or biliary bypass as indicated.' },
          { step: '03', title: 'ICU Recovery', desc: 'Post-operative ICU monitoring, drain management, and discharge.' },
        ],
        faqs: [
          { question: 'Can liver grow back after surgery?', answer: 'Yes, the liver has remarkable regenerative capacity. It can regrow to near-normal size within 6–8 weeks after partial resection.' },
        ],
      },
      {
        name: 'Percutaneous Liver Biopsy',
        slug: 'percutaneous-liver-biopsy-old',
        cost: '₹8,000 – ₹25,000',
        duration: '15–30 min',
        recovery: '1–2 days',
        description: 'A needle is inserted under ultrasound guidance to take a tiny cylinder of liver tissue.',
        longDescription: `Percutaneous Liver Biopsy (लिवर बायोप्सी) is a minimally invasive diagnostic procedure performed at Sarvada Hospital under ultrasound guidance to obtain a small sample of liver tissue for microscopic analysis. Dr. Manmohan Suman, an experienced liver and gastro specialist in Patna, uses this procedure to accurately diagnose and stage various liver conditions.

Liver biopsy is the gold standard for diagnosing unexplained hepatomegaly, staging chronic hepatitis (Hepatitis B and C), grading liver fibrosis and cirrhosis, evaluating fatty liver disease (NASH/NAFLD), and investigating abnormal liver function tests. The histopathological analysis provides definitive information that blood tests and imaging alone cannot reveal.

The procedure is performed under local anaesthesia with real-time ultrasound guidance to ensure safe needle placement between the ribs. A spring-loaded biopsy needle takes a tiny core of liver tissue (about 1.5 cm) in a fraction of a second. The entire procedure takes 15–30 minutes. Patients are monitored for 4–6 hours post-procedure and can typically go home the same evening or next morning.

Pre-procedure requirements include checking PT/INR (coagulation profile), platelet count, and fasting for 6 hours. Patients on blood thinners need to stop them as advised by the doctor.

For accurate liver disease diagnosis in Patna and Bihar, consult Dr. Manmohan Suman at Sarvada Hospital, Sri Krishna Nagar Kankarbagh. Call 7079001600.`,
        indications: ['Unexplained hepatomegaly', 'Chronic Hepatitis grading', 'Fatty liver staging'],
        benefits: ['Definitive tissue diagnosis', 'Highly accurate staging'],
        preparation: ['PT/INR test', 'Platelet count', 'Fast for 6 hours'],
        steps: [
          { step: '01', title: 'USG Mapping', desc: 'Identify safe entry path between ribs.' },
          { step: '02', title: 'Biopsy', desc: 'Local anesthesia given; sample taken with biopsy needle.' },
          { step: '03', title: 'Observation', desc: 'Monitor patient for 4-6 hours post-procedure.' },
        ],
        faqs: [],
      },
    ],
  },

  // ── 4. Pancreas Disorders ────────────────────────────────
  {
    name: 'Pancreas Disorders',
    slug: 'pancreas-disorders',
    icon: '🧬',
    category: 'Digestive',
    available: 'OPD Hours',
    description: 'Specialized management of pancreatitis, pancreatic cancers, and complex pancreatic duct surgeries.',
    longDescription: `We offer highly specialized surgical care for pancreatic conditions, including acute/chronic pancreatitis, pancreatic pseudocysts, and pancreatic cancer. Dr. Manmohan Suman is trained in performing complex pancreatic resections such as the Whipple Procedure (pancreaticoduodenectomy) and distal pancreatectomy. Our multidisciplinary approach in Patna ensures that patients with complex pancreatic diseases receive world-class diagnostic, critical care, and surgical management.`,
    features: ['Pancreatitis ICU care', 'Pseudocyst Drainage', 'Whipple Procedure', 'Distal Pancreatectomy'],
    costEstimate: '₹20,000 – ₹2,50,000',
    recoveryTime: '7 – 21 days',
    order: 4,
    treatments: [
      {
        name: 'Chronic Pancreatitis Management',
        slug: 'chronic-pancreatitis-management-old',
        cost: '₹10,000 – ₹50,000',
        duration: 'Varies',
        recovery: 'Ongoing',
        description: 'Long-term medical and enzyme replacement therapy for chronic pancreatic inflammation.',
        longDescription: `Chronic Pancreatitis Management (पुरानी अग्नाशयशोथ का इलाज) requires a comprehensive, long-term approach combining pain management, enzyme supplementation, nutritional support, and surgical intervention when needed. At Sarvada Hospital, Dr. Manmohan Suman specialises in the complete spectrum of chronic pancreatitis care — from medical therapy to complex surgical drainage procedures.

Chronic pancreatitis is characterised by progressive inflammation and fibrosis of the pancreas, leading to severe abdominal pain, maldigestion, and diabetes. In Bihar, alcohol consumption and gallstone-related pancreatitis are the leading causes. Our approach begins with thorough evaluation including serum amylase/lipase levels, stool elastase testing, CT scan, and MRCP imaging to assess the degree of pancreatic damage, ductal dilatation, and calcifications.

Treatment involves pancreatic enzyme replacement therapy (PERT) to improve digestion and reduce steatorrhea, combined with targeted pain management strategies. For patients with pancreatic duct stones or strictures causing intractable pain, Dr. Manmohan Suman performs surgical drainage procedures such as Lateral Pancreaticojejunostomy (Frey's procedure).

Our centre in Patna provides ongoing follow-up care including nutritional counselling, blood sugar monitoring, and complication surveillance. Patients from across Bihar trust Dr. Manmohan Suman for pancreatic disorders due to his extensive surgical training at IGIMS Patna and national-level experience. Visit us at L-35, Anand palace, Bypass Rd, changer, Kankarbagh, Patna or call 7079001600.`,
        indications: ['Chronic abdominal pain', 'Malabsorption', 'Steatorrhea'],
        benefits: ['Pain control', 'Nutritional improvement'],
        preparation: ['Serum amylase/lipase', 'Stool elastase'],
        steps: [
          { step: '01', title: 'Assessment', desc: 'Nutritional status and pancreatic insufficiency evaluated.' },
          { step: '02', title: 'Therapy', desc: 'Enzyme supplements and pain management prescribed.' },
        ],
        faqs: [],
      },
      {
        name: 'Pancreatic Cancer Surgery (Whipple/Distal Pancreatectomy)',
        slug: 'pancreatic-cancer-surgery',
        cost: '₹1,50,000 – ₹4,00,000',
        duration: '4–7 hrs',
        recovery: '14–28 days',
        description: 'Complex surgery for pancreatic cancer including Whipple procedure (pancreaticoduodenectomy) and distal pancreatectomy.',
        longDescription: `Pancreatic Cancer Surgery (अग्नाशय कैंसर सर्जरी) at Sarvada Hospital includes the Whipple Procedure (Pancreaticoduodenectomy) for head-of-pancreas tumours and Distal Pancreatectomy for body/tail tumours. Dr. Manmohan Suman has extensive experience in complex pancreatic surgery, trained at premier institutions including IGIMS Patna and Safdarjung Hospital New Delhi.

The Whipple Procedure is one of the most complex abdominal operations — it involves removing the head of the pancreas, the duodenum, part of the bile duct, the gallbladder, and sometimes part of the stomach. The remaining organs are then reconnected to restore digestive function. This surgery is the only curative option for pancreatic head cancer and ampullary carcinoma.

Distal Pancreatectomy removes the body and tail of the pancreas, often along with the spleen, for tumours in these regions. Both procedures require meticulous surgical technique and comprehensive post-operative care.

Pancreatic cancer often presents late with painless jaundice, weight loss, and back pain. Early diagnosis and surgery by an experienced surgeon significantly improve survival. Patients from Bihar and eastern India consult Dr. Manmohan Suman for pancreatic cancer evaluation. Contact Sarvada Hospital at 7079001600, Anand palace, Bypass Rd, changer, Kankarbagh, Patna.`,
        indications: ['Pancreatic head cancer', 'Ampullary carcinoma', 'Pancreatic body/tail tumour', 'Chronic pancreatitis with mass'],
        benefits: ['Only curative option for pancreatic cancer', 'Expert surgical team', 'Comprehensive post-operative care'],
        preparation: ['CT pancreas protocol', 'CA 19-9 tumour marker', 'EUS (Endoscopic Ultrasound)', 'Nutritional optimisation'],
        steps: [
          { step: '01', title: 'Staging', desc: 'CT, EUS, and tumour markers to assess resectability.' },
          { step: '02', title: 'Surgery', desc: 'Whipple or distal pancreatectomy under general anaesthesia.' },
          { step: '03', title: 'Recovery', desc: 'ICU stay, pancreatic enzyme supplementation, and staged recovery.' },
        ],
        faqs: [
          { question: 'What is the Whipple procedure?', answer: 'It is a complex surgery to remove the head of the pancreas, duodenum, bile duct, and gallbladder — the standard operation for pancreatic head cancer.' },
        ],
      },
    ],
  },

  // ── 5. Jaundice & Biliary Disorders ──────────────────────
  {
    name: 'Jaundice & Biliary Disorders',
    slug: 'jaundice-biliary-disorders',
    icon: '🩺',
    category: 'Digestive',
    available: 'OPD & Emergency',
    description: 'Expert evaluation and treatment of obstructive jaundice, common bile duct stones, abdominal fluid collection (ascites), and complex biliary strictures, cysts, and disorders.',
    longDescription: `Our hepatobiliary department specializes in diagnosing and treating obstructive/surgical jaundice, common bile duct (CBD) stones, ascites (abdominal fluid accumulation), and complex biliary cysts or strictures. We offer advanced endoscopic interventions like ERCP for stone extraction and biliary stenting, therapeutic paracentesis (abdominal tapping) for ascites, alongside surgical options like laparoscopic CBD exploration, choledochal cyst excision, and hepaticojejunostomy reconstructions. We serve patients across Bihar with high-success biliary clearance and liver support protocols.`,
    features: ['Jaundice care', 'ERCP', 'CBD Exploration', 'Hepaticojejunostomy', 'Ascites fluid tapping', 'Choledochal cyst surgery'],
    costEstimate: '₹20,000 – ₹1,80,000',
    recoveryTime: '3 – 10 days',
    order: 5,
    treatments: [
      {
        name: 'Biliary Stricture Reconstruction',
        slug: 'biliary-stricture-reconstruction-old',
        cost: '₹50,000 – ₹1,50,000',
        duration: '120–240 min',
        recovery: '7–14 days',
        description: 'Surgical repair (Hepaticojejunostomy) of the narrowed bile duct to restore normal bile flow into the intestine.',
        longDescription: `Biliary Stricture Reconstruction (पित्त नली की सिकुड़न का ऑपरेशन) is an advanced hepatobiliary surgery performed at Sarvada Hospital to repair narrowed or damaged bile ducts. Dr. Manmohan Suman, with his extensive training in hepatobiliary surgery at IGIMS Patna and Safdarjung Hospital New Delhi, is one of the most experienced biliary surgeons in Patna, Bihar.

Biliary strictures can develop after gallbladder surgery (post-cholecystectomy bile duct injury), chronic inflammation, or as a result of previous infections. The narrowing blocks the normal flow of bile from the liver to the intestine, causing progressive jaundice, itching, recurrent cholangitis, and eventually liver damage if untreated.

The definitive surgical repair is Hepaticojejunostomy — a procedure where the healthy bile duct above the stricture is surgically connected to a loop of the small intestine (jejunum), creating a new pathway for bile to flow freely. Dr. Manmohan Suman performs this complex reconstruction with meticulous surgical technique, ensuring precise mucosal-to-mucosal anastomosis for long-term patency.

Pre-operative workup includes MRCP (Magnetic Resonance Cholangiopancreatography), liver function tests, and coagulation studies. The surgery is performed under general anaesthesia and patients typically stay in hospital for 7–14 days with careful monitoring of biliary output and liver function.

For expert biliary surgery in Patna, consult Dr. Manmohan Suman at Sarvada Hospital, Anand palace, Bypass Rd, changer, Kankarbagh, Patna. Call 7079001600 or 7079001700.`,
        indications: ['Benign biliary stricture', 'Post-cholecystectomy bile duct injury'],
        benefits: ['Definitive bypass of obstruction', 'Prevents biliary cirrhosis'],
        preparation: ['MRCP', 'Liver function tests'],
        steps: [
          { step: '01', title: 'Mapping', desc: 'MRCP maps the narrow segment.' },
          { step: '02', title: 'Anastomosis', desc: 'Bile duct connected directly to the jejunum loop.' },
          { step: '03', title: 'Post-op Care', desc: 'Careful monitoring of liver function and biliary output.' },
        ],
        faqs: [],
      },
      {
        name: 'Common Bile Duct (CBD) Surgery',
        slug: 'common-bile-duct-surgery',
        cost: '₹40,000 – ₹1,50,000',
        duration: '2–4 hrs',
        recovery: '7–14 days',
        description: 'Surgery for CBD stone, CBD cancer, and CBD stricture — open and laparoscopic common bile duct exploration.',
        longDescription: `Common Bile Duct Surgery (सामान्य पित्त नली की सर्जरी) at Sarvada Hospital covers the entire spectrum of CBD pathologies — CBD stones (choledocholithiasis), CBD cancer (cholangiocarcinoma), and CBD stricture (narrowing of the bile duct). Dr. Manmohan Suman provides both open and laparoscopic CBD exploration based on the patient's condition.

CBD Stones: When gallstones migrate into the common bile duct, they cause obstructive jaundice, cholangitis (bile duct infection), and pancreatitis. Treatment options include ERCP (endoscopic stone removal) and laparoscopic/open CBD exploration with stone extraction.

CBD Cancer (Cholangiocarcinoma): This is a serious malignancy of the bile duct that typically presents with painless jaundice. Surgical resection with clear margins offers the best chance of cure. Dr. Manmohan Suman performs bile duct resection and hepaticojejunostomy (Roux-en-Y reconstruction).

CBD Stricture: Post-surgical or inflammatory narrowing of the bile duct requires reconstructive surgery — hepaticojejunostomy — to bypass the strictured segment and restore bile flow.

Patients from Patna, Bihar, and neighbouring states trust our centre for complex biliary surgery. Contact Sarvada Hospital at 7079001600, Anand palace, Bypass Rd, changer, Kankarbagh, Patna 800020.`,
        indications: ['CBD stones (choledocholithiasis)', 'CBD cancer (cholangiocarcinoma)', 'CBD stricture', 'Failed ERCP'],
        benefits: ['Complete stone clearance', 'Curative surgery for cancer', 'Reconstruction for strictures'],
        preparation: ['MRCP (MR Cholangiopancreatography)', 'LFT, PT/INR', 'CT scan', 'ERCP if indicated'],
        steps: [
          { step: '01', title: 'Imaging', desc: 'MRCP or CT to map the biliary anatomy and pathology.' },
          { step: '02', title: 'Surgery', desc: 'CBD exploration, stone removal, or bile duct reconstruction.' },
          { step: '03', title: 'Recovery', desc: 'T-tube/drain management and gradual diet advancement.' },
        ],
        faqs: [
          { question: 'What is CBD exploration?', answer: 'It is a surgical procedure to open the common bile duct, remove stones, and restore normal bile flow.' },
        ],
      },
      {
        name: 'Laparoscopic Common Bile Duct Exploration',
        slug: 'laparoscopic-cbd-exploration',
        cost: '₹50,000 – ₹1,20,000',
        duration: '2–3 hrs',
        recovery: '5–10 days',
        description: 'Minimally invasive laparoscopic exploration and clearance of common bile duct stones, often combined with cholecystectomy.',
        longDescription: `Laparoscopic Common Bile Duct Exploration (लैप्रोस्कोपिक CBD एक्सप्लोरेशन) at Sarvada Hospital is an advanced minimally invasive procedure to remove CBD stones without the need for open surgery. Dr. Manmohan Suman performs this technically demanding procedure using a combination of choledochoscopy (bile duct camera) and stone extraction through laparoscopic ports.

This procedure is typically performed in combination with laparoscopic cholecystectomy — removing both the gallbladder and CBD stones in a single sitting. A small opening is made in the CBD, a choledochoscope is inserted to visualise and extract stones using a Dormia basket or balloon catheter, and the CBD is then closed primarily or over a T-tube.

The laparoscopic approach offers all the advantages of minimally invasive surgery — less pain, faster recovery, shorter hospital stay, and minimal scarring. It is particularly useful when ERCP has failed to clear CBD stones or when combined surgery is needed.

Patients from Patna and Bihar benefit from this single-stage procedure that avoids the need for multiple interventions. Contact Sarvada Hospital at 7079001600 for consultation.`,
        indications: ['CBD stones with gallstones', 'Failed ERCP stone extraction', 'Large CBD stones'],
        benefits: ['Single-stage surgery', 'No open incision', 'Faster recovery', 'Combined with cholecystectomy'],
        preparation: ['MRCP', 'LFT', 'Coagulation profile', 'Anaesthesia fitness'],
        steps: [
          { step: '01', title: 'Diagnosis', desc: 'MRCP confirms CBD stone location and size.' },
          { step: '02', title: 'Surgery', desc: 'Laparoscopic cholecystectomy + CBD exploration and stone clearance.' },
          { step: '03', title: 'Discharge', desc: 'T-tube cholangiogram at 10 days, then T-tube removal.' },
        ],
        faqs: [
          { question: 'Can CBD stones be removed laparoscopically?', answer: 'Yes, Dr. Manmohan Suman performs laparoscopic CBD exploration for stone removal, avoiding the need for open surgery.' },
        ],
      },
      {
        name: 'Jaundice Management',
        slug: 'jaundice-management-new',
        cost: '₹5,000 – ₹40,000',
        duration: 'Medical & Diagnostic',
        recovery: 'Varies',
        description: 'Detailed clinical assessment to differentiate medical vs. surgical jaundice, followed by targeted biliary decompression.',
        longDescription: `Jaundice Management (पीलिया का इलाज) at Sarvada Hospital provides comprehensive evaluation and treatment for all causes of jaundice — from common medical hepatitis to complex surgical obstructive jaundice. Dr. Manmohan Suman, a Jaundice and Stone Specialist in Patna, differentiates between medical and surgical causes through systematic clinical assessment and targeted investigations.

Jaundice (पीलिया) — the yellowing of skin and eyes due to elevated bilirubin levels — can be caused by liver diseases (medical jaundice), gallstones blocking the bile duct, tumours, or bile duct strictures (surgical/obstructive jaundice). Accurate diagnosis is essential because treatment approaches are fundamentally different.

Our diagnostic workup includes complete liver function tests, hepatitis viral markers, ultrasound abdomen, MRCP, and CT scan as needed. For obstructive jaundice, Dr. Manmohan Suman provides definitive treatment through ERCP stenting, laparoscopic CBD exploration, or surgical hepaticojejunostomy bypass depending on the underlying cause.

Red-flag symptoms requiring urgent evaluation include jaundice with high fever and rigors (cholangitis — a medical emergency), rapidly worsening jaundice, painless progressive jaundice (possible cancer), and severe itching with pale stools and dark urine. If you or a family member develops jaundice, seek prompt medical evaluation at Sarvada Hospital. Call 7079001600 or visit Anand palace, Bypass Rd, changer, Kankarbagh, Patna 800020.`,
        indications: ['Raised bilirubin levels', 'Pale stools, dark urine'],
        benefits: ['Prevent hepatorenal syndrome', 'Relieves severe biliary symptoms'],
        steps: [
          { step: '01', title: 'Workup', desc: 'Review LFT, MRCP, and coagulation profile.' },
          { step: '02', title: 'Biliary drainage', desc: 'Perform ERCP stenting or surgical bypass.' },
        ],
        faqs: [],
      },
      {
        name: 'Ascites Care',
        slug: 'ascites-care',
        cost: '₹4,000 – ₹15,000',
        duration: '30–60 min',
        recovery: 'Immediate',
        description: 'Therapeutic and diagnostic paracentesis (abdominal tap) to drain fluid from the peritoneal cavity for relief of bloating and respiratory discomfort.',
        longDescription: `Ascites Care (पेट में पानी भरने का इलाज) at Sarvada Hospital includes diagnostic and therapeutic paracentesis — a procedure to drain excess fluid from the abdominal cavity. Dr. Manmohan Suman evaluates the underlying cause of ascites through comprehensive clinical assessment and fluid analysis.

Ascites (abdominal fluid accumulation) can be caused by liver cirrhosis (most common), heart failure, kidney disease, peritoneal tuberculosis, or abdominal cancer. Patients experience progressive abdominal distension, weight gain, difficulty breathing, reduced appetite, and discomfort. Large-volume ascites can compress the diaphragm, causing significant respiratory compromise.

Therapeutic paracentesis involves inserting a needle or catheter into the abdominal cavity under sterile precautions to drain the accumulated fluid, providing immediate symptom relief. The drained fluid is sent for analysis including cytology, cell count, protein, albumin, ADA (for TB), and culture to identify the underlying cause.

Treatment of the underlying cause is then initiated — diuretics and salt restriction for liver-related ascites, antitubercular therapy for TB ascites, or oncological evaluation for malignant ascites. Regular follow-up ensures optimal fluid management and prevention of complications.

For ascites evaluation and management in Patna, Bihar, consult Dr. Manmohan Suman at 7079001600.`,
        indications: ['Tense ascites', 'Abdominal distension with breathlessness'],
        benefits: ['Instant relief from pressure', 'Fluid analysis confirms cause (cardiac, liver, peritoneal TB)'],
        steps: [
          { step: '01', title: 'Paracentesis', desc: 'Needle inserted under sterile precautions; fluid drained and sent for cytology/ADA.' },
        ],
        faqs: [],
      },
      {
        name: 'Biliary Disorder (Choledochal Cyst / Cholangitis)',
        slug: 'biliary-disorder-cysts',
        cost: '₹60,000 – ₹1,80,000',
        duration: '120–240 min',
        recovery: '7–12 days',
        description: 'Advanced surgeries for congenital choledochal cysts (excision and reconstruction) and emergency drainage for severe biliary tract sepsis (cholangitis).',
        longDescription: `Biliary Disorder Surgery — including Choledochal Cyst Excision and Cholangitis Emergency Management — at Sarvada Hospital is performed by Dr. Manmohan Suman, one of the most experienced hepatobiliary surgeons in Patna, Bihar.

Choledochal cysts are congenital dilations of the bile ducts that carry a significant risk of developing biliary cancer (cholangiocarcinoma) if left untreated. The definitive treatment is complete surgical excision of the cyst followed by Roux-en-Y hepaticojejunostomy to reconstruct the biliary drainage. This complex surgery requires expertise in hepatobiliary anatomy and meticulous surgical technique, which Dr. Manmohan Suman provides based on his extensive training at IGIMS Patna and Safdarjung Hospital New Delhi.

Cholangitis is an acute, life-threatening infection of the bile duct system, typically caused by bile duct stones or strictures. Patients present with Charcot's triad — jaundice, fever with rigors, and right upper abdominal pain. Severe cholangitis (Reynolds' pentad) includes confusion and hypotension, requiring emergency biliary drainage via ERCP or surgical decompression along with IV antibiotics and ICU care.

Our hospital provides round-the-clock emergency care for acute cholangitis and elective surgery for choledochal cysts. For complex biliary disorder management in Patna, Bihar, contact Sarvada Hospital at 7079001600, Anand palace, Bypass Rd, changer, Kankarbagh, Patna 800020.`,
        indications: ['Choledochal cyst', 'Acute suppurative cholangitis'],
        benefits: ['Eliminates risk of biliary cancer in cysts', 'Life-saving drainage in acute sepsis'],
        steps: [
          { step: '01', title: 'Excision', desc: 'Completely excise the cyst and reconstruct via hepaticojejunostomy.' },
        ],
        faqs: [],
      },
    ],
  },

  // ── 6. General & GI Surgery ──────────────────────────────
  {
    name: 'General & Gastrointestinal Surgery',
    slug: 'general-gi-surgery',
    icon: '🏥',
    category: 'General',
    available: 'OPD & Emergency',
    description: 'Comprehensive general and emergency gastrointestinal surgery — including thyroid surgeries, AV fistulas, and emergency abdominal trauma care.',
    longDescription: `This department covers standard and emergency general surgical procedures, including thyroidectomy, AV fistula creation for dialysis access, splenectomy, and paediatric congenital surgeries. Managed by Dr. Manmohan Suman, the team is supported by a 24/7 ICU and critical care unit led by qualified anaesthetists, making our centre in Kankarbagh, Patna, a trusted destination for both planned and emergency major abdominal interventions.`,
    features: ['Thyroidectomy', 'AV Fistula Creation', 'Emergency Abdominal Surgery', 'Bariatric Care'],
    costEstimate: '₹10,000 – ₹1,80,000',
    recoveryTime: '1 – 14 days',
    order: 6,
    treatments: [
      {
        name: 'Thyroid Surgery (Thyroidectomy)',
        slug: 'thyroidectomy-surgery-old',
        cost: '₹30,000 – ₹75,000',
        duration: '60–120 min',
        recovery: '3–5 days',
        description: 'Surgical removal of the thyroid gland (total or partial) for nodules, goiter, or cancer.',
        longDescription: `Thyroid Surgery or Thyroidectomy (थायरॉइड ऑपरेशन) is performed at Sarvada Hospital by Dr. Manmohan Suman for patients with thyroid nodules, multinodular goitre, thyroid cancer, or compressive thyroid swelling. With over 21 years of surgical experience, Dr. Kumar ensures safe surgery with careful preservation of the recurrent laryngeal nerves and parathyroid glands.

The procedure can be a Total Thyroidectomy (removal of the entire gland) for cancer or large goitres, or a Hemithyroidectomy (removal of one lobe) for benign nodules. The incision is made in a natural skin crease in the neck (collar incision) for an excellent cosmetic result, with the scar becoming nearly invisible over time.

Pre-operative preparation includes thyroid function tests (TFT), ultrasound neck, FNAC (Fine Needle Aspiration Cytology) of suspicious nodules, and ensuring the patient is in a euthyroid state before surgery. Post-operatively, calcium levels are monitored closely, and thyroid hormone replacement is started as needed.

Patients from Patna, Gaya, Jehanabad, Aurangabad, Nawada, and other districts of Bihar visit our centre for thyroid surgery. The procedure requires 2–3 days of hospitalisation, and most patients resume normal activities within a week. For thyroid evaluation and surgery in Patna, contact us at 7079001600.`,
        indications: ['Goiter causing pressure', 'Suspicious thyroid nodules'],
        benefits: ['Relief from pressure symptoms', 'Cosmetic collar incision'],
        preparation: ['TFT (Thyroid Function Test)', 'FNAC', 'USG Thyroid'],
        steps: [
          { step: '01', title: 'Prep', desc: 'Ensure euthyroid state before surgery.' },
          { step: '02', title: 'Excision', desc: 'Removal of the gland protecting the laryngeal nerves.' },
          { step: '03', title: 'Recovery', desc: 'Calcium monitoring post-op; discharged in 2 days.' },
        ],
        faqs: [],
      },
      {
        name: 'AV Fistula Surgery for Dialysis Patients',
        slug: 'av-fistula-dialysis-old',
        cost: '₹12,000 – ₹25,000',
        duration: '45–90 min',
        recovery: '1–2 days',
        description: 'Surgical creation of an arteriovenous anastomosis in the arm to establish hemodialysis access.',
        longDescription: `AV Fistula Surgery (एवी फिस्टुला सर्जरी) is a life-sustaining vascular procedure performed at Sarvada Hospital for patients with end-stage renal disease (ESRD) who require long-term hemodialysis. Dr. Manmohan Suman creates durable arteriovenous fistulas in the forearm or upper arm to provide reliable dialysis access.

An AV fistula is created by surgically connecting an artery to a vein, usually in the non-dominant arm. Over 6–8 weeks, the increased blood flow causes the vein to enlarge and strengthen (maturation), creating a robust access point for repeated dialysis needle insertions. Compared to temporary dialysis catheters, a well-functioning AV fistula has lower infection rates, longer lifespan, and better dialysis outcomes.

Pre-operative assessment includes Doppler venous mapping of the arm to identify the best artery-vein combination. The procedure is performed under local or regional anaesthesia and takes 45–90 minutes. Patients are discharged the same day or next morning and begin using the fistula for dialysis after 6 weeks of maturation.

For kidney disease patients in Patna and Bihar requiring dialysis access surgery, Sarvada Hospital offers expert AV fistula creation at affordable costs. Contact us at 7079001600, Anand palace, Bypass Rd, changer, Kankarbagh, Patna 800020.`,
        indications: ['End-stage renal disease (ESRD)', 'Requirement of hemodialysis'],
        benefits: ['Long-lasting access', 'Low infection rates compared to lines'],
        preparation: ['Venous mapping doppler'],
        steps: [
          { step: '01', title: 'Doppler', desc: 'Identify suitable artery and vein.' },
          { step: '02', title: 'Anastomosis', desc: 'Connect artery and vein under local anesthesia.' },
          { step: '03', title: 'Maturation', desc: 'Wait 6 weeks for fistula to mature.' },
        ],
        faqs: [],
      },
      {
        name: 'ICU & Critical Care Management',
        slug: 'icu-critical-care',
        cost: '₹5,000 – ₹25,000/day',
        duration: 'Variable',
        recovery: 'Depends on condition',
        description: 'Fully equipped ICU managed by highly qualified anaesthetic doctors for post-surgical and critical care management.',
        longDescription: `ICU & Critical Care Management (आईसीयू और क्रिटिकल केयर) at Sarvada Hospital provides round-the-clock intensive care managed by highly qualified anaesthetic doctors and trained nursing staff. Our ICU is equipped with modern ventilators, multi-parameter monitors, infusion pumps, central oxygen supply, and emergency resuscitation equipment.

Post-surgical ICU care is critical for patients undergoing major operations such as Whipple procedure, liver resection, complex abdominal trauma repair, and pancreatic surgery. Our anaesthesia team ensures optimal pain management, haemodynamic monitoring, fluid balance, and early detection of complications.

The ICU also manages medical emergencies including sepsis, multi-organ failure, severe pancreatitis, GI bleeding, and post-operative complications. Every patient receives personalised attention with continuous monitoring and family counselling.

Patients from across Patna, Bihar — including referrals from Gaya, Muzaffarpur, Bhagalpur, and Darbhanga — benefit from our ICU facilities. Contact Sarvada Hospital at 7079001600, Anand palace, Bypass Rd, changer, Kankarbagh, Patna 800020.`,
        indications: ['Post-major surgery care', 'Sepsis', 'Multi-organ failure', 'Severe pancreatitis', 'GI bleeding'],
        benefits: ['24/7 anaesthetist coverage', 'Modern ICU equipment', 'Personalised critical care'],
        preparation: ['Referral from treating surgeon', 'Previous medical records'],
        steps: [
          { step: '01', title: 'Admission', desc: 'Patient shifted to ICU with full monitoring setup.' },
          { step: '02', title: 'Management', desc: 'Continuous monitoring, ventilator support, and medications as needed.' },
          { step: '03', title: 'Step-down', desc: 'Transfer to ward once stable for continued recovery.' },
        ],
        faqs: [
          { question: 'Is the ICU available 24/7?', answer: 'Yes, our ICU is staffed round-the-clock by qualified anaesthetic doctors and trained nurses.' },
        ],
      },
      {
        name: 'Paediatric Congenital Disease Surgery',
        slug: 'paediatric-congenital-surgery',
        cost: '₹30,000 – ₹1,50,000',
        duration: '1–4 hrs',
        recovery: '5–14 days',
        description: 'Surgical correction of congenital abnormalities in children — including hernias, undescended testis, hypospadias, and intestinal malformations.',
        longDescription: `Paediatric Congenital Disease Surgery (बच्चों की जन्मजात बीमारी सर्जरी) at Sarvada Hospital addresses a range of congenital (birth-related) surgical conditions in infants and children. Dr. Manmohan Suman provides expert surgical care for congenital inguinal hernia, umbilical hernia, undescended testis (cryptorchidism), hypospadias, intestinal atresia, Hirschsprung's disease, and anorectal malformations.

Congenital hernias are one of the most common surgical conditions in children, especially premature babies. Undescended testis requires orchidopexy (surgical fixation of the testis into the scrotum) ideally before 1–2 years of age to preserve fertility and reduce cancer risk.

Intestinal malformations such as duodenal atresia, jejunal atresia, and Hirschsprung's disease require specialised neonatal surgery. Our team provides safe anaesthesia and age-appropriate surgical techniques for the smallest patients.

Parents from across Patna and Bihar trust our centre for paediatric surgical care. Contact Sarvada Hospital at 7079001600, Anand palace, Bypass Rd, changer, Kankarbagh, Patna 800020.`,
        indications: ['Congenital hernia', 'Undescended testis', 'Hypospadias', 'Intestinal atresia', 'Anorectal malformation'],
        benefits: ['Age-appropriate surgical techniques', 'Safe paediatric anaesthesia', 'Short hospital stay'],
        preparation: ['Paediatric blood tests', 'Ultrasound', 'Anaesthesia fitness assessment'],
        steps: [
          { step: '01', title: 'Evaluation', desc: 'Clinical and imaging assessment of the congenital condition.' },
          { step: '02', title: 'Surgery', desc: 'Corrective surgery under general anaesthesia.' },
          { step: '03', title: 'Recovery', desc: 'Post-operative monitoring and discharge with follow-up plan.' },
        ],
        faqs: [
          { question: 'At what age should congenital hernias be operated?', answer: 'Congenital inguinal hernias should be repaired as soon as diagnosed to prevent complications like incarceration.' },
        ],
      },
      {
        name: 'Splenic Surgery & Splenorenal Shunt',
        slug: 'splenic-surgery-splenorenal-shunt',
        cost: '₹40,000 – ₹1,50,000',
        duration: '2–4 hrs',
        recovery: '7–14 days',
        description: 'Splenectomy for splenic trauma, splenic disorders, and splenorenal shunt surgery for portal hypertension.',
        longDescription: `Splenic Surgery (तिल्ली की सर्जरी) at Sarvada Hospital includes emergency splenectomy for splenic trauma, elective splenectomy for haematological disorders, and Splenorenal Shunt surgery for portal hypertension with variceal bleeding.

Splenic Trauma: The spleen is the most commonly injured abdominal organ in blunt trauma (road accidents, falls). While minor injuries can be managed conservatively, severe splenic lacerations with haemodynamic instability require emergency splenectomy. Dr. Manmohan Suman provides 24-hour emergency surgical services for splenic trauma.

Splenorenal Shunt: In patients with portal hypertension (often due to liver cirrhosis or non-cirrhotic portal fibrosis), the splenic vein is surgically connected to the left renal vein to decompress the portal system and prevent life-threatening variceal bleeding. This is a definitive surgical solution when endoscopic therapy fails.

Elective Splenectomy: Required for conditions like ITP (Idiopathic Thrombocytopenic Purpura), hereditary spherocytosis, and hypersplenism not responding to medical treatment.

Patients from Patna, Bihar trust our centre for complex splenic surgery. Contact us at 7079001600, Anand palace, Bypass Rd, changer, Kankarbagh, Patna.`,
        indications: ['Splenic trauma', 'Portal hypertension with variceal bleeding', 'ITP', 'Hypersplenism'],
        benefits: ['Emergency trauma services', 'Definitive portal decompression', 'Expert surgical team'],
        preparation: ['CT abdomen', 'Complete blood count', 'Coagulation profile', 'Blood grouping & cross-match'],
        steps: [
          { step: '01', title: 'Assessment', desc: 'Imaging and haematological workup to plan surgery.' },
          { step: '02', title: 'Surgery', desc: 'Splenectomy or splenorenal shunt under general anaesthesia.' },
          { step: '03', title: 'Post-op', desc: 'Vaccination schedule, monitoring, and discharge.' },
        ],
        faqs: [
          { question: 'Can you live without a spleen?', answer: 'Yes, but you need vaccinations against certain bacteria and should be aware of increased infection risk.' },
        ],
      },
      {
        name: 'Neurology & Neurosurgery Consultation',
        slug: 'neurology-neurosurgery-consultation',
        cost: '₹500 – ₹2,000',
        duration: '30–60 min',
        recovery: 'Depends on condition',
        description: 'Neurology services managed by highly qualified neurosurgeon and neurophysician for brain, spine, and nerve disorders.',
        longDescription: `Neurology & Neurosurgery Consultation (न्यूरोलॉजी और न्यूरोसर्जरी) at Sarvada Hospital is managed by highly qualified neurosurgeons and neurophysicians. Our neurology services cover diagnosis and management of a wide range of brain, spine, and peripheral nerve disorders.

Services include evaluation and management of headaches, epilepsy, stroke, Parkinson's disease, neuropathy, vertigo, disc prolapse, spinal cord compression, brain tumours, and head injuries. Our neurophysician provides detailed neurological examinations, nerve conduction studies, and treatment planning.

Neurosurgical services include craniotomy for brain tumours, spinal decompression surgery, disc surgery, and management of traumatic brain injuries. Complex cases are managed in collaboration with our ICU team for comprehensive post-operative care.

Patients from Patna, Bihar and surrounding districts benefit from specialist neurological care without travelling to metro cities. Contact Sarvada Hospital at 7079001600, Anand palace, Bypass Rd, changer, Kankarbagh, Patna 800020.`,
        indications: ['Headaches & migraines', 'Epilepsy', 'Stroke', 'Disc prolapse', 'Brain tumours', 'Head injury'],
        benefits: ['Expert neurosurgeon & neurophysician', 'Comprehensive neurological workup', 'ICU backup for complex cases'],
        preparation: ['Previous MRI/CT reports', 'Medication list', 'Referral letter if available'],
        steps: [
          { step: '01', title: 'Consultation', desc: 'Detailed neurological examination and history.' },
          { step: '02', title: 'Investigation', desc: 'MRI, CT, EEG, or nerve conduction studies as needed.' },
          { step: '03', title: 'Treatment', desc: 'Medical management or surgical referral based on diagnosis.' },
        ],
        faqs: [
          { question: 'Is a neurosurgeon available at the hospital?', answer: 'Yes, our hospital has qualified neurosurgeons and neurophysicians for comprehensive neurological care.' },
        ],
      },
    ],
  },

  // ── 7. Gastro-Intestinal Disorder ────────────────────────
  {
    name: 'Gastro-Intestinal Disorder',
    slug: 'gastro-intestinal-disorder',
    icon: '🫁',
    category: 'Digestive',
    available: 'OPD Hours',
    description: 'Expert medical management of gastrointestinal disorders, acid reflux, IBS, and peptic ulcers.',
    longDescription: `We provide diagnostic evaluation and therapeutic management for complex gastrointestinal disorders such as GERD, Inflammatory Bowel Disease (Ulcerative Colitis and Crohn's disease), peptic ulcers, and upper GI bleeding. Our treatment options span medical therapy, nutritional counseling, lifestyle modification guidelines, and advanced laparoscopic surgeries like Nissen Fundoplication to permanently cure severe acid reflux.`,
    features: ['Acid Reflux Care', 'IBS Treatment', 'Peptic Ulcer Therapy', 'IBD Management'],
    costEstimate: '₹500 – ₹50,000',
    recoveryTime: 'Varies',
    order: 7,
    treatments: [
      {
        name: 'GI Disorder Evaluation & Treatment',
        slug: 'gi-disorder-evaluation-treatment-old',
        cost: '₹500 – ₹25,000',
        duration: 'OPD consultation',
        recovery: 'Varies',
        description: 'Comprehensive medical assessment and therapeutic planning for general GI problems.',
        longDescription: `Gastrointestinal Disorder Evaluation and Treatment (पेट की बीमारी का इलाज) at Sarvada Hospital covers the full range of digestive problems — from common conditions like acidity, bloating, and IBS to more complex issues like inflammatory bowel disease and functional GI disorders. Dr. Manmohan Suman, a senior Gastro Specialist in Patna, provides thorough diagnostic workups and personalised treatment plans.

Many patients in Patna and Bihar suffer from chronic digestive complaints such as acid reflux (GERD), persistent indigestion, irregular bowel habits, abdominal pain, and unexplained weight loss. Our approach begins with a detailed clinical history and physical examination, followed by targeted investigations including blood tests, stool analysis, ultrasound abdomen, and endoscopy when indicated.

Treatment is tailored to the underlying cause — this may include dietary modification, medical therapy (proton pump inhibitors, antispasmodics, probiotics), lifestyle counselling, or referral for endoscopic/surgical intervention when necessary. Dr. Manmohan Suman's dual expertise in gastroenterology and surgery allows him to provide seamless care from diagnosis through to surgery if needed, all under one roof.

Whether you are dealing with persistent stomach pain, chronic constipation, blood in stools, or unexplained digestive issues, consult Dr. Manmohan Suman at Sarvada Hospital, Anand palace, Bypass Rd, changer, Kankarbagh, Patna. OPD consultation fee: ₹500. Call 7079001600 to book your appointment.`,
        indications: ['Chronic abdominal pain', 'Bloating', 'Indigestion'],
        benefits: ['Expert diagnostic workup', 'Dietary and medical management'],
        preparation: ['Bring previous records'],
        steps: [
          { step: '01', title: 'OPD Visit', desc: 'Clinical history detailed by doctor.' },
          { step: '02', title: 'Investigations', desc: 'Blood, stool tests, or ultrasound ordered as necessary.' },
        ],
        faqs: [],
      },
      {
        name: 'GERD (Gastro-Esophageal Reflux Disease) Management',
        slug: 'gerd-management',
        cost: '₹500 – ₹1,50,000',
        duration: 'Variable',
        recovery: '1–7 days',
        description: 'Comprehensive management of GERD including medical therapy, lifestyle modification, and anti-reflux surgery (fundoplication).',
        longDescription: `GERD Management (गैस्ट्रो-इसोफेगल रिफ्लक्स डिजीज का इलाज) at Sarvada Hospital provides complete care for acid reflux — from medical management to laparoscopic anti-reflux surgery. Dr. Manmohan Suman evaluates each patient with upper GI endoscopy, pH monitoring, and manometry to determine the best treatment approach.

GERD occurs when stomach acid repeatedly flows back into the oesophagus, causing heartburn, chest pain, regurgitation, chronic cough, and difficulty swallowing. Long-standing GERD can lead to Barrett's oesophagus and oesophageal cancer.

Treatment begins with lifestyle modifications (diet changes, weight loss, elevation of head during sleep) and medications (PPIs — proton pump inhibitors). When medical therapy fails or complications develop, laparoscopic Nissen Fundoplication is performed — the upper part of the stomach is wrapped around the lower oesophagus to create a new valve mechanism preventing reflux.

GERD is increasingly common across Patna and Bihar due to changing dietary habits, stress, and obesity. Contact Sarvada Hospital at 7079001600, Anand palace, Bypass Rd, changer, Kankarbagh, Patna 800020.`,
        indications: ['Chronic heartburn', 'Acid regurgitation', 'Barrett\'s oesophagus', 'Failed medical therapy'],
        benefits: ['Complete GERD workup', 'Medical and surgical options', 'Laparoscopic fundoplication'],
        preparation: ['Upper GI endoscopy', 'pH monitoring', 'Oesophageal manometry'],
        steps: [
          { step: '01', title: 'Diagnosis', desc: 'Endoscopy and pH study to confirm GERD severity.' },
          { step: '02', title: 'Treatment', desc: 'Medical therapy or laparoscopic fundoplication as indicated.' },
          { step: '03', title: 'Follow-up', desc: 'Dietary counselling and periodic endoscopic surveillance.' },
        ],
        faqs: [
          { question: 'Can GERD be cured permanently?', answer: 'Laparoscopic fundoplication provides long-term relief from GERD in over 90% of carefully selected patients.' },
        ],
      },
      {
        name: 'Ulcerative Colitis & Crohn\'s Disease Surgery',
        slug: 'ulcerative-colitis-crohns-surgery',
        cost: '₹50,000 – ₹2,00,000',
        duration: '2–5 hrs',
        recovery: '10–21 days',
        description: 'Surgical management of complications of ulcerative colitis and Crohn\'s disease — colectomy, strictureplasty, and abscess drainage.',
        longDescription: `Ulcerative Colitis & Crohn's Disease Surgery (अल्सरेटिव कोलाइटिस और क्रोन रोग सर्जरी) at Sarvada Hospital provides surgical management for patients with inflammatory bowel disease (IBD) who have failed medical therapy or developed complications.

Ulcerative Colitis complications requiring surgery include toxic megacolon, perforation, massive bleeding, and dysplasia/cancer. Surgery involves total colectomy with ileal pouch-anal anastomosis (J-pouch) or permanent ileostomy.

Crohn's Disease complications include intestinal strictures causing obstruction, fistulae (abnormal connections between bowel loops or to skin), and abscesses. Surgical options include strictureplasty (widening the narrowed segment without removing it), segmental resection, and abscess drainage.

Dr. Manmohan Suman takes a conservative surgical approach — removing only the minimum bowel necessary to treat the complication while preserving as much intestine as possible.

IBD is increasingly diagnosed in Bihar and eastern India. Patients from Patna and surrounding districts trust our centre for IBD surgery. Contact Sarvada Hospital at 7079001600.`,
        indications: ['Toxic megacolon', 'Intestinal stricture', 'Fistula', 'Abscess', 'Failed medical therapy'],
        benefits: ['Bowel-preserving surgery when possible', 'Expert IBD surgical management', 'Multidisciplinary care'],
        preparation: ['Colonoscopy', 'CT enterography', 'Nutritional optimization', 'Stoma marking if needed'],
        steps: [
          { step: '01', title: 'Assessment', desc: 'Disease extent mapping with colonoscopy and CT.' },
          { step: '02', title: 'Surgery', desc: 'Colectomy, strictureplasty, or abscess drainage as needed.' },
          { step: '03', title: 'Recovery', desc: 'Stoma care (if applicable), dietary guidance, and follow-up.' },
        ],
        faqs: [
          { question: 'Is surgery the last option for IBD?', answer: 'Surgery is recommended when medical therapy fails or serious complications develop. It can significantly improve quality of life.' },
        ],
      },
      {
        name: 'Trichobezoar & Upper GI Bleeding Management',
        slug: 'trichobezoar-upper-gi-bleeding',
        cost: '₹20,000 – ₹1,00,000',
        duration: '1–3 hrs',
        recovery: '5–14 days',
        description: 'Emergency and elective management of trichobezoar (hair ball in stomach) and upper gastrointestinal bleeding.',
        longDescription: `Trichobezoar & Upper GI Bleeding Management (ट्राइकोबेज़ोर और ऊपरी जीआई ब्लीडिंग) at Sarvada Hospital provides expert surgical care for two important upper GI conditions.

Trichobezoar: A trichobezoar is a mass of ingested hair that accumulates in the stomach, most commonly seen in young females with trichotillomania (hair-pulling disorder). It can cause abdominal pain, vomiting, weight loss, and gastric obstruction. Large trichobezoars extending into the small intestine (Rapunzel syndrome) require surgical removal through gastrotomy (opening the stomach).

Upper GI Bleeding: Causes include peptic ulcers, oesophageal varices (in liver cirrhosis), Mallory-Weiss tears, and gastric erosions. Management begins with resuscitation, blood transfusion, and emergency upper GI endoscopy for diagnosis and therapeutic intervention (adrenaline injection, band ligation, or clipping). When endoscopic therapy fails, emergency surgery is performed — oversewing of bleeding ulcers, gastrectomy, or devascularisation procedures for variceal bleeding.

Dr. Manmohan Suman provides 24-hour emergency surgical services for upper GI bleeding at Sarvada Hospital. Call 7079001600 for emergency consultation.`,
        indications: ['Trichobezoar (hair ball)', 'Peptic ulcer bleeding', 'Variceal bleeding', 'Mallory-Weiss tear'],
        benefits: ['24-hour emergency services', 'Endoscopic and surgical options', 'Expert GI surgeon'],
        preparation: ['Emergency resuscitation', 'Blood grouping & cross-match', 'Upper GI endoscopy'],
        steps: [
          { step: '01', title: 'Resuscitation', desc: 'IV fluids, blood transfusion, and stabilisation.' },
          { step: '02', title: 'Endoscopy/Surgery', desc: 'Endoscopic therapy or surgical intervention as needed.' },
          { step: '03', title: 'Recovery', desc: 'ICU monitoring, diet advancement, and discharge.' },
        ],
        faqs: [
          { question: 'What is a trichobezoar?', answer: 'It is a mass of swallowed hair that forms a ball in the stomach, requiring surgical removal.' },
        ],
      },
    ],
  },

  // ── 8. Upper G.I. Endoscopy / Colonoscopy (Merged) ─────────
  {
    name: 'Upper G.I. Endoscopy / Colonoscopy',
    slug: 'endoscopy-colonoscopy',
    icon: '🔍',
    category: 'Diagnostic',
    available: 'By Appointment',
    description: 'Comprehensive diagnostic and therapeutic endoscopic evaluations of the upper and lower gastrointestinal tracts using flexible high-definition scopes.',
    longDescription: `Our endoscopy suite offers diagnostic and therapeutic upper GI endoscopy (gastroscopy) and colonoscopy. We perform routine cancer screenings, polyp removals (polypectomy), and identify bleeding sources in the esophagus, stomach, and large intestines. Procedures are performed under conscious sedation to ensure maximum patient comfort and quick recovery.`,
    features: ['Diagnostic Upper GI Endoscopy', 'Colon Cancer Screening', 'Polyp Detection & Removal', 'Stricture Dilation', 'Biopsy Collection'],
    costEstimate: '₹3,000 – ₹20,000',
    recoveryTime: 'Same day',
    order: 8,
    treatments: [
      {
        name: 'Diagnostic & Therapeutic Upper GI Endoscopy',
        slug: 'diagnostic-upper-gi-endoscopy-merged',
        cost: '₹3,000 – ₹8,000',
        duration: '15–30 min',
        recovery: 'Same day',
        description: 'A flexible endoscope is passed through the mouth to visualize the food pipe, stomach, and duodenum.',
        longDescription: `Upper GI Endoscopy (ऊपरी एंडोस्कोपी) is a quick, safe, and highly accurate diagnostic and therapeutic procedure performed at Sarvada Hospital. Dr. Manmohan Suman uses a flexible high-definition endoscope to directly visualise the oesophagus (food pipe), stomach, and duodenum, enabling precise diagnosis of conditions that X-rays and ultrasound may miss.

This procedure is essential for patients experiencing persistent acidity, difficulty swallowing (dysphagia), chronic stomach pain, vomiting blood (hematemesis), unexplained weight loss, or anaemia. During the endoscopy, Dr. Kumar can also perform therapeutic interventions such as biopsy collection from suspicious lesions, polyp removal, bleeding control using cauterisation or clipping, and stricture dilation.

The procedure takes just 15–30 minutes under topical throat spray anaesthesia or mild sedation. Patients must fast for 8 hours prior. After the procedure, most patients can go home within 1–2 hours. It is a completely outpatient procedure with no admission required.

As a senior gastro surgeon in Patna with training at IGIMS and Safdarjung Hospital, Dr. Manmohan Suman has performed thousands of endoscopic procedures. Patients from Patna, Hajipur, Chhapra, Biharsharif, and neighbouring districts rely on our centre for expert endoscopic evaluation. Call 7079001600 to schedule your endoscopy at Anand palace, Bypass Rd, changer, Kankarbagh, Patna.`,
        indications: ['Difficulty swallowing', 'Persistent acidity', 'Hematemesis (blood vomit)'],
        benefits: ['Direct visual diagnosis', 'Ability to take biopsy', 'Quick, safe outpatient procedure'],
        preparation: ['Strict fasting for 8 hours prior'],
        steps: [
          { step: '01', title: 'Preparation', desc: 'Throat spray local anesthetic or mild sedation given.' },
          { step: '02', title: 'Scoping', desc: 'Gently pass flexible endoscope; inspect lining.' },
          { step: '03', title: 'Biopsy/Intervention', desc: 'Collect biopsy or treat bleeding if present.' },
        ],
        faqs: [],
      },
      {
        name: 'Diagnostic & Therapeutic Colonoscopy',
        slug: 'diagnostic-colonoscopy-merged',
        cost: '₹5,000 – ₹20,000',
        duration: '30–60 min',
        recovery: 'Same day',
        description: 'Endoscopic examination of the entire large intestine (colon) and rectum using a flexible colonoscope.',
        longDescription: `Colonoscopy (कोलोनोस्कोपी) at Sarvada Hospital is a comprehensive examination of the entire large intestine using a high-definition flexible colonoscope. Dr. Manmohan Suman, a senior colorectal and gastro surgeon in Patna, performs both diagnostic and therapeutic colonoscopies for patients across Bihar.

Colonoscopy is recommended for patients with rectal bleeding, chronic diarrhoea, unexplained abdominal pain, iron-deficiency anaemia, abnormal CT findings, family history of colon cancer, and as a routine screening tool for colorectal cancer in patients over 45 years of age. During the procedure, the entire colon from rectum to caecum is carefully inspected.

If polyps (precancerous growths) are detected, they are removed during the same sitting (polypectomy), potentially preventing colon cancer before it develops. Biopsies from suspicious areas are sent for histopathological examination. Stricture dilation can also be performed for narrowed segments of the colon.

The procedure requires bowel preparation — patients take a laxative solution the day before to cleanse the colon completely. Conscious sedation is administered for patient comfort during the 30–60 minute procedure. Most patients can go home the same day.

For colonoscopy and colon cancer screening in Patna, Bihar, schedule an appointment with Dr. Manmohan Suman. Call 7079001600 or visit us at Anand palace, Bypass Rd, changer, Kankarbagh, Patna, Bihar 800020.`,
        indications: ['Rectal bleeding', 'Chronic diarrhea', 'Colon cancer screening', 'Unexplained weight loss'],
        benefits: ['Complete large bowel inspection', 'Polyp removal (polypectomy) in same sitting', 'Early cancer detection'],
        preparation: ['Bowel laxative preparation the day before', 'Clear liquid diet'],
        steps: [
          { step: '01', title: 'Cleanse', desc: 'Bowel preparation solution taken to empty colon completely.' },
          { step: '02', title: 'Sedation', desc: 'Conscious sedation administered.' },
          { step: '03', title: 'Procedure', desc: 'Colonoscope advanced to cecum; polyps removed if found.' },
        ],
        faqs: [],
      },
    ],
  },

  // ── 9. Colorectal Surgeon ──────────────────────────────
  {
    name: 'Colorectal Surgeon',
    slug: 'colorectal-surgeon',
    icon: '🔬',
    category: 'Surgery',
    available: 'OPD & Emergency',
    description: 'Expert surgical management of disorders affecting the colon, rectum, and anus, specializing in bowel cancers, benign tumors, and intestinal blockages.',
    longDescription: `We provide specialized surgical oncology and reconstructive procedures for colon and rectal cancers, large bowel obstructions, and intestinal perforations. Dr. Manmohan Suman's oncological training ensures radical resections with clean margins and lymph node dissections, followed by restorative anastomosis or stoma creation, backed by dedicated ICU monitoring.`,
    features: ['Colon & Rectal Cancer', 'Intestinal Obstruction Surgery', 'Bowel Resection & Anastomosis', 'Colorectal Tumor Excision'],
    costEstimate: '₹40,000 – ₹1,80,000',
    recoveryTime: '7 – 14 days',
    order: 9,
    isNew: true,
    treatments: [
      {
        name: 'Cancer of Intestine (Colorectal Cancer Surgery)',
        slug: 'cancer-of-intestine-colorectal',
        cost: '₹80,000 – ₹1,80,000',
        duration: '120–240 min',
        recovery: '7–14 days',
        description: 'Surgical resection of colon or rectal cancer (Colectomy, Anterior Resection) to achieve complete oncological clearance with lymph node dissection.',
        longDescription: `Colorectal Cancer Surgery (आंत के कैंसर की सर्जरी) at Sarvada Hospital provides curative surgical treatment for colon and rectal cancers. Dr. Manmohan Suman, a senior surgeon with colorectal expertise in Patna, performs comprehensive cancer resections including right hemicolectomy, left hemicolectomy, sigmoid colectomy, and anterior resection with D2/D3 lymph node dissection.

Colorectal cancer is one of the most treatable cancers when detected early through screening colonoscopy. Surgical resection is the primary treatment and offers the best chance of cure. The affected segment of the bowel is removed with adequate margins along with its blood supply and draining lymph nodes. The healthy bowel ends are then reconnected (anastomosis) to restore intestinal continuity.

For rectal cancers, total mesorectal excision (TME) is performed to minimise local recurrence. In some cases, a temporary stoma (colostomy or ileostomy) may be created and reversed after 3–6 months. Dr. Manmohan Suman's extensive training ensures meticulous surgical technique that maximises oncological outcomes while preserving bowel and sphincter function whenever possible.

Patients from Patna, Bihar, and eastern India seeking expert colorectal cancer surgery at an affordable cost trust Sarvada Hospital. Our comprehensive care includes pre-operative staging (CT scan, colonoscopy, tumour markers), ICU support, and post-operative follow-up. Call 7079001600 for consultation.`,
        indications: ['Colon adenocarcinoma', 'Rectal cancer', 'Large precancerous colonic polyps'],
        benefits: ['Oncological cure', 'Restoration of bowel continuity', 'Minimally invasive options'],
        preparation: ['Full colonoscopy', 'Contrast CT scan', 'Bowel prep', 'Nutritional check'],
        steps: [
          { step: '01', title: 'Staging', desc: 'CT scans and tumor markers are reviewed.' },
          { step: '02', title: 'Resection', desc: 'Bowel segment containing the cancer is surgically removed.' },
          { step: '03', title: 'Anastomosis', desc: 'Healthy bowel ends reconnected (with or without temporary stoma).' },
        ],
        faqs: [],
      },
      {
        name: 'Intestinal Tumor Excision',
        slug: 'intestinal-tumor-excision',
        cost: '₹50,000 – ₹1,20,000',
        duration: '90–180 min',
        recovery: '5–10 days',
        description: 'Removal of benign or stromal tumors (GIST, lipomas) of the small and large bowel.',
        longDescription: `Intestinal Tumor Excision (आंत के ट्यूमर का ऑपरेशन) is performed at Sarvada Hospital for patients diagnosed with benign bowel tumours, Gastrointestinal Stromal Tumours (GIST), lipomas, and other growths of the small and large intestine. Dr. Manmohan Suman performs precise wedge resections or segmental bowel resections to remove the tumour-bearing segment while preserving maximum bowel length.

Early surgical removal of intestinal tumours is important to prevent complications such as bleeding, bowel obstruction, intussusception, and potential malignant transformation. The surgical approach depends on the tumour size, location, and type — smaller tumours may be amenable to laparoscopic or limited resection, while larger or complex tumours require formal bowel resection with primary anastomosis.

Pre-operative evaluation includes CT enterography, endoscopic biopsy (if the tumour is reachable), and nutritional assessment. Post-operatively, patients are carefully monitored for return of bowel function before starting oral feeding.

For intestinal tumour evaluation and surgery in Patna and Bihar, consult Dr. Manmohan Suman at Sarvada Hospital. Call 7079001600.`,
        indications: ['Symptomatic benign bowel tumors', 'Gastrointestinal Stromal Tumor (GIST)'],
        benefits: ['Prevents malignant conversion', 'Resolves local symptoms (bleeding, pain)'],
        preparation: ['CT Enterography', 'Endoscopic biopsy if reachable'],
        steps: [
          { step: '01', title: 'Localization', desc: 'Pinpoint the tumor via imaging or endoscopy.' },
          { step: '02', title: 'Excision', desc: 'Surgically wedge-resect the tumor bearing segment.' },
        ],
        faqs: [],
      },
      {
        name: 'Intestinal Obstruction Surgery',
        slug: 'intestinal-obstruction-surgery',
        cost: '₹40,000 – ₹1,00,000',
        duration: '60–150 min',
        recovery: '7–12 days',
        description: 'Emergency decompression and relief of acute bowel blockage due to bands, adhesions, strictures, or tumors.',
        longDescription: `Intestinal Obstruction Surgery (आंत में रुकावट का ऑपरेशन) is an emergency surgical procedure performed at Sarvada Hospital for patients with acute bowel blockage. Dr. Manmohan Suman provides 24-hour emergency surgical care for all types of intestinal obstruction — including adhesive obstruction, strangulated hernias, volvulus, tumour-related blockage, and strictures.

Acute intestinal obstruction is a surgical emergency characterised by severe colicky abdominal pain, vomiting, abdominal distension, and inability to pass gas or stool. If not treated promptly, the blocked bowel can lose its blood supply (strangulation), leading to gangrene, perforation, and life-threatening peritonitis.

Treatment begins with emergency resuscitation — intravenous fluids, electrolyte correction, nasogastric tube decompression, and antibiotics. Once the patient is stabilised, exploratory laparotomy is performed to identify and relieve the cause of obstruction. Gangrenous bowel segments are resected and healthy ends anastomosed. In some cases, a temporary stoma may be necessary.

As a former surgeon at IGIMS Patna and Safdarjung Hospital New Delhi, Dr. Manmohan Suman has extensive experience in managing complex emergency abdominal surgeries. Our fully equipped ICU at Sri Krishna Nagar, Patna provides round-the-clock post-operative monitoring. For emergency surgical care, call 7079001600 immediately.`,
        indications: ['Acute mechanical bowel obstruction', 'Strangulated bowel loop'],
        benefits: ['Life-saving emergency relief', 'Prevents bowel gangrene and perforation'],
        preparation: ['Emergency IV resuscitation', 'Ryle\'s tube suction'],
        steps: [
          { step: '01', title: 'Resuscitation', desc: 'IV fluids, electrolytes, and gastric decompression.' },
          { step: '02', title: 'Laparotomy', desc: 'Explore abdomen, release bands, or resect gangrenous bowel.' },
        ],
        faqs: [],
      },
      {
        name: 'Large Bowel (Colon) Cancer Surgery',
        slug: 'large-bowel-colon-cancer-surgery',
        cost: '₹80,000 – ₹2,50,000',
        duration: '3–5 hrs',
        recovery: '10–21 days',
        description: 'Radical surgery for colon and rectal cancer including hemicolectomy, anterior resection, and abdominoperineal resection.',
        longDescription: `Large Bowel Cancer Surgery (बड़ी आंत के कैंसर की सर्जरी) at Sarvada Hospital provides comprehensive surgical treatment for cancers of the colon and rectum. Dr. Manmohan Suman performs right hemicolectomy, left hemicolectomy, sigmoid colectomy, anterior resection, and abdominoperineal resection (APR) based on the tumour location and stage.

Colorectal cancer is the third most common cancer worldwide and is increasingly diagnosed in Bihar due to dietary changes (high processed food, low fibre), sedentary lifestyle, and delayed screening. Symptoms include change in bowel habits, blood in stool, unexplained weight loss, and abdominal pain.

Surgery involves removing the cancer-bearing segment of the bowel along with its draining lymph nodes (radical resection), followed by reconnection of the remaining bowel. In low rectal cancers, a permanent colostomy (stoma) may be necessary.

Early-stage colorectal cancers have excellent cure rates with surgery alone. Advanced cases benefit from combined chemotherapy and surgery. Patients from Patna and Bihar trust our centre for expert colorectal cancer surgery. Contact 7079001600.`,
        indications: ['Colon cancer', 'Rectal cancer', 'Large bowel polyps with malignancy'],
        benefits: ['Radical oncological resection', 'Laparoscopic options for select cases', 'Expert GI cancer surgeon'],
        preparation: ['Colonoscopy with biopsy', 'CT chest/abdomen/pelvis', 'CEA tumour marker', 'Bowel preparation'],
        steps: [
          { step: '01', title: 'Staging', desc: 'Colonoscopy, CT, and tumour markers for staging.' },
          { step: '02', title: 'Surgery', desc: 'Radical colectomy with lymph node dissection.' },
          { step: '03', title: 'Follow-up', desc: 'Chemotherapy if needed; surveillance colonoscopy.' },
        ],
        faqs: [
          { question: 'Is colon cancer curable?', answer: 'Yes, early-stage colon cancer has cure rates above 90% with proper surgery.' },
        ],
      },
      {
        name: 'Intestinal Perforation & Stricture Surgery',
        slug: 'intestinal-perforation-stricture-surgery',
        cost: '₹30,000 – ₹1,20,000',
        duration: '2–4 hrs',
        recovery: '10–21 days',
        description: 'Emergency surgery for intestinal perforation and elective surgery for intestinal strictures causing obstruction.',
        longDescription: `Intestinal Perforation & Stricture Surgery (आंत में छेद और सिकुड़न की सर्जरी) at Sarvada Hospital provides both emergency and planned surgical management for bowel perforations and strictures.

Intestinal Perforation: A hole in the intestinal wall is a surgical emergency that causes peritonitis (infection of the abdominal cavity). Common causes include typhoid fever, tuberculosis (Koch's), peptic ulcer, trauma, and Crohn's disease. Surgery involves closure of the perforation (primary repair), resection of the damaged segment, or creation of a stoma (temporary colostomy/ileostomy) depending on the severity of contamination.

Intestinal Stricture: Narrowing of the intestine causes recurrent abdominal pain, bloating, vomiting, and eventually complete bowel obstruction. Common causes include TB (tuberculosis of the intestine — very common in Bihar), Crohn's disease, post-surgical adhesions, and radiation. Surgery involves strictureplasty (widening the narrowed segment) or resection with anastomosis.

Dr. Manmohan Suman provides 24-hour emergency surgical services for intestinal perforation. Our ICU facilities ensure comprehensive post-operative care. Contact Sarvada Hospital at 7079001600, Anand palace, Bypass Rd, changer, Kankarbagh, Patna.`,
        indications: ['Intestinal perforation (typhoid, TB, trauma)', 'Intestinal stricture (TB, Crohn\'s)', 'Post-surgical adhesive obstruction'],
        benefits: ['24-hour emergency surgery', 'ICU backup', 'Bowel-preserving techniques when possible'],
        preparation: ['Emergency X-ray erect abdomen', 'Blood tests', 'IV resuscitation'],
        steps: [
          { step: '01', title: 'Resuscitation', desc: 'IV fluids, antibiotics, and nasogastric decompression.' },
          { step: '02', title: 'Surgery', desc: 'Perforation repair, resection, or strictureplasty.' },
          { step: '03', title: 'ICU Care', desc: 'Post-operative monitoring, drain management, and staged diet.' },
        ],
        faqs: [
          { question: 'Is intestinal perforation an emergency?', answer: 'Yes, it is a life-threatening emergency requiring immediate surgery to prevent fatal peritonitis.' },
        ],
      },
    ],
  },

  // ── 10. Piles, fissure and fistula in Ano ───────────
  {
    name: 'Piles, fissure and fistula in Ano',
    slug: 'piles-fissure-fistula',
    icon: '🏥',
    category: 'Surgery',
    available: 'OPD & Emergency',
    description: 'Specialized, advanced surgical treatments for painful perianal disorders including piles, chronic fissures, and complex fistulous tracts.',
    longDescription: `We offer modern, minimally invasive solutions for proctological conditions. Our treatments include Stapled Haemorrhoidectomy (MIPH/PPH) for grade 3–4 piles, laser sphincterotomy for anal fissures, and sphincter-preserving fistula surgeries (like LIFT and mucosal flaps). These advanced keyhole and laser techniques ensure minimal pain, no large wounds, and same-day or next-day discharge.`,
    features: ['Stapler Haemorrhoidectomy', 'Fistula LIFT / Fistulotomy', 'Anal Fissure Sphincterotomy', 'Painless Daycare Procedures'],
    costEstimate: '₹15,000 – ₹60,000',
    recoveryTime: '2 – 10 days',
    order: 10,
    isNew: true,
    treatments: [
      {
        name: 'Piles (Haemorrhoids) Surgery',
        slug: 'piles-haemorrhoids-surgery',
        cost: '₹15,000 – ₹45,000',
        duration: '30–60 min',
        recovery: '3–5 days',
        description: 'Modern surgical correction of bleeding and prolapsing piles using Stapler Haemorrhoidectomy (PPH) or open/laser methods.',
        longDescription: `Piles (Haemorrhoids) Surgery (बवासीर का ऑपरेशन) at Sarvada Hospital offers modern, painless treatment options for patients suffering from bleeding or prolapsing piles. Dr. Manmohan Suman performs Stapler Haemorrhoidectomy (PPH — Procedure for Prolapse and Haemorrhoids), the most advanced and least painful method available for piles treatment in Patna.

Piles or haemorrhoids are swollen blood vessels in the anal canal that can cause painless bleeding during bowel movements, itching, mucus discharge, and prolapse (piles coming out). While Grade I and II piles can often be managed conservatively with dietary fibre, sitz baths, and medications, Grade III and IV piles with persistent bleeding or prolapse require surgical treatment.

The Stapler PPH technique is a revolutionary method where a circular stapler device is used to excise the prolapsed haemorrhoidal tissue and simultaneously reposition the remaining tissue. This results in significantly less pain compared to conventional excision because the staple line is placed above the sensitive dentate line. Most patients experience minimal discomfort and can be discharged the next morning.

Dr. Manmohan Suman also offers conventional haemorrhoidectomy and laser treatment options based on patient preference and disease severity. With thousands of successful piles surgeries, our centre is among the most trusted piles treatment hospitals in Patna. Patients visit us from Patna, Gaya, Muzaffarpur, Darbhanga, Bhagalpur, and across Bihar for affordable, expert piles care. Call 7079001600 to consult.`,
        indications: ['Grade III & IV bleeding piles', 'Thrombosed internal piles'],
        benefits: ['Painless stapler method', 'Minimal blood loss', 'Discharge next morning'],
        preparation: ['Bowel preparation laxative', 'Proctoscopy exam'],
        steps: [
          { step: '01', title: 'Proctoscopy', desc: 'Confirm grade and count of hemorrhoidal piles.' },
          { step: '02', title: 'Stapler PPH', desc: 'Staple and excise prolapsed mucosa above the dentate line.' },
        ],
        faqs: [],
      },
      {
        name: 'Fissure in Ano Repair',
        slug: 'fissure-in-ano-repair',
        cost: '₹12,000 – ₹30,000',
        duration: '30–45 min',
        recovery: '2–4 days',
        description: 'Lateral Internal Sphincterotomy (LIS) to relieve sphincter spasm and heal chronic painful anal tears.',
        longDescription: `Fissure in Ano Repair (गुदा की दरार का इलाज) at Sarvada Hospital provides effective surgical treatment for chronic anal fissures that have not responded to conservative medical management. Dr. Manmohan Suman performs Lateral Internal Sphincterotomy (LIS), the gold standard surgical procedure for chronic fissures, with excellent cure rates and minimal complications.

An anal fissure is a small tear in the lining of the anal canal that causes intense, sharp pain during and after bowel movements, often accompanied by a small amount of bright red blood. Chronic fissures develop when the internal anal sphincter goes into spasm, reducing blood supply to the tear and preventing natural healing.

LIS involves making a small, controlled cut in the lower portion of the internal anal sphincter muscle to relieve the abnormal spasm. This immediately reduces pain and restores blood flow, allowing the fissure to heal within 2–4 weeks. The procedure takes just 30–45 minutes and is performed as a daycare surgery — patients go home the same day or next morning.

If you have been suffering from severe pain during bowel movements, bleeding, or have been diagnosed with a chronic anal fissure in Patna, consult Dr. Manmohan Suman at Anand palace, Bypass Rd, changer, Kankarbagh, Patna. Thousands of patients across Bihar have found lasting relief through our expert fissure surgery. Call 7079001600.`,
        indications: ['Chronic anal fissure', 'Intense pain during/after defecation'],
        benefits: ['Immediate pain relief', 'Very low recurrence rates', 'Quick daycare procedure'],
        preparation: ['Local enema cleaning'],
        steps: [
          { step: '01', title: 'Dilation', desc: 'Careful exam under anesthesia.' },
          { step: '02', title: 'Sphincterotomy', desc: 'Incise the internal sphincter to relieve high pressures.' },
        ],
        faqs: [],
      },
      {
        name: 'Fistula-in-Ano Surgery',
        slug: 'fistula-in-ano-surgery-new',
        cost: '₹20,000 – ₹55,000',
        duration: '45–90 min',
        recovery: '2–6 weeks',
        description: 'Surgical closure of abnormal tracts connecting the anal canal to the perianal skin using Fistulotomy, LIFT, or Seton.',
        longDescription: `Fistula-in-Ano Surgery (भगन्दर / फिस्टुला का ऑपरेशन) at Sarvada Hospital provides definitive surgical treatment for anal fistulas — abnormal tunnels connecting the anal canal to the skin near the anus. Dr. Manmohan Suman is one of the most experienced fistula surgeons in Patna, offering multiple surgical techniques including Fistulotomy, LIFT (Ligation of Intersphincteric Fistula Tract), and Seton placement.

An anal fistula typically develops after a perianal abscess that doesn't heal completely. Patients experience persistent discharge of pus or blood from a small opening near the anus, recurrent swelling, pain, and discomfort. Without surgical treatment, fistulas do not heal on their own and often lead to recurrent painful abscesses.

The choice of surgical technique depends on the complexity and location of the fistula tract relative to the anal sphincter muscles. Simple fistulas are treated with fistulotomy (laying open the tract), while complex fistulas involving significant sphincter muscle are treated with the LIFT procedure or staged seton drainage to preserve fecal continence.

Pre-operative assessment includes MRI pelvis or fistulogram to accurately map the fistula tract. Dr. Manmohan Suman's meticulous surgical approach ensures complete tract excision with preservation of continence — a critical concern in fistula surgery. Patients from Patna, Bihar, and neighbouring states seek treatment at our centre for complex and recurrent fistula cases. Call 7079001600 for consultation.`,
        indications: ['Discharging perianal fistula', 'Recurrent perianal abscesses'],
        benefits: ['Permanent cure', 'Preservation of fecal continence'],
        preparation: ['MRI Pelvis/Fistulogram', 'Bowel prep'],
        steps: [
          { step: '01', title: 'Tract Mapping', desc: 'Trace the path of the tract relative to the sphincter muscle.' },
          { step: '02', title: 'LIFT/Fistulotomy', desc: 'Ligate the intersphincteric tract or lay it open.' },
        ],
        faqs: [],
      },
      {
        name: 'Stapler Haemorrhoidectomy (MIPH)',
        slug: 'stapler-haemorrhoidectomy-miph',
        cost: '₹25,000 – ₹60,000',
        duration: '30–45 min',
        recovery: '3–7 days',
        description: 'Minimally invasive stapler haemorrhoidectomy (MIPH) for grade 3–4 piles with less pain and faster recovery than conventional surgery.',
        longDescription: `Stapler Haemorrhoidectomy — also known as MIPH (Minimally Invasive Procedure for Haemorrhoids) or PPH (Procedure for Prolapse and Haemorrhoids) — is an advanced surgical technique for treating grade 3 and 4 internal haemorrhoids (बवासीर) at Sarvada Hospital.

Unlike conventional haemorrhoidectomy which cuts and removes the piles tissue (causing significant post-operative pain), the stapler technique uses a circular stapling device to remove a ring of excess mucosa above the pile mass. This lifts the prolapsed piles back to their normal position and cuts off the blood supply, causing them to shrink. The staple line is placed in an area with fewer pain nerves, resulting in significantly less pain compared to traditional surgery.

Advantages of MIPH include: minimal post-operative pain, faster recovery (return to work in 3–5 days vs 2–3 weeks), less bleeding, and no external wounds. It is particularly effective for circumferential (all-around) prolapsing piles.

Piles are extremely common in Bihar due to dietary habits (low fibre, high spice), sedentary jobs, and chronic constipation. Patients from Patna, Gaya, Muzaffarpur, Bhagalpur, and across Bihar choose Sarvada Hospital for expert pile treatment. Contact us at 7079001600, Anand palace, Bypass Rd, changer, Kankarbagh, Patna 800020.`,
        indications: ['Grade 3–4 internal haemorrhoids', 'Circumferential prolapsing piles', 'Recurrent piles after banding'],
        benefits: ['Minimal pain', 'Faster recovery', 'No external wounds', 'Day-care or overnight stay'],
        preparation: ['Proctoscopy', 'Blood tests (CBC, PT/INR)', 'Bowel preparation'],
        steps: [
          { step: '01', title: 'Examination', desc: 'Proctoscopy to grade the haemorrhoids.' },
          { step: '02', title: 'Stapler Surgery', desc: 'Circular stapler removes excess mucosa and lifts prolapsed piles.' },
          { step: '03', title: 'Discharge', desc: 'Same-day or next-day discharge with dietary advice.' },
        ],
        faqs: [
          { question: 'Is stapler surgery painful?', answer: 'Stapler haemorrhoidectomy causes significantly less pain than conventional surgery because the staple line is placed above the pain-sensitive zone.' },
        ],
      },
    ],
  },

  // ── 11. Pancreatic stone ────────────────────────────────
  {
    name: 'Pancreatic stone',
    slug: 'pancreatic-stone',
    icon: '🧬',
    category: 'Digestive',
    available: 'OPD Hours',
    description: 'Expert diagnosis and surgical management of chronic pancreatitis complications, specifically pancreatic duct stones, strictures, and pancreatic fluid collections.',
    longDescription: `Our clinic is one of the specialized centers in Bihar for managing pancreatic duct stones. We provide comprehensive treatment including endoscopic clearance, pancreatic pseudocyst drainage, pancreatic stricture dilations, and surgical lithotomy. Removing pancreatic stones relieves severe chronic abdominal pain and preserves pancreatic exocrine and endocrine functions.`,
    features: ['Pancreatic Duct Stones', 'Frey\'s Surgery / LPJ', 'Pseudocyst Drainage', 'Necrosis Management'],
    costEstimate: '₹25,000 – ₹2,50,000',
    recoveryTime: '5 – 21 days',
    order: 11,
    isNew: true,
    treatments: [
      {
        name: 'Pancreatic Stone Surgery',
        slug: 'pancreatic-stone-surgery-new',
        cost: '₹70,000 – ₹1,80,000',
        duration: '120–210 min',
        recovery: '7–14 days',
        description: 'Surgical extraction of calculi from the main pancreatic duct (Frey\'s procedure or Lateral Pancreaticojejunostomy) to relieve severe pain of chronic pancreatitis.',
        longDescription: `Pancreatic Stone Surgery (अग्नाशय की पथरी का ऑपरेशन) at Sarvada Hospital is a specialised procedure performed by Dr. Manmohan Suman for patients with chronic pancreatitis complicated by large pancreatic duct stones causing severe, debilitating abdominal pain. The surgery involves Frey's procedure or Lateral Pancreaticojejunostomy (LPJ) to decompress the obstructed pancreatic duct.

Pancreatic duct stones form as a consequence of long-standing chronic pancreatitis, often related to alcohol use or idiopathic causes. These calcified stones block the normal flow of pancreatic juice, causing duct dilatation, parenchymal damage, and excruciating pain that significantly impairs quality of life. Medical management alone is often insufficient for large ductal stones.

During the Frey's/LPJ procedure, the main pancreatic duct is opened longitudinally, all stones and debris are carefully cleared, and the opened duct is anastomosed (connected) to a Roux-en-Y loop of the jejunum. This creates a permanent wide drainage pathway, providing long-term pain relief in over 80% of patients.

Pre-operative MRCP and CT scan are essential to map the duct dilatation, stone load, and pancreatic parenchymal changes. Dr. Manmohan Suman's experience in complex hepatopancreaticobiliary surgery makes Sarvada Hospital a trusted centre for pancreatic stone surgery in Bihar. Contact us at 7079001600.`,
        indications: ['Large stones in main pancreatic duct', 'Intractable pain in chronic pancreatitis'],
        benefits: ['Long-term pain relief', 'Decompression of pancreatic duct'],
        preparation: ['MRCP / CT Scan', 'Endocrine status evaluation'],
        steps: [
          { step: '01', title: 'MRCP Mapping', desc: 'Define duct dilatation and stone load.' },
          { step: '02', title: 'LPJ Procedure', desc: 'Duct is opened longitudinally, stones cleared, and duct anastomosed to jejunum.' },
        ],
        faqs: [],
      },
      {
        name: 'Pancreatic Stricture Surgery',
        slug: 'pancreatic-stricture-surgery',
        cost: '₹60,000 – ₹1,50,000',
        duration: '90–180 min',
        recovery: '7–12 days',
        description: 'Reconstructive surgery to bypass narrowing (strictures) in the main pancreatic duct.',
        longDescription: `Pancreatic Stricture Surgery at Sarvada Hospital is performed by Dr. Manmohan Suman for patients with narrowing of the main pancreatic duct causing recurrent pancreatitis attacks and chronic abdominal pain. The surgery creates a bypass anastomosis to restore drainage of pancreatic secretions.

Pancreatic duct strictures develop due to chronic inflammation, fibrosis, or previous pancreatic necrosis. The resulting obstruction causes backup of pancreatic enzymes, leading to recurring inflammation, pain, and progressive pancreatic damage. When endoscopic treatment is insufficient or unsuitable, surgical bypass provides definitive relief.

The surgical approach involves decompressing the dilated duct segment proximal to the stricture by creating a wide side-to-side anastomosis with a loop of the small bowel (jejunum). This ensures long-term drainage and prevents further acute attacks. Combined with enzyme replacement therapy and dietary management, patients achieve significant improvement in quality of life.

For expert pancreatic surgery in Patna and Bihar, consult Dr. Manmohan Suman at Anand palace, Bypass Rd, changer, Kankarbagh, Patna. Call 7079001600 or 7079001700.`,
        indications: ['Pancreatic duct stricture causing backup and pain'],
        benefits: ['Improves drainage of pancreatic secretions', 'Prevents recurrent acute attacks'],
        preparation: ['CT abdomen / MRCP'],
        steps: [
          { step: '01', title: 'Exploration', desc: 'Localize the stricture point.' },
          { step: '02', title: 'Bypass Anastomosis', desc: 'Decompress the duct into a loop of small bowel.' },
        ],
        faqs: [],
      },
      {
        name: 'Pancreatic Pseudocyst Drainage',
        slug: 'pancreatic-pseudocyst-drainage-new',
        cost: '₹30,000 – ₹80,000',
        duration: '60–120 min',
        recovery: '3–7 days',
        description: 'Laparoscopic or internal surgical drainage (Cystogastrostomy) of mature fluid collections following acute pancreatitis.',
        longDescription: `Pancreatic Pseudocyst Drainage (अग्नाशय सिस्ट ड्रेनेज) at Sarvada Hospital provides surgical relief for patients with large, symptomatic pancreatic pseudocysts that develop after acute pancreatitis. Dr. Manmohan Suman performs internal drainage via Cystogastrostomy — connecting the cyst cavity to the stomach — for complete, permanent resolution without external drainage bags.

Pancreatic pseudocysts are encapsulated collections of pancreatic fluid that form 4–6 weeks after an episode of acute pancreatitis. While small cysts may resolve spontaneously, large cysts (>6 cm) or those causing symptoms such as pain, early satiety, nausea, or biliary obstruction require intervention. Infected pseudocysts are a surgical emergency.

The Cystogastrostomy procedure creates a wide opening between the posterior wall of the stomach and the anterior wall of the pseudocyst, allowing the contents to drain internally into the GI tract. This can be performed laparoscopically for a minimally invasive approach. Dr. Manmohan Suman's expertise ensures safe drainage with low recurrence rates.

For pancreatic pseudocyst management in Patna, Bihar, contact Sarvada Hospital at 7079001600.`,
        indications: ['Symptomatic pseudocyst >6 cm', 'Infected pseudocyst'],
        benefits: ['Internal drainage without external bags', 'Rapid symptom relief'],
        preparation: ['CT scan confirming mature cyst wall'],
        steps: [
          { step: '01', title: 'Access', desc: 'Stomach and cyst walls are aligned.' },
          { step: '02', title: 'Anastomosis', desc: 'Create connection between stomach and cyst cavity.' },
        ],
        faqs: [],
      },
      {
        name: 'Pancreatic Necrosis Management',
        slug: 'pancreatic-necrosis-management',
        cost: '₹50,000 – ₹2,50,000',
        duration: 'ICU / Surgery',
        recovery: '14–30 days',
        description: 'Intensive ICU support and necrosectomy (surgical/laparoscopic cleanup of dead pancreatic tissue) for necrotizing pancreatitis.',
        longDescription: `Pancreatic Necrosis Management at Sarvada Hospital provides intensive, multidisciplinary critical care for patients with severe necrotizing pancreatitis — one of the most life-threatening abdominal emergencies. Dr. Manmohan Suman and our ICU team manage these complex cases with a step-up approach combining intensive care, percutaneous drainage, and surgical necrosectomy when required.

Necrotizing pancreatitis occurs when severe inflammation causes death of pancreatic tissue, which can become infected leading to sepsis and multi-organ failure. Management begins with aggressive ICU support including IV fluid resuscitation, pain control, nutritional support (enteral feeding), and organ function monitoring.

When infected pancreatic necrosis is confirmed (by CT-guided aspiration or clinical deterioration despite antibiotics), surgical necrosectomy is performed. Dr. Manmohan Suman carefully removes all dead and infected tissue while preserving viable pancreas, followed by placement of large drainage tubes for continuous lavage. The step-up approach — starting with percutaneous drainage and escalating to surgery only when needed — has significantly improved survival rates.

Our fully equipped ICU with 24/7 anaesthesia support makes Sarvada Hospital one of the few centres in Patna capable of managing severe necrotizing pancreatitis. For emergency pancreatic care, call 7079001600.`,
        indications: ['Infected pancreatic necrosis', 'Sepsis from severe pancreatitis'],
        benefits: ['Controls severe abdominal infection', 'Life-saving critical care'],
        preparation: ['Contrast CT scan', 'Organ support stabilization'],
        steps: [
          { step: '01', title: 'Resuscitation', desc: 'Maintain hydration and respiratory/renal function.' },
          { step: '02', title: 'Necrosectomy', desc: 'Remove dead tissue and place large flushing drains.' },
        ],
        faqs: [],
      },
    ],
  },

  // ── 12. Fissure Laser Surgery ───────────────────────
  {
    name: 'Fissure Laser Surgery',
    slug: 'fissure-laser-surgery',
    icon: '⚡',
    category: 'Surgery',
    available: 'OPD Hours',
    description: 'Minimally invasive, painless laser procedures for anal fissure, alongside advanced surgeries for hepatic infections like liver abscesses and hydatid disease.',
    longDescription: `We provide state-of-the-art laser treatment for chronic anal fissures, offering a bloodless and virtually painless alternative to traditional surgery. In addition, this department covers the surgical management of complex liver abscesses and hydatid cysts of the liver, utilizing both percutaneous catheter drainage and laparoscopic cyst excision techniques.`,
    features: ['Laser Fissurectomy', 'Painless LIS', 'Liver Abscess Drainage', 'Hydatid Cyst Excision'],
    costEstimate: '₹20,000 – ₹1,20,000',
    recoveryTime: '1 – 7 days',
    order: 12,
    isNew: true,
    treatments: [
      {
        name: 'Fissure Laser Surgery',
        slug: 'fissure-laser-surgery-treatment',
        cost: '₹25,000 – ₹50,000',
        duration: '20–30 min',
        recovery: '1–2 days',
        description: 'Painless laser vaporization of sentinel pile and sphincterotomy to heal anal tears quickly without open wounds.',
        longDescription: `Fissure Laser Surgery (लेजर से फिशर का इलाज) at Sarvada Hospital is the most advanced, painless method for treating chronic anal fissures. Dr. Manmohan Suman uses precision laser energy to vaporise the sentinel skin tag, relax the internal sphincter muscle, and promote healing of the fissure — all without any cuts, stitches, or open wounds.

This procedure is ideal for patients who are anxious about traditional surgery or have a low pain threshold. The laser fiber is applied directly to the fissure area under short general or spinal anaesthesia. The controlled thermal energy seals nerve endings and blood vessels simultaneously, resulting in virtually no bleeding and minimal post-operative pain.

The entire procedure takes just 20–30 minutes, and patients can return home the same day. Recovery is remarkably fast — most patients resume normal bowel movements within 24–48 hours with minimal discomfort. There are no open wounds to care for, reducing the risk of infection and the need for frequent dressings.

Sarvada Hospital is one of the few centres in Patna offering advanced laser treatment for anal fissures. Patients from across Bihar — including Patna, Gaya, Nalanda, Muzaffarpur, and Bhagalpur — choose laser fissure surgery for its painless, quick-recovery approach. Consult Dr. Manmohan Suman today. Call 7079001600.`,
        indications: ['Chronic anal fissure', 'Intense spasm', 'Fear of pain after bowel movement'],
        benefits: ['No cuts, no blood', 'Return home same day', 'Instant relief from sphincter spasm'],
        preparation: ['Enema morning of surgery'],
        steps: [
          { step: '01', title: 'Laser Application', desc: 'Laser fiber vaporizes the fissure edges and relaxes the muscle fibers.' },
        ],
        faqs: [],
      },
      {
        name: 'Liver Abscess Surgery',
        slug: 'liver-abscess-surgery-new',
        cost: '₹20,000 – ₹70,000',
        duration: '45–90 min',
        recovery: '5–10 days',
        description: 'Surgical or laparoscopic drainage of large, complicated liver abscesses (pus collections) that fail needle aspiration.',
        longDescription: `Liver Abscess Surgery (लिवर फोड़े का ऑपरेशन) at Sarvada Hospital provides definitive surgical treatment for large, complicated liver abscesses that fail to respond to percutaneous needle aspiration or pigtail catheter drainage. Dr. Manmohan Suman performs both open and laparoscopic surgical drainage to ensure complete evacuation of the abscess cavity.

Large liver abscesses (>5 cm), multiloculated collections, thick walled abscesses with solid debris, and cases with impending rupture into the chest or abdominal cavity require surgical intervention. The laparoscopic approach allows excellent visualization and thorough drainage with the benefits of minimal invasiveness — less pain, smaller scars, and faster recovery.

Liver abscesses are particularly common in Bihar and eastern India due to the prevalence of amoebic dysentery and enteric infections. Prompt treatment is critical to prevent life-threatening complications including rupture, septicemia, and respiratory compromise. Our hospital provides emergency evaluation, ultrasound-guided diagnosis, and same-day surgical intervention when needed.

For liver abscess treatment in Patna, Bihar, consult Dr. Manmohan Suman at Sarvada Hospital, Sri Krishna Nagar Kankarbagh. Call 7079001600 for emergency and OPD appointments.`,
        indications: ['Large abscess >5 cm with risk of rupture', 'Failed percutaneous pigtail drainage'],
        benefits: ['Complete evacuation of pus', 'Prevents life-threatening rupture into lung or abdomen'],
        preparation: ['Ultrasound / CT Abdomen', 'LFT & PT/INR'],
        steps: [
          { step: '01', title: 'Access', desc: 'Laparoscopic entry over the liver surface.' },
          { step: '02', title: 'Evacuation', desc: 'Drain the abscess cavity and place wide-bore drains.' },
        ],
        faqs: [],
      },
      {
        name: 'Hydatid cyst of Liver',
        slug: 'hydatid-cyst-liver',
        cost: '₹40,000 – ₹90,000',
        duration: '90–150 min',
        recovery: '7–12 days',
        description: 'Surgical excision or marsupialization of parasitic hydatid cysts in the liver using strict scolicidal agents to prevent recurrence.',
        longDescription: `Hydatid Cyst of Liver surgery (लिवर हाइडैटिड सिस्ट का ऑपरेशन) at Sarvada Hospital is performed by Dr. Manmohan Suman for patients with Echinococcus granulosus parasitic cysts in the liver. This complex surgery requires meticulous technique using scolicidal agents to prevent spillage and recurrence.

Hydatid disease is caused by the tapeworm Echinococcus, transmitted through contact with infected dogs or contaminated food/water. The liver is the most common site of cyst formation. While small, asymptomatic cysts can be managed with Albendazole medication, large or complicated cysts require surgical excision.

The surgical approach involves careful isolation of the cyst with hypertonic saline-soaked packs to prevent spillage, aspiration of cyst fluid, injection of scolicidal agent, and then excision of the germinal membrane and cyst wall. Care is taken to avoid anaphylactic reactions that can occur from cyst fluid spillage. Pre-operative Albendazole therapy is given for 2–4 weeks to reduce cyst viability.

For hydatid cyst treatment and liver surgery in Patna, Bihar, trust Dr. Manmohan Suman's expertise at Sarvada Hospital. Contact us at 7079001600.`,
        indications: ['Hepatic Hydatid Cyst (Echinococcus)'],
        benefits: ['Complete removal of parasite', 'Prevents anaphylactic shock from rupture'],
        preparation: ['Echinococcus serology', 'CT Scan Abdomen', 'Albendazole therapy'],
        steps: [
          { step: '01', title: 'Protection', desc: 'Surround the area with hypertonic saline soaked packs.' },
          { step: '02', title: 'Aspiration', desc: 'Aspire cyst fluid, inject scolicidal agent, then excise the cyst wall.' },
        ],
        faqs: [],
      },
    ],
  },

  // ── 13. Gall bladder stone ──────────────────────────
  {
    name: 'Gall bladder stone',
    slug: 'gall-bladder-stone',
    icon: '🫘',
    category: 'Surgery',
    available: 'OPD & Emergency',
    description: 'Expert diagnostic workup and surgical removal for gallbladder stones, common bile duct stones, and gallbladder malignancies.',
    longDescription: `As a dedicated gallbladder center in Patna, we offer advanced surgical options for gallbladder stones, acute cholecystitis, and gallbladder cancer. Dr. Manmohan Suman performs laparoscopic cholecystectomy using 4-port, 3-port, and single-port techniques. We also specialize in radical gallbladder resections for early and advanced biliary cancers.`,
    features: ['Laparoscopic Cholecystectomy', 'CBD Stone Extraction', 'Radical Cholecystectomy', 'Biliary Cancer Resection'],
    costEstimate: '₹25,000 – ₹1,80,000',
    recoveryTime: '2 – 10 days',
    order: 13,
    isNew: true,
    treatments: [
      {
        name: 'Gall bladder stone Surgery',
        slug: 'gallbladder-stone-surgery-new',
        cost: '₹25,000 – ₹55,000',
        duration: '45–90 min',
        recovery: '2–4 days',
        description: 'Laparoscopic removal of the gallbladder (Cholecystectomy) containing stones to treat biliary pain and prevent complications.',
        longDescription: `Gallbladder Stone Surgery (पित्ताशय की पथरी का ऑपरेशन) at Sarvada Hospital is performed laparoscopically by Dr. Manmohan Suman, one of the most experienced laparoscopic surgeons in Patna, Bihar. The procedure removes the entire gallbladder containing stones, providing permanent relief from biliary pain and preventing serious complications like cholecystitis, pancreatitis, and jaundice.

Gallbladder stones (Cholelithiasis) are extremely common in India, particularly among women. Symptoms include recurrent right upper abdominal pain after meals, nausea, bloating, and sometimes radiating pain to the back or right shoulder. Once stones become symptomatic, surgery is the definitive treatment — gallstones do not dissolve with medicines.

Dr. Manmohan Suman performs laparoscopic cholecystectomy through 3–4 tiny incisions (each less than 1 cm). The gallbladder's blood supply (cystic artery) and bile duct (cystic duct) are identified using the Critical View of Safety technique, clipped, and divided. The gallbladder is then extracted through one of the small ports. The entire procedure takes 45–90 minutes.

Benefits include minimal scarring, significantly less pain, hospital discharge within 24 hours, and return to normal activities within a week. Patients across Bihar — from Patna, Gaya, Buxar, Arrah, Chhapra, Motihari, and beyond — trust our centre for safe, affordable gallbladder surgery. Call 7079001600 to book your consultation.`,
        indications: ['Gallbladder stones', 'Biliary colic', 'Cholecystitis'],
        benefits: ['Minimal scars', 'Rapid discharge in 24 hrs', 'Prevents CBD stone migration'],
        steps: [
          { step: '01', title: 'Procedure', desc: 'Bile duct and artery clipped; gallbladder dissected off liver bed.' },
        ],
        faqs: [],
      },
      {
        name: 'CBD stone Removal',
        slug: 'cbd-stone-removal-surgery',
        cost: '₹35,000 – ₹80,000',
        duration: '60–120 min',
        recovery: '3–5 days',
        description: 'Laparoscopic Common Bile Duct Exploration (LCBDE) or surgical extraction of stones lodged in the main bile duct.',
        longDescription: `CBD Stone Removal (पित्त नली की पथरी निकालना) at Sarvada Hospital is a specialised surgical procedure to extract stones from the Common Bile Duct (CBD). Dr. Manmohan Suman performs Laparoscopic Common Bile Duct Exploration (LCBDE) — a technique that allows simultaneous removal of CBD stones and the gallbladder in a single operation.

CBD stones can cause obstructive jaundice, cholangitis (life-threatening bile duct infection), and acute pancreatitis. They are often discovered during evaluation for gallbladder stones when liver function tests are deranged or when MRCP/ultrasound shows a dilated bile duct with stones.

During LCBDE, the common bile duct is carefully opened (choledochotomy), and stones are flushed out or retrieved using balloon catheters or wire baskets. A T-tube or primary closure of the duct is performed based on the duct size. This laparoscopic approach avoids the need for a separate ERCP procedure and offers faster recovery than open surgery.

For CBD stone treatment in Patna, consult Dr. Manmohan Suman at Sarvada Hospital. Our centre handles complex biliary stone cases with expertise refined over decades of practice. Call 7079001600.`,
        indications: ['CBD stones on USG/MRCP causing blockage'],
        benefits: ['Clears duct blockage', 'Can be done alongside gallbladder removal'],
        steps: [
          { step: '01', title: 'Ductotomy', desc: 'Open the CBD, flush/retrieve stones using baskets, place T-Tube.' },
        ],
        faqs: [],
      },
      {
        name: 'Gall bladder cancer Surgery',
        slug: 'gall-bladder-cancer-surgery-new',
        cost: '₹60,000 – ₹1,50,000',
        duration: '120–240 min',
        recovery: '7–12 days',
        description: 'Radical Cholecystectomy (excision of gallbladder with adjacent liver wedge and regional lymph nodes) for early gallbladder cancer.',
        longDescription: `Gallbladder Cancer Surgery (पित्ताशय के कैंसर की सर्जरी) at Sarvada Hospital is performed by Dr. Manmohan Suman for patients diagnosed with gallbladder carcinoma. The procedure involves Radical Cholecystectomy — removal of the gallbladder along with a wedge of adjacent liver tissue (segments IVb and V) and regional portal lymph node dissection for complete oncological clearance.

Gallbladder cancer is often discovered incidentally after routine cholecystectomy for gallstones, or presents with painless jaundice and a gallbladder mass on imaging. Early-stage cancers (T1b and T2) are potentially curable with radical surgery. The extent of resection depends on the stage of disease determined by contrast CT scan, PET-CT, and intraoperative findings.

Bihar has a relatively high incidence of gallbladder cancer, particularly among women with longstanding gallstone disease. Early detection through timely surgery for symptomatic gallstones can help identify cancers at an earlier, more treatable stage. At our centre, all cholecystectomy specimens are sent for histopathological examination to rule out incidental carcinoma.

For gallbladder cancer evaluation and surgery in Patna, consult Dr. Manmohan Suman at Sri Krishna Nagar Kankarbagh. Call 7079001600.`,
        indications: ['Gallbladder carcinoma'],
        benefits: ['Potential for curative oncological clearance'],
        steps: [
          { step: '01', title: 'Resection', desc: 'Remove gallbladder, segment IVb/V of liver, and portal lymph nodes.' },
        ],
        faqs: [],
      },
      {
        name: 'Advanced gall bladder cancer Care',
        slug: 'advanced-gall-bladder-cancer',
        cost: '₹40,000 – ₹1,80,000',
        duration: 'Palliative / Resection',
        recovery: 'Varies',
        description: 'Surgical bypass, stenting, or palliative debulking to relieve obstructive jaundice and pain in late-stage gallbladder cancer.',
        longDescription: `Advanced Gallbladder Cancer Care at Sarvada Hospital provides palliative surgical and endoscopic interventions for patients with late-stage, inoperable gallbladder cancer. Dr. Manmohan Suman focuses on relieving obstructive jaundice, managing pain, and improving quality of life through hepaticojejunostomy bypass surgery, ERCP biliary stenting, and supportive care.

In advanced stages, gallbladder cancer can block the bile ducts causing deep jaundice, severe itching, poor appetite, and liver dysfunction. While curative surgery may not be possible, palliative biliary drainage provides significant symptomatic relief and allows patients to receive chemotherapy.

Our comprehensive approach includes coordination with oncologists for chemotherapy planning, nutritional support, and pain management. Dr. Manmohan Suman's expertise in hepatobiliary surgery ensures that every possible intervention is offered to improve patient comfort and outcomes.

For advanced gallbladder cancer care in Patna, Bihar, consult our team at 7079001600.`,
        indications: ['Malignant biliary obstruction from advanced GB cancer'],
        benefits: ['Relieves jaundice and pain', 'Improves quality of life'],
        steps: [
          { step: '01', title: 'Palliation', desc: 'Perform hepaticojejunostomy bypass or place ERCP biliary stents.' },
        ],
        faqs: [],
      },
    ],
  },

  // ── 14. Liver ───────────────────────────────────────
  {
    name: 'Liver',
    slug: 'liver',
    icon: '🫀',
    category: 'Digestive',
    available: 'OPD Hours',
    description: 'Comprehensive medical management of viral hepatitis (Hepatitis-B and Hepatitis-C) along with basic hepatology consultations.',
    longDescription: `This department focuses on the long-term medical management and treatment of viral hepatitis (Hepatitis B and Hepatitis C), fatty liver disease, and cirrhosis. We offer viral load monitoring, antiviral therapy, lifestyle and dietary counseling, and family screening programs to prevent transmission and manage liver health comprehensively.`,
    features: ['Hepatitis-B antiviral therapy', 'Hepatitis-C direct acting antivirals', 'Liver cirrhosis management', 'LFT monitoring'],
    costEstimate: '₹1,000 – ₹30,000',
    recoveryTime: 'Medical Management',
    order: 14,
    isNew: true,
    treatments: [
      {
        name: 'Hepatitis-B Management',
        slug: 'hepatitis-b-management',
        cost: '₹1,500 – ₹5,000/month',
        duration: 'Long term medical',
        recovery: 'Ongoing control',
        description: 'Detailed counseling, viral load testing, and prescription of long-term antiviral suppressive medications (Tenofovir/Entecavir) for chronic Hepatitis B.',
        longDescription: `Hepatitis B Management (हेपेटाइटिस बी का इलाज) at Sarvada Hospital provides comprehensive, long-term antiviral therapy for patients with chronic Hepatitis B virus infection. Dr. Manmohan Suman, a liver and gastro specialist in Patna, offers expert evaluation, counselling, and treatment planning to suppress the virus and prevent liver cirrhosis and cancer.

Chronic Hepatitis B is a major health concern in Bihar and India, with millions of carriers often unaware of their infection status. The virus can silently damage the liver over years, progressing to cirrhosis and hepatocellular carcinoma (liver cancer) if left untreated. Early detection through HBsAg screening and subsequent viral load testing (HBV DNA quantitative PCR) is critical.

Treatment involves once-daily oral antiviral tablets — Tenofovir or Entecavir — which suppress viral replication to undetectable levels, halt liver damage, and significantly reduce the risk of liver cancer. Dr. Manmohan Suman provides regular monitoring of viral load, liver function tests, and ultrasound abdomen to assess treatment response and detect complications early.

Patient education about transmission prevention, family screening, Hepatitis B vaccination for close contacts, and dietary/lifestyle modifications is an integral part of our care. For Hepatitis B treatment in Patna, consult Dr. Manmohan Suman at Sri Krishna Nagar Kankarbagh. Call 7079001600.`,
        indications: ['Chronic Hepatitis B with active viral replication', 'Hepatic cirrhosis prevention'],
        benefits: ['Suppresses viral load to undetectable levels', 'Reduces risk of liver cancer'],
        preparation: ['HBV DNA Quantitative PCR', 'HBeAg, Anti-HBe, Liver panel'],
        steps: [
          { step: '01', title: 'Evaluation', desc: 'Check viral load, liver enzymes, and ultrasound liver status.' },
          { step: '02', title: 'Therapy', desc: 'Start once-daily oral antiviral tablets; monitor regularly.' },
        ],
        faqs: [],
      },
      {
        name: 'Hepatitis-C Treatment',
        slug: 'hepatitis-c-treatment',
        cost: '₹15,000 – ₹45,000 (Full Course)',
        duration: '12 weeks course',
        recovery: '95%+ cure rate',
        description: 'Curative short-course medical therapy using Direct-Acting Antivirals (DAA) (Sofosbuvir + Velpatasvir/Ledipasvir).',
        longDescription: `Hepatitis C Treatment (हेपेटाइटिस सी का इलाज) at Sarvada Hospital offers a complete cure for chronic Hepatitis C virus infection using the latest Direct-Acting Antiviral (DAA) medications. Dr. Manmohan Suman provides expert diagnosis, treatment, and follow-up care to achieve Sustained Virological Response (SVR) — meaning the virus is completely eradicated from the body.

Modern DAA therapy using Sofosbuvir combined with Velpatasvir or Ledipasvir has revolutionised Hepatitis C treatment. A simple 12-week course of daily oral tablets achieves cure rates exceeding 95% across all genotypes, with minimal side effects. This is a dramatic improvement over the older interferon-based treatments that were painful, prolonged, and had low success rates.

Before starting treatment, baseline evaluation includes HCV RNA quantitative PCR, liver function tests, complete blood count, renal function, and fibroscan/ultrasound to assess the degree of liver fibrosis. Genotype testing may be done to optimise the drug combination. Treatment is entirely outpatient — patients take one tablet daily for 12 weeks and are monitored with periodic blood tests.

Cure is confirmed by checking HCV RNA 12 weeks after completing the course (SVR12). A negative result means the virus has been permanently eliminated. Early treatment also reverses early-stage liver fibrosis and dramatically reduces the risk of developing cirrhosis and liver cancer.

For affordable, curative Hepatitis C treatment in Patna and Bihar, consult Dr. Manmohan Suman at Sarvada Hospital. Call 7079001600.`,
        indications: ['Chronic Hepatitis C virus infection'],
        benefits: ['Complete viral eradication (SVR12)', 'Reverses early liver fibrosis'],
        preparation: ['HCV RNA load', 'Genotype mapping if required'],
        steps: [
          { step: '01', title: 'Baseline', desc: 'Confirm chronic infection via quantitative PCR.' },
          { step: '02', title: 'Antiviral Course', desc: '12-week daily oral therapy.' },
          { step: '03', title: 'Verification', desc: 'Recheck viral load 12 weeks after completing course to confirm cure.' },
        ],
        faqs: [],
      },
    ],
  },

  // ── 15. ERCP — for CBD stone ────────────────────────
  {
    name: 'ERCP — for CBD stone',
    slug: 'ercp-cbd-stone',
    icon: '🩺',
    category: 'Diagnostic',
    available: 'OPD & Emergency',
    description: 'Endoscopic retrograde cholangiopancreatography (ERCP) for non-surgical extraction of bile duct stones and stenting for biliary obstructions, cancers, and infections.',
    longDescription: `Our advanced ERCP unit provides endoscopic clearance of common bile duct stones, biliary stenting for strictures and leaks, and palliative stenting for inoperable pancreatic and gallbladder cancers. It also handles medical evaluations for abdominal tuberculosis and tuberculous strictures, avoiding major open surgery for many patients.`,
    features: ['CBD Stone Extraction', 'Biliary Stenting', 'Malignant Strictures', 'Intestinal Tuberculosis Care'],
    costEstimate: '₹35,000 – ₹1,50,000',
    recoveryTime: '1 – 3 days',
    order: 15,
    isNew: true,
    treatments: [
      {
        name: 'ERCP for CBD stone Extraction',
        slug: 'ercp-cbd-stone-extraction-treatment',
        cost: '₹35,000 – ₹70,000',
        duration: '30–60 min',
        recovery: '1–2 days',
        description: 'Endoscopic side-view scoping to cannulate the ampulla, perform sphincterotomy, and pull stones out using balloon/basket.',
        longDescription: `ERCP for CBD Stone Extraction (ईआरसीपी से पित्त नली की पथरी निकालना) at Sarvada Hospital is an advanced endoscopic procedure that removes stones from the Common Bile Duct without any surgical incision. Dr. Manmohan Suman performs ERCP using a specialised side-viewing duodenoscope to access the bile duct opening (ampulla of Vater) in the duodenum.

During the procedure, the ampulla is cannulated with a fine catheter under fluoroscopic (X-ray) guidance. A sphincterotomy (small cut at the bile duct opening) is performed to widen the opening, and stones are then extracted using a balloon catheter or wire basket. The entire procedure takes 30–60 minutes under sedation and most patients can go home the next day.

ERCP is indicated for CBD stones causing obstructive jaundice, cholangitis (infected bile duct — a medical emergency), or biliary pancreatitis. It is also performed before or after laparoscopic cholecystectomy when CBD stones are identified on MRCP or intraoperative cholangiogram.

As one of the few centres in Patna offering expert ERCP services, Sarvada Hospital serves patients from across Bihar for complex biliary stone disease. Dr. Manmohan Suman's expertise ensures high stone clearance rates with minimal complications. Call 7079001600 for urgent ERCP consultation.`,
        indications: ['CBD stones', 'Cholangitis', 'Biliary colic with raised LFT'],
        benefits: ['No surgical incision', 'Rapid relief from jaundice and infection'],
        steps: [
          { step: '01', title: 'Scoping', desc: 'Pass side-view scope to duodenum; cannulate bile duct under X-ray.' },
          { step: '02', title: 'Stone Sweep', desc: 'Perform sphincterotomy; sweep duct clean.' },
        ],
        faqs: [],
      },
      {
        name: 'Jaundice / Stricture Stenting',
        slug: 'jaundice-stricture-stenting',
        cost: '₹40,000 – ₹80,000',
        duration: '30–60 min',
        recovery: '1–2 days',
        description: 'Placement of plastic or self-expanding metal stents across benign or malignant bile duct strictures.',
        longDescription: `Jaundice / Stricture Stenting at Sarvada Hospital involves endoscopic placement of biliary stents to relieve bile duct obstruction and jaundice. Dr. Manmohan Suman performs this procedure via ERCP, inserting plastic or self-expanding metal stents across narrowed (strictured) segments of the bile duct.

Biliary strictures can be caused by benign conditions (post-surgical injury, chronic pancreatitis) or malignant tumours (cholangiocarcinoma, pancreatic head cancer, gallbladder cancer). The resulting obstruction of bile flow causes progressive jaundice, itching, dark urine, and pale stools. Without drainage, biliary obstruction leads to cholangitis and liver damage.

The stenting procedure is performed under sedation with fluoroscopic guidance. A guidewire is passed across the stricture, and the appropriate stent is deployed over the wire. Plastic stents are used for benign conditions and typically need replacement every 3 months, while self-expanding metal stents (SEMS) are used for malignant strictures and provide longer patency.

For biliary stenting and jaundice management in Patna, Bihar, consult Dr. Manmohan Suman at Sarvada Hospital. Call 7079001600.`,
        indications: ['Obstructive jaundice due to biliary narrowing', 'Bile leak post-cholecystectomy'],
        benefits: ['Immediate drainage of bile', 'Relieves itching and jaundice'],
        steps: [
          { step: '01', title: 'Stent Placement', desc: 'Guide wire passed across stricture; stent deployed over the wire.' },
        ],
        faqs: [],
      },
      {
        name: 'Malignant Biliary Stricture Care',
        slug: 'malignant-stricture-care',
        cost: '₹50,000 – ₹1,20,000',
        duration: '45–90 min',
        recovery: '1–2 days',
        description: 'Endoscopic placement of Metallic Stents (SEMS) for palliation of inoperable cancers.',
        longDescription: `Malignant Biliary Stricture Care at Sarvada Hospital provides palliative biliary drainage for patients with inoperable cancers causing bile duct obstruction. Dr. Manmohan Suman performs ERCP-guided placement of Self-Expanding Metal Stents (SEMS) to restore bile flow and relieve jaundice in patients with cholangiocarcinoma, pancreatic head cancer, and advanced gallbladder cancer.

Metal stents offer several advantages over plastic stents for malignant strictures — larger internal diameter for better drainage, longer patency (6–12 months vs 3 months), and reduced need for repeat procedures. Both covered and uncovered SEMS options are available depending on the clinical scenario.

Palliative biliary drainage is a critical component of cancer care as it relieves jaundice, improves liver function, reduces itching, and enables patients to receive chemotherapy. The procedure is performed under sedation and most patients experience significant symptomatic improvement within 48 hours.

For palliative cancer care and biliary interventions in Patna, consult Dr. Manmohan Suman at Sri Krishna Nagar Kankarbagh. Call 7079001600.`,
        indications: ['Malignant strictures from Cholangiocarcinoma, Pancreatic head cancer'],
        benefits: ['Longer stent patency', 'Avoids external drainage tubes'],
        steps: [
          { step: '01', title: 'Stent Deployment', desc: 'Fully covered or uncovered metal stent placed across cancer mass.' },
        ],
        faqs: [],
      },
      {
        name: 'Pancreatic Cancer (Whipple Procedure)',
        slug: 'pancreatic-cancer-whipple',
        cost: '₹1,00,000 – ₹2,50,000',
        duration: '180–300 min',
        recovery: '10–21 days',
        description: 'Pancreaticoduodenectomy (Whipple Procedure) to remove the head of the pancreas, duodenum, gallbladder, and part of the bile duct for cancer.',
        longDescription: `The Whipple Procedure (Pancreaticoduodenectomy) is one of the most complex abdominal surgeries, performed at Sarvada Hospital by Dr. Manmohan Suman for resectable pancreatic head cancer and periampullary carcinomas. This major operation involves removal of the head of the pancreas, the duodenum, the gallbladder, the distal common bile duct, and sometimes a portion of the stomach.

The Whipple procedure is the only potentially curative surgical option for pancreatic head cancer — one of the most challenging cancers to treat. After the resection phase, a complex reconstruction is performed creating three new connections (anastomoses): pancreaticojejunostomy, hepaticojejunostomy, and gastrojejunostomy to restore the continuity of the digestive system.

This surgery requires exceptional surgical skill, experienced anaesthesia support, and intensive post-operative ICU care. Dr. Manmohan Suman's training at prestigious institutions including IGIMS Patna and Safdarjung Hospital New Delhi provides the expertise necessary for this high-complexity procedure. Our ICU facilities with 24/7 monitoring ensure safe post-operative recovery.

Pre-operative workup includes contrast-enhanced CT scan, tumour markers (CA 19-9), MRCP, and comprehensive fitness assessment. The surgery takes 3–5 hours and requires 10–21 days of hospitalisation. For pancreatic cancer evaluation and Whipple procedure in Patna, Bihar, contact us at 7079001600.`,
        indications: ['Resectable pancreatic head cancer', 'Periampullary carcinoma'],
        benefits: ['Only curative option for pancreatic head cancer'],
        steps: [
          { step: '01', title: 'Resection', desc: 'Remove duodenum, pancreatic head, gallbladder, and distal CBD.' },
          { step: '02', title: 'Reconstruction', desc: 'Anastomose pancreas, bile duct, and stomach to the jejunum.' },
        ],
        faqs: [],
      },
      {
        name: 'Advanced Ca GB (Cancer of Gallbladder) Care',
        slug: 'advanced-ca-gb-care',
        cost: '₹35,000 – ₹1,20,000',
        duration: 'Palliative',
        recovery: '1–3 days',
        description: 'Endoscopic stenting (ERCP) or bypass surgery to treat biliary obstruction in late-stage gallbladder cancer.',
        longDescription: `Advanced Gallbladder Cancer (Ca GB) Care at Sarvada Hospital provides palliative interventions for patients with late-stage, inoperable gallbladder carcinoma. Dr. Manmohan Suman offers ERCP biliary stenting and surgical hepaticojejunostomy bypass to relieve obstructive jaundice and improve quality of life.

Advanced gallbladder cancer often presents with progressive jaundice, weight loss, and abdominal pain due to tumour invasion of the bile ducts and surrounding structures. While curative surgery may not be feasible, palliative biliary drainage provides significant symptomatic relief and enables patients to pursue chemotherapy.

Our approach includes multidisciplinary evaluation, nutritional support, pain management, and coordination with oncology services. Dr. Manmohan Suman's expertise in hepatobiliary surgery ensures optimal palliative outcomes for these challenging cases.

For advanced gallbladder cancer care in Patna and Bihar, consult our team at 7079001600, Anand palace, Bypass Rd, changer, Kankarbagh, Patna 800020.`,
        indications: ['Jaundice in advanced gallbladder cancer'],
        benefits: ['Palliative jaundice relief', 'Improves comfort levels'],
        steps: [
          { step: '01', title: 'Intervention', desc: 'Deploy biliary stent to clear obstruction.' },
        ],
        faqs: [],
      },
      {
        name: 'Koch\'s Abdomen & TB of Intestine',
        slug: 'kochs-abdomen-tb-intestine',
        cost: '₹5,000 – ₹20,000',
        duration: 'Medical Course',
        recovery: '6 months medical',
        description: 'Diagnosis and medical antitubercular therapy (ATT) for abdominal tuberculosis involving the lymph nodes or intestines.',
        longDescription: `Koch's Abdomen and Intestinal Tuberculosis Treatment (पेट की टीबी का इलाज) at Sarvada Hospital provides expert diagnosis and management of abdominal tuberculosis — a condition particularly prevalent in Bihar and eastern India. Dr. Manmohan Suman, a senior gastro surgeon in Patna, evaluates patients with suspected abdominal TB through comprehensive diagnostic workup including colonoscopic biopsy, ascitic fluid analysis (ADA/PCR), and contrast CT scan.

Abdominal TB can affect the intestines (most commonly the ileocaecal region), peritoneum (tuberculous ascites), mesenteric lymph nodes, liver, and spleen. Symptoms include chronic abdominal pain, diarrhoea alternating with constipation, weight loss, low-grade fever, and abdominal distension from ascites. Intestinal TB can cause strictures leading to subacute intestinal obstruction.

Once diagnosed, treatment involves standard antitubercular therapy (ATT) — a 4-drug regimen (Isoniazid, Rifampicin, Pyrazinamide, Ethambutol) for 2 months followed by 2 drugs for 4–7 months. Most patients respond excellently to medical treatment, and surgery is reserved only for complications like perforation, stricture causing complete obstruction, or diagnostic uncertainty.

Dr. Manmohan Suman's combined expertise in gastroenterology and surgery ensures accurate diagnosis and seamless transition to surgical management if needed. For abdominal TB evaluation in Patna, call 7079001600.`,
        indications: ['Intestinal tuberculosis', 'Tuberculous ascites', 'Ileocecal strictures due to TB'],
        benefits: ['Curative medical treatment', 'Resolves subacute bowel obstruction without major surgery'],
        preparation: ['Colonoscopic biopsy', 'Ascitic fluid ADA/PCR', 'Contrast CT scan'],
        steps: [
          { step: '01', title: 'Diagnosis', desc: 'Confirm via biopsies showing caseating granulomas.' },
          { step: '02', title: 'ATT Therapy', desc: 'Standard 4-drug antitubercular regimen for 6-9 months.' },
        ],
        faqs: [],
      },
    ],
  },

  // ── 16. Stomach cancer ──────────────────────────────
  {
    name: 'Stomach cancer',
    slug: 'stomach-cancer',
    icon: '🫁',
    category: 'Surgery',
    available: 'OPD Hours',
    description: 'Advanced surgical resections for stomach malignancies, combined with laparoscopic interventions for female health conditions like ovarian tumors and cysts.',
    longDescription: `We specialize in radical gastrectomy (partial or total) for gastric cancers, combined with D2 lymph node dissection for optimal oncological outcomes. This department also offers advanced laparoscopic gynaecological oncology services, including keyhole removal of complex ovarian cysts and surgical management of ovarian cancers.`,
    features: ['Radical Gastrectomy', 'Laparoscopic Ovarian Cystectomy', 'Ovarian Cancer Staging'],
    costEstimate: '₹35,000 – ₹1,80,000',
    recoveryTime: '3 – 14 days',
    order: 16,
    isNew: true,
    treatments: [
      {
        name: 'Stomach cancer Surgery (Radical Gastrectomy)',
        slug: 'stomach-cancer-surgery-new',
        cost: '₹80,000 – ₹1,80,000',
        duration: '120–240 min',
        recovery: '7–14 days',
        description: 'Surgical excision of all or part of the stomach (Total or Subtotal Gastrectomy) along with D2 lymph node clearance for gastric adenocarcinoma.',
        longDescription: `Stomach Cancer Surgery — Radical Gastrectomy (पेट के कैंसर की सर्जरी) at Sarvada Hospital is performed by Dr. Manmohan Suman for patients diagnosed with gastric adenocarcinoma and gastroesophageal junction tumours. The procedure involves surgical removal of all or part of the stomach along with systematic D2 lymph node dissection for optimal oncological outcomes.

Stomach cancer is a significant health burden in India, often presenting at an advanced stage due to late diagnosis. Common symptoms include persistent indigestion, early satiety, unintentional weight loss, vomiting, black stools (melena), and upper abdominal pain. Endoscopic biopsy followed by contrast CT scan staging determines the extent of disease and surgical planning.

For cancers in the lower stomach, Subtotal (Distal) Gastrectomy preserves the upper portion of the stomach. For tumours in the upper stomach or body, Total Gastrectomy with Roux-en-Y esophagojejunostomy is performed. D2 lymphadenectomy (systematic removal of perigastric and celiac axis lymph nodes) is standard practice for accurate staging and improved survival.

Dr. Manmohan Suman's extensive surgical training ensures meticulous technique for these complex operations. Our ICU facilities provide comprehensive post-operative monitoring. For stomach cancer surgery in Patna, Bihar, call 7079001600.`,
        indications: ['Gastric cancer', 'Gastroesophageal junction tumors'],
        benefits: ['Oncological clearance of gastric tumor', 'Improves survival'],
        steps: [
          { step: '01', title: 'Resection', desc: 'Excise stomach segment and D2 lymph node stations.' },
          { step: '02', title: 'Reconstruction', desc: 'Connect esophagus/remaining stomach to the jejunum (Roux-en-Y).' },
        ],
        faqs: [],
      },
      {
        name: 'Ovarian cyst Removal (Laparoscopy)',
        slug: 'ovarian-cyst-removal-new',
        cost: '₹30,000 – ₹65,000',
        duration: '45–90 min',
        recovery: '2–4 days',
        description: 'Minimally invasive removal of ovarian cysts (dermoid, endometrioma, simple cyst) while preserving healthy ovarian tissue.',
        longDescription: `Ovarian Cyst Removal by Laparoscopy (लैप्रोस्कोपी से ओवेरियन सिस्ट निकालना) at Sarvada Hospital is a minimally invasive surgical procedure performed by Dr. Manmohan Suman to remove ovarian cysts while preserving healthy ovarian tissue and fertility. This keyhole approach offers smaller incisions, less pain, and faster recovery compared to open surgery.

Ovarian cysts are fluid-filled sacs that develop on or within the ovaries. While many small cysts resolve on their own, large cysts (>5 cm), symptomatic cysts causing pelvic pain, and those with suspicious features on ultrasound require surgical removal. Common types include dermoid cysts, endometriomas (chocolate cysts), and cystadenomas.

The laparoscopic procedure involves 3 small incisions through which a camera and instruments are inserted. The cyst is carefully separated from the normal ovarian tissue (cystectomy), placed in an endobag, and extracted. This technique preserves maximum healthy ovarian tissue, which is crucial for women who wish to conceive in the future.

Women from Patna, Gaya, Muzaffarpur, and across Bihar trust Dr. Manmohan Suman for ovarian cyst surgery due to his expertise in laparoscopic techniques and focus on fertility preservation. For ovarian cyst evaluation and laparoscopic surgery in Patna, call 7079001600.`,
        indications: ['Large ovarian cyst >5 cm', 'Symptomatic pelvic pain'],
        benefits: ['Preserves fertility', 'Small 3 keyhole cuts', 'Discharge in 24 hours'],
        steps: [
          { step: '01', title: 'Cystectomy', desc: 'Peel cyst wall cleanly from the normal ovary; extract using endobag.' },
        ],
        faqs: [],
      },
      {
        name: 'Ovarian Cancer Surgery',
        slug: 'ovarian-cancer-surgery-new',
        cost: '₹60,000 – ₹1,50,000',
        duration: '120–210 min',
        recovery: '5–10 days',
        description: 'Staging laparotomic debulking surgery (Hysterectomy, Bilateral Salpingo-Oophorectomy, Omentectomy) for ovarian malignancies.',
        longDescription: `Ovarian Cancer Surgery (ओवेरियन कैंसर सर्जरी) at Sarvada Hospital involves comprehensive staging and debulking surgery for ovarian malignancies. Dr. Manmohan Suman performs Total Abdominal Hysterectomy with Bilateral Salpingo-Oophorectomy (TAH-BSO), Omentectomy, and peritoneal staging biopsies to achieve maximum tumour reduction.

Ovarian cancer often presents late with vague symptoms like abdominal bloating, early satiety, pelvic pain, and changes in bowel habits. By the time of diagnosis, the cancer has frequently spread within the abdominal cavity. Surgical debulking — removing as much tumour as possible — is the cornerstone of treatment and is followed by platinum-based chemotherapy.

The goal of surgery is to achieve optimal cytoreduction (minimal residual disease), which significantly improves response to chemotherapy and overall survival. Dr. Manmohan Suman's surgical expertise ensures thorough staging and maximum tumour removal with acceptable surgical morbidity.

For ovarian cancer evaluation and surgery in Patna, Bihar, consult Dr. Manmohan Suman at Sarvada Hospital, Sri Krishna Nagar Kankarbagh. Call 7079001600.`,
        indications: ['Ovarian cancer / Malignant ovarian mass'],
        benefits: ['Accurate staging', 'Reduces tumor mass before chemotherapy'],
        steps: [
          { step: '01', title: 'Debulking', desc: 'Remove uterus, ovaries, fallopian tubes, and the fatty omentum sheet.' },
        ],
        faqs: [],
      },
    ],
  },

  // ── 17. Hernia ──────────────────────────────────────
  {
    name: 'Hernia',
    slug: 'hernia',
    icon: '🛡️',
    category: 'Surgery',
    available: 'OPD Hours',
    description: 'Advanced laparoscopic and open hernia repair surgeries utilizing premium dual-sided meshes for long-term wall support.',
    longDescription: `We offer comprehensive hernia repair surgeries for all types of hernias, including inguinal (groin), umbilical (navel), incisional (prior scar), and femoral hernias. We perform both tension-free open mesh hernioplasty and advanced laparoscopic repairs (TEP/TAPP) to ensure low recurrence, minimal post-op pain, and rapid recovery.`,
    features: ['Inguinal Hernia (TAPP/TEP)', 'Umbilical Hernia Repair', 'Incisional Hernia IPOM', 'Recurrent Hernia Specialist'],
    costEstimate: '₹25,000 – ₹1,00,000',
    recoveryTime: '3 – 7 days',
    order: 17,
    isNew: true,
    treatments: [
      {
        name: 'Incisional Hernia Repair',
        slug: 'incisional-hernia-repair-new',
        cost: '₹40,000 – ₹90,000',
        duration: '60–120 min',
        recovery: '3–7 days',
        description: 'Laparoscopic (IPOM) or open sublay repair of hernias arising at previous surgical scar sites.',
        longDescription: `Incisional Hernia Repair (इंसिजनल हर्निया का ऑपरेशन) at Sarvada Hospital involves laparoscopic (IPOM — Intraperitoneal Onlay Mesh) or open sublay mesh repair for hernias developing at previous surgical incision sites. Dr. Manmohan Suman, a hernia surgery specialist in Patna, uses premium composite meshes for durable, long-lasting repair with low recurrence rates.

Incisional hernias occur when the abdominal wall fails to heal properly after a previous surgery, creating a defect through which abdominal contents can bulge. They are particularly common after midline laparotomies, emergency surgeries, and in patients with wound infections, obesity, or diabetes. Without repair, incisional hernias progressively enlarge and carry the risk of bowel obstruction and strangulation.

The laparoscopic IPOM technique involves placing a large composite mesh on the inner surface of the abdominal wall, covering the hernia defect with wide overlap. This approach offers smaller incisions, less wound complications, and faster recovery compared to open repair. For very large defects, open sublay repair with component separation may be preferred.

Patients from across Patna, Bihar, and eastern India choose our centre for hernia surgery due to Dr. Manmohan Suman's expertise and use of high-quality international-grade meshes. Call 7079001600 for hernia consultation.`,
        indications: ['Incisional hernia bulging at scar'],
        benefits: ['Reinforces weakened abdominal wall mesh', 'Low recurrence rate'],
        steps: [
          { step: '01', title: 'Mesh Placement', desc: 'Reduce hernia contents and secure composite mesh to inner abdominal wall.' },
        ],
        faqs: [],
      },
      {
        name: 'Umbilical Hernia Repair',
        slug: 'umbilical-hernia-repair-new',
        cost: '₹25,000 – ₹60,000',
        duration: '45–90 min',
        recovery: '2–5 days',
        description: 'Laparoscopic or open repair of hernias at the navel (belly button) with prosthetic mesh placement.',
        longDescription: `Umbilical Hernia Repair (नाभि हर्निया का ऑपरेशन) at Sarvada Hospital corrects hernias at or near the belly button using laparoscopic or open mesh reinforcement. Dr. Manmohan Suman performs this common procedure with excellent cosmetic outcomes and low recurrence rates.

Umbilical hernias present as a bulge at the navel that becomes more prominent during coughing, straining, or standing. They are common in adults with obesity, pregnancy, chronic liver disease with ascites, or heavy physical labour. While small asymptomatic hernias can be monitored, hernias that are enlarging, symptomatic, or contain bowel should be surgically repaired to prevent strangulation.

The repair involves reducing the hernia contents, closing the fascial defect, and reinforcing the area with a prosthetic mesh. The laparoscopic approach offers smaller incisions, less wound pain, and preserves the natural cosmetic appearance of the navel. Most patients are discharged within 24–48 hours and resume normal activities within a week.

For umbilical hernia repair in Patna, Bihar, consult Dr. Manmohan Suman at Sarvada Hospital, Sri Krishna Nagar Kankarbagh. Call 7079001600.`,
        indications: ['Umbilical / Paraumbilical hernia'],
        benefits: ['Painless recovery', 'Restores natural cosmetic navel appearance'],
        steps: [
          { step: '01', title: 'Procedure', desc: 'Hernia sac reduced, defect closed, and mesh secured.' },
        ],
        faqs: [],
      },
      {
        name: 'Inguinal Hernia Repair',
        slug: 'inguinal-hernia-repair-new',
        cost: '₹30,000 – ₹70,000',
        duration: '60–90 min',
        recovery: '3–5 days',
        description: 'Minimally invasive keyhole repair of groin hernias (TAPP/TEP techniques) with mesh reinforcement.',
        longDescription: `Inguinal Hernia Repair (इनगुइनल हर्निया का ऑपरेशन) at Sarvada Hospital uses advanced laparoscopic techniques — TAPP (Transabdominal Preperitoneal) and TEP (Totally Extraperitoneal) — to repair groin hernias with minimal pain and rapid recovery. Dr. Manmohan Suman, one of the leading laparoscopic hernia surgeons in Patna, has performed thousands of successful inguinal hernia repairs.

Inguinal hernias are the most common type of hernia, presenting as a bulge in the groin that may extend into the scrotum. They occur when a portion of the intestine or fatty tissue protrudes through a weak spot in the inguinal canal. Inguinal hernias do not heal on their own and carry the risk of bowel obstruction and strangulation if left untreated.

The laparoscopic TEP/TAPP approach offers significant advantages over open Lichtenstein repair: smaller incisions (three 5–10mm ports), less post-operative pain, earlier return to work, lower risk of chronic groin pain, and the ability to repair bilateral hernias through the same small incisions. A large polypropylene mesh is placed behind the abdominal muscles to reinforce the inguinal floor.

Patients from Patna, Bihar, Jharkhand, and eastern UP seek inguinal hernia repair at our centre due to Dr. Manmohan Suman's expertise in laparoscopic techniques and use of premium surgical meshes. For hernia evaluation and surgery, call 7079001600 or visit Anand palace, Bypass Rd, changer, Kankarbagh, Patna 800020.`,
        indications: ['Inguinal hernia groin bulge (single/bilateral)'],
        benefits: ['Very small cuts', 'Both sides can be fixed simultaneously', 'Back to work in a week'],
        steps: [
          { step: '01', title: 'TEP/TAPP', desc: 'Enter extraperitoneal space, reduce sac, and cover defect with large mesh.' },
        ],
        faqs: [],
      },
    ],
  },


  {
    name: 'Pulmonology',
    slug: 'pulmonology',
    icon: '🫁',
    category: 'Medicine',
    available: 'OPD Hours',
    description: 'Comprehensive diagnosis and treatment of lung diseases, respiratory disorders, asthma, COPD, and tuberculosis.',
    longDescription: 'The Pulmonology department at Sarvada Hospital offers expert care for conditions affecting the respiratory system. Led by experienced chest specialists, we diagnose and treat lung infections, chronic obstructive pulmonary disease (COPD), bronchial asthma, pleural effusion, and tuberculosis. Equipped with advanced diagnostics and respiratory support, we ensure patients receive personalized care for breathing difficulties and lung health.',
    features: ['Asthma & Allergy Management', 'COPD Care', 'Tuberculosis Treatment', 'Lung Infection Therapy', 'Nebulisation Support'],
    costEstimate: '₹1,000 – ₹25,000',
    recoveryTime: 'Varies by condition',
    order: 18,
    isNew: true,
    treatments: [
      {
        name: 'Asthma & COPD Consultation',
        slug: 'asthma-copd-consultation',
        cost: '₹1,000 – ₹5,000',
        duration: '15-30 min',
        recovery: 'Ongoing',
        description: 'Expert evaluation, lung function assessment, and inhaler/nebulisation therapy planning.',
        longDescription: 'Pulmonary consultation involves assessment of respiratory symptoms, prescribing appropriate drug therapies, inhalers, or nebulisation, and offering lifestyle guidance for managing chronic lung conditions.',
        indications: ['Asthma', 'COPD', 'Shortness of breath'],
        benefits: ['Improved lung function', 'Better symptoms control'],
        steps: [
          { step: '01', title: 'Consultation', desc: 'Physician reviews clinical history and tests.' }
        ],
        faqs: []
      },
      {
        name: 'Tuberculosis (TB) Management',
        slug: 'tuberculosis-tb-management',
        cost: '₹2,000 – ₹15,000',
        duration: 'Varies',
        recovery: 'Ongoing',
        description: 'Definitive diagnosis and long-term anti-tubercular therapy (ATT) monitoring.',
        longDescription: 'Comprehensive monitoring and adjustment of anti-tubercular drug regimens to ensure complete healing from pulmonary and extrapulmonary tuberculosis.',
        indications: ['Confirmed tuberculosis infection'],
        benefits: ['Complete cure', 'Prevents transmission'],
        steps: [
          { step: '01', title: 'Diagnosis', desc: 'Sputum test and chest X-rays to confirm TB.' }
        ],
        faqs: []
      }
    ]
  },
  {
    name: 'Trauma Care',
    slug: 'trauma-care',
    icon: '🚨',
    category: 'Emergency',
    available: '24 Hours',
    description: 'Round-the-clock emergency medical response, critical trauma resuscitation, and advanced accident care.',
    longDescription: 'Sarvada Hospital provides 24/7 dedicated Trauma Care services to handle medical and surgical emergencies, head injuries, poly-trauma, and severe accidents. Our trauma unit is staffed with emergency physicians, orthopedic surgeons, neurosurgeons, and general surgeons, supported by advanced ICU, ICCU, and immediate operating room readiness.',
    features: ['24/7 Emergency ICU', 'Accident & Poly-Trauma Care', 'Head Injury Resuscitation', 'Immediate Surgical Intervention'],
    costEstimate: 'Varies by severity',
    recoveryTime: 'Varies by condition',
    order: 19,
    isNew: true,
    treatments: [
      {
        name: 'Emergency Resuscitation & Stabilisation',
        slug: 'emergency-resuscitation-stabilisation',
        cost: '₹5,000 – ₹50,000',
        duration: 'Immediate',
        recovery: 'Varies',
        description: 'Immediate airway management, fluid resuscitation, and critical stabilization for trauma patients.',
        longDescription: 'Immediate intervention by trauma specialists to secure airway, control bleeding, manage fluid balance, and stabilise vital parameters in critical accident cases.',
        indications: ['Severe accidents', 'Poly-trauma', 'Hypovolemic shock'],
        benefits: ['Life-saving stabilization', 'Prepares for emergency surgery'],
        steps: [
          { step: '01', title: 'Triage', desc: 'Assess vitals and establish immediate emergency access.' }
        ],
        faqs: []
      },
      {
        name: 'Fracture & Poly-trauma Surgery',
        slug: 'fracture-polytrauma-surgery',
        cost: '₹30,000 – ₹1,80,000',
        duration: '1-3 hrs',
        recovery: '4-12 weeks',
        description: 'Urgent fixation of fractures, internal bleeding control, and multi-specialty trauma operations.',
        longDescription: 'Surgical management of complex fractures, internal organ lacerations, and head injuries in accident victims by specialized surgeons.',
        indications: ['Multiple fractures', 'Internal hemorrhages', 'Severe abdominal trauma'],
        benefits: ['Restores bone alignment', 'Prevents permanent disability'],
        steps: [
          { step: '01', title: 'Surgical Planning', desc: 'Urgent CT and X-rays to locate injuries.' }
        ],
        faqs: []
      }
    ]
  },
  {
    name: 'Day Care',
    slug: 'day-care',
    icon: '🏥',
    category: 'Services',
    available: 'Day Hours',
    description: 'Same-day medical procedures and surgical interventions that do not require an overnight stay.',
    longDescription: 'The Day Care unit at Sarvada Hospital is designed for patients undergoing minor surgeries, diagnostic endoscopic procedures, short-duration chemotherapy, blood transfusions, or day-long observation. With a dedicated day care ward and recovery lounge, patients receive efficient care and can return home same day.',
    features: ['Minor Surgeries', 'Day-care Observation', 'IV Infusions & Transfusions', 'Rapid Recovery Ward'],
    costEstimate: '₹5,000 – ₹30,000',
    recoveryTime: 'Same day',
    order: 20,
    isNew: true,
    treatments: [
      {
        name: 'Minor Surgical Procedures',
        slug: 'minor-surgical-procedures',
        cost: '₹5,000 – ₹20,000',
        duration: '15-45 min',
        recovery: '1-3 days',
        description: 'Excision of skin cysts, lipomas, abscess incision & drainage, and minor wound debridements.',
        longDescription: 'Outpatient surgical interventions performed under local anaesthesia with minimal downtime.',
        indications: ['Lipomas', 'Sebaceous cysts', 'Abscesses', 'Minor wounds'],
        benefits: ['Same-day discharge', 'Local anesthesia', 'Low cost'],
        steps: [
          { step: '01', title: 'Procedure', desc: 'Minor excision performed in the day-care OT.' }
        ],
        faqs: []
      },
      {
        name: 'Day-care Observation & Therapy',
        slug: 'day-care-observation-therapy',
        cost: '₹2,000 – ₹10,000',
        duration: '2-6 hours',
        recovery: 'Same day',
        description: 'Short-stay observation, blood transfusions, or high-dose intravenous drug infusions.',
        longDescription: 'Administration of therapeutic treatments (IV medications, blood transfusions) followed by short observation in the recovery ward.',
        indications: ['Anemia', 'Dehydration', 'IV drug therapy'],
        benefits: ['No overnight hospitalization fee', 'Professional medical supervision'],
        steps: [
          { step: '01', title: 'Infusion', desc: 'IV therapy or transfusion administered under supervision.' }
        ],
        faqs: []
      }
    ]
  },
  {
    name: 'Burn Care',
    slug: 'burn-care',
    icon: '🔥',
    category: 'Emergency',
    available: '24 Hours',
    description: 'Specialized burn care unit for dressing, cleaning, infection control, and skin reconstruction for burn injuries.',
    longDescription: 'Sarvada Hospital features a dedicated Burn Care Unit equipped with infection-controlled rooms to treat various degrees of thermal, chemical, and electrical burn injuries. Guided by plastic surgeons and general surgeons, we manage burn dressings, skin grafting, contracture releases, and systemic resuscitation for burn patients.',
    features: ['Specialised Burn Dressings', 'Resuscitation & Fluid Therapy', 'Infection Control Rooms', 'Plastic Surgery & Grafting'],
    costEstimate: '₹15,000 – ₹2,50,000',
    recoveryTime: '7 – 30 days',
    order: 21,
    isNew: true,
    treatments: [
      {
        name: 'Burn Dressing & Debridement',
        slug: 'burn-dressing-debridement',
        cost: '₹5,000 – ₹25,000',
        duration: '30-60 min',
        recovery: 'Ongoing',
        description: 'Meticulous cleaning, removal of dead tissue, and application of specialized antimicrobial burn dressings.',
        longDescription: 'Pain-managed cleaning and dressing of burn wounds using advanced silver-based and collagen dressings to promote healing and prevent infection.',
        indications: ['First, second, or third-degree burns'],
        benefits: ['Minimizes infection risk', 'Reduces scarring and pain'],
        steps: [
          { step: '01', title: 'Cleaning', desc: 'Burn wound cleaned and debrided under sterile conditions.' }
        ],
        faqs: []
      },
      {
        name: 'Skin Grafting & Contracture Release',
        slug: 'skin-grafting-contracture-release',
        cost: '₹20,000 – ₹1,50,000',
        duration: '1-3 hrs',
        recovery: '2-4 weeks',
        description: 'Surgical skin grafting for deep burns and correction of post-burn contractures to restore movement.',
        longDescription: 'Plastic surgery intervention to cover deep burn wounds using healthy skin grafts and reconstructive release of post-burn scars.',
        indications: ['Deep third-degree burns', 'Joint contractures'],
        benefits: ['Restores skin cover', 'Improves mobility'],
        steps: [
          { step: '01', title: 'Grafting', desc: 'Harvest skin graft and secure to the prepared burn wound bed.' }
        ],
        faqs: []
      }
    ]
  },
]

export default laproStoneSpecialities
