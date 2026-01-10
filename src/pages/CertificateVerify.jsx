import VerificationForm from '../components/certificate/CertificateForm'
import VerificationInfo from '../components/certificate/verificationInfo'
import PageHeader from '../components/common/PageHeader'

const CertificateVerify = () => {
  return (
    <>
      <PageHeader
        title="Certificate Verification"
        subtitle="Verify the authenticity of certificates issued by Shivshakti Computer Academy"
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
