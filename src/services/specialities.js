// ─────────────────────────────────────────────────────────────
// services/specialities.js
// Firestore CRUD for the `specialities` collection.
// Specialities represent hospital departments (e.g. Cardiology).
// Each has a slug for URL routing and an `order` for display sequence.
// ─────────────────────────────────────────────────────────────

import {
  collection, addDoc, getDocs, doc, getDoc, updateDoc, deleteDoc,
  query, orderBy, where, limit, serverTimestamp, writeBatch,
} from 'firebase/firestore'
import { db } from '../firebase/config'

const COL = 'specialities'

// Bulk update display order using a Firestore batch
export async function updateSpecialitiesOrder(specs) {
  const batch = writeBatch(db)
  specs.forEach((spec, index) => {
    const docRef = doc(db, COL, spec.id)
    batch.update(docRef, { order: index + 1 })
  })
  return batch.commit()
}

// Fetch all specialities sorted by their display order
export async function getSpecialities() {
  const q = query(collection(db, COL), orderBy('order'))
  const snap = await getDocs(q)
  return snap.docs.map((d) => ({ ...d.data(), id: d.id }))
}

// Fetch a single speciality by Firestore document ID
export async function getSpecialityById(id) {
  const snap = await getDoc(doc(db, COL, id))
  if (!snap.exists()) return null
  return { ...snap.data(), id: snap.id }
}

// Fetch a single speciality by its URL slug (used in ServiceDetail page)
export async function getSpecialityBySlug(slug) {
  const q = query(collection(db, COL), where('slug', '==', slug), limit(1))
  const snap = await getDocs(q)
  if (snap.empty) return null
  return { ...snap.docs[0].data(), id: snap.docs[0].id }
}

// Add a new speciality/department
export async function addSpeciality(data) {
  return addDoc(collection(db, COL), { ...data, createdAt: serverTimestamp() })
}

// Update an existing speciality
export async function updateSpeciality(id, data) {
  return updateDoc(doc(db, COL, id), { ...data, updatedAt: serverTimestamp() })
}

// Delete a speciality (does not cascade-delete linked doctors or treatments)
export async function deleteSpeciality(id) {
  return deleteDoc(doc(db, COL, id))
}
