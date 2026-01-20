import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

const PageHeader = ({
  title,
  subtitle,
  breadcrumb = [],
  ctaText,
  ctaLink,
  bgImage
}) => {
  return (
    <section className="page-header position-relative overflow-hidden">
      {/* Background */}
      <div
        className="position-absolute top-0 start-0 w-100 h-100"
        style={{
          backgroundImage: bgImage
            ? `linear-gradient(135deg, rgba(15,23,42,0.85), rgba(2,6,23,0.9)), url(${bgImage})`
            : 'linear-gradient(135deg, #0f172a, #020617)',
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      />

      <div className="container position-relative d-flex align-items-center" style={{ minHeight: '300px' }}>
        <motion.div
          initial={{ opacity: 0, y: 20, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="col-lg-8"
        >
          <div
            className="p-4 p-md-5 rounded-4"
            style={{
              background: 'rgba(255,255,255,0.04)',
              backdropFilter: 'blur(6px)',
              border: '1px solid rgba(255,255,255,0.08)'
            }}
          >
            {/* Breadcrumb */}
            {breadcrumb.length > 0 && (
              <nav className="mb-2">
                <ol className="breadcrumb small mb-0">
                  {breadcrumb.map((item, i) => (
                    <li
                      key={i}
                      className={`breadcrumb-item ${item.active ? 'text-white' : ''}`}
                    >
                      {item.link ? (
                        <Link
                          to={item.link}
                          className="text-light opacity-75 text-decoration-none"
                        >
                          {item.label}
                        </Link>
                      ) : (
                        <span className="text-light opacity-75">
                          {item.label}
                        </span>
                      )}
                    </li>
                  ))}
                </ol>
              </nav>
            )}

            {/* Accent line */}
            <div
              className="my-3"
              style={{
                width: '72px',
                height: '3px',
                background: 'linear-gradient(90deg, #0d6efd, #22d3ee)',
                borderRadius: '2px'
              }}
            />

            {/* Title */}
            <h1
              className="text-white fw-semibold mb-2"
              style={{ letterSpacing: '-0.5px' }}
            >
              {title}
            </h1>

            {/* Subtitle */}
            {subtitle && (
              <p
                className="text-light opacity-75 mb-4"
                style={{ maxWidth: '620px', lineHeight: 1.6 }}
              >
                {subtitle}
              </p>
            )}

            {/* CTA */}
            {ctaText && ctaLink && (
              <Link
                to={ctaLink}
                className="btn btn-primary btn-sm px-4"
              >
                {ctaText}
              </Link>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default PageHeader
