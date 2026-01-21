import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import api from '../../services/api'

const AddStudent = () => {
    const navigate = useNavigate()
    const [form, setForm] = useState({
        name: '',
        fatherName: '',
        mobile: '',
        email: '',
        course: ''
    })
    const [courses, setCourses] = useState([])

    // Fetch courses from backend
    useEffect(() => {
        const fetchCourses = async () => {
            try {
                const res = await api.get('/courses?admin=true', {
                    headers: { Authorization: `Bearer ${localStorage.getItem('adminToken')}` }
                })
                setCourses(res.data)
            } catch (err) {
                console.error('Failed to fetch courses', err)
            }
        }
        fetchCourses()
    }, [])

    const handleChange = e => {
        setForm({ ...form, [e.target.name]: e.target.value })
    }

    const handleSubmit = async e => {
        e.preventDefault()

        try {
            await api.post('/students',
                form,
                {
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem('adminToken')}`
                    }
                }
            )
            navigate('/admin/students')
        } catch (err) {
            console.error('Failed to add student', err)
        }
    }

    return (
        <>
            <h4 className="fw-bold mb-3">Add Student</h4>

            <form onSubmit={handleSubmit} className="row g-3">
                <div className="col-md-6">
                    <input
                        name="name"
                        className="form-control"
                        placeholder="Student Name"
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="col-md-6">
                    <input
                        name="fatherName"
                        className="form-control"
                        placeholder="Father Name"
                        onChange={handleChange}
                    />
                </div>
                <div className="col-md-6">
                    <input
                        name="mobile"
                        className="form-control"
                        placeholder="Mobile"
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="col-md-6">
                    <input
                        name="email"
                        className="form-control"
                        placeholder="Email"
                        onChange={handleChange}
                    />
                </div>
                <div className="col-md-6">
                    <select
                        name="course"
                        className="form-select"
                        onChange={handleChange}
                        required
                        value={form.course}
                    >
                        <option value="">Select Course</option>
                        {courses.map(c => (
                            <option key={c._id} value={c.name}>
                                {c.name}
                            </option>
                        ))}
                    </select>
                </div>
                <div className="col-12">
                    <button className="btn btn-primary">Save Student</button>
                </div>
            </form>
        </>
    )
}

export default AddStudent
