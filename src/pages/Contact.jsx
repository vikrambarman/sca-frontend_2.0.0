import PageHeader from '../components/common/PageHeader'
import ContactForm from '../components/contact/ContactForm'
import ContactInfoCards from '../components/contact/ContactInfoCard'
import ContactMap from '../components/contact/ContactMap'
import { Helmet } from 'react-helmet-async'

const Contact = () => {
  return (
    <>
      <Helmet>
        <title>Contact Us | Shivshakti Computer Academy</title>
        <meta
          name="description"
          content="Get in touch with Shivshakti Computer Academy for course inquiries, admissions, certifications, and support. Reach us via phone, WhatsApp, email, or visit our campus in Ambikapur."
        />
        <link rel="canonical" href="https://www.shivshakticomputer.in/contact" />
      </Helmet>

      <PageHeader
        title="Contact Us"
        subtitle="We are here to help you with courses, admissions and certifications"
      />

      <section className="py-5 bg-light">
        <div className="container">
          <ContactInfoCards />

          <div className="row g-4 mt-1">
            <div className="col-md-6">
              <ContactForm />
            </div>

            <div className="col-md-6">
              <ContactMap />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Contact
