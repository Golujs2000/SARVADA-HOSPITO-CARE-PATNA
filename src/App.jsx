// ─────────────────────────────────────────────────────────────
// App.jsx
// Root router configuration for Sarvada Hospito Care.
// Defines all public and admin routes.
//
// Route structure:
//   /                  → Public pages wrapped in PublicLayout
//   /admin/login       → Standalone login page (no layout)
//   /admin/*           → Protected admin pages wrapped in AdminLayout
//   *                  → 404 NotFound
// ─────────────────────────────────────────────────────────────

import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { lazy, Suspense } from 'react'
import { useVisitTracker } from './hooks/useVisitTracker'

// Layout & Route Guards (Statically loaded)
import PublicLayout from './components/PublicLayout'
import ProtectedRoute from './components/ProtectedRoute'

// Premium loading skeleton for route transitions
const PageLoader = () => (
  <div className="min-h-screen flex items-center justify-center bg-slate-50">
    <div className="flex flex-col items-center gap-4">
      <div className="w-12 h-12 border-4 border-primary-200 border-t-primary-600 rounded-full animate-spin" />
      <p className="text-gray-500 font-semibold text-sm tracking-wider">Loading...</p>
    </div>
  </div>
)

// ── Lazy-loaded Public Pages ─────────────────────────────────
const Home = lazy(() => import('./pages/Home'))
const About = lazy(() => import('./pages/About'))
const Category = lazy(() => import('./pages/Category'))
const Doctors = lazy(() => import('./pages/Doctors'))
const DoctorProfile = lazy(() => import('./pages/DoctorProfile'))
const Gallery = lazy(() => import('./pages/Gallery'))
const Blog = lazy(() => import('./pages/Blog'))
const BlogPost = lazy(() => import('./pages/BlogPost'))
const Contact = lazy(() => import('./pages/Contact'))
const ServiceDetail = lazy(() => import('./pages/ServiceDetail'))
const HospitalServiceDetail = lazy(() => import('./pages/HospitalServiceDetail'))
const TreatmentDetail = lazy(() => import('./pages/TreatmentDetail'))
const BookAppointment = lazy(() => import('./pages/BookAppointment'))
const AppointmentSuccess = lazy(() => import('./pages/AppointmentSuccess'))
const PrivacyPolicy = lazy(() => import('./pages/PrivacyPolicy'))
const Terms = lazy(() => import('./pages/Terms'))
const DataDeletion = lazy(() => import('./pages/DataDeletion'))
const NotFound = lazy(() => import('./pages/NotFound'))

// ── Lazy-loaded Admin Pages ──────────────────────────────────
const AdminLayout = lazy(() => import('./components/admin/AdminLayout'))
const AdminLogin = lazy(() => import('./pages/admin/AdminLogin'))
const AdminDashboard = lazy(() => import('./pages/admin/AdminDashboard'))
const AdminAppointments = lazy(() => import('./pages/admin/AdminAppointments'))
const AdminDoctors = lazy(() => import('./pages/admin/AdminDoctors'))
const AdminBlog = lazy(() => import('./pages/admin/AdminBlog'))
const AdminGallery = lazy(() => import('./pages/admin/AdminGallery'))
const AdminMessages = lazy(() => import('./pages/admin/AdminMessages'))
const AdminStaff = lazy(() => import('./pages/admin/AdminStaff'))
const AdminCategory = lazy(() => import('./pages/admin/AdminCategory'))
const AdminTreatments = lazy(() => import('./pages/admin/AdminTreatments'))
const AdminSettings = lazy(() => import('./pages/admin/AdminSettings'))

// Inner component so useVisitTracker runs inside BrowserRouter context
function AppRoutes() {
  // Increments visit counter in Firestore once per session
  useVisitTracker()

  return (
    <Suspense fallback={<PageLoader />}>
      <Routes>
      {/* ── Public Routes (Navbar + Footer) ── */}
      <Route element={<PublicLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        {/* Replaced /services and /hospital-services with the 4 individual pages */}
        <Route path="/hospital-departments" element={<Category categoryName="Hospital Departments" title="Hospital Departments" description="Our clinical and hospital departments providing specialized medical care." />} />
        <Route path="/surgical-services" element={<Category categoryName="Surgical Services" title="Surgical Services" description="Advanced surgical treatments, laparoscopic surgery, and general surgical procedures." />} />
        <Route path="/critical-care" element={<Category categoryName="Critical & Emergency Care" title="Critical & Emergency Care" description="24/7 ICU, ICCU and emergency trauma care facilities managed by expert intensivists." />} />
        <Route path="/facilities-diagnostics" element={<Category categoryNames={["Patient Care Facilities", "Diagnostics"]} title="Facilities & Diagnostics" description="Comprehensive patient care facilities and state-of-the-art laboratory and imaging services." />} />
        <Route path="/services/:slug" element={<ServiceDetail />} />
        <Route path="/services/:slug/treatment/:treatmentSlug" element={<TreatmentDetail />} />
        {/* <Route path="/hospital-services" element={<HospitalServices />} /> */}
        <Route path="/hospital-services/:slug" element={<HospitalServiceDetail />} />
        <Route path="/doctors" element={<Doctors />} />
        <Route path="/doctors/:slug" element={<DoctorProfile />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:slug" element={<BlogPost />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/book-appointment" element={<BookAppointment />} />
        <Route path="/appointment-success" element={<AppointmentSuccess />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/data-deletion" element={<DataDeletion />} />
      </Route>

      {/* ── Admin Login (no sidebar layout) ── */}
      <Route path="/admin/login" element={<AdminLogin />} />

      {/* ── Protected Admin Routes (requires auth + staff role) ── */}
      <Route
        path="/admin"
        element={
          <ProtectedRoute>
            <AdminLayout />  {/* sidebar + header shell */}
          </ProtectedRoute>
        }
      >
        <Route index element={<AdminDashboard />} />
        <Route path="appointments" element={<AdminAppointments />} />
        <Route path="doctors" element={<AdminDoctors />} />
        <Route path="blog" element={<AdminBlog />} />
        <Route path="gallery" element={<AdminGallery />} />
        <Route path="messages" element={<AdminMessages />} />
        <Route path="staff" element={<ProtectedRoute requireAdmin><AdminStaff /></ProtectedRoute>} />
        <Route path="hospital-departments" element={<AdminCategory categoryName="Hospital Departments" title="Hospital Departments" />} />
        <Route path="surgical-services" element={<AdminCategory categoryName="Surgical Services" title="Surgical Services" />} />
        <Route path="critical-care" element={<AdminCategory categoryName="Critical & Emergency Care" title="Critical & Emergency Care" />} />
        <Route path="patient-facilities" element={<AdminCategory categoryName="Patient Care Facilities" title="Patient Care Facilities" />} />
        <Route path="diagnostics" element={<AdminCategory categoryName="Diagnostics" title="Diagnostics" />} />
        <Route path="treatments" element={<AdminTreatments />} />
        <Route path="settings" element={<ProtectedRoute requireAdmin><AdminSettings /></ProtectedRoute>} />
      </Route>

      {/* ── 404 Fallback ── */}
      <Route path="*" element={<NotFound />} />
    </Routes>
    </Suspense>
  )
}

export default function App() {
  return (
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  )
}
