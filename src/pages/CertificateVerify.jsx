import VerificationForm from '../components/certificate/CertificateForm'
import VerificationInfo from '../components/certificate/verificationInfo'
import PageHeader from '../components/common/PageHeader'
import { Helmet } from 'react-helmet-async'

const CertificateVerify = () => {
  return (
    <>
      <Helmet>
        {/* Page-specific SEO */}
        <title>Certificate Verification | Shivshakti Computer Academy</title>
        <meta
          name="description"
          content="Verify your Shivshakti Computer Academy certificates online through official issuing authorities like Drishti Computer Education, GSDM, NSDC, and Medhavi Skill University."
        />
        <link rel="canonical" href="https://www.shivshakticomputer.in/certificate-verify" />
      </Helmet>

      <PageHeader
        title="Certificate Verification"
        subtitle="Verify certificates through official issuing authorities"
      />

      <section className="py-5">
        <div className="container">
          <div className="row g-4">

            <div className="col-md-7">
              <VerificationForm />
            </div>

            <div className="col-md-5">
              <VerificationInfo />
            </div>

          </div>
        </div>
      </section>
    </>
  )
}

export default CertificateVerify
