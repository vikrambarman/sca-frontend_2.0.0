import { Outlet, Navigate, NavLink } from 'react-router-dom'

const StudentLayout = () => {
    const token = localStorage.getItem('studentToken')
    const student = JSON.parse(localStorage.getItem('studentInfo'))

    if (!token) {
        return <Navigate to="/student/login" replace />
    }

    return (
        <div>
            {/* Header */}
            <nav className="navbar navbar-light bg-white shadow-sm">
                <div className="container">
                    <span className="fw-bold">
                        Student Dashboard
                    </span>


                    <div className="d-flex align-items-center gap-3">
                        <span className="small text-muted">
                            {student.name}
                        </span>
                        <button
                            className="btn btn-sm btn-outline-danger"
                            onClick={() => {
                                localStorage.removeItem('studentToken')
                                localStorage.removeItem('studentInfo')
                                window.location.href = '/student/login'
                            }}
                        >
                            Logout
                        </button>
                    </div>
                </div>
            </nav>

            {/* Content */}
            <div className="container py-4">
                <Outlet />
            </div>
        </div>
    )
}

export default StudentLayout
