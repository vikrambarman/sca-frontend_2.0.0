import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import api from '../services/api'

const StudentNotes = () => {
    const [notes, setNotes] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        api.get('/notes/my-notes')
            .then(res => setNotes(res.data))
            .finally(() => setLoading(false))
    }, [])

    return (
        <div className="container py-4">
            <h4 className="mb-3">My Notes</h4>

            {loading && <p>Loading notes...</p>}

            {!loading && notes.length === 0 && (
                <div className="alert alert-info">
                    No notes available yet.
                </div>
            )}

            <div className="row">
                {notes.map(note => (
                    <div key={note._id} className="col-md-4 mb-3">
                        <div className="card h-100 shadow-sm">
                            <div className="card-body">
                                <h6>{note.title}</h6>
                                <span className="badge bg-secondary mb-2">
                                    {note.type.toUpperCase()}
                                </span>

                                <div className="mt-3">
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
                    </div>
                ))}
            </div>
        </div>
    )
}

export default StudentNotes
