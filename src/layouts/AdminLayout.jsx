import { Outlet, Navigate } from 'react-router-dom'
import AdminSidebar from '../admin/components/AdminSidebar'
import AdminHeader from '../admin/components/AdminHeader'


const AdminLayout = () => {
    const token = localStorage.getItem('adminToken')

    // Protect admin routes
    if (!token) {
        return <Navigate to="/admin/login" replace />
    }

    return (
        <div className="d-flex">
            <AdminSidebar />

            <div className="flex-grow-1">
                <AdminHeader />
                <div className="p-4">
                    <Outlet />
                </div>
            </div>
        </div>
    )
}

export default AdminLayout
