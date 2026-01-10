import { NavLink } from 'react-router-dom'

const BasicCourses = () => {
    return (
        <section className="py-5">
            <div className="container">

                <div className="mb-4">
                    <h3 className="fw-bold">
                        Basic Computer Courses (Drishti Franchise)
                    </h3>
                    <p className="text-muted">
                        Foundation computer courses under Drishti Computer Education.
                    </p>
                </div>

                <div className="row g-4">

                    {[
                        { name: 'Basic Computer Course', code: 'basic-computer' },
                        { name: 'MS Office', code: 'ms-office' },
                        { name: 'Internet & Email', code: 'internet' }
                    ].map((course) => (
                        <div className="col-md-4" key={course.code}>
                            <div className="card h-100 shadow-sm border-start border-success border-3">
                                <div className="card-body">
                                    <h5 className="card-title">{course.name}</h5>
                                    <p className="card-text small text-muted">
                                        Beginner-friendly course for students and job seekers.
                                    </p>
                                </div>
                                <div className="card-footer bg-white border-0">
                                    <NavLink
                                        to={`/courses/${course.code}`}
                                        className="btn btn-sm btn-success w-100"
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

export default BasicCourses
