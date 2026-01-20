import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import {
  FaLaptopCode,
  FaCalculator,
  FaFileExcel,
  FaGraduationCap,
  FaCode,
  FaCogs,
  FaKeyboard,
  FaShieldAlt,
  FaTools
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
            Industry-relevant training with practical exposure and recognized certification
          </p>
        </div>

        <div className="row g-4">

          {/* DCA */}
          <div className="col-md-4">
            <motion.div whileHover={{ y: -6 }} className="card h-100 border-0 shadow-sm">
              <div className="card-body">
                <FaLaptopCode size={30} className="text-primary mb-3" />
                <h6 className="fw-semibold">DCA</h6>
                <p className="small text-muted">
                  Diploma in Computer Applications covering computer basics,
                  MS Office, internet usage and office work.
                </p>
                <ul className="small text-muted ps-3 mb-0">
                  <li>100% practical training</li>
                  <li>Beginner friendly</li>
                  <li>Certificate verification</li>
                </ul>
              </div>
            </motion.div>
          </div>

          {/* PGDCA */}
          <div className="col-md-4">
            <motion.div whileHover={{ y: -6 }} className="card h-100 border-0 shadow-sm">
              <div className="card-body">
                <FaGraduationCap size={30} className="text-success mb-3" />
                <h6 className="fw-semibold">PGDCA</h6>
                <p className="small text-muted">
                  Advanced diploma for students seeking professional-level
                  computer knowledge and career growth.
                </p>
                <ul className="small text-muted ps-3 mb-0">
                  <li>Advanced computer skills</li>
                  <li>Govt. recognized certificate</li>
                  <li>DigiLocker support</li>
                </ul>
              </div>
            </motion.div>
          </div>

          {/* TALLY */}
          <div className="col-md-4">
            <motion.div whileHover={{ y: -6 }} className="card h-100 border-0 shadow-sm">
              <div className="card-body">
                <FaCalculator size={30} className="text-warning mb-3" />
                <h6 className="fw-semibold">Tally with GST</h6>
                <p className="small text-muted">
                  Accounting and GST training designed for office work,
                  business operations and job preparation.
                </p>
                <ul className="small text-muted ps-3 mb-0">
                  <li>Practical accounting</li>
                  <li>GST compliance basics</li>
                  <li>Job-oriented skills</li>
                </ul>
              </div>
            </motion.div>
          </div>

          {/* BASIC COMPUTER */}
          <div className="col-md-4">
            <motion.div whileHover={{ y: -6 }} className="card h-100 border-0 shadow-sm">
              <div className="card-body">
                <FaFileExcel size={30} className="text-info mb-3" />
                <h6 className="fw-semibold">Basic Computer Course</h6>
                <p className="small text-muted">
                  Ideal for beginners, school students and first-time learners
                  starting computer education from zero.
                </p>
                <ul className="small text-muted ps-3 mb-0">
                  <li>Computer fundamentals</li>
                  <li>Typing & MS Office</li>
                  <li>Recognized certification</li>
                </ul>
              </div>
            </motion.div>
          </div>

          {/* WEB DEVELOPMENT */}
          <div className="col-md-4">
            <motion.div whileHover={{ y: -6 }} className="card h-100 border-0 shadow-sm">
              <div className="card-body">
                <FaCode size={30} className="text-dark mb-3" />
                <h6 className="fw-semibold">Web Development</h6>
                <p className="small text-muted">
                  Learn to design and build modern websites using
                  current industry tools and technologies.
                </p>
                <ul className="small text-muted ps-3 mb-0">
                  <li>HTML, CSS, JavaScript</li>
                  <li>Frontend & backend basics</li>
                  <li>Project-based learning</li>
                </ul>
              </div>
            </motion.div>
          </div>

          {/* SOFTWARE DEVELOPMENT */}
          <div className="col-md-4">
            <motion.div whileHover={{ y: -6 }} className="card h-100 border-0 shadow-sm">
              <div className="card-body">
                <FaCogs size={30} className="text-secondary mb-3" />
                <h6 className="fw-semibold">Software Development</h6>
                <p className="small text-muted">
                  Professional training focused on programming logic,
                  application development and real-world software skills.
                </p>
                <ul className="small text-muted ps-3 mb-0">
                  <li>Programming fundamentals</li>
                  <li>Live project exposure</li>
                  <li>Career-focused training</li>
                </ul>
              </div>
            </motion.div>
          </div>

          {/* TYPING MASTERY */}
          <div className="col-md-4">
            <motion.div whileHover={{ y: -6 }} className="card h-100 border-0 shadow-sm">
              <div className="card-body">
                <FaKeyboard size={30} className="text-primary mb-3" />
                <h6 className="fw-semibold">Typing Mastery (Hindi & English)</h6>
                <p className="small text-muted">
                  Speed and accuracy-focused typing course for government,
                  office and competitive exam preparation.
                </p>
                <ul className="small text-muted ps-3 mb-0">
                  <li>Kruti Dev & Unicode</li>
                  <li>Speed improvement techniques</li>
                  <li>Exam-oriented practice</li>
                </ul>
              </div>
            </motion.div>
          </div>

          {/* CYBER SECURITY */}
          <div className="col-md-4">
            <motion.div whileHover={{ y: -6 }} className="card h-100 border-0 shadow-sm">
              <div className="card-body">
                <FaShieldAlt size={30} className="text-danger mb-3" />
                <h6 className="fw-semibold">Cyber Security</h6>
                <p className="small text-muted">
                  Learn the fundamentals of cyber safety, ethical hacking
                  concepts and data protection practices.
                </p>
                <ul className="small text-muted ps-3 mb-0">
                  <li>Cyber awareness & safety</li>
                  <li>Ethical hacking basics</li>
                  <li>Industry-relevant skills</li>
                </ul>
              </div>
            </motion.div>
          </div>

          {/* VOCATIONAL TRAINING */}
          <div className="col-md-4">
            <motion.div whileHover={{ y: -6 }} className="card h-100 border-0 shadow-sm">
              <div className="card-body">
                <FaTools size={30} className="text-success mb-3" />
                <h6 className="fw-semibold">Vocational Training Courses</h6>
                <p className="small text-muted">
                  Skill-based vocational programs designed for self-employment,
                  technical jobs and practical career readiness.
                </p>
                <ul className="small text-muted ps-3 mb-0">
                  <li>Skill development focus</li>
                  <li>NSQF aligned modules</li>
                  <li>Employment-ready training</li>
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
