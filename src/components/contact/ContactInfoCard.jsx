import { motion } from 'framer-motion'
import {
  FaPhoneAlt,
  FaWhatsapp,
  FaEnvelope,
  FaMapMarkerAlt
} from 'react-icons/fa'

const ContactInfoCards = () => {
  return (
    <div className="row g-4 mb-4">

      {/* Call */}
      <div className="col-md-3">
        <motion.div
          whileHover={{ y: -6 }}
          className="card text-center border-0 shadow-sm h-100 rounded-4"
        >
          <div className="card-body p-4">
            <FaPhoneAlt className="text-primary mb-2" size={22} />
            <h6 className="fw-semibold mb-1">Call Us</h6>
            <p className="small text-muted mb-2">
              Mon – Sat (8 AM – 6 PM)
            </p>

            <a
              href="tel:+917477036832"
              className="btn btn-primary btn-sm px-3"
            >
              Call Now
            </a>
          </div>
        </motion.div>
      </div>

      {/* WhatsApp */}
      <div className="col-md-3">
        <motion.div
          whileHover={{ y: -6 }}
          className="card text-center border-0 shadow-sm h-100 rounded-4"
        >
          <div className="card-body p-4">
            <FaWhatsapp className="text-success mb-2" size={24} />
            <h6 className="fw-semibold mb-1">WhatsApp</h6>
            <p className="small text-muted mb-2">
              Quick response
            </p>

            <a
              href="https://wa.me/919009087883"
              target="_blank"
              rel="noreferrer"
              className="btn btn-success btn-sm px-3"
            >
              Chat Now
            </a>
          </div>
        </motion.div>
      </div>

      {/* Email */}
      <div className="col-md-3">
        <motion.div
          whileHover={{ y: -6 }}
          className="card text-center border-0 shadow-sm h-100 rounded-4"
        >
          <div className="card-body p-4">
            <FaEnvelope className="text-info mb-2" size={22} />
            <h6 className="fw-semibold mb-1">Email</h6>
            <p className="small text-muted mb-2">
              Write to us
            </p>

            <a
              href="mailto:shivshakticomputeracademy25@gmail.com"
              className="btn btn-outline-info btn-sm px-3"
            >
              Send Email
            </a>
          </div>
        </motion.div>
      </div>

      {/* Address */}
      <div className="col-md-3">
        <motion.div
          whileHover={{ y: -6 }}
          className="card text-center border-0 shadow-sm h-100 rounded-4"
        >
          <div className="card-body p-4">
            <FaMapMarkerAlt className="text-danger mb-2" size={22} />
            <h6 className="fw-semibold mb-1">Visit Us</h6>

            <p className="small text-muted mb-2">
              1st floor above Usha Matching Center,
              Near Babra Petrol Pump, Banaras Road,
              Phunderdihari, Ambikapur, Surguja - 497001 (C.G.)
            </p>

            <a
              href="https://www.google.com/maps?q=Shivshakti+Computer+Academy"
              target="_blank"
              rel="noreferrer"
              className="btn btn-outline-danger btn-sm px-3"
            >
              View on Map
            </a>
          </div>
        </motion.div>
      </div>

    </div>
  )
}

export default ContactInfoCards
