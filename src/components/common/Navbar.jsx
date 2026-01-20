import { NavLink } from 'react-router-dom'
import { useEffect, useState } from 'react'
import api from '../../services/api'

const Navbar = () => {
  const [courses, setCourses] = useState([])

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const res = await api.get('/courses')
        if (res.data && res.data.length > 0) {
          setCourses(res.data)
        }
      } catch (err) {
        console.warn('Failed to load courses in navbar')
      }
    }

    fetchCourses()
  }, [])

  return (
    <nav className="navbar navbar-expand-lg bg-white border-bottom sticky-top">
      <div className="container">

        {/* LOGO */}
        <NavLink
          to="/"
          className="navbar-brand d-flex align-items-center gap-2"
        >
          <img
            src="/logo.png"
            alt="Shivshakti Computer Academy"
            height="38"
          />
          <div className="lh-sm d-none d-sm-block">
            <div className="fw-bold text-dark">
              Shivshakti Computer Academy
            </div>
            <small className="text-muted">
              Authorized Skill Training Institute
            </small>
          </div>
        </NavLink>

        {/* TOGGLE */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#mainNavbar"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* MENU */}
        <div className="collapse navbar-collapse" id="mainNavbar">
          <ul className="navbar-nav mx-auto gap-lg-2">

            <li className="nav-item">
              <NavLink to="/" className="nav-link">
                Home
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink to="/about" className="nav-link">
                About
              </NavLink>
            </li>

            {/* COURSES DROPDOWN */}
            <li className="nav-item dropdown">
              <span
                className="nav-link dropdown-toggle"
                role="button"
                data-bs-toggle="dropdown"
              >
                Courses
              </span>

              <ul className="dropdown-menu shadow-sm border-0">

                <li>
                  <NavLink to="/courses" className="dropdown-item fw-semibold">
                    View All Courses
                  </NavLink>
                </li>

                <li>
                  <hr className="dropdown-divider" />
                </li>

                {courses.map(course => (
                  <li key={course.slug}>
                    <NavLink
                      to={`/courses/${course.slug}`}
                      className="dropdown-item"
                    >
                      {course.name}
                    </NavLink>
                  </li>
                ))}

                {courses.length === 0 && (
                  <li className="px-3 py-2 small text-muted">
                    Courses loading...
                  </li>
                )}
              </ul>
            </li>

            <li className="nav-item">
              <NavLink to="/accreditation" className="nav-link">
                Accreditation
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink to="/gallery" className="nav-link">
                Gallery
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink to="/certificate-verify" className="nav-link">
                Verify Certificate
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink to="/contact" className="nav-link">
                Contact
              </NavLink>
            </li>
          </ul>

          {/* RIGHT ACTIONS */}
          <div className="d-flex align-items-center gap-2">

            {/* LOGIN */}
            <div className="dropdown">
              <button
                className="btn btn-outline-secondary btn-sm dropdown-toggle"
                data-bs-toggle="dropdown"
              >
                Login
              </button>

              <ul className="dropdown-menu dropdown-menu-end shadow-sm">
                <li>
                  <NavLink
                    to="/student/login"
                    className="dropdown-item"
                  >
                    Student Login
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/admin/login"
                    className="dropdown-item"
                  >
                    Admin Login
                  </NavLink>
                </li>
              </ul>
            </div>

            {/* ENQUIRY CTA */}
            <NavLink
              to="/enquiry"
              className="btn btn-primary btn-sm px-3"
            >
              Enquiry
            </NavLink>
          </div>

        </div>
      </div>
    </nav>
  )
}

export default Navbar
