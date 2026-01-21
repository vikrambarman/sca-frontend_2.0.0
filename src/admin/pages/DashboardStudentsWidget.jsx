import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import api from '../../services/api'

const DashboardStudentsWidget = () => {
    const [students, setStudents] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        fetchRecentStudents()
    }, [])

    const fetchRecentStudents = async () => {
        try {
            const res = await api.get(
                '/students?limit=5&sort=desc',
                {
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem('adminToken')}`
                    }
                }
            )
            setStudents(res.data)
        } catch (err) {
            console.error(err)
        } finally {
            setLoading(false)
        }
    }

    return (
        <div className="card shadow-sm">
            <div className="card-body">

                <div className="d-flex justify-content-between align-items-center mb-3">
                    <h6 className="fw-semibold mb-0">Recent Students</h6>
                    <Link
                        to="/admin/students"
                        className="btn btn-sm btn-outline-primary"
                    >
                        View All
                    </Link>
                </div>

                {loading && <p className="small text-muted">Loading...</p>}

                {!loading && students.length === 0 && (
                    <p className="small text-muted mb-0">No students found</p>
                )}

                {!loading && students.length > 0 && (
                    <div className="table-responsive">
                        <table className="table table-sm align-middle mb-0">
                            <thead className="table-light">
                                <tr>
                                    <th>Name</th>
                                    <th>Course</th>
                                    <th>Status</th>
                                </tr>
                            </thead>
                            <tbody>
                                {students.map(s => (
                                    <tr key={s._id}>
                                        <td className="fw-semibold">{s.name}</td>
                                        <td>{s.course}</td>
                                        <td>
                                            {s.authorities?.gsdm?.certificateGenerated ||
                                                s.authorities?.drishti?.certificateGenerated ? (
                                                <span className="badge bg-success">
                                                    Issued
                                                </span>
                                            ) : (
                                                <span className="badge bg-warning text-dark">
                                                    Pending
                                                </span>
                                            )}
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                )}

            </div>
        </div>
    )
}

export default DashboardStudentsWidget
