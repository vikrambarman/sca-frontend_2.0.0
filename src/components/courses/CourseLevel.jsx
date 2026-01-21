import { NavLink } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'

const CourseLevel = ({ data }) => {
    return (
        <section className="py-5 bg-light border-top">
            <Helmet>
                <title>{data.level} Courses | Shivshakti Computer Academy</title>
                <meta
                    name="description"
                    content={`${data.level} programs with government-recognized certifications. Authority: ${data.authority}. Verify certificates via ${data.verify}.`}
                />
            </Helmet>

            <div className="container">

                {/* Level Header */}
                <div className="mb-4">
                    <h3 className="fw-bold mb-1">{data.level}</h3>
                    <p className="text-muted mb-1">
                        <strong>Authority:</strong> {data.authority}
                    </p>
                    <p className="small text-muted mb-0">
                        <strong>Certificate Verification:</strong> {data.verify}
                    </p>
                </div>

                {/* Courses */}
                <div className="row g-4">
                    {data.courses.map(course => (
                        <div className="col-md-4" key={course.slug}>
                            <div className="card h-100 shadow-sm border-0 course-card">

                                <div className="card-body p-4">
                                    <h5 className="fw-bold mb-2">{course.name}</h5>
                                    <p className="small text-muted mb-0">
                                        Government recognized certification program
                                    </p>
                                </div>

                                <div className="card-footer bg-white border-0 px-4 pb-4">
                                    <NavLink
                                        to={`/courses/${course.slug}`}
                                        className="btn btn-outline-primary btn-sm w-100"
                                        aria-label={`View details of ${course.name}`}
                                    >
                                        View Course Details
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
