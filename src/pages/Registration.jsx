import PageHeader from '../components/common/PageHeader'
import RegistrationForm from '../components/registration/RegistrationForm'
import RegistrationInfoCard from '../components/registration/RegistrationInfoCard'

const Registration = () => {
  return (
    <>
      <PageHeader
        title="Online Student Registration"
        subtitle="Register yourself for professional and government recognized courses"
      />

      <section className="py-5">
        <div className="container">
          <div className="row g-4">

            <div className="col-md-8">
              <RegistrationForm />
            </div>

            <div className="col-md-4">
              <RegistrationInfoCard />
            </div>

          </div>
        </div>
      </section>
    </>
  )
}

export default Registration
