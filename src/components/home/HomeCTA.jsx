import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { FaPhoneAlt, FaArrowRight } from 'react-icons/fa'

const HomeCTA = () => {
    return (
        <section className="py-5 bg-primary text-white position-relative overflow-hidden">
            <div className="container">

                <div className="row align-items-center g-4">

                    {/* LEFT CONTENT */}
                    <div className="col-md-7">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                        >
                            <h3 className="fw-bold mb-3">
                                Apna Future Digital Skills ke saath Secure banaiye
                            </h3>

                            <p className="text-white-75 mb-4">
                                Shivshakti Computer Academy me aapko milta hai
                                <strong> 100% practical training</strong>, government
                                recognized certification aur real-world skills jo job,
                                self-employment aur higher studies me kaam aate hain.
                            </p>

                            <ul className="list-unstyled small mb-4">
                                <li>✔ Skill India & GSDM aligned courses</li>
                                <li>✔ DigiLocker verified certificates</li>
                                <li>✔ Web, Software & Computer professional training</li>
                                <li>✔ Rural & urban students ke liye affordable education</li>
                            </ul>

                            <div className="d-flex flex-wrap gap-3">
                                <Link
                                    to="/courses"
                                    className="btn btn-light fw-semibold px-4"
                                >
                                    View Courses <FaArrowRight className="ms-2" />
                                </Link>

                                <Link
                                    to="/contact"
                                    className="btn btn-outline-light fw-semibold px-4"
                                >
                                    Admission Enquiry
                                </Link>
                            </div>
                        </motion.div>
                    </div>

                    {/* RIGHT INFO BOX */}
                    <div className="col-md-5">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5 }}
                            className="bg-white text-dark rounded-4 p-4 shadow"
                        >
                            <h6 className="fw-bold mb-2">
                                Need Guidance? Talk to Us
                            </h6>

                            <p className="small text-muted mb-3">
                                Course selection, certification, eligibility ya admission
                                related koi bhi doubt ho, hum aapko proper guidance dete hain.
                            </p>

                            <div className="d-flex align-items-center gap-3">
                                <div
                                    className="rounded-circle bg-primary text-white d-flex align-items-center justify-content-center"
                                    style={{ width: 42, height: 42 }}
                                >
                                    <FaPhoneAlt />
                                </div>

                                <div>
                                    <div className="fw-semibold">
                                        Call / WhatsApp
                                    </div>
                                    <div className="small text-muted">
                                        +91 7477036832 | +91 9009087883
                                    </div>
                                </div>
                            </div>

                            <p className="small text-muted mt-3 mb-0">
                                Visit our center at Ambikapur, Chhattisgarh
                            </p>
                        </motion.div>
                    </div>

                </div>

            </div>

            {/* subtle background shapes */}
            <div
                className="position-absolute top-0 end-0 opacity-25"
                style={{
                    width: 260,
                    height: 260,
                    background: '#ffffff',
                    borderRadius: '50%',
                    transform: 'translate(50%, -50%)'
                }}
            />
        </section>
    )
}

export default HomeCTA
