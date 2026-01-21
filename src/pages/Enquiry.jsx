import PageHeader from '../components/common/PageHeader'
import EnquiryForm from '../components/enquiry/EnquiryForm'
import ContactInfoCard from '../components/enquiry/ContactInfoCard'
import { Helmet } from 'react-helmet-async'

const Enquiry = () => {
  return (
    <>
      <Helmet>
        <title>Course Enquiry | Shivshakti Computer Academy</title>
        <meta
          name="description"
          content="Submit your course enquiry at Shivshakti Computer Academy. Our admission team will guide you regarding courses, schedules, and certifications in Ambikapur."
        />
        <link rel="canonical" href="https://www.shivshakticomputer.in/enquiry" />
      </Helmet>

      <PageHeader
        title="Course Enquiry"
        subtitle="Share your details and our admission team will guide you shortly"
      />

      <section className="py-5 bg-light">
        <div className="container">
          <div className="row g-4 align-items-stretch">
            <div className="col-lg-7">
              <EnquiryForm />
            </div>
            <div className="col-lg-5">
              <ContactInfoCard />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Enquiry
