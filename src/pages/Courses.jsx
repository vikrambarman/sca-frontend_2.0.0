import { useEffect, useState } from 'react'
import { Helmet } from 'react-helmet-async'

import CourseLevel from '../components/courses/CourseLevel'
import PageHeader from '../components/common/PageHeader'
import coursesData from '../data/coursesData.json'
import api from '../services/api'
import groupCoursesByLevel from '../utils/groupCoursesByLevel'

const Courses = () => {
  const [levels, setLevels] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const res = await api.get('/courses')

        if (res.data?.length) {
          setLevels(groupCoursesByLevel(res.data))
        } else {
          setLevels(groupCoursesByLevel(coursesData))
        }
      } catch {
        setLevels(groupCoursesByLevel(coursesData))
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
      <Helmet>
        <title>
          Computer Courses in Ambikapur | Shivshakti Computer Academy
        </title>
        <meta
          name="description"
          content="Explore DCA, PGDCA, Tally, Web Development, Software Development and other professional computer courses at Shivshakti Computer Academy in Ambikapur. Level-wise, government-recognized and industry-oriented training."
        />
        <meta name="robots" content="index, follow" />
        <link
          rel="canonical"
          href="https://www.shivshakticomputer.in/courses"
        />

        {/* Optional structured data for Course */}
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "EducationalOrganization",
              "name": "Shivshakti Computer Academy",
              "url": "https://www.shivshakticomputer.in",
              "logo": "https://www.shivshakticomputer.in/logo.png"
            }
          `}
        </script>
      </Helmet>

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
