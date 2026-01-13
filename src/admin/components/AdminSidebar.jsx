import { NavLink } from 'react-router-dom'

const AdminSidebar = () => {
    return (
        <div
            className="border-end vh-100 p-3"
            style={{ width: '240px' }}
        >
            <h6 className="fw-bold mb-4">Admin Panel</h6>

            <ul className="nav flex-column gap-2">
                <li className="nav-item">
                    <NavLink to="/admin/dashboard" className="nav-link">
                        Dashboard
                    </NavLink>
                </li>
                <li className="nav-item">
                    <NavLink to="/admin/students" className="nav-link">
                        Students
                    </NavLink>
                </li>
                <li className="nav-item">
                    <NavLink to="/admin/courses" className="nav-link">
                        Courses
                    </NavLink>
                </li>
                <li className="nav-item">
                    <NavLink to="/admin/notes" className="nav-link">
                        Notes
                    </NavLink>
                </li>
                <li className="nav-item">
                    <NavLink to="/admin/certificates" className="nav-link">
                        Certificates
                    </NavLink>
                </li>
                <li className="nav-item mt-3">
                    <button
                        className="btn btn-sm btn-outline-danger w-100"
                        onClick={() => {
                            localStorage.removeItem('adminToken')
                            window.location.href = '/admin/login'
                        }}
                    >
                        Logout
                    </button>
                </li>
            </ul>
        </div>
    )
}

export default AdminSidebar
