import { NavLink } from 'react-router-dom'

const HeroSection = () => {
  return (
    <section className="bg-light py-5">
      <div className="container">
        <div className="row align-items-center">

          {/* Text */}
          <div className="col-md-6">
            <h1 className="fw-bold mb-3">
              ISO 9001:2015 Registered Computer Training Institute
            </h1>
            <p className="text-muted mb-4">
              We are an authorized training partner of Gramin Skill Development Mission,
              delivering government-recognised Skill India certifications and real world computer skills.
            </p>

            <div className="d-flex gap-3">
              <NavLink to="/registration" className="btn btn-primary">
                Register Online
              </NavLink>
              <NavLink to="/courses" className="btn btn-outline-primary">
                View Courses
              </NavLink>
            </div>
          </div>

          {/* Hero Image */}
          <div className="col-md-6 text-center mt-4 mt-md-0">
            <img
              src="/hero-image.png"
              alt="Computer Training"
              className="img-fluid"
            />
          </div>

        </div>
      </div>
    </section>
  )
}

export default HeroSection
