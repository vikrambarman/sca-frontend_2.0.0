import { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import PageHeader from '../../components/common/PageHeader'
import api from '../../services/api'

const AdminLogin = () => {
    const navigate = useNavigate()

    const [form, setForm] = useState({
        username: '',
        password: ''
    })

    const handleChange = e => {
        setForm({ ...form, [e.target.name]: e.target.value })
    }

    const handleSubmit = async e => {
        e.preventDefault()

        try {
            const res = await api.post(
                '/admin/login',
                form
            )

            localStorage.setItem('adminToken', res.data.token)
            navigate('/admin/dashboard')
        } catch {
            alert('Invalid username or password')
        }
    }

    return (
        <>
            <PageHeader
                title="Admin Login"
                subtitle="Authorized access only"
            />

            <section className="py-5">
                <div className="container">
                    <div className="row justify-content-center">

                        <div className="col-md-5 col-lg-4">
                            <div className="card shadow-sm border-0">
                                <div className="card-body p-4">

                                    <h5 className="fw-bold text-center mb-2">
                                        Admin Portal
                                    </h5>

                                    <p className="text-muted small text-center mb-4">
                                        Please login using your admin credentials
                                    </p>

                                    <form onSubmit={handleSubmit}>

                                        <div className="mb-3">
                                            <label className="form-label">
                                                Username
                                            </label>
                                            <input
                                                type="text"
                                                name="username"
                                                className="form-control"
                                                placeholder="Enter admin username"
                                                onChange={handleChange}
                                                required
                                            />
                                        </div>

                                        <div className="mb-4">
                                            <label className="form-label">
                                                Password
                                            </label>
                                            <input
                                                type="password"
                                                name="password"
                                                className="form-control"
                                                placeholder="Enter password"
                                                onChange={handleChange}
                                                required
                                            />
                                        </div>

                                        <button
                                            type="submit"
                                            className="btn btn-dark w-100"
                                        >
                                            Login to Admin Panel
                                        </button>

                                    </form>

                                    <div className="text-center mt-4 small text-muted">
                                        <p className="mb-1">
                                            Forgot your credentials?
                                        </p>
                                        <Link to="/contact">
                                            Contact system administrator
                                        </Link>
                                    </div>

                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
        </>
    )
}

export default AdminLogin
