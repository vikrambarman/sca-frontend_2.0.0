import { createBrowserRouter } from 'react-router-dom'

// Public
import PublicLayout from '../layouts/PublicLayout'
import NotFound from '../pages/NotFound'
import Home from '../pages/Home'
import About from '../pages/About'
import Courses from '../pages/Courses'
import CourseDetails from '../pages/CourseDetails'
import Manyatain from '../pages/Manyatain'
import Gallery from '../pages/Gallery'
import Enquiry from '../pages/Enquiry'
import Registration from '../pages/Registration'
import CertificateVerify from '../pages/CertificateVerify'
import Contact from '../pages/Contact'

// Student
import StudentLogin from '../pages/student/StudentLogin'
import StudentLayout from '../layouts/StudentLayout'
import StudentDashboard from '../pages/student/StudentDashboard'
import StudentNotes from '../pages/student/StudentNotes'
import StudentCertificates from '../pages/student/StudentCertificates'

// Admin
import AdminLogin from '../admin/pages/AdminLogin'
import AdminLayout from '../layouts/AdminLayout'
import AdminDashboard from '../admin/pages/AdminDashboard'
import Students from '../admin/pages/Student'
import AddStudent from '../admin/pages/AddStudent'

const router = createBrowserRouter([
    {
        path: '/',
        element: <PublicLayout />,
        errorElement: <NotFound />,
        children: [
            { index: true, element: <Home /> },
            { path: 'about', element: <About /> },
            { path: 'courses', element: <Courses /> },
            { path: 'courses/:slug', element: <CourseDetails /> },
            { path: 'manyatain', element: <Manyatain /> },
            { path: 'gallery', element: <Gallery /> },
            { path: 'enquiry', element: <Enquiry /> },
            { path: 'registration', element: <Registration /> },
            { path: 'certificate-verify', element: <CertificateVerify /> },
            { path: 'contact', element: <Contact /> },
            { path: 'student/login', element: <StudentLogin /> },
            { path: 'admin/login', element: <AdminLogin /> },
        ]
    },

    // 🔐 Admin Section
    {
        path: '/admin',
        element: <AdminLayout />,
        children: [
            { path: 'dashboard', element: <AdminDashboard /> },
            { path: 'students', element: <Students /> },
            { path: 'students/add', element: <AddStudent /> },
        ]
    },

    // 🎓 Student Section
    {
        path: '/student',
        element: <StudentLayout />,
        children: [
            { path: 'dashboard', element: <StudentDashboard /> },
            { path: 'notes', element: <StudentNotes /> },
        ]
    }

])

export default router
