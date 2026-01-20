import { motion } from 'framer-motion'
import {
  FaCertificate,
  FaUniversity,
  FaShieldAlt,
  FaIdCard,
  FaBuilding
} from 'react-icons/fa'

const PartnersAndCertifications = () => {
  return (
    <section className="py-5">
      <div className="container">

        {/* Heading */}
        <div className="text-center mb-5">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="fw-bold"
          >
            Our Affiliations & Recognitions
          </motion.h2>

          <p className="text-muted mt-2">
            Trusted certifications, authorized training partners and verified credentials
          </p>
        </div>

        <div className="row g-4">

          {/* ISO */}
          <div className="col-md-4">
            <motion.div
              whileHover={{ y: -6 }}
              className="card h-100 shadow-sm border-0"
            >
              <div className="card-body text-center">
                <FaShieldAlt size={36} className="text-primary mb-3" />
                <h6 className="fw-bold">ISO 9001:2015 Certified</h6>
                <p className="small text-muted mb-0">
                  Our institute follows international quality standards
                  for education management and training delivery.
                </p>
              </div>
            </motion.div>
          </div>

          {/* GSDM */}
          <div className="col-md-4">
            <motion.div
              whileHover={{ y: -6 }}
              className="card h-100 shadow-sm border-0"
            >
              <div className="card-body text-center">
                <FaUniversity size={36} className="text-success mb-3" />
                <h6 className="fw-bold">
                  Gramin Skill Development Mission
                </h6>
                <p className="small text-muted mb-0">
                  Authorized Training Centre under GSDM (Skill India aligned),
                  offering government-recognized diploma courses.
                </p>
              </div>
            </motion.div>
          </div>

          {/* DRISHTI */}
          <div className="col-md-4">
            <motion.div
              whileHover={{ y: -6 }}
              className="card h-100 shadow-sm border-0"
            >
              <div className="card-body text-center">
                <FaCertificate size={36} className="text-warning mb-3" />
                <h6 className="fw-bold">
                  Drishti Computer Education
                </h6>
                <p className="small text-muted mb-0">
                  Authorized franchise partner for basic and professional
                  computer courses with verified certification.
                </p>
              </div>
            </motion.div>
          </div>

          {/* NSDC / Skill India */}
          <div className="col-md-4">
            <motion.div
              whileHover={{ y: -6 }}
              className="card h-100 shadow-sm border-0"
            >
              <div className="card-body text-center">
                <FaIdCard size={36} className="text-info mb-3" />
                <h6 className="fw-bold">
                  Skill India & NSDC
                </h6>
                <p className="small text-muted mb-0">
                  Selected IT & Advance course certificates are available
                  for verification on Skill India / NSDC platforms.
                </p>
              </div>
            </motion.div>
          </div>

          {/* DIGILOCKER */}
          <div className="col-md-4">
            <motion.div
              whileHover={{ y: -6 }}
              className="card h-100 shadow-sm border-0"
            >
              <div className="card-body text-center">
                <FaIdCard size={36} className="text-dark mb-3" />
                <h6 className="fw-bold">DigiLocker Enabled</h6>
                <p className="small text-muted mb-0">
                  Selected Diploma certificates are digitally available on
                  DigiLocker for easy access and lifetime verification.
                </p>
              </div>
            </motion.div>
          </div>

          {/* MSME */}
          <div className="col-md-4">
            <motion.div
              whileHover={{ y: -6 }}
              className="card h-100 shadow-sm border-0"
            >
              <div className="card-body text-center">
                <FaBuilding size={36} className="text-secondary mb-3" />
                <h6 className="fw-bold">MSME Registered Institute</h6>
                <p className="small text-muted mb-0">
                  Shivshakti Computer Academy is registered under MSME,
                  ensuring legal authenticity and professional operations.
                </p>
              </div>
            </motion.div>
          </div>

        </div>

      </div>
    </section>
  )
}

export default PartnersAndCertifications
