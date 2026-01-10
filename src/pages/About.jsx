import PageHeader from '../components/common/PageHeader'

const About = () => {
  return (
    <>
      <PageHeader
        title="About Shivshakti Computer Academy"
        subtitle="Empowering students with digital skills and certified education"
      />

      <section className="py-5">
        <div className="container">

          <div className="row g-5">

            <div className="col-md-7">
              <h5 className="fw-bold mb-3">Who We Are</h5>
              <p className="text-muted">
                Shivshakti Computer Academy is a professional computer training
                institute committed to providing quality education in the field
                of computer applications, skill development and digital literacy.
              </p>

              <p className="text-muted">
                We offer government-recognized diploma courses as well as
                professional and basic computer courses designed to meet the
                needs of students, job seekers and working professionals.
              </p>

              <h6 className="fw-semibold mt-4">Our Mission</h6>
              <p className="text-muted">
                Our mission is to empower students from urban and rural areas
                with practical computer skills and certified qualifications
                that enhance employability and self-reliance.
              </p>
            </div>

            <div className="col-md-5">
              <div className="card shadow-sm">
                <div className="card-body">
                  <h6 className="fw-bold mb-3">Why Choose Us</h6>
                  <ul className="text-muted small">
                    <li>ISO 9001:2015 Certified Institute</li>
                    <li>Skill India aligned diploma courses</li>
                    <li>DigiLocker enabled certificates</li>
                    <li>Experienced and supportive faculty</li>
                    <li>Practical oriented computer training</li>
                  </ul>
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>
    </>
  )
}

export default About
