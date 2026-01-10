import { NavLink } from 'react-router-dom'

const ProfessionalCourses = () => {
    return (
        <section className="py-5 bg-light">
            <div className="container">

                <div className="mb-4">
                    <h3 className="fw-bold">Professional Computer Courses</h3>
                    <p className="text-muted">
                        Industry-focused courses designed for jobs and self-employment.
                    </p>
                </div>

                <div className="row g-4">

                    {[
                        { name: 'Tally with GST', code: 'tally' },
                        { name: 'CCC', code: 'ccc' },
                        { name: 'Typing (Hindi / English)', code: 'typing' }
                    ].map((course) => (
                        <div className="col-md-4" key={course.code}>
                            <div className="card h-100 shadow-sm">
                                <div className="card-body">
                                    <h5 className="card-title">{course.name}</h5>
                                    <p className="card-text small text-muted">
                                        Practical course focused on office and business skills.
                                    </p>
                                </div>
                                <div className="card-footer bg-white border-0">
                                    <NavLink
                                        to={`/courses/${course.code}`}
                                        className="btn btn-sm btn-outline-primary w-100"
                                    >
                                        View Details
                                    </NavLink>
                                </div>
                            </div>
                        </div>
                    ))}

                </div>
            </div>
        </section>
    )
}

export default ProfessionalCourses
