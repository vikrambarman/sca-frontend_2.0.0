import { useState } from 'react'
import axios from 'axios'
import { useNavigate, Link } from 'react-router-dom'
import PageHeader from '../components/common/PageHeader'

const StudentLogin = () => {
    const navigate = useNavigate()

    const [form, setForm] = useState({
        rollNumber: '',
        mobile: ''
    })

    const handleChange = e => {
        setForm({ ...form, [e.target.name]: e.target.value })
    }

    const handleSubmit = async e => {
        e.preventDefault()

        try {
            const res = await axios.post(
                'http://localhost:5000/api/students/login',
                form
            )

            localStorage.setItem('studentToken', res.data.token)
            localStorage.setItem(
                'studentInfo',
                JSON.stringify(res.data.student)
            )

            navigate('/student/dashboard')
        } catch {
            alert('Invalid roll number or registered mobile number')
        }
    }

    return (
        <>
            <PageHeader
                title="Student Login"
                subtitle="Access your dashboard, courses and certificates"
            />

            <section className="py-5">
                <div className="container">
                    <div className="row justify-content-center">

                        <div className="col-md-5 col-lg-4">
                            <div className="card shadow-sm border-0">
                                <div className="card-body p-4">

                                    <h5 className="fw-bold text-center mb-2">
                                        Student Portal Login
                                    </h5>

                                    <p className="text-muted small text-center mb-4">
                                        Login using your roll number and registered mobile number
                                    </p>

                                    <form onSubmit={handleSubmit}>

                                        <div className="mb-3">
                                            <label className="form-label">
                                                Roll Number
                                            </label>
                                            <input
                                                type="text"
                                                name="rollNumber"
                                                className="form-control"
                                                placeholder="Enter your roll number"
                                                onChange={handleChange}
                                                required
                                            />
                                        </div>

                                        <div className="mb-4">
                                            <label className="form-label">
                                                Registered Mobile Number
                                            </label>
                                            <input
                                                type="tel"
                                                name="mobile"
                                                className="form-control"
                                                placeholder="Enter registered mobile number"
                                                onChange={handleChange}
                                                required
                                            />
                                        </div>

                                        <button
                                            type="submit"
                                            className="btn btn-primary w-100"
                                        >
                                            Login to Dashboard
                                        </button>

                                    </form>

                                    <div className="text-center mt-4 small text-muted">
                                        <p className="mb-1">
                                            Facing issues logging in?
                                        </p>
                                        <Link to="/contact">
                                            Contact institute support
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

export default StudentLogin
