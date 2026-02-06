import { motion } from 'framer-motion'
import CountUp from 'react-countup'
import {
    FaUserGraduate,
    FaCertificate,
    FaCheckCircle,
    FaUniversity
} from 'react-icons/fa'

const TrustSection = () => {
    return (
        <section
            className="py-5 bg-light"
            aria-labelledby="trust-heading"
        >
            <div className="container">

                {/* Heading */}
                <div className="text-center mb-5">
                    <motion.h2
                        id="trust-heading"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="fw-bold"
                    >
                        Trusted Computer Training Institute in Ambikapur
                    </motion.h2>

                    <p className="text-muted mt-2">
                        Shivshakti Computer Academy is a government-recognized
                        computer training institute in Ambikapur focused on
                        transparency, certified programs, and real student outcomes.
                    </p>
                </div>

                {/* Trust Stats */}
                <div className="row g-4 text-center">

                    <div className="col-md-3">
                        <motion.div
                            whileHover={{ y: -6 }}
                            className="bg-white p-4 rounded shadow-sm h-100"
                        >
                            <FaUniversity
                                size={32}
                                className="text-primary mb-3"
                                aria-hidden="true"
                            />
                            <h3 className="fw-bold mb-0">
                                <CountUp end={5} duration={2} />+
                            </h3>
                            <p className="small text-muted mb-0">
                                Years of Computer Training Experience
                            </p>
                        </motion.div>
                    </div>

                    <div className="col-md-3">
                        <motion.div
                            whileHover={{ y: -6 }}
                            className="bg-white p-4 rounded shadow-sm h-100"
                        >
                            <FaUserGraduate
                                size={32}
                                className="text-success mb-3"
                                aria-hidden="true"
                            />
                            <h3 className="fw-bold mb-0">
                                <CountUp end={1000} duration={2} />+
                            </h3>
                            <p className="small text-muted mb-0">
                                Students Successfully Trained in Computer Courses
                            </p>
                        </motion.div>
                    </div>

                    <div className="col-md-3">
                        <motion.div
                            whileHover={{ y: -6 }}
                            className="bg-white p-4 rounded shadow-sm h-100"
                        >
                            <FaCertificate
                                size={32}
                                className="text-warning mb-3"
                                aria-hidden="true"
                            />
                            <h3 className="fw-bold mb-0">
                                100%
                            </h3>
                            <p className="small text-muted mb-0">
                                Certificates with Online Verification
                            </p>
                        </motion.div>
                    </div>

                    <div className="col-md-3">
                        <motion.div
                            whileHover={{ y: -6 }}
                            className="bg-white p-4 rounded shadow-sm h-100"
                        >
                            <FaCheckCircle
                                size={32}
                                className="text-info mb-3"
                                aria-hidden="true"
                            />
                            <h3 className="fw-bold mb-0">
                                Government Recognized Institute
                            </h3>
                            <p className="small text-muted mb-0">
                                Skill India • GSDM • DigiLocker
                            </p>
                        </motion.div>
                    </div>

                </div>

                {/* Recognition Strip */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.3 }}
                    className="row mt-5"
                >
                    <div className="col-lg-10 mx-auto">
                        <div className="bg-white p-4 rounded shadow-sm text-center">
                            <p className="mb-1 fw-semibold">
                                Authorized & Government Recognized Computer Training Centre
                            </p>

                            <p className="small text-muted mb-0">
                                Authorized Training Centre under{' '}
                                <strong>Gramin Skill Development Mission (GSDM)</strong> •
                                Certificates available on{' '}
                                <strong>Skill India Portal</strong> and{' '}
                                <strong>DigiLocker</strong> •
                                ISO 9001:2015 Certified • MSME Registered Institute
                            </p>
                        </div>
                    </div>
                </motion.div>

            </div>
        </section>
    )
}

export default TrustSection
