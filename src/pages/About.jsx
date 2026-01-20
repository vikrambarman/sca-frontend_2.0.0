import { motion } from 'framer-motion'
import {
  FaUniversity,
  FaCertificate,
  FaLaptopCode,
  FaCheckCircle,
  FaBullseye,
  FaEye,
  FaShieldAlt
} from 'react-icons/fa'
import PageHeader from '../components/common/PageHeader'

const sectionFade = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: 'easeOut' }
  }
}

const stagger = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.15 }
  }
}

const card = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 }
}

const hoverLift = {
  whileHover: {
    y: -8,
    boxShadow: '0 20px 40px rgba(0,0,0,0.08)'
  }
}

const About = () => {
  return (
    <>
      <PageHeader
        title="About Shivshakti Computer Academy"
        subtitle="Trusted computer education with recognized certification and practical training"
      />

      <section className="py-5 bg-light">
        <div className="container">

          {/* ================= WHO WE ARE ================= */}
          <motion.div
            variants={sectionFade}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="row g-5 align-items-center mb-5"
          >
            <div className="col-md-7">
              <h4 className="fw-semibold mb-3 d-flex align-items-center gap-2">
                <FaUniversity className="text-primary" />
                Who We Are
              </h4>

              <p className="text-muted">
                Shivshakti Computer Academy is one of the leading
                computer training institutes in Ambikapur,
                Chhattisgarh. We focus on providing quality
                computer education with a strong foundation in
                practical learning.
              </p>

              <p className="text-muted">
                We are an <strong>Authorized Training Centre under
                  Gramin Skill Development Mission (TC332190)</strong>.
                Selected government-recognized courses are listed
                on the Skill India portal, and eligible certificates
                are available on DigiLocker for digital verification.
              </p>

              <p className="text-muted mb-0">
                Our training model is simple and transparent.
                Students first learn practically, then appear
                for assessment, and finally receive certificates
                from the respective authorized body.
              </p>
            </div>

            <div className="col-md-5">
              <motion.div
                variants={card}
                {...hoverLift}
                className="card border-0 rounded-4"
              >
                <div className="card-body p-4 p-lg-5">
                  <h6 className="fw-semibold mb-3 d-flex align-items-center gap-2">
                    <FaCertificate className="text-success" />
                    Institute Recognition
                  </h6>

                  <ul className="list-unstyled small text-muted mb-0 lh-lg">
                    <li><FaCheckCircle className="text-success me-2" /> MSME (Udyam) Registered Institute</li>
                    <li><FaCheckCircle className="text-success me-2" /> ISO 9001:2015 Certified</li>
                    <li><FaCheckCircle className="text-success me-2" /> Authorized GSDM Training Centre</li>
                    <li><FaCheckCircle className="text-success me-2" /> Drishti Computer Education Franchise</li>
                    <li><FaCheckCircle className="text-success me-2" /> Skill India & DigiLocker Enabled</li>
                  </ul>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* ================= TRAINING & CERTIFICATION ================= */}
          <motion.div
            variants={sectionFade}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="mb-5"
          >
            <div className="text-center mb-4">
              <h5 className="fw-semibold mb-2">
                Our Training & Certification System
              </h5>
              <p className="text-muted small mb-0">
                Clear process so every student understands how certificates are issued
              </p>
            </div>

            <motion.div
              variants={stagger}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="row g-4"
            >
              {[
                {
                  title: '100% Practical Training',
                  text: 'Every course focuses on hands-on computer practice so students gain real working skills.',
                  icon: <FaLaptopCode className="text-primary" />
                },
                {
                  title: 'Authorized Course Mapping',
                  text: 'Basic courses are certified under Drishti Computer Education, while selected diploma courses come under GSDM.',
                  icon: <FaCertificate className="text-success" />
                },
                {
                  title: 'Government Recognition',
                  text: 'Eligible diploma courses are registered on the Skill India portal as per guidelines.',
                  icon: <FaShieldAlt className="text-warning" />
                },
                {
                  title: 'Digital Certificate Access',
                  text: 'Approved certificates are made available on DigiLocker for online verification.',
                  icon: <FaCheckCircle className="text-info" />
                }
              ].map((item, i) => (
                <div key={i} className="col-md-6">
                  <motion.div
                    variants={card}
                    {...hoverLift}
                    className="card h-100 border-0 rounded-4"
                  >
                    <div className="card-body p-4">
                      <div className="d-flex align-items-center gap-2 mb-2">
                        {item.icon}
                        <h6 className="fw-semibold mb-0">
                          {item.title}
                        </h6>
                      </div>
                      <p className="text-muted small mb-0">
                        {item.text}
                      </p>
                    </div>
                  </motion.div>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* ================= MISSION & VISION ================= */}
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="row g-4 mb-5"
          >
            <div className="col-md-6">
              <motion.div
                variants={card}
                {...hoverLift}
                className="card border-0 h-100 rounded-4"
              >
                <div className="card-body p-4 p-lg-5">
                  <h5 className="fw-semibold mb-2 d-flex align-items-center gap-2">
                    <FaBullseye className="text-danger" />
                    Our Mission
                  </h5>
                  <p className="text-muted small mb-0">
                    Our mission is to provide affordable,
                    practical and certified computer education
                    to students from both rural and urban areas.
                    We aim to help learners gain confidence,
                    job-ready skills and recognized certificates
                    that improve employment opportunities and
                    self-reliance.
                  </p>
                </div>
              </motion.div>
            </div>

            <div className="col-md-6">
              <motion.div
                variants={card}
                {...hoverLift}
                className="card border-0 h-100 rounded-4"
              >
                <div className="card-body p-4 p-lg-5">
                  <h5 className="fw-semibold mb-2 d-flex align-items-center gap-2">
                    <FaEye className="text-primary" />
                    Our Vision
                  </h5>
                  <p className="text-muted small mb-0">
                    Our vision is to become a trusted skill
                    development institute where students are
                    trained honestly, certified correctly and
                    guided towards a better digital future.
                    We want every student to understand the
                    value of skills, not just certificates.
                  </p>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* ================= WHY TRUST US ================= */}
          <motion.div
            variants={sectionFade}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="row"
          >
            <div className="col-lg-10 mx-auto">
              <div className="card border-0 text-center rounded-4 shadow-sm">
                <div className="card-body p-4 p-md-5">
                  <h5 className="fw-semibold mb-2 d-flex justify-content-center align-items-center gap-2">
                    <FaShieldAlt className="text-success" />
                    Why Students Trust Shivshakti Computer Academy
                  </h5>
                  <p className="text-muted small mb-0">
                    Clear authorization, genuine certificates,
                    100% practical training and a transparent
                    student management system make our institute
                    reliable for students, parents and employers.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </section>
    </>
  )
}

export default About
