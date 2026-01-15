const SyllabusEditor = ({ syllabus, setSyllabus }) => {

    const addModule = () => {
        setSyllabus([
            ...syllabus,
            { module: '', topics: [''] }
        ])
    }

    const removeModule = (index) => {
        const updated = [...syllabus]
        updated.splice(index, 1)
        setSyllabus(updated)
    }

    const updateModuleName = (index, value) => {
        const updated = [...syllabus]
        updated[index].module = value
        setSyllabus(updated)
    }

    const addTopic = (mIndex) => {
        const updated = [...syllabus]
        updated[mIndex].topics.push('')
        setSyllabus(updated)
    }

    const updateTopic = (mIndex, tIndex, value) => {
        const updated = [...syllabus]
        updated[mIndex].topics[tIndex] = value
        setSyllabus(updated)
    }

    const removeTopic = (mIndex, tIndex) => {
        const updated = [...syllabus]
        updated[mIndex].topics.splice(tIndex, 1)
        setSyllabus(updated)
    }

    return (
        <div className="mt-4">
            <h5 className="fw-bold mb-3">Course Syllabus</h5>

            {syllabus.map((mod, mIndex) => (
                <div key={mIndex} className="card mb-3">
                    <div className="card-body">

                        <div className="d-flex justify-content-between mb-2">
                            <strong>Module {mIndex + 1}</strong>
                            <button
                                type="button"
                                className="btn btn-sm btn-outline-danger"
                                onClick={() => removeModule(mIndex)}
                            >
                                Remove Module
                            </button>
                        </div>

                        <input
                            type="text"
                            className="form-control mb-3"
                            placeholder="Module Name"
                            value={mod.module}
                            onChange={(e) => updateModuleName(mIndex, e.target.value)}
                            required
                        />

                        {mod.topics.map((topic, tIndex) => (
                            <div key={tIndex} className="d-flex gap-2 mb-2">
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder={`Topic ${tIndex + 1}`}
                                    value={topic}
                                    onChange={(e) =>
                                        updateTopic(mIndex, tIndex, e.target.value)
                                    }
                                    required
                                />

                                <button
                                    type="button"
                                    className="btn btn-sm btn-outline-danger"
                                    onClick={() => removeTopic(mIndex, tIndex)}
                                >
                                    ✕
                                </button>
                            </div>
                        ))}

                        <button
                            type="button"
                            className="btn btn-sm btn-outline-primary mt-2"
                            onClick={() => addTopic(mIndex)}
                        >
                            + Add Topic
                        </button>

                    </div>
                </div>
            ))}

            <button
                type="button"
                className="btn btn-sm btn-secondary"
                onClick={addModule}
            >
                + Add Module
            </button>
        </div>
    )
}

export default SyllabusEditor
