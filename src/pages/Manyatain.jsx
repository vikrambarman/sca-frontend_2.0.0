import PageHeader from '../components/common/PageHeader'

const Manyatain = () => {
  return (
    <>
      <PageHeader
        title="Affiliations & Recognition"
        subtitle="Our institute is recognized and associated with reputed organizations"
      />

      <section className="py-5">
        <div className="container">

          <div className="row g-4">

            <div className="col-md-6">
              <div className="card shadow-sm h-100">
                <div className="card-body">
                  <h6 className="fw-bold">ISO 9001:2015 Certification</h6>
                  <p className="text-muted small mb-0">
                    Shivshakti Computer Academy is an ISO 9001:2015 certified
                    institute, ensuring quality management standards in
                    education and training services.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-md-6">
              <div className="card shadow-sm h-100">
                <div className="card-body">
                  <h6 className="fw-bold">
                    Gramin Skill Development Mission
                  </h6>
                  <p className="text-muted small mb-0">
                    We are an authorized training partner of Gramin Skill
                    Development Mission, offering Skill India aligned diploma
                    courses.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-md-6">
              <div className="card shadow-sm h-100">
                <div className="card-body">
                  <h6 className="fw-bold">Skill India & DigiLocker</h6>
                  <p className="text-muted small mb-0">
                    Certificates for eligible diploma courses are uploaded on
                    the Skill India portal and are available on DigiLocker for
                    digital verification.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-md-6">
              <div className="card shadow-sm h-100">
                <div className="card-body">
                  <h6 className="fw-bold">
                    Drishti Computer Education Franchise
                  </h6>
                  <p className="text-muted small mb-0">
                    For basic computer courses, our institute operates as an
                    authorized franchise of Drishti Computer Education.
                  </p>
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>
    </>
  )
}

export default Manyatain
