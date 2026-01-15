import { useState } from 'react'
import api from '../../services/api'

const AddCourse = () => {
    const [form, setForm] = useState({
        name: '',
        slug: '',
        level: '',
        authority: '',
        duration: '',
        eligibility: '',
        certificate: '',
        verification: '',
        syllabus: []
    })

    const addModule = () => {
        setForm({
            ...form,
            syllabus: [...form.syllabus, { module: '', topics: [''] }]
        })
    }

    const submitHandler = async (e) => {
        e.preventDefault()
        await api.post('/courses', form)
        alert('Course Added')
    }

    return (
        <form onSubmit={submitHandler}>
            <h4>Add Course</h4>

            <input
                className="form-control mb-2"
                placeholder="Course Name"
                onChange={e => setForm({ ...form, name: e.target.value })}
            />

            <input
                className="form-control mb-2"
                placeholder="Slug (unique)"
                onChange={e => setForm({ ...form, slug: e.target.value })}
            />

            <input
                className="form-control mb-2"
                placeholder="Level"
                onChange={e => setForm({ ...form, level: e.target.value })}
            />

            <button type="button" className="btn btn-secondary btn-sm" onClick={addModule}>
                Add Syllabus Module
            </button>

            <button className="btn btn-primary btn-sm mt-3">
                Save Course
            </button>
        </form>
    )
}

export default AddCourse
