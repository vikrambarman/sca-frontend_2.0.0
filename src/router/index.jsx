import { createBrowserRouter } from 'react-router-dom'
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
import StudentLogin from '../pages/student/StudentLogin'
// import StudentDashboard from '../pages/student/StudentDashboard'


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
            { path: 'student/login', element: <StudentLogin/>},
            // { path: 'student/dashboard', element: <StudentDashboard/>},
        ]
    }
])

export default router
