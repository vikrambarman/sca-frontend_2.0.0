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
    <section
      className="py-5 bg-light"
      aria-labelledby="courses-preview-heading"
    >
      <div className="container">

        {/* Heading */}
        <div className="text-center mb-5">
          <motion.h2
            id="courses-preview-heading"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="fw-bold"
          >
            Professional Computer Courses in Ambikapur
          </motion.h2>

          <p className="text-muted mt-2">
            Career-oriented computer training courses with practical exposure
            and government-recognized certification at Shivshakti Computer Academy.
          </p>
        </div>

        <div className="row g-4">

          {/* DCA */}
          <div className="col-md-4">
            <motion.div whileHover={{ y: -6 }} className="card h-100 border-0 shadow-sm">
              <div className="card-body">
                <FaLaptopCode size={30} className="text-primary mb-3" aria-hidden="true" />
                <h3 className="fw-semibold h6">DCA – Diploma in Computer Applications</h3>
                <p className="small text-muted">
                  Diploma in Computer Applications covering computer basics,
                  MS Office, internet usage and office work.
                </p>
                <ul className="small text-muted ps-3 mb-0">
                  <li>100% practical computer training</li>
                  <li>Beginner-friendly course</li>
                  <li>Online certificate verification</li>
                </ul>
              </div>
            </motion.div>
          </div>

          {/* PGDCA */}
          <div className="col-md-4">
            <motion.div whileHover={{ y: -6 }} className="card h-100 border-0 shadow-sm">
              <div className="card-body">
                <FaGraduationCap size={30} className="text-success mb-3" aria-hidden="true" />
                <h3 className="fw-semibold h6">PGDCA – Post Graduate Diploma in Computer Applications</h3>
                <p className="small text-muted">
                  Advanced diploma for students seeking professional-level
                  computer knowledge and career growth.
                </p>
                <ul className="small text-muted ps-3 mb-0">
                  <li>Advanced computer skills</li>
                  <li>Government-recognized certificate</li>
                  <li>DigiLocker support</li>
                </ul>
              </div>
            </motion.div>
          </div>

          {/* TALLY */}
          <div className="col-md-4">
            <motion.div whileHover={{ y: -6 }} className="card h-100 border-0 shadow-sm">
              <div className="card-body">
                <FaCalculator size={30} className="text-warning mb-3" aria-hidden="true" />
                <h3 className="fw-semibold h6">Tally with GST Course</h3>
                <p className="small text-muted">
                  Accounting and GST training designed for office work,
                  business operations and job preparation.
                </p>
                <ul className="small text-muted ps-3 mb-0">
                  <li>Practical accounting skills</li>
                  <li>GST compliance basics</li>
                  <li>Job-oriented computer training</li>
                </ul>
              </div>
            </motion.div>
          </div>

          {/* BASIC COMPUTER */}
          <div className="col-md-4">
            <motion.div whileHover={{ y: -6 }} className="card h-100 border-0 shadow-sm">
              <div className="card-body">
                <FaFileExcel size={30} className="text-info mb-3" aria-hidden="true" />
                <h3 className="fw-semibold h6">Basic Computer Course</h3>
                <p className="small text-muted">
                  Ideal for beginners, school students and first-time learners
                  starting computer education from zero.
                </p>
                <ul className="small text-muted ps-3 mb-0">
                  <li>Computer fundamentals</li>
                  <li>Typing and MS Office</li>
                  <li>Recognized certification</li>
                </ul>
              </div>
            </motion.div>
          </div>

          {/* WEB DEVELOPMENT */}
          <div className="col-md-4">
            <motion.div whileHover={{ y: -6 }} className="card h-100 border-0 shadow-sm">
              <div className="card-body">
                <FaCode size={30} className="text-dark mb-3" aria-hidden="true" />
                <h3 className="fw-semibold h6">Web Development Course</h3>
                <p className="small text-muted">
                  Learn to design and build modern websites using
                  current industry tools and technologies.
                </p>
                <ul className="small text-muted ps-3 mb-0">
                  <li>HTML, CSS, JavaScript</li>
                  <li>Frontend and backend basics</li>
                  <li>Project-based learning</li>
                </ul>
              </div>
            </motion.div>
          </div>

          {/* SOFTWARE DEVELOPMENT */}
          <div className="col-md-4">
            <motion.div whileHover={{ y: -6 }} className="card h-100 border-0 shadow-sm">
              <div className="card-body">
                <FaCogs size={30} className="text-secondary mb-3" aria-hidden="true" />
                <h3 className="fw-semibold h6">Software Development Course</h3>
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

          {/* TYPING */}
          <div className="col-md-4">
            <motion.div whileHover={{ y: -6 }} className="card h-100 border-0 shadow-sm">
              <div className="card-body">
                <FaKeyboard size={30} className="text-primary mb-3" aria-hidden="true" />
                <h3 className="fw-semibold h6">Typing Course (Hindi & English)</h3>
                <p className="small text-muted">
                  Speed and accuracy-focused typing course for government,
                  office and competitive exam preparation.
                </p>
                <ul className="small text-muted ps-3 mb-0">
                  <li>Kruti Dev and Unicode</li>
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
                <FaShieldAlt size={30} className="text-danger mb-3" aria-hidden="true" />
                <h3 className="fw-semibold h6">Cyber Security Course</h3>
                <p className="small text-muted">
                  Learn the fundamentals of cyber safety, ethical hacking
                  concepts and data protection practices.
                </p>
                <ul className="small text-muted ps-3 mb-0">
                  <li>Cyber safety awareness</li>
                  <li>Ethical hacking basics</li>
                  <li>Industry-relevant skills</li>
                </ul>
              </div>
            </motion.div>
          </div>

          {/* VOCATIONAL */}
          <div className="col-md-4">
            <motion.div whileHover={{ y: -6 }} className="card h-100 border-0 shadow-sm">
              <div className="card-body">
                <FaTools size={30} className="text-success mb-3" aria-hidden="true" />
                <h3 className="fw-semibold h6">Vocational Training Courses</h3>
                <p className="small text-muted">
                  Skill-based vocational programs designed for self-employment,
                  technical jobs and practical career readiness.
                </p>
                <ul className="small text-muted ps-3 mb-0">
                  <li>Skill development focused</li>
                  <li>NSQF-aligned modules</li>
                  <li>Employment-ready training</li>
                </ul>
              </div>
            </motion.div>
          </div>

        </div>

        {/* CTA */}
        <div className="text-center mt-5">
          <Link
            to="/courses"
            className="btn btn-primary px-4"
            aria-label="View all computer courses in Ambikapur"
          >
            Explore All Courses
          </Link>
        </div>

      </div>
    </section>
  )
}

export default CoursesPreview
