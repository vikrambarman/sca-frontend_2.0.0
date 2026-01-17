import { Outlet, Navigate } from 'react-router-dom'
import AdminSidebar from '../admin/components/AdminSidebar'
import AdminHeader from '../admin/components/AdminHeader'

const AdminLayout = () => {
    const token = localStorage.getItem('adminToken')

    if (!token) {
        return <Navigate to="/admin/login" replace />
    }

    return (
        <div
            className="d-flex"
            style={{ height: '100vh', overflow: 'hidden' }}
        >
            {/* SIDEBAR */}
            <div
                style={{
                    width: '240px',
                    minWidth: '240px',
                    maxWidth: '240px',
                    flexShrink: 0,
                    height: '100vh',
                    overflowY: 'auto',
                    borderRight: '1px solid #e5e7eb'
                }}
            >
                <AdminSidebar />
            </div>

            {/* MAIN CONTENT */}
            <div
                className="flex-grow-1 d-flex flex-column"
                style={{ overflow: 'hidden' }}
            >
                <AdminHeader />

                <div className="flex-grow-1 p-4" style={{ overflowY: 'auto' }}>
                    <Outlet />
                </div>
            </div>
        </div>

    )
}

export default AdminLayout
