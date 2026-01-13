const StudentNotes = () => {
    return (
        <>
            <h5 className="fw-bold mb-3">My Notes</h5>

            <table className="table table-bordered">
                <thead className="table-light">
                    <tr>
                        <th>Title</th>
                        <th>Course</th>
                        <th>Download</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Computer Fundamentals</td>
                        <td>DCA</td>
                        <td>
                            <button className="btn btn-sm btn-primary">
                                Download
                            </button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </>
    )
}

export default StudentNotes
