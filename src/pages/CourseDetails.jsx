import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import PageHeader from '../components/common/PageHeader'
import getCourseBySlug from '../utils/getCourseBySlug'
import api from '../services/api'

const CourseDetails = () => {
  const { slug } = useParams()

  const [course, setCourse] = useState(null)
  const [loading, setLoading] = useState(true)

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
        subtitle={course.level}
      />

      <section className="py-5">
        <div className="container">
          <div className="row g-4">

            {/* LEFT */}
            <div className="col-md-8">
              <h5 className="fw-bold mb-3">Course Syllabus</h5>

              {course.syllabus?.map((mod, index) => (
                <div className="mb-4" key={index}>
                  <h6 className="fw-bold">
                    Module {index + 1}: {mod.module}
                  </h6>
                  <ul className="list-group">
                    {mod.topics?.map((topic, i) => (
                      <li className="list-group-item" key={i}>
                        {topic}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            {/* RIGHT */}
            <div className="col-md-4">
              <div className="card shadow-sm">
                <div className="card-body">
                  <h6 className="fw-bold mb-3">Course Details</h6>

                  <ul className="list-unstyled small">
                    <li><strong>Duration:</strong> {course.duration}</li>
                    <li><strong>Eligibility:</strong> {course.eligibility}</li>
                    <li><strong>Authority:</strong> {course.authority}</li>
                    <li><strong>Certificate:</strong> {course.certificate}</li>
                    <li><strong>Verification:</strong> {course.verify}</li>
                  </ul>
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
