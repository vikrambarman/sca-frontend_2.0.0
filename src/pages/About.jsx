import { motion } from 'framer-motion'
import PageHeader from '../components/common/PageHeader'

const sectionFade = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 }
  }
}

const cardHover = {
  whileHover: { y: -6, boxShadow: '0 12px 30px rgba(0,0,0,0.08)' }
}

const About = () => {
  return (
    <>
      <PageHeader
        title="About Shivshakti Computer Academy"
        subtitle="Trusted computer education with recognized certification and practical training"
      />

      <section className="py-5">
        <div className="container">

          {/* ================= WHO WE ARE ================= */}
          <motion.div
            variants={sectionFade}
            initial="hidden"
            animate="visible"
            className="row g-5 align-items-center mb-5"
          >
            <div className="col-md-7">
              <h4 className="fw-bold mb-3">
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
                {...cardHover}
                className="card border-0 shadow-sm"
              >
                <div className="card-body">
                  <h6 className="fw-bold mb-3">
                    Institute Recognition
                  </h6>

                  <ul className="list-unstyled small text-muted mb-0">
                    <li>• MSME (Udyam) Registered Institute</li>
                    <li>• ISO 9001:2015 Certified</li>
                    <li>• Authorized GSDM Training Centre</li>
                    <li>• Drishti Computer Education Franchise</li>
                    <li>• Skill India & DigiLocker Enabled</li>
                  </ul>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* ================= HOW CERTIFICATION WORKS ================= */}
          <motion.div
            variants={sectionFade}
            initial="hidden"
            animate="visible"
            className="mb-5"
          >
            <div className="text-center mb-4">
              <h5 className="fw-bold">
                Our Training & Certification System
              </h5>
              <p className="text-muted small">
                Clear process so every student understands how certificates are issued
              </p>
            </div>

            <div className="row g-4">
              {[
                {
                  title: '100% Practical Training',
                  text: 'Every course focuses on hands-on computer practice so students gain real working skills.'
                },
                {
                  title: 'Authorized Course Mapping',
                  text: 'Basic courses are certified under Drishti Computer Education, while selected diploma courses come under GSDM.'
                },
                {
                  title: 'Government Recognition',
                  text: 'Eligible diploma courses are registered on the Skill India portal as per guidelines.'
                },
                {
                  title: 'Digital Certificate Access',
                  text: 'Approved certificates are made available on DigiLocker for online verification.'
                }
              ].map((item, i) => (
                <div key={i} className="col-md-6">
                  <motion.div
                    {...cardHover}
                    className="card h-100 border-0 shadow-sm"
                  >
                    <div className="card-body">
                      <h6 className="fw-bold">
                        {item.title}
                      </h6>
                      <p className="text-muted small mb-0">
                        {item.text}
                      </p>
                    </div>
                  </motion.div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* ================= MISSION & VISION ================= */}
          <motion.div
            variants={sectionFade}
            initial="hidden"
            animate="visible"
            className="row g-4 mb-5"
          >
            <div className="col-md-6">
              <motion.div
                {...cardHover}
                className="card border-0 shadow-sm h-100"
              >
                <div className="card-body">
                  <h5 className="fw-bold mb-2">
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
                {...cardHover}
                className="card border-0 shadow-sm h-100"
              >
                <div className="card-body">
                  <h5 className="fw-bold mb-2">
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
            animate="visible"
            className="row"
          >
            <div className="col-lg-10 mx-auto">
              <div className="card border-0 shadow-sm text-center">
                <div className="card-body p-4">
                  <h5 className="fw-bold mb-2">
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
