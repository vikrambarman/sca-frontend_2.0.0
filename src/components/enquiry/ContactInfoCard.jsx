import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaWhatsapp, FaCheckCircle } from 'react-icons/fa'

const ContactInfoCard = () => {
    return (
        <div className="card shadow-sm border-0 h-100">
            <div className="card-body p-4">

                <h5 className="fw-bold mb-2">Need Immediate Help?</h5>
                <p className="text-muted small mb-4">
                    Our support team is available during working hours to assist you.
                </p>

                <div className="mb-3">
                    <p className="mb-2">
                        <FaPhoneAlt className="me-2 text-primary" />
                        <strong>+91 7477036832 | +91 9009087883</strong>
                    </p>

                    <p className="mb-2">
                        <FaEnvelope className="me-2 text-primary" />
                        <strong>shivshakticomputeracademy25@gmail.com</strong>
                    </p>

                    <p className="mb-3">
                        <FaMapMarkerAlt className="me-2 text-primary" />
                        1st floor above Usha Matching Center, Near Babra Petrol Pump, Banaras Road, Phunderdihari, Ambikapur, Surguja - 497001 (C.G.)
                    </p>
                </div>

                <a
                    href="https://wa.me/919000000000"
                    target="_blank"
                    rel="noreferrer"
                    className="btn btn-success w-100 d-flex align-items-center justify-content-center gap-2 mb-4"
                >
                    <FaWhatsapp />
                    Chat on WhatsApp
                </a>

                <div className="border-top pt-3 small text-muted">
                    <p className="mb-2">
                        <FaCheckCircle className="me-2 text-success" />
                        ISO 9001:2015 Certified Institute
                    </p>
                    <p className="mb-2">
                        <FaCheckCircle className="me-2 text-success" />
                        Skill India Recognized Courses
                    </p>
                    <p className="mb-0">
                        <FaCheckCircle className="me-2 text-success" />
                        DigiLocker Verified Certificates
                    </p>
                </div>

            </div>
        </div>
    )
}

export default ContactInfoCard
