import { NavLink } from 'react-router-dom'

const CoursesPreview = () => {
  return (
    <section className="py-5">
      <div className="container">

        <div className="text-center mb-4">
          <h3 className="fw-bold">Popular Courses</h3>
          <p className="text-muted">
            Choose the right course to shape your future
          </p>
        </div>

        <div className="row g-4">

          {['DCA', 'ADCA', 'Tally', 'Typing'].map((course) => (
            <div className="col-md-3" key={course}>
              <div className="card h-100 shadow-sm">
                <div className="card-body">
                  <h5 className="card-title">{course}</h5>
                  <p className="card-text small text-muted">
                    Industry-relevant syllabus with practical training.
                  </p>
                </div>
                <div className="card-footer bg-white border-0">
                  <NavLink
                    to={`/courses/${course.toLowerCase()}`}
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

export default CoursesPreview
