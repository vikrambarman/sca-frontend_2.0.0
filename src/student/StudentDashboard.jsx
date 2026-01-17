import { useEffect, useState } from 'react'
import api from '../services/api'
import { getStudent, logoutStudent } from '../utils/auth'
import { Link } from 'react-router-dom'
import CertificateVerificationGuide from './CertificateVerificationGuide'

const StudentDashboard = () => {
    const [notes, setNotes] = useState([])
    const [loading, setLoading] = useState(true)
    const student = getStudent()

    useEffect(() => {
        api.get('/notes/my-notes')
            .then(res => setNotes(res.data))
            .catch(() => logoutStudent())
            .finally(() => setLoading(false))
    }, [])

    return (
        <div className="container py-4">

            {/* Header */}
            <div className="d-flex justify-content-between align-items-center mb-4">
                <div>
                    <h4>Welcome, {student?.name}</h4>
                    <p className="text-muted mb-0">
                        Course: {student?.course}
                    </p>
                </div>

                {/* <button
                    onClick={logoutStudent}
                    className="btn btn-outline-danger btn-sm"
                >
                    Logout
                </button> */}
            </div>

            <hr />

            {/* ✅ STEP 2 ADDED HERE */}
            <CertificateVerificationGuide student={student} />

            {/* Notes Section */}
            <h5 className="mb-3">Your Notes</h5>

            {loading && <p>Loading notes...</p>}

            {!loading && notes.length === 0 && (
                <div className="alert alert-info">
                    Notes will be available soon. Please check again later.
                </div>
            )}

            <div className="row">
                {notes.map(note => (
                    <div key={note._id} className="col-md-4 mb-3">
                        <div className="card shadow-sm h-100">
                            <div className="card-body">
                                <h6>{note.title}</h6>
                                <p className="small text-muted">
                                    Type: {note.type.toUpperCase()}
                                </p>

                                {note.type === 'web' ? (
                                    <Link
                                        to={`/student/notes/${note.slug}`}
                                        className="btn btn-primary btn-sm"
                                    >
                                        Open Notes
                                    </Link>
                                ) : (
                                    <Link
                                        to={`/student/notes/pdf/${note.slug}`}
                                        className="btn btn-outline-primary btn-sm"
                                    >
                                        Download PDF
                                    </Link>
                                )}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default StudentDashboard
