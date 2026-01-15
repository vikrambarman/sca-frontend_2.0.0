import { NavLink, useNavigate } from 'react-router-dom'

const AdminSidebar = () => {
    const navigate = useNavigate()

    const logout = () => {
        localStorage.removeItem('adminToken')
        navigate('/admin/login')
    }

    return (
        <div className="border-end vh-100 p-3" style={{ width: '240px' }}>
            <h6 className="fw-bold mb-4">Admin Panel</h6>

            <ul className="nav flex-column gap-2">

                <li className="nav-item">
                    <NavLink to="/admin/dashboard" className="nav-link">
                        Dashboard
                    </NavLink>
                </li>

                {/* STUDENTS */}
                <li className="nav-item">
                    <NavLink to="/admin/students" className="nav-link">
                        Students
                    </NavLink>
                </li>
                <li className="nav-item ms-3">
                    <NavLink to="/admin/students/add" className="nav-link">
                        Add Student
                    </NavLink>
                </li>

                {/* COURSES */}
                <li className="nav-item mt-2">
                    <NavLink to="/admin/courses" className="nav-link">
                        Courses
                    </NavLink>
                </li>
                <li className="nav-item ms-3">
                    <NavLink to="/admin/courses/add" className="nav-link">
                        Add Course
                    </NavLink>
                </li>

                {/* OTHER MODULES */}
                <li className="nav-item mt-2">
                    <NavLink to="/admin/notes" className="nav-link">
                        Notes
                    </NavLink>
                </li>

                <li className="nav-item">
                    <NavLink to="/admin/certificates" className="nav-link">
                        Certificates
                    </NavLink>
                </li>

                {/* LOGOUT */}
                <li className="nav-item mt-3">
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
