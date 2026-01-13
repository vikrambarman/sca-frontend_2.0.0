import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

const AdminLogin = () => {
    const navigate = useNavigate()
    const [form, setForm] = useState({ username: '', password: '' })

    const handleChange = e => {
        setForm({ ...form, [e.target.name]: e.target.value })
    }

    const handleSubmit = async e => {
        e.preventDefault()
        try {
            const res = await axios.post(
                'http://localhost:5000/api/admin/login',
                form
            )

            localStorage.setItem('adminToken', res.data.token)
            navigate('/admin/dashboard')
        } catch {
            alert('Invalid credentials')
        }
    }

    return (
        <div className="container py-5">
            <div className="row justify-content-center">
                <div className="col-md-4">
                    <div className="card shadow-sm">
                        <div className="card-body">
                            <h5 className="fw-bold mb-4 text-center">
                                Admin Login
                            </h5>

                            <form onSubmit={handleSubmit}>
                                <input
                                    name="username"
                                    className="form-control mb-3"
                                    placeholder="Username"
                                    onChange={handleChange}
                                    required
                                />
                                <input
                                    name="password"
                                    type="password"
                                    className="form-control mb-3"
                                    placeholder="Password"
                                    onChange={handleChange}
                                    required
                                />
                                <button className="btn btn-dark w-100">
                                    Login
                                </button>
                            </form>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AdminLogin
