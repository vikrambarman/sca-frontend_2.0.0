import { useEffect, useState } from 'react'
import axios from 'axios'

const Students = () => {
    const [students, setStudents] = useState([])

    useEffect(() => {
        fetchStudents()
    }, [])

    const fetchStudents = async () => {
        const res = await axios.get(
            'http://localhost:5000/api/students',
            {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('adminToken')}`
                }
            }
        )
        setStudents(res.data)
    }

    return (
        <>
            <h4 className="fw-bold mb-3">Students</h4>

            <table className="table table-bordered">
                <thead className="table-light">
                    <tr>
                        <th>Name</th>
                        <th>Course</th>
                        <th>Mobile</th>
                        <th>Status</th>
                        <th>Reg No</th>
                        <th>Roll No</th>
                    </tr>
                </thead>
                <tbody>
                    {students.map((s) => (
                        <tr key={s._id}>
                            <td>{s.name}</td>
                            <td>{s.course}</td>
                            <td>{s.mobile}</td>
                            <td>
                                <span className="badge bg-success">
                                    {s.status}
                                </span>
                            </td>
                            <td>{s.registrationNumber}</td>
                            <td>{s.rollNumber}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    )
}

export default Students
