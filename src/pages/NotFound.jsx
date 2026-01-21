import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import PageHeader from '../components/common/PageHeader'
import { Helmet } from 'react-helmet-async'

const NotFound = () => {
  return (
    <>
      {/* SEO Meta Tags */}
      <Helmet>
        <title>404 Page Not Found | Shivshakti Computer Academy</title>
        <meta
          name="description"
          content="The page you are looking for at Shivshakti Computer Academy could not be found. Navigate back to the home page or explore our courses."
        />
        <meta name="robots" content="noindex, follow" />
        <link rel="canonical" href="https://www.shivshakticomputer.in/404" />
      </Helmet>

      {/* Page Header */}
      <PageHeader
        title="Page Not Found"
        subtitle="The page you are looking for does not exist or has been moved"
        breadcrumb={[
          { label: 'Home', link: '/' },
          { label: '404', active: true }
        ]}
      />

      {/* Main Content */}
      <main className="py-5" role="main">
        <div className="container">
          <div className="row justify-content-center text-center">
            <div className="col-md-7">

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="card border-0 shadow-sm"
                aria-label="404 Error Message"
              >
                <div className="card-body p-4 p-md-5">

                  <h1 className="fw-bold display-4 text-primary mb-2" aria-hidden="true">
                    404
                  </h1>

                  <h2 className="fw-bold mb-3">
                    Oops! Page not found
                  </h2>

                  <p className="text-muted mb-4">
                    The link you followed may be broken, or the page may have been removed.
                    Please check the URL or use one of the options below to continue browsing.
                  </p>

                  <nav aria-label="404 Navigation">
                    <div className="d-flex justify-content-center gap-2 flex-wrap">
                      <Link to="/" className="btn btn-primary px-4">
                        Go to Home
                      </Link>

                      <Link to="/courses" className="btn btn-outline-secondary px-4">
                        View Courses
                      </Link>
                    </div>
                  </nav>

                </div>
              </motion.div>

            </div>
          </div>
        </div>
      </main>
    </>
  )
}

export default NotFound
