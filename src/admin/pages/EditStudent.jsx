import { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import api from '../../services/api'

const EditStudent = () => {
    const { id } = useParams()
    const navigate = useNavigate()
    const [loading, setLoading] = useState(true)
    const [courses, setCourses] = useState([])

    const [form, setForm] = useState({
        name: '',
        fatherName: '',
        mobile: '',
        email: '',
        course: '',
        status: 'active',
        authorities: {
            drishti: {
                registered: false,
                registrationNumber: '',
                certificateGenerated: false,
                certificateNumber: '',
                distributed: false
            },
            gsdm: {
                registered: false,
                registrationNumber: '',
                certificateGenerated: false,
                certificateNumber: '',
                distributed: false
            },
            nsdc: { available: false },
            digilocker: { available: false }
        }
    })

    useEffect(() => {
        fetchStudent()
        fetchCourses()
    }, [])

    const fetchStudent = async () => {
        const res = await api.get(
            `/students/${id}`,
            {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('adminToken')}`
                }
            }
        )
        setForm(res.data)
        setLoading(false)
    }

    const fetchCourses = async () => {
        try {
            const res = await api.get('/courses?admin=true', {
                headers: { Authorization: `Bearer ${localStorage.getItem('adminToken')}` }
            })
            setCourses(res.data)
        } catch (err) {
            console.error('Failed to fetch courses', err)
        }
    }

    const handleSubmit = async e => {
        e.preventDefault()

        await api.put(
            `/students/${id}`,
            form,
            {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('adminToken')}`
                }
            }
        )

        navigate('/admin/students')
    }

    const handleDelete = async () => {
        const confirmDelete = window.confirm(
            'Are you sure you want to permanently delete this student?'
        )

        if (!confirmDelete) return

        try {
            await api.delete(`/students/${id}`, {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('adminToken')}`
                }
            })

            navigate('/admin/students')
        } catch (err) {
            console.error('Failed to delete student', err)
            alert('Failed to delete student. Please try again.')
        }
    }


    if (loading) return <p>Loading student details...</p>

    return (
        <>
            <h4 className="fw-bold mb-3">Edit Student</h4>

            <form onSubmit={handleSubmit} className="row g-3">

                {/* BASIC */}
                <div className="col-md-6">
                    <label className="form-label">Student Name</label>
                    <input
                        className="form-control"
                        value={form.name}
                        onChange={e => setForm({ ...form, name: e.target.value })}
                        required
                    />
                </div>

                <div className="col-md-6">
                    <label className="form-label">Father Name</label>
                    <input
                        className="form-control"
                        value={form.fatherName || ''}
                        onChange={e =>
                            setForm({ ...form, fatherName: e.target.value })
                        }
                    />
                </div>

                <div className="col-md-6">
                    <label className="form-label">Mobile</label>
                    <input
                        className="form-control"
                        value={form.mobile}
                        onChange={e =>
                            setForm({ ...form, mobile: e.target.value })
                        }
                        required
                    />
                </div>

                <div className="col-md-6">
                    <label className="form-label">Course</label>
                    <select
                        className="form-select"
                        value={form.course}
                        onChange={e => setForm({ ...form, course: e.target.value })}
                        required
                    >
                        <option value="">Select Course</option>
                        {courses.map(c => (
                            <option key={c._id} value={c.name}>
                                {c.name}
                            </option>
                        ))}
                    </select>
                </div>

                {/* DRISHTI */}
                <div className="col-md-6">
                    <label className="form-label">Drishti Registration No</label>
                    <input
                        className="form-control"
                        value={form.authorities.drishti.registrationNumber}
                        onChange={e =>
                            setForm({
                                ...form,
                                authorities: {
                                    ...form.authorities,
                                    drishti: {
                                        ...form.authorities.drishti,
                                        registered: !!e.target.value,
                                        registrationNumber: e.target.value
                                    }
                                }
                            })
                        }
                    />

                    {/* CERT GENERATED */}
                    <div className="form-check mt-2">
                        <input
                            type="checkbox"
                            className="form-check-input"
                            checked={form.authorities.drishti.certificateGenerated}
                            onChange={e =>
                                setForm({
                                    ...form,
                                    authorities: {
                                        ...form.authorities,
                                        drishti: {
                                            ...form.authorities.drishti,
                                            certificateGenerated: e.target.checked
                                        }
                                    }
                                })
                            }
                        />
                        <label className="form-check-label">
                            Drishti Certificate Generated
                        </label>
                    </div>

                    {/* CERT NUMBER */}
                    {form.authorities.drishti.certificateGenerated && (
                        <input
                            className="form-control mt-2"
                            placeholder="Drishti Certificate Number"
                            value={form.authorities.drishti.certificateNumber}
                            onChange={e =>
                                setForm({
                                    ...form,
                                    authorities: {
                                        ...form.authorities,
                                        drishti: {
                                            ...form.authorities.drishti,
                                            certificateNumber: e.target.value
                                        }
                                    }
                                })
                            }
                        />
                    )}

                    {/* DISTRIBUTED */}
                    {form.authorities.drishti.certificateGenerated && (
                        <div className="form-check mt-2">
                            <input
                                type="checkbox"
                                className="form-check-input"
                                checked={form.authorities.drishti.certificateDistributed}
                                onChange={e =>
                                    setForm({
                                        ...form,
                                        authorities: {
                                            ...form.authorities,
                                            drishti: {
                                                ...form.authorities.drishti,
                                                certificateDistributed: e.target.checked
                                            }
                                        }
                                    })
                                }
                            />
                            <label className="form-check-label">
                                Certificate Distributed
                            </label>
                        </div>
                    )}
                </div>

                {/* GSDM */}
                <div className="col-md-6">
                    <label className="form-label">GSDM Registration No</label>
                    <input
                        className="form-control"
                        value={form.authorities.gsdm.registrationNumber}
                        onChange={e =>
                            setForm({
                                ...form,
                                authorities: {
                                    ...form.authorities,
                                    gsdm: {
                                        ...form.authorities.gsdm,
                                        registered: !!e.target.value,
                                        registrationNumber: e.target.value
                                    }
                                }
                            })
                        }
                    />

                    <div className="form-check mt-2">
                        <input
                            type="checkbox"
                            className="form-check-input"
                            checked={form.authorities.gsdm.certificateGenerated}
                            onChange={e =>
                                setForm({
                                    ...form,
                                    authorities: {
                                        ...form.authorities,
                                        gsdm: {
                                            ...form.authorities.gsdm,
                                            certificateGenerated: e.target.checked
                                        }
                                    }
                                })
                            }
                        />
                        <label className="form-check-label">
                            GSDM Certificate Generated
                        </label>
                    </div>

                    {form.authorities.gsdm.certificateGenerated && (
                        <input
                            className="form-control mt-2"
                            placeholder="GSDM Certificate Number"
                            value={form.authorities.gsdm.certificateNumber}
                            onChange={e =>
                                setForm({
                                    ...form,
                                    authorities: {
                                        ...form.authorities,
                                        gsdm: {
                                            ...form.authorities.gsdm,
                                            certificateNumber: e.target.value
                                        }
                                    }
                                })
                            }
                        />
                    )}

                    {form.authorities.gsdm.certificateGenerated && (
                        <div className="form-check mt-2">
                            <input
                                type="checkbox"
                                className="form-check-input"
                                checked={form.authorities.gsdm.certificateDistributed}
                                onChange={e =>
                                    setForm({
                                        ...form,
                                        authorities: {
                                            ...form.authorities,
                                            gsdm: {
                                                ...form.authorities.gsdm,
                                                certificateDistributed: e.target.checked
                                            }
                                        }
                                    })
                                }
                            />
                            <label className="form-check-label">
                                Certificate Distributed
                            </label>
                        </div>
                    )}
                </div>


                {/* NSDC */}
                <div className="col-md-6">
                    <div className="form-check mt-3">
                        <input
                            type="checkbox"
                            className="form-check-input"
                            disabled={!form.authorities.gsdm.certificateGenerated}
                            checked={form.authorities.nsdc.available}
                            onChange={e =>
                                setForm({
                                    ...form,
                                    authorities: {
                                        ...form.authorities,
                                        nsdc: {
                                            ...form.authorities.nsdc,
                                            available: e.target.checked
                                        }
                                    }
                                })
                            }
                        />
                        <label className="form-check-label">
                            NSDC Eligible
                        </label>
                    </div>
                </div>

                {/* DIGILOCKER */}
                <div className="col-md-6">
                    <div className="form-check mt-3">
                        <input
                            type="checkbox"
                            className="form-check-input"
                            disabled={!form.authorities.gsdm.certificateGenerated}
                            checked={form.authorities.digilocker.available}
                            onChange={e =>
                                setForm({
                                    ...form,
                                    authorities: {
                                        ...form.authorities,
                                        digilocker: {
                                            ...form.authorities.digilocker,
                                            available: e.target.checked
                                        }
                                    }
                                })
                            }
                        />
                        <label className="form-check-label">
                            Available on DigiLocker
                        </label>
                    </div>
                </div>

                <div className="col-12 mt-4 d-flex justify-content-between">
                    <button type="submit" className="btn btn-primary">
                        Update Student
                    </button>

                    <button
                        type="button"
                        className="btn btn-danger"
                        onClick={handleDelete}
                    >
                        Delete Student
                    </button>
                </div>

            </form>
        </>
    )
}

export default EditStudent
