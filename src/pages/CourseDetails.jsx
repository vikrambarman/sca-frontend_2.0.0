import { useEffect, useState } from 'react'
import { Helmet } from 'react-helmet-async'
import { useNavigate, useParams } from 'react-router-dom'
import PageHeader from '../components/common/PageHeader'
import getCourseBySlug from '../utils/getCourseBySlug'
import api from '../services/api'

const CourseDetails = () => {
  const { slug } = useParams()
  const navigate = useNavigate()

  const [course, setCourse] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchCourse = async () => {
      try {
        const res = await api.get(`/courses/${slug}`)
        setCourse(res.data)
      } catch (error) {
        const localCourse = getCourseBySlug(slug)
        setCourse(localCourse)
      } finally {
        setLoading(false)
      }
    }

    fetchCourse()
  }, [slug])

  if (loading) {
    return (
      <PageHeader
        title="Loading..."
        subtitle="Fetching course details"
      />
    )
  }

  if (!course) {
    return (
      <PageHeader
        title="Course Not Found"
        subtitle="The requested course does not exist"
      />
    )
  }

  return (
    <>
      <Helmet>
        <title>{course.name} | Shivshakti Computer Academy</title>
        <meta
          name="description"
          content={
            course.metaDescription ||
            `${course.name} course at Shivshakti Computer Academy. Duration: ${course.duration || 'N/A'}. Eligibility: ${course.eligibility || 'N/A'}. Government-recognized certificate.`
          }
        />
        <meta name="robots" content="index, follow" />
        <link
          rel="canonical"
          href={`https://www.shivshakticomputer.in/courses/${slug}`}
        />

        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Course",
            "name": course.name,
            "description": course.metaDescription || course.name,
            "provider": {
              "@type": "EducationalOrganization",
              "name": "Shivshakti Computer Academy",
              "sameAs": "https://www.shivshakticomputer.in"
            },
            "hasCourseInstance": course.syllabus?.map((mod) => ({
              "@type": "CourseInstance",
              "name": mod.module,
              "courseMode": "Onsite",
              "instructor": "Shivshakti Computer Academy Faculty"
            }))
          })}
        </script>
      </Helmet>

      <PageHeader
        title={course.name}
        subtitle={`${course.level} Program`}
      />

      <section className="py-4 bg-light">
        <div className="container">

          {/* Back Button */}
          <div className="mb-3">
            <button
              onClick={() => navigate(-1)}
              className="btn btn-link p-0 text-decoration-none small"
            >
              ← Back to Courses
            </button>
          </div>

          <div className="row g-4">

            {/* LEFT CONTENT */}
            <div className="col-lg-8">

              {/* Designed For */}
              {Array.isArray(course.designedFor) && course.designedFor.length > 0 && (
                <div className="card border-0 shadow-sm mb-4">
                  <div className="card-body">
                    <h6 className="fw-bold mb-2">Who Should Join</h6>
                    <div className="d-flex flex-wrap gap-2">
                      {course.designedFor.map((item, index) => (
                        <span
                          key={index}
                          className="badge rounded-pill bg-secondary-subtle text-dark small"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {/* Syllabus */}
              <div className="card border-0 shadow-sm">
                <div className="card-body">
                  <h6 className="fw-bold mb-3">Course Syllabus</h6>

                  {Array.isArray(course.syllabus) && course.syllabus.length > 0 ? (
                    course.syllabus.map((mod, index) => (
                      <div key={mod._id || index} className="mb-4">
                        <div className="fw-semibold mb-2">
                          Module {index + 1}: {mod.module}
                        </div>

                        <ul className="list-unstyled small ps-3 mb-0">
                          {Array.isArray(mod.topics) &&
                            mod.topics.map((topic, i) => (
                              <li key={i} className="mb-1">
                                • {topic}
                              </li>
                            ))}
                        </ul>
                      </div>
                    ))
                  ) : (
                    <p className="text-muted small mb-0">
                      Syllabus will be provided during admission.
                    </p>
                  )}
                </div>
              </div>

              {/* Career Opportunities */}
              {Array.isArray(course.careerOpportunities) &&
                course.careerOpportunities.length > 0 && (
                  <div className="card border-0 shadow-sm mt-4">
                    <div className="card-body">
                      <h6 className="fw-bold mb-3">
                        Career Opportunities
                      </h6>
                      <ul className="list-unstyled small mb-0">
                        {course.careerOpportunities.map((career, index) => (
                          <li key={index} className="mb-1">
                            • {career}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                )}
            </div>

            {/* RIGHT SIDEBAR */}
            <div className="col-lg-4">
              <div
                className="card border-0 shadow-sm sticky-top"
                style={{ top: '90px' }}
              >
                <div className="card-body">

                  <h6 className="fw-bold mb-3">Course Overview</h6>

                  <div className="small">
                    <div className="d-flex justify-content-between mb-2">
                      <span className="text-muted">Duration</span>
                      <span>{course.duration || '—'}</span>
                    </div>

                    <div className="d-flex justify-content-between mb-2">
                      <span className="text-muted">Eligibility</span>
                      <span>{course.eligibility || '—'}</span>
                    </div>

                    {/* <div className="d-flex justify-content-between mb-2">
                      <span className="text-muted">Authority</span>
                      <span>{course.authority || '—'}</span>
                    </div> */}

                    <div className="d-flex justify-content-between mb-2">
                      <span className="text-muted">Certificate</span>
                      <span>{course.certificate || '—'}</span>
                    </div>

                    <div className="d-flex justify-content-between">
                      <span className="text-muted">Verification</span>
                      <span>{course.verification || '—'}</span>
                    </div>
                  </div>

                  <hr />

                  <a href="/enquiry" className="btn btn-primary w-100">
                    Enquire Now
                  </a>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

    </>
  )
}

export default CourseDetails
