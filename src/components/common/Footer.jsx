import { NavLink } from 'react-router-dom'

const Footer = () => {
  return (
    <footer className="bg-dark text-light pt-5">
      <div className="container">

        <div className="row g-4">

          {/* INSTITUTE INFO */}
          <div className="col-md-4">
            <h6 className="fw-bold mb-3">
              Shivshakti Computer Academy
            </h6>

            <p className="small mb-3">
              Professional computer education with practical training.
              Trusted by students for quality learning.
            </p>

            <p className="small mb-1">
              📍 1st floor above Usha Matching Center, Near Babra Petrol Pump, Banaras Road, Phunderdihari <br />Ambikapur, Surguja - 497001, Chhattisgarh
            </p>
            <p className="small mb-1">
              📞 +91 7477036832 | +91 9009087883
            </p>
            <p className="small mb-0">
              ✉️ shivshakticomputeracademy25@gmail.com
            </p>
          </div>

          {/* QUICK LINKS */}
          <div className="col-md-2">
            <h6 className="fw-semibold mb-3">
              Quick Links
            </h6>

            <ul className="list-unstyled small">
              <li className="mb-1">
                <NavLink to="/" className="footer-link">
                  Home
                </NavLink>
              </li>
              <li className="mb-1">
                <NavLink to="/about" className="footer-link">
                  About
                </NavLink>
              </li>
              <li className="mb-1">
                <NavLink to="/courses" className="footer-link">
                  Courses
                </NavLink>
              </li>
              <li className="mb-1">
                <NavLink to="/accreditation" className="footer-link">
                  Accreditation
                </NavLink>
              </li>
              <li>
                <NavLink to="/gallery" className="footer-link">
                  Gallery
                </NavLink>
              </li>
            </ul>
          </div>

          {/* STUDENT HELP */}
          <div className="col-md-3">
            <h6 className="fw-semibold mb-3">
              Student Help
            </h6>

            <ul className="list-unstyled small">
              <li className="mb-1">
                <NavLink to="/enquiry" className="footer-link">
                  Enquiry
                </NavLink>
              </li>
              <li className="mb-1">
                <NavLink to="/student/login" className="footer-link">
                  Student Login
                </NavLink>
              </li>
              <li className="mb-1">
                <NavLink to="/certificate-verify" className="footer-link">
                  Verify Certificate
                </NavLink>
              </li>
              <li>
                <NavLink to="/contact" className="footer-link">
                  Contact Us
                </NavLink>
              </li>
            </ul>
          </div>

          {/* CONNECT */}
          <div className="col-md-3">
            <h6 className="fw-semibold mb-3">
              Connect With Us
            </h6>

            <p className="small mb-3">
              WhatsApp and call support available during working hours.
            </p>

            <a
              href="https://wa.me/919009087883"
              className="btn btn-success btn-sm w-100 mb-2"
              target="_blank"
              rel="noreferrer"
            >
              WhatsApp Now
            </a>

            <a
              href="https://www.google.com/maps?q=Shivshakti+Computer+Academy"
              className="btn btn-outline-light btn-sm w-100"
              target="_blank"
              rel="noreferrer"
            >
              View on Map
            </a>
          </div>

        </div>

        <hr className="border-secondary my-4" />

        {/* BOTTOM FOOTER */}
        <div className="d-flex flex-column flex-md-row justify-content-between align-items-center small pb-4">
          <span>
            © {new Date().getFullYear()} Shivshakti Computer Academy
          </span>
          <span>
            All rights reserved
          </span>
        </div>

      </div>
    </footer>
  )
}

export default Footer
