import { useParams, NavLink } from 'react-router-dom'
import PageHeader from '../components/common/PageHeader'

const courseData = {
  dca: {
    title: 'Diploma in Computer Applications (DCA)',
    type: 'Diploma / Skill India',
    duration: '6 Months',
    eligibility: '10th Pass',
    certificate: 'Skill India / DigiLocker',
    description:
      'DCA is a government-recognized diploma course designed to build strong computer fundamentals with practical exposure.',
    syllabus: [
      'Computer Fundamentals',
      'Operating System',
      'MS Word, Excel, PowerPoint',
      'Internet & Email',
      'Basic Programming Concepts'
    ]
  },
  adca: {
    title: 'Advanced Diploma in Computer Applications (ADCA)',
    type: 'Diploma / Skill India',
    duration: '12 Months',
    eligibility: '10th Pass',
    certificate: 'Skill India / DigiLocker',
    description:
      'ADCA is an advanced level diploma course focusing on professional computer skills and job readiness.',
    syllabus: [
      'Advanced MS Office',
      'Tally with GST',
      'Database Basics',
      'Web Fundamentals',
      'Project Work'
    ]
  },
  tally: {
    title: 'Tally with GST',
    type: 'Professional Course',
    duration: '3 Months',
    eligibility: '10th Pass',
    certificate: 'Institute Certificate',
    description:
      'This course focuses on accounting, GST compliance and real-world business practices.',
    syllabus: [
      'Accounting Basics',
      'Company Creation',
      'GST & Taxation',
      'Inventory Management',
      'Practical Accounting'
    ]
  },
  'basic-computer': {
    title: 'Basic Computer Course',
    type: 'Drishti Computer Education',
    duration: '3 Months',
    eligibility: 'No qualification required',
    certificate: 'Drishti Computer Education',
    description:
      'This course is ideal for beginners who want to learn basic computer operations and office skills.',
    syllabus: [
      'Computer Basics',
      'Typing Practice',
      'MS Paint',
      'MS Word',
      'Internet Usage'
    ]
  }
}

const CourseDetails = () => {
  const { slug } = useParams()
  const course = courseData[slug]

  if (!course) {
    return (
      <PageHeader
        title="Course Not Found"
        subtitle="The requested course does not exist."
      />
    )
  }

  return (
    <>
      <PageHeader
        title={course.title}
        subtitle={course.type}
      />

      <section className="py-5">
        <div className="container">
          <div className="row g-4">

            {/* Left Content */}
            <div className="col-md-8">

              <h5 className="fw-bold mb-3">Course Overview</h5>
              <p className="text-muted">{course.description}</p>

              <h5 className="fw-bold mt-4 mb-3">Syllabus</h5>
              <ul className="list-group mb-4">
                {course.syllabus.map((item, index) => (
                  <li className="list-group-item" key={index}>
                    {item}
                  </li>
                ))}
              </ul>

            </div>

            {/* Right Sidebar */}
            <div className="col-md-4">
              <div className="card shadow-sm" style={{ top: '90px' }}>
                <div className="card-body">

                  <h6 className="fw-bold mb-3">Course Details</h6>

                  <ul className="list-unstyled small mb-4">
                    <li><strong>Duration:</strong> {course.duration}</li>
                    <li><strong>Eligibility:</strong> {course.eligibility}</li>
                    <li><strong>Certificate:</strong> {course.certificate}</li>
                  </ul>

                  <div className="d-grid gap-2">
                    <NavLink to="/enquiry" className="btn btn-primary btn-sm">
                      Enquiry Now
                    </NavLink>
                    <NavLink to="/registration" className="btn btn-outline-primary btn-sm">
                      Register Online
                    </NavLink>
                  </div>

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
