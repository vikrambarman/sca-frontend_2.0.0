import { NavLink, useNavigate } from 'react-router-dom'

const AdminSidebar = () => {
    const navigate = useNavigate()

    const logout = () => {
        localStorage.removeItem('adminToken')
        navigate('/admin/login')
    }

    return (
        <div className="border-end p-3" style={{ height: '100%' }}>
            <h6 className="fw-bold mb-4">Admin Panel</h6>

            <ul className="nav flex-column gap-2">

                {/* DASHBOARD */}
                <li className="nav-item">
                    <NavLink to="/admin/dashboard" className="nav-link">
                        Dashboard
                    </NavLink>
                </li>

                {/* ================= STUDENTS ================= */}
                <li className="nav-item mt-2">
                    <span className="text-muted small fw-semibold">
                        STUDENT MANAGEMENT
                    </span>
                </li>

                <li className="nav-item">
                    <NavLink to="/admin/students" className="nav-link">
                        All Students
                    </NavLink>
                </li>

                <li className="nav-item ms-3">
                    <NavLink to="/admin/students/add" className="nav-link">
                        Add Student
                    </NavLink>
                </li>

                {/* ================= COURSES ================= */}
                <li className="nav-item mt-3">
                    <span className="text-muted small fw-semibold">
                        COURSES
                    </span>
                </li>

                <li className="nav-item">
                    <NavLink to="/admin/courses" className="nav-link">
                        Manage Courses
                    </NavLink>
                </li>

                <li className="nav-item ms-3">
                    <NavLink to="/admin/courses/add" className="nav-link">
                        Add Course
                    </NavLink>
                </li>

                {/* ================= ACADEMIC ================= */}
                <li className="nav-item mt-3">
                    <span className="text-muted small fw-semibold">
                        ACADEMIC
                    </span>
                </li>

                <li className="nav-item">
                    <NavLink to="/admin/notes" className="nav-link">
                        Notes
                    </NavLink>
                </li>

                {/* ================= CERTIFICATES ================= */}
                <li className="nav-item mt-3">
                    <span className="text-muted small fw-semibold">
                        CERTIFICATES
                    </span>
                </li>

                <li className="nav-item">
                    <NavLink to="/admin/certificates" className="nav-link">
                        Verification & Mapping
                    </NavLink>
                </li>

                {/* LOGOUT */}
                <li className="nav-item mt-4">
                    <button
                        className="btn btn-sm btn-outline-danger w-100"
                        onClick={logout}
                    >
                        Logout
                    </button>
                </li>

            </ul>
        </div>
    )
}

export default AdminSidebar
