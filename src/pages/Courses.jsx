import PageHeader from '../components/common/PageHeader'
import SkillCourses from '../components/courses/SkillCourses'
import ProfessionalCourses from '../components/courses/ProfessionalCourses'
import BasicCourses from '../components/courses/BasicCourses'

const Courses = () => {
  return (
    <>
      <PageHeader
        title="Our Courses"
        subtitle="Government recognized and industry-oriented computer courses"
      />

      <SkillCourses />
      <ProfessionalCourses />
      <BasicCourses />
    </>
  )
}

export default Courses
