import PageHeader from '../components/common/PageHeader'
import EnquiryForm from '../components/enquiry/EnquiryForm'
import ContactInfoCard from '../components/enquiry/ContactInfoCard'

const Enquiry = () => {
  return (
    <>
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
