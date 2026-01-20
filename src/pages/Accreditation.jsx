import { motion } from 'framer-motion'
import PageHeader from '../components/common/PageHeader'

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: i => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.08, duration: 0.5 }
  })
}

const Accreditation = () => {
  return (
    <>
      <PageHeader
        title="Affiliations, Accreditation & Recognition"
        subtitle="Trusted certifications, official authorizations and transparent verification system"
      />

      <section className="py-5 bg-light">
        <div className="container">

          {/* INTRO */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="row mb-5"
          >
            <div className="col-lg-10 mx-auto text-center">
              <p className="text-muted fs-6">
                Shivshakti Computer Academy follows a structured and
                transparent certification process. Depending on the
                course and eligibility, students receive certificates
                issued directly by our academy or through recognized
                skill development and government-aligned organizations.
              </p>
            </div>
          </motion.div>

          <div className="row g-4">

            {/* MSME */}
            <motion.div
              custom={0}
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              className="col-md-6"
            >
              <div className="card h-100 shadow-sm border-0 accreditation-card">
                <div className="card-body">
                  <span className="badge bg-primary mb-2">
                    Government Registration
                  </span>
                  <h5 className="fw-bold mt-2">
                    MSME (Udyam) Registered Institute
                  </h5>
                  <p className="text-muted small mb-0">
                    Shivshakti Computer Academy is officially
                    registered under MSME (Government of India),
                    confirming our legal status as a recognized
                    training and educational service provider.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* ISO */}
            <motion.div
              custom={1}
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              className="col-md-6"
            >
              <div className="card h-100 shadow-sm border-0 accreditation-card">
                <div className="card-body">
                  <span className="badge bg-success mb-2">
                    Quality Standards
                  </span>
                  <h5 className="fw-bold mt-2">
                    ISO 9001:2015 Certified
                  </h5>
                  <p className="text-muted small mb-0">
                    Our institute follows ISO 9001:2015 quality
                    management standards, ensuring structured
                    operations, consistent training delivery and
                    continuous improvement.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* DRISHTI */}
            <motion.div
              custom={2}
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              className="col-md-6"
            >
              <div className="card h-100 shadow-sm border-0 accreditation-card">
                <div className="card-body">
                  <span className="badge bg-warning text-dark mb-2">
                    Authorized Franchise
                  </span>
                  <h5 className="fw-bold mt-2">
                    Drishti Computer Education
                  </h5>
                  <p className="text-muted small mb-0">
                    For basic and foundation-level computer courses,
                    we operate as an authorized Drishti Computer
                    Education training center. Certificates are
                    issued under the Drishti system after completion.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* GSDM */}
            <motion.div
              custom={3}
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              className="col-md-6"
            >
              <div className="card h-100 shadow-sm border-0 accreditation-card">
                <div className="card-body">
                  <span className="badge bg-info text-dark mb-2">
                    Skill Development Mission
                  </span>
                  <h5 className="fw-bold mt-2">
                    Gramin Skill Development Mission (GSDM)
                  </h5>
                  <p className="text-muted small mb-0">
                    Selected diploma and vocational programs are
                    registered under GSDM. Eligible students receive
                    government-aligned certification after assessment
                    and official verification.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* NSDC */}
            <motion.div
              custom={4}
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              className="col-md-6"
            >
              <div className="card h-100 shadow-sm border-0 accreditation-card">
                <div className="card-body">
                  <span className="badge bg-secondary mb-2">
                    Skill India
                  </span>
                  <h5 className="fw-bold mt-2">
                    NSDC / Skill India Alignment
                  </h5>
                  <p className="text-muted small mb-0">
                    Skill India / NSDC certification is applicable
                    only for specific GSDM-approved courses. Not all
                    programs fall under NSDC norms and eligibility
                    varies by course structure.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* DIGILOCKER */}
            <motion.div
              custom={5}
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              className="col-md-6"
            >
              <div className="card h-100 shadow-sm border-0 accreditation-card">
                <div className="card-body">
                  <span className="badge bg-dark mb-2">
                    Digital Verification
                  </span>
                  <h5 className="fw-bold mt-2">
                    DigiLocker Certificate Access
                  </h5>
                  <p className="text-muted small mb-0">
                    For eligible government-issued certificates,
                    digital copies may be available on DigiLocker.
                    Availability depends on the issuing authority
                    and course eligibility.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* TRANSPARENCY */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="col-12"
            >
              <div className="alert alert-light border shadow-sm mt-4">
                <strong>Transparency & Verification:</strong>
                <p className="small mb-0 mt-1">
                  Certification availability depends on course type,
                  authority approval and student eligibility.
                  Shivshakti Computer Academy maintains complete and
                  verifiable records through its student portal and
                  administrative systems.
                </p>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* CARD HOVER EFFECT */}
      <style>
        {`
                .accreditation-card {
                    transition: transform 0.25s ease, box-shadow 0.25s ease;
                }
                .accreditation-card:hover {
                    transform: translateY(-6px);
                    box-shadow: 0 12px 28px rgba(0,0,0,0.08);
                }
                `}
      </style>
    </>
  )
}

export default Accreditation
