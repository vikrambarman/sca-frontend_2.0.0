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
    <section
      className="py-5"
      aria-labelledby="affiliations-heading"
    >
      <div className="container">

        {/* Heading */}
        <header className="text-center mb-5">
          <motion.h2
            id="affiliations-heading"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="fw-bold"
          >
            Our Affiliations & Recognitions
          </motion.h2>

          <p className="text-muted mt-2">
            Government recognized certifications, authorized training partners
            and verified credentials at Shivshakti Computer Academy
          </p>
        </header>

        <div className="row g-4">

          {/* ISO */}
          <div className="col-md-4">
            <motion.article
              whileHover={{ y: -6 }}
              className="card h-100 shadow-sm border-0"
              aria-label="ISO 9001 2015 Certified Institute"
            >
              <div className="card-body text-center">
                <FaShieldAlt
                  size={36}
                  className="text-primary mb-3"
                  aria-hidden="true"
                />
                <h3 className="h6 fw-bold">
                  ISO 9001:2015 Certified
                </h3>
                <p className="small text-muted mb-0">
                  Our computer institute follows ISO 9001:2015 international
                  quality standards for education management and training delivery.
                </p>
              </div>
            </motion.article>
          </div>

          {/* GSDM */}
          <div className="col-md-4">
            <motion.article
              whileHover={{ y: -6 }}
              className="card h-100 shadow-sm border-0"
              aria-label="Gramin Skill Development Mission Training Centre"
            >
              <div className="card-body text-center">
                <FaUniversity
                  size={36}
                  className="text-success mb-3"
                  aria-hidden="true"
                />
                <h3 className="h6 fw-bold">
                  Gramin Skill Development Mission (GSDM)
                </h3>
                <p className="small text-muted mb-0">
                  Authorized GSDM training centre aligned with Skill India,
                  offering government-recognized computer diploma courses.
                </p>
              </div>
            </motion.article>
          </div>

          {/* DRISHTI */}
          <div className="col-md-4">
            <motion.article
              whileHover={{ y: -6 }}
              className="card h-100 shadow-sm border-0"
              aria-label="Drishti Computer Education Franchise"
            >
              <div className="card-body text-center">
                <FaCertificate
                  size={36}
                  className="text-warning mb-3"
                  aria-hidden="true"
                />
                <h3 className="h6 fw-bold">
                  Drishti Computer Education
                </h3>
                <p className="small text-muted mb-0">
                  Authorized Drishti Computer Education franchise providing
                  verified certification for basic and professional courses.
                </p>
              </div>
            </motion.article>
          </div>

          {/* Skill India / NSDC */}
          <div className="col-md-4">
            <motion.article
              whileHover={{ y: -6 }}
              className="card h-100 shadow-sm border-0"
              aria-label="Skill India and NSDC Certification"
            >
              <div className="card-body text-center">
                <FaIdCard
                  size={36}
                  className="text-info mb-3"
                  aria-hidden="true"
                />
                <h3 className="h6 fw-bold">
                  Skill India & NSDC
                </h3>
                <p className="small text-muted mb-0">
                  Selected IT and advanced computer course certificates are
                  verifiable on Skill India and NSDC platforms.
                </p>
              </div>
            </motion.article>
          </div>

          {/* DigiLocker */}
          <div className="col-md-4">
            <motion.article
              whileHover={{ y: -6 }}
              className="card h-100 shadow-sm border-0"
              aria-label="DigiLocker Enabled Certificates"
            >
              <div className="card-body text-center">
                <FaIdCard
                  size={36}
                  className="text-dark mb-3"
                  aria-hidden="true"
                />
                <h3 className="h6 fw-bold">
                  DigiLocker Enabled
                </h3>
                <p className="small text-muted mb-0">
                  Diploma certificates are available on DigiLocker for
                  secure digital access and lifetime online verification.
                </p>
              </div>
            </motion.article>
          </div>

          {/* MSME */}
          <div className="col-md-4">
            <motion.article
              whileHover={{ y: -6 }}
              className="card h-100 shadow-sm border-0"
              aria-label="MSME Registered Computer Institute"
            >
              <div className="card-body text-center">
                <FaBuilding
                  size={36}
                  className="text-secondary mb-3"
                  aria-hidden="true"
                />
                <h3 className="h6 fw-bold">
                  MSME Registered Institute
                </h3>
                <p className="small text-muted mb-0">
                  Shivshakti Computer Academy is an MSME registered institute,
                  ensuring legal authenticity and professional operations.
                </p>
              </div>
            </motion.article>
          </div>

        </div>

      </div>
    </section>
  )
}

export default PartnersAndCertifications
