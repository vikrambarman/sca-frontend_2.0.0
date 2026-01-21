import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { FaBullhorn, FaCalendarAlt } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const Notices = () => {
  const [notices, setNotices] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => {
      setNotices([
        {
          _id: 1,
          title: 'Academy Picnic – December 27',
          desc: 'Shivshakti Computer Academy ke students ke saath annual picnic successfully organized.',
          date: '27 Dec 2025'
        },
        {
          _id: 2,
          title: 'New Admission Open',
          desc: 'DCA, ADCA, Tally, Web Development aur Software courses ke liye admission shuru.',
          date: 'Ongoing'
        },
        {
          _id: 3,
          title: 'GSDM Certificate Update',
          desc: 'Selected students ke GSDM certificates generate hone lage hain.',
          date: 'Latest'
        }
      ])
      setLoading(false)
    }, 600)
  }, [])

  return (
    <section
      className="py-5 bg-white"
      aria-labelledby="notices-heading"
    >
      <div className="container">

        {/* Heading */}
        <header className="d-flex justify-content-between align-items-center mb-4">
          <div>
            <h2
              id="notices-heading"
              className="fw-bold mb-1"
            >
              Latest Notices & Updates
            </h2>

            <p className="text-muted small mb-0">
              Shivshakti Computer Academy ke latest announcements,
              admissions updates aur official notices
            </p>
          </div>

          <FaBullhorn
            size={26}
            className="text-primary"
            aria-hidden="true"
          />
        </header>

        {/* Content */}
        {loading && (
          <p
            className="small text-muted"
            aria-live="polite"
          >
            Loading latest notices...
          </p>
        )}

        {!loading && notices.length === 0 && (
          <div
            className="alert alert-info"
            role="status"
          >
            No notices available at the moment.
          </div>
        )}

        {!loading && notices.length > 0 && (
          <div className="row g-4">
            {notices.map((notice, index) => (
              <div
                className="col-md-4"
                key={notice._id}
              >
                <motion.article
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -6 }}
                  className="card h-100 shadow-sm border-0"
                >
                  <div className="card-body">

                    <div className="d-flex align-items-center mb-2 text-muted small">
                      <FaCalendarAlt
                        className="me-2"
                        aria-hidden="true"
                      />
                      <time dateTime={notice.date}>
                        {notice.date}
                      </time>
                    </div>

                    <h3 className="h6 fw-bold">
                      {notice.title}
                    </h3>

                    <p className="small text-muted mb-3">
                      {notice.desc}
                    </p>

                    <Link
                      to="/notices"
                      className="small fw-semibold text-decoration-none"
                      aria-label={`Read full notice: ${notice.title}`}
                    >
                      Read more →
                    </Link>

                  </div>
                </motion.article>
              </div>
            ))}
          </div>
        )}

      </div>
    </section>
  )
}

export default Notices
