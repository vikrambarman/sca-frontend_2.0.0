const StudentDashboard = () => {
    const student = JSON.parse(
        localStorage.getItem('studentInfo')
    )

    return (
        <>
            <h4 className="fw-bold mb-1">
                Welcome, {student.name}
            </h4>

            <p className="text-muted mb-4">
                Roll No: <b>{student.rollNumber}</b> | Course: <b>{student.course}</b>
            </p>

            <div className="row g-4">
                <div className="col-md-4">
                    <div className="card shadow-sm h-100">
                        <div className="card-body">
                            <h6 className="fw-bold">My Notes</h6>
                            <p className="text-muted mb-2">
                                Course-wise study material
                            </p>
                            <a
                                href="/student/notes"
                                className="btn btn-sm btn-primary"
                            >
                                View Notes
                            </a>
                        </div>
                    </div>
                </div>

                <div className="col-md-4">
                    <div className="card shadow-sm h-100">
                        <div className="card-body">
                            <h6 className="fw-bold">Certificates</h6>
                            <p className="text-muted mb-2">
                                Download issued certificates
                            </p>
                            <a
                                href="/student/certificates"
                                className="btn btn-sm btn-outline-primary"
                            >
                                View Certificates
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default StudentDashboard
