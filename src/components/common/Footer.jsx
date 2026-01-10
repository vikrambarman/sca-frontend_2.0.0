import { NavLink } from 'react-router-dom'

const Footer = () => {
  return (
    <footer className="bg-dark text-light pt-4">
      <div className="container">

        <div className="row g-4">

          {/* Institute Info */}
          <div className="col-md-4">
            <h6 className="fw-bold mb-3">
              Shivshakti Computer Academy
            </h6>
            <p className="small mb-2">
              Professional computer education with practical training.
              Trusted by students for quality learning.
            </p>
            <p className="small mb-1">
              📍 Your Address, City
            </p>
            <p className="small mb-1">
              📞 +91 90000 00000
            </p>
            <p className="small">
              ✉️ info@shivshakticomputer.in
            </p>
          </div>

          {/* Quick Links */}
          <div className="col-md-2">
            <h6 className="fw-semibold mb-3">Quick Links</h6>
            <ul className="list-unstyled small">
              <li><NavLink to="/" className="footer-link">Home</NavLink></li>
              <li><NavLink to="/about" className="footer-link">About</NavLink></li>
              <li><NavLink to="/courses" className="footer-link">Courses</NavLink></li>
              <li><NavLink to="/manyatain" className="footer-link">Manyatain</NavLink></li>
              <li><NavLink to="/gallery" className="footer-link">Gallery</NavLink></li>
            </ul>
          </div>

          {/* Student Help */}
          <div className="col-md-3">
            <h6 className="fw-semibold mb-3">Student Help</h6>
            <ul className="list-unstyled small">
              <li><NavLink to="/enquiry" className="footer-link">Enquiry</NavLink></li>
              <li><NavLink to="/registration" className="footer-link">Online Registration</NavLink></li>
              <li><NavLink to="/certificate-verify" className="footer-link">Verify Certificate</NavLink></li>
              <li><NavLink to="/contact" className="footer-link">Contact Us</NavLink></li>
            </ul>
          </div>

          {/* Connect */}
          <div className="col-md-3">
            <h6 className="fw-semibold mb-3">Connect With Us</h6>
            <p className="small mb-2">
              WhatsApp & Call support available.
            </p>

            <a
              href="https://wa.me/919000000000"
              className="btn btn-success btn-sm mb-2 w-100"
              target="_blank"
              rel="noreferrer"
            >
              WhatsApp Now
            </a>

            <a
              href="https://maps.google.com"
              className="btn btn-outline-light btn-sm w-100"
              target="_blank"
              rel="noreferrer"
            >
              View on Map
            </a>
          </div>

        </div>

        <hr className="border-secondary my-3" />

        {/* Bottom Footer */}
        <div className="d-flex flex-column flex-md-row justify-content-between align-items-center small pb-3">
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
