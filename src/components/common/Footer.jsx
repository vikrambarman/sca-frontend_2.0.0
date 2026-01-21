import { NavLink } from 'react-router-dom'

const Footer = () => {
  return (
    <footer className="bg-dark text-light pt-5" role="contentinfo" aria-label="Footer">
      <div className="container">

        <div className="row g-4">

          {/* INSTITUTE INFO */}
          <div className="col-md-4">
            <h6 className="fw-bold mb-3">Shivshakti Computer Academy</h6>

            <p className="small mb-3">
              Professional computer education with practical training.
              Trusted by students for quality learning.
            </p>

            <address className="small mb-1">
              📍 1st floor above Usha Matching Center, Near Babra Petrol Pump, Banaras Road, Phunderdihari <br />
              Ambikapur, Surguja - 497001, Chhattisgarh
            </address>
            <p className="small mb-1">
              📞 <a href="tel:+917477036832" className="text-light text-decoration-none">+91 7477036832</a> | <a href="tel:+919009087883" className="text-light text-decoration-none">+91 9009087883</a>
            </p>
            <p className="small mb-0">
              ✉️ <a href="mailto:shivshakticomputeracademy25@gmail.com" className="text-light text-decoration-none">shivshakticomputeracademy25@gmail.com</a>
            </p>
          </div>

          {/* QUICK LINKS */}
          <div className="col-md-2">
            <h6 className="fw-semibold mb-3">Quick Links</h6>
            <ul className="list-unstyled small">
              <li className="mb-1">
                <NavLink to="/" className="footer-link" aria-label="Home page">Home</NavLink>
              </li>
              <li className="mb-1">
                <NavLink to="/about" className="footer-link" aria-label="About page">About</NavLink>
              </li>
              <li className="mb-1">
                <NavLink to="/courses" className="footer-link" aria-label="Courses page">Courses</NavLink>
              </li>
              <li className="mb-1">
                <NavLink to="/accreditation" className="footer-link" aria-label="Accreditation page">Accreditation</NavLink>
              </li>
              <li>
                <NavLink to="/gallery" className="footer-link" aria-label="Gallery page">Gallery</NavLink>
              </li>
            </ul>
          </div>

          {/* STUDENT HELP */}
          <div className="col-md-3">
            <h6 className="fw-semibold mb-3">Student Help</h6>
            <ul className="list-unstyled small">
              <li className="mb-1">
                <NavLink to="/enquiry" className="footer-link" aria-label="Submit Enquiry">Enquiry</NavLink>
              </li>
              <li className="mb-1">
                <NavLink to="/student/login" className="footer-link" aria-label="Student Login">Student Login</NavLink>
              </li>
              <li className="mb-1">
                <NavLink to="/certificate-verify" className="footer-link" aria-label="Certificate Verification">Verify Certificate</NavLink>
              </li>
              <li>
                <NavLink to="/contact" className="footer-link" aria-label="Contact page">Contact Us</NavLink>
              </li>
            </ul>
          </div>

          {/* CONNECT */}
          <div className="col-md-3">
            <h6 className="fw-semibold mb-3">Connect With Us</h6>
            <p className="small mb-3">
              WhatsApp and call support available during working hours.
            </p>

            <a
              href="https://wa.me/919009087883"
              className="btn btn-success btn-sm w-100 mb-2"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Chat on WhatsApp"
            >
              WhatsApp Now
            </a>

            <a
              href="https://www.google.com/maps?q=Shivshakti+Computer+Academy"
              className="btn btn-outline-light btn-sm w-100"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="View institute location on Google Maps"
            >
              View on Map
            </a>
          </div>

        </div>

        <hr className="border-secondary my-4" />

        {/* BOTTOM FOOTER */}
        <div className="d-flex flex-column flex-md-row justify-content-between align-items-center small pb-4">
          <span>© {new Date().getFullYear()} Shivshakti Computer Academy</span>
          <span>All rights reserved</span>
        </div>

      </div>
    </footer>
  )
}

export default Footer
