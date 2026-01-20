import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import api from '../../services/api'
import { COURSE_LEVELS } from '../../data/courseMeta'
import SyllabusEditor from '../components/SyllabusEditor'

const AddEditCourse = () => {
    const { id } = useParams()
    const navigate = useNavigate()
    const isEdit = Boolean(id)

    const [loading, setLoading] = useState(false)
    const [submitting, setSubmitting] = useState(false)

    const [form, setForm] = useState({
        name: '',
        slug: '',
        level: '',
        authority: '',
        verification: '',
        duration: '',
        eligibility: '',
        certificate: '',
        syllabus: []
    })

    /* 🔹 Fetch course data in edit mode */
    useEffect(() => {
        if (!isEdit) return

        setLoading(true)
        api.get(`/courses/admin/${id}`)
            .then(res => {
                setForm(res.data)
            })
            .catch(() => {
                alert('Failed to load course data')
                navigate('/admin/courses')
            })
            .finally(() => setLoading(false))
    }, [id, isEdit, navigate])

    /* 🔹 Auto-fill authority & verification on level change */
    const handleLevelChange = (levelName) => {
        const meta = COURSE_LEVELS.find(l => l.level === levelName)

        if (!meta) return

        setForm(prev => ({
            ...prev,
            level: meta.level,
            authority: meta.authority,
            verification: meta.verification
        }))
    }

    /* 🔹 Add / Update course */
    const submitHandler = async (e) => {
        e.preventDefault()
        setSubmitting(true)

        try {
            if (isEdit) {
                await api.put(`/courses/${id}`, form)
                alert('Course updated successfully')
            } else {
                await api.post('/courses', form)
                alert('Course added successfully')
            }

            navigate('/admin/courses')
        } catch (error) {
            alert('Failed to save course')
            console.error(error)
        } finally {
            setSubmitting(false)
        }
    }

    /* 🔥 Delete course */
    const deleteHandler = async () => {
        const confirmed = window.confirm(
            'Are you sure you want to delete this course? This action cannot be undone.'
        )

        if (!confirmed) return

        try {
            await api.delete(`/courses/${id}`)
            alert('Course deleted successfully')
            navigate('/admin/courses')
        } catch (error) {
            alert('Failed to delete course')
            console.error(error)
        }
    }

    if (loading) return <p>Loading course data...</p>

    return (
        <form onSubmit={submitHandler}>
            <h4 className="mb-3">
                {isEdit ? 'Edit Course' : 'Add Course'}
            </h4>

            <input
                className="form-control mb-2"
                placeholder="Course Name"
                value={form.name}
                required
                onChange={e => setForm({ ...form, name: e.target.value })}
            />

            <input
                className="form-control mb-2"
                placeholder="Unique Slug"
                value={form.slug}
                required
                disabled={isEdit}
                onChange={e => setForm({ ...form, slug: e.target.value })}
            />

            <select
                className="form-select mb-2"
                value={form.level}
                required
                onChange={e => handleLevelChange(e.target.value)}
            >
                <option value="">Select Course Level</option>
                {COURSE_LEVELS.map(level => (
                    <option key={level.level} value={level.level}>
                        {level.level}
                    </option>
                ))}
            </select>

            <input
                className="form-control mb-2"
                placeholder="Duration (e.g. 6 Months)"
                value={form.duration}
                onChange={e => setForm({ ...form, duration: e.target.value })}
            />

            <input
                className="form-control mb-2"
                placeholder="Eligibility"
                value={form.eligibility}
                onChange={e => setForm({ ...form, eligibility: e.target.value })}
            />

            {/* 🔥 Syllabus Editor */}
            <SyllabusEditor
                syllabus={form.syllabus}
                setSyllabus={(syllabus) =>
                    setForm({ ...form, syllabus })
                }
            />

            {/* ACTION BUTTONS */}
            <div className="mt-4 d-flex gap-2">
                <button
                    className="btn btn-primary btn-sm"
                    disabled={submitting}
                >
                    {isEdit ? 'Update Course' : 'Save Course'}
                </button>

                {isEdit && (
                    <button
                        type="button"
                        onClick={deleteHandler}
                        className="btn btn-outline-danger btn-sm"
                        disabled={submitting}
                    >
                        Delete Course
                    </button>
                )}
            </div>
        </form>
    )
}

export default AddEditCourse
