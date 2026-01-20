import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { FaBullhorn, FaCalendarAlt } from 'react-icons/fa'
import { Link } from 'react-router-dom'
// future use ke liye axios import ready
// import axios from 'axios'

const Notices = () => {
  const [notices, setNotices] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // 🔹 Future backend integration
    // axios.get('/api/notices').then(res => {
    //   setNotices(res.data)
    //   setLoading(false)
    // })

    // 🔹 Temporary static data
    setTimeout(() => {
      setNotices([
        {
          _id: 1,
          title: 'Academy Picnic – December 27',
          desc: 'Shivshakti Computer Academy ke students ke saath annual picnic successfully organized.',
          date: '27 Dec 2024'
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
    <section className="py-5 bg-white">
      <div className="container">

        {/* Heading */}
        <div className="d-flex justify-content-between align-items-center mb-4">
          <div>
            <h4 className="fw-bold mb-1">
              Latest Notices & Updates
            </h4>
            <p className="text-muted small mb-0">
              Academy se judi latest information aur announcements
            </p>
          </div>

          <FaBullhorn size={26} className="text-primary" />
        </div>

        {/* Content */}
        {loading && <p>Loading notices...</p>}

        {!loading && notices.length === 0 && (
          <div className="alert alert-info">
            No notices available at the moment.
          </div>
        )}

        {!loading && notices.length > 0 && (
          <div className="row g-4">
            {notices.map((notice, index) => (
              <div className="col-md-4" key={notice._id}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -6 }}
                  className="card h-100 shadow-sm border-0"
                >
                  <div className="card-body">
                    <div className="d-flex align-items-center mb-2 text-muted small">
                      <FaCalendarAlt className="me-2" />
                      {notice.date}
                    </div>

                    <h6 className="fw-bold">
                      {notice.title}
                    </h6>

                    <p className="small text-muted mb-3">
                      {notice.desc}
                    </p>

                    <Link
                      to="/notices"
                      className="small fw-semibold text-decoration-none"
                    >
                      Read more →
                    </Link>
                  </div>
                </motion.div>
              </div>
            ))}
          </div>
        )}

      </div>
    </section>
  )
}

export default Notices
