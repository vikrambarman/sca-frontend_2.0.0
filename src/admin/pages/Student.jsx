import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import api from '../../services/api'

const Students = () => {
    const [students, setStudents] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        fetchStudents()
    }, [])

    const fetchStudents = async () => {
        const res = await api.get(
            '/students',
            {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('adminToken')}`
                }
            }
        )
        setStudents(res.data)
        setLoading(false)
    }

    const certStatus = authority => {
        if (!authority?.registered) {
            return <span className="badge bg-secondary">Not Registered</span>
        }

        if (authority.certificateGenerated) {
            return <span className="badge bg-success">Certificate Generated</span>
        }

        return (
            <span className="badge bg-warning text-dark">
                Registered, Certificate Pending
            </span>
        )
    }

    return (
        <>
            <div className="d-flex justify-content-between align-items-center mb-3">
                <div>
                    <h4 className="fw-bold mb-0">Students</h4>
                    <p className="small text-muted mb-0">
                        Registration & certification overview
                    </p>
                </div>

                <Link
                    to="/admin/students/add"
                    className="btn btn-sm btn-primary"
                >
                    + Add Student
                </Link>
            </div>

            {loading && <p>Loading students...</p>}

            {!loading && students.length === 0 && (
                <div className="alert alert-info">No students found.</div>
            )}

            {!loading && students.length > 0 && (
                <div className="table-responsive">
                    <table className="table table-bordered table-hover align-middle">
                        <thead className="table-light">
                            <tr>
                                <th>Student</th>
                                <th>Course</th>
                                <th>Mobile</th>
                                <th>Status</th>
                                <th>Local IDs</th>
                                <th>Drishti</th>
                                <th>GSDM</th>
                                <th>NSDC</th>
                                <th>DigiLocker</th>
                                <th>Actions</th>
                            </tr>
                        </thead>

                        <tbody>
                            {students.map(s => (
                                <tr key={s._id}>
                                    <td>
                                        <div className="fw-semibold">{s.name}</div>
                                        <div className="small text-muted">
                                            {s.email || '—'}
                                        </div>
                                    </td>

                                    <td>{s.course}</td>
                                    <td>{s.mobile}</td>

                                    <td>
                                        <span
                                            className={`badge ${s.status === 'inactive'
                                                ? 'bg-secondary'
                                                : 'bg-success'
                                                }`}
                                        >
                                            {s.status}
                                        </span>
                                    </td>

                                    <td className="small">
                                        <div>Reg: {s.registrationNumber || '—'}</div>
                                        <div>Roll: {s.rollNumber || '—'}</div>
                                    </td>

                                    {/* DRISHTI */}
                                    <td>
                                        {certStatus(s.authorities?.drishti)}

                                        {s.authorities?.drishti?.registrationNumber && (
                                            <div className="small text-muted mt-1">
                                                Reg: {s.authorities.drishti.registrationNumber}
                                            </div>
                                        )}

                                        {s.authorities?.drishti?.certificateGenerated &&
                                            s.authorities?.drishti?.certificateNumber && (
                                                <div className="small text-success">
                                                    Cert: #{s.authorities.drishti.certificateNumber}
                                                </div>
                                            )}

                                        {s.authorities?.drishti?.certificateDistributed && (
                                            <span className="badge bg-info mt-1">
                                                Distributed
                                            </span>
                                        )}
                                    </td>

                                    {/* GSDM */}
                                    <td>
                                        {certStatus(s.authorities?.gsdm)}

                                        {s.authorities?.gsdm?.registrationNumber && (
                                            <div className="small text-muted mt-1">
                                                Reg: {s.authorities.gsdm.registrationNumber}
                                            </div>
                                        )}

                                        {s.authorities?.gsdm?.certificateGenerated &&
                                            s.authorities?.gsdm?.certificateNumber && (
                                                <div className="small text-success">
                                                    Cert: #{s.authorities.gsdm.certificateNumber}
                                                </div>
                                            )}

                                        {s.authorities?.gsdm?.certificateDistributed && (
                                            <span className="badge bg-info mt-1">
                                                Distributed
                                            </span>
                                        )}
                                    </td>

                                    {/* NSDC */}
                                    <td>
                                        {s.authorities?.gsdm?.certificateGenerated &&
                                            s.authorities?.nsdc?.available ? (
                                            <span className="badge bg-success">Eligible</span>
                                        ) : (
                                            <span className="badge bg-secondary">Not Eligible</span>
                                        )}
                                    </td>


                                    {/* DIGILOCKER */}
                                    <td>
                                        {s.authorities?.gsdm?.certificateGenerated &&
                                            s.authorities?.digilocker?.available ? (
                                            <span className="badge bg-success">Available</span>
                                        ) : (
                                            <span className="badge bg-secondary">Not Available</span>
                                        )}
                                    </td>


                                    <td>
                                        <Link
                                            to={`/admin/students/edit/${s._id}`}
                                            className="btn btn-sm btn-outline-primary"
                                        >
                                            Edit / Manage
                                        </Link>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            )}
        </>
    )
}

export default Students
