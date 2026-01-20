import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import PageHeader from '../components/common/PageHeader'

const NotFound = () => {
  return (
    <>
      <PageHeader
        title="Page Not Found"
        subtitle="The page you are looking for does not exist or has been moved"
      />

      <section className="py-5">
        <div className="container">
          <div className="row justify-content-center text-center">
            <div className="col-md-7">

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="card border-0 shadow-sm"
              >
                <div className="card-body p-4 p-md-5">

                  <h1 className="fw-bold display-4 text-primary mb-2">
                    404
                  </h1>

                  <h5 className="fw-bold mb-2">
                    Oops! Page not found
                  </h5>

                  <p className="text-muted mb-4">
                    The link you followed may be broken, or the page may
                    have been removed. Please check the URL or use one
                    of the options below.
                  </p>

                  <div className="d-flex justify-content-center gap-2 flex-wrap">
                    <Link to="/" className="btn btn-primary px-4">
                      Go to Home
                    </Link>

                    <Link to="/courses" className="btn btn-outline-secondary px-4">
                      View Courses
                    </Link>
                  </div>

                </div>
              </motion.div>

            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default NotFound
