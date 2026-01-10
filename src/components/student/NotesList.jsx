const notes = [
    { id: 1, title: 'Introduction to Computer', type: 'PDF' },
    { id: 2, title: 'MS Word Basics', type: 'PDF' },
    { id: 3, title: 'Excel Practice File', type: 'DOC' },
    { id: 4, title: 'Tally GST Notes', type: 'PDF' },
]

const NotesList = () => {
    return (
        <div className="card shadow-sm">
            <div className="card-body">

                <h6 className="fw-bold mb-3">
                    Course Notes
                </h6>

                <ul className="list-group list-group-flush">
                    {notes.map(note => (
                        <li
                            key={note.id}
                            className="list-group-item d-flex justify-content-between align-items-center"
                        >
                            <span>{note.title}</span>
                            <button className="btn btn-outline-primary btn-sm">
                                Download
                            </button>
                        </li>
                    ))}
                </ul>

            </div>
        </div>
    )
}

export default NotesList
