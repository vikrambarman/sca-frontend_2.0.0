import { NavLink } from 'react-router-dom'

const CourseLevel = ({ data }) => {
    return (
        <section className="py-5">
            <div className="container">

                <div className="mb-4">
                    <h3 className="fw-bold">{data.level}</h3>
                    <p className="text-muted mb-1">
                        <strong>Authority:</strong> {data.authority}
                    </p>
                    <p className="small text-muted">
                        <strong>Verification:</strong> {data.verify}
                    </p>
                </div>

                <div className="row g-4">
                    {data.courses.map(course => (
                        <div className="col-md-4" key={course.slug}>
                            <div className="card h-100 shadow-sm">
                                <div className="card-body">
                                    <h6 className="fw-bold">{course.name}</h6>
                                </div>
                                <div className="card-footer bg-white border-0">
                                    <NavLink
                                        to={`/courses/${course.slug}`}
                                        className="btn btn-sm btn-primary w-100"
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

export default CourseLevel
