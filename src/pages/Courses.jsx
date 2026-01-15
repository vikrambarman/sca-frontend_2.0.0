import { useEffect, useState } from 'react'
import CourseLevel from '../components/courses/CourseLevel'
import PageHeader from '../components/common/PageHeader'
import coursesData from '../data/coursesData'
import api from '../services/api'
import groupCoursesByLevel from '../utils/groupCoursesByLevel'

const Courses = () => {
  const [levels, setLevels] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        // 1️⃣ Try backend
        const res = await api.get('/courses')

        if (res.data && res.data.length > 0) {
          const grouped = groupCoursesByLevel(res.data)
          setLevels(grouped)
        } else {
          // empty response fallback
          setLevels(coursesData)
        }
      } catch (error) {
        // 2️⃣ Backend failed → frontend fallback
        console.warn('Backend failed, using frontend course data')
        setLevels(coursesData)
      } finally {
        setLoading(false)
      }
    }

    fetchCourses()
  }, [])

  if (loading) {
    return (
      <PageHeader
        title="Loading Courses..."
        subtitle="Please wait"
      />
    )
  }

  return (
    <>
      <PageHeader
        title="Our Courses"
        subtitle="Level-wise, Government Recognized & Industry Oriented Programs"
      />

      {levels.map((level, index) => (
        <CourseLevel key={index} data={level} />
      ))}
    </>
  )
}

export default Courses
