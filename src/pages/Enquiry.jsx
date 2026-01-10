import PageHeader from '../components/common/PageHeader'
import EnquiryForm from '../components/enquiry/EnquiryForm'
import ContactInfoCard from '../components/enquiry/ContactInfoCard'

const Enquiry = () => {
  return (
    <>
      <PageHeader
        title="Course Enquiry"
        subtitle="Fill the form and our team will contact you shortly"
      />

      <section className="py-5">
        <div className="container">
          <div className="row g-4">

            <div className="col-md-7">
              <EnquiryForm />
            </div>

            <div className="col-md-5">
              <ContactInfoCard />
            </div>

          </div>
        </div>
      </section>
    </>
  )
}

export default Enquiry
