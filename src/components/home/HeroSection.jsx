import { motion, AnimatePresence } from 'framer-motion'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const backgrounds = [
  '/images/hero-bg1.jpeg',
  '/images/hero-bg2.jpeg'
]

const HeroSection = () => {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex(prev => (prev + 1) % backgrounds.length)
    }, 6000)

    return () => clearInterval(interval)
  }, [])

  return (
    <section
      className="position-relative overflow-hidden"
      style={{ minHeight: '90vh' }}
      aria-labelledby="hero-heading"
    >
      {/* Background Slider */}
      <AnimatePresence>
        <motion.div
          key={index}
          className="position-absolute top-0 start-0 w-100 h-100"
          style={{
            backgroundImage: `url(${backgrounds[index]})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.2 }}
          role="img"
          aria-label="Computer training classrooms and learning environment at Shivshakti Computer Academy in Ambikapur"
        />
      </AnimatePresence>

      {/* Overlay */}
      <div
        className="position-absolute top-0 start-0 w-100 h-100"
        aria-hidden="true"
        style={{
          background:
            'linear-gradient(to right, rgba(0,0,0,0.75), rgba(0,0,0,0.4))'
        }}
      />

      {/* Content */}
      <div className="container position-relative h-100 d-flex align-items-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-white col-lg-7"
        >
          <span className="badge bg-warning text-dark mb-3 mt-3">
            Authorized & Government Recognized Training Centre
          </span>

          {/* MAIN H1 – SEO critical */}
          <h1
            id="hero-heading"
            className="fw-bold display-5 mt-3"
          >
            Best Computer Training Institute in Ambikapur – Shivshakti Computer Academy
          </h1>

          <p className="lead mt-3">
            Ambikapur का भरोसेमंद computer training institute जहाँ students को
            practical learning, government-recognized certification और
            career-oriented skills मिलती हैं।
          </p>

          <p className="small text-light mt-2">
            Authorized Training Centre under <strong>Gramin Skill Development Mission</strong> •
            Certificates available on <strong>Skill India Portal & DigiLocker</strong> •
            ISO Certified • MSME Registered
          </p>

          <div className="d-flex flex-wrap gap-3 mt-4">
            <Link
              to="/courses"
              className="btn btn-primary px-4"
              aria-label="Explore computer courses in Ambikapur at Shivshakti Computer Academy"
            >
              Explore Courses
            </Link>

            <Link
              to="/certificate-verify"
              className="btn btn-outline-light px-4"
              aria-label="Verify computer course certificate online"
            >
              Verify Certificate
            </Link>
          </div>
        </motion.div>
      </div>

      {/* Scroll Hint */}
      <div
        className="position-absolute bottom-0 start-50 translate-middle-x mb-3 text-white small opacity-75"
        aria-hidden="true"
      >
        Scroll to explore ↓
      </div>
    </section>
  )
}

export default HeroSection
