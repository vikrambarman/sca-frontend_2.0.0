import { NavLink } from 'react-router-dom'

const SkillCourses = () => {
    return (
        <section className="py-5">
            <div className="container">

                <div className="mb-4">
                    <h3 className="fw-bold">
                        Skill India & Diploma Courses
                    </h3>
                    <p className="text-muted">
                        Authorized by Gramin Skill Development Mission.
                        Certificates are uploaded on DigiLocker.
                    </p>
                </div>

                <div className="row g-4">

                    {[
                        { name: 'Diploma in Computer Applications', code: 'dca' },
                        { name: 'Advanced Diploma in Computer Applications', code: 'adca' },
                        { name: 'Diploma in Information Technology', code: 'dit' }
                    ].map((course) => (
                        <div className="col-md-4" key={course.code}>
                            <div className="card h-100 shadow-sm border-start border-primary border-3">
                                <div className="card-body">
                                    <h5 className="card-title">{course.name}</h5>
                                    <p className="card-text small text-muted">
                                        Government-recognized diploma course with practical training.
                                    </p>
                                </div>
                                <div className="card-footer bg-white border-0">
                                    <NavLink
                                        to={`/courses/${course.code}`}
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

export default SkillCourses
