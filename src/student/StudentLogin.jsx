import { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

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
            alert('Invalid roll number or mobile')
        }
    }

    return (
        <div className="container py-5">
            <div className="row justify-content-center">
                <div className="col-md-4">
                    <div className="card shadow-sm">
                        <div className="card-body">
                            <h5 className="fw-bold mb-4 text-center">
                                Student Login
                            </h5>

                            <form onSubmit={handleSubmit}>
                                <input
                                    name="rollNumber"
                                    className="form-control mb-3"
                                    placeholder="Roll Number"
                                    onChange={handleChange}
                                    required
                                />

                                <input
                                    name="mobile"
                                    className="form-control mb-3"
                                    placeholder="Registered Mobile"
                                    onChange={handleChange}
                                    required
                                />

                                <button className="btn btn-primary w-100">
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

export default StudentLogin
