import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import PageHeader from '../components/common/PageHeader'
import getCourseBySlug from '../utils/getCourseBySlug'
import api from '../services/api'

const CourseDetails = () => {
  const { slug } = useParams()

  const [course, setCourse] = useState(null)
  const [loading, setLoading] = useState(true)
  const navigate = useNavigate()

  useEffect(() => {
    const fetchCourse = async () => {
      try {
        // 1️⃣ Try backend first
        const res = await api.get(`/courses/${slug}`)
        setCourse(res.data)
      } catch (error) {
        // 2️⃣ Backend failed → fallback to frontend data
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
      <PageHeader
        title={course.name}
        subtitle={`${course.level} Program`}
      />

      <section className="py-5">
        <div className="container">

          <div className="mb-4">
            <button
              onClick={() => navigate(-1)}
              className="btn btn-outline-secondary btn-sm"
            >
              ← Back to Courses
            </button>
          </div>
          <div className="row g-4 align-items-start">

            {/* LEFT – SYLLABUS */}
            <div className="col-lg-8">
              <h5 className="fw-bold mb-3">Course Syllabus</h5>

              {course.syllabus?.map((mod, index) => (
                <div className="card shadow-sm border-0 mb-4" key={index}>
                  <div className="card-body">

                    <h6 className="fw-bold mb-3">
                      Module {index + 1}: {mod.module}
                    </h6>

                    <ul className="list-group list-group-flush small">
                      {mod.topics?.map((topic, i) => (
                        <li className="list-group-item px-0" key={i}>
                          {topic}
                        </li>
                      ))}
                    </ul>

                  </div>
                </div>
              ))}
            </div>

            {/* RIGHT – COURSE INFO */}
            <div className="col-lg-4">
              <div className="card shadow-sm border-0 sticky-top" style={{ top: '90px' }}>
                <div className="card-body p-4">

                  <h6 className="fw-bold mb-3">Course Information</h6>

                  <ul className="list-unstyled small mb-4">
                    <li className="mb-2">
                      <strong>Duration:</strong> {course.duration}
                    </li>
                    <li className="mb-2">
                      <strong>Eligibility:</strong> {course.eligibility}
                    </li>
                    <li className="mb-2">
                      <strong>Authority:</strong> {course.authority}
                    </li>
                    <li className="mb-2">
                      <strong>Certificate:</strong> {course.certificate}
                    </li>
                    <li>
                      <strong>Verification:</strong> {course.verify}
                    </li>
                  </ul>

                  <a
                    href="/enquiry"
                    className="btn btn-primary w-100"
                  >
                    Enquire About This Course
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
