import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import {
  FaLaptopCode,
  FaCalculator,
  FaFileExcel,
  FaGraduationCap,
  FaCode,
  FaCogs
} from 'react-icons/fa'

const CoursesPreview = () => {
  return (
    <section className="py-5 bg-light">
      <div className="container">

        {/* Heading */}
        <div className="text-center mb-5">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="fw-bold"
          >
            Our Professional & Career-Oriented Courses
          </motion.h2>

          <p className="text-muted mt-2">
            Practical computer education with recognized certification and real-world skills
          </p>
        </div>

        <div className="row g-4">

          {/* DCA */}
          <div className="col-md-4">
            <motion.div whileHover={{ y: -6 }} className="card h-100 shadow-sm border-0">
              <div className="card-body">
                <FaLaptopCode size={32} className="text-primary mb-3" />
                <h6 className="fw-bold">DCA</h6>
                <p className="small text-muted">
                  Diploma in Computer Applications covering computer basics,
                  MS Office, internet usage and office work.
                </p>
                <ul className="small text-muted ps-3">
                  <li>100% practical training</li>
                  <li>Beginner friendly</li>
                  <li>Certificate verification available</li>
                </ul>
              </div>
            </motion.div>
          </div>

          {/* PGDCA */}
          <div className="col-md-4">
            <motion.div whileHover={{ y: -6 }} className="card h-100 shadow-sm border-0">
              <div className="card-body">
                <FaGraduationCap size={32} className="text-success mb-3" />
                <h6 className="fw-bold">PGDCA</h6>
                <p className="small text-muted">
                  Post Graduate Diploma for students aiming for professional
                  computer knowledge and better job opportunities.
                </p>
                <ul className="small text-muted ps-3">
                  <li>Advanced computer skills</li>
                  <li>Govt. recognized certificate</li>
                  <li>DigiLocker support</li>
                </ul>
              </div>
            </motion.div>
          </div>

          {/* TALLY */}
          <div className="col-md-4">
            <motion.div whileHover={{ y: -6 }} className="card h-100 shadow-sm border-0">
              <div className="card-body">
                <FaCalculator size={32} className="text-warning mb-3" />
                <h6 className="fw-bold">Tally with GST</h6>
                <p className="small text-muted">
                  Accounting and GST training for office work,
                  business handling and job preparation.
                </p>
                <ul className="small text-muted ps-3">
                  <li>Practical accounting work</li>
                  <li>GST basics & compliance</li>
                  <li>Job-oriented training</li>
                </ul>
              </div>
            </motion.div>
          </div>

          {/* BASIC COMPUTER */}
          <div className="col-md-4">
            <motion.div whileHover={{ y: -6 }} className="card h-100 shadow-sm border-0">
              <div className="card-body">
                <FaFileExcel size={32} className="text-info mb-3" />
                <h6 className="fw-bold">Basic Computer Course</h6>
                <p className="small text-muted">
                  Best for beginners, school students and rural learners
                  starting computer education from zero.
                </p>
                <ul className="small text-muted ps-3">
                  <li>Computer fundamentals</li>
                  <li>Typing & MS Office</li>
                  <li>Drishti Computer Education certificate</li>
                </ul>
              </div>
            </motion.div>
          </div>

          {/* WEB DEVELOPMENT */}
          <div className="col-md-4">
            <motion.div whileHover={{ y: -6 }} className="card h-100 shadow-sm border-0">
              <div className="card-body">
                <FaCode size={32} className="text-dark mb-3" />
                <h6 className="fw-bold">Web Development</h6>
                <p className="small text-muted">
                  Learn how to design and develop modern websites
                  using current industry technologies.
                </p>
                <ul className="small text-muted ps-3">
                  <li>HTML, CSS, JavaScript</li>
                  <li>Frontend & backend basics</li>
                  <li>Project-based learning</li>
                </ul>
              </div>
            </motion.div>
          </div>

          {/* SOFTWARE DEVELOPMENT */}
          <div className="col-md-4">
            <motion.div whileHover={{ y: -6 }} className="card h-100 shadow-sm border-0">
              <div className="card-body">
                <FaCogs size={32} className="text-secondary mb-3" />
                <h6 className="fw-bold">Software Development</h6>
                <p className="small text-muted">
                  Professional course focused on programming logic,
                  application development and real-world software skills.
                </p>
                <ul className="small text-muted ps-3">
                  <li>Programming fundamentals</li>
                  <li>Real project exposure</li>
                  <li>Career-focused training</li>
                </ul>
              </div>
            </motion.div>
          </div>

        </div>

        {/* CTA */}
        <div className="text-center mt-5">
          <Link to="/courses" className="btn btn-primary px-4">
            Explore All Courses
          </Link>
        </div>

      </div>
    </section>
  )
}

export default CoursesPreview
