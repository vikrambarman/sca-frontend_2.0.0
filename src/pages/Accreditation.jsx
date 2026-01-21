import { motion } from 'framer-motion'
import PageHeader from '../components/common/PageHeader'
import { Helmet } from 'react-helmet-async'

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: i => ({ opacity: 1, y: 0, transition: { delay: i * 0.08, duration: 0.5 } })
}

const Accreditation = () => {
  return (
    <>
      {/* SEO Meta */}
      <Helmet>
        <title>Affiliations & Accreditation | Shivshakti Computer Academy</title>
        <meta
          name="description"
          content="Shivshakti Computer Academy, Ambikapur is accredited under MSME, ISO 9001:2015, GSDM, Drishti Computer Education & Skill India. Learn about our official recognition and certificate verification."
        />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "EducationalOrganization",
            "name": "Shivshakti Computer Academy",
            "url": "https://yourwebsite.com/accreditation",
            "logo": "https://yourwebsite.com/logo.png",
            "sameAs": [
              "https://www.facebook.com/shivshakticomputer",
              "https://www.instagram.com/shivshakticomputer"
            ],
            "description": "Accredited under MSME, ISO 9001:2015, GSDM, Drishti Computer Education & Skill India. Transparent certificate verification for all eligible courses.",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "1st floor above Usha Matching Center, Near Babra Petrol Pump, Banaras Road, Phunderdihari",
              "addressLocality": "Ambikapur",
              "addressRegion": "Chhattisgarh",
              "postalCode": "497001",
              "addressCountry": "IN"
            },
            "contactPoint": {
              "@type": "ContactPoint",
              "telephone": "+917477036832",
              "contactType": "customer service"
            }
          })}
        </script>
      </Helmet>

      <PageHeader
        title="Affiliations, Accreditation & Recognition"
        subtitle="Trusted certifications, official authorizations and transparent verification system"
      />

      <section className="py-5 bg-light">
        <div className="container">

          {/* INTRO */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="row mb-5"
          >
            <div className="col-lg-10 mx-auto text-center">
              <p className="text-muted fs-6">
                Shivshakti Computer Academy follows a structured and
                transparent certification process. Depending on the
                course and eligibility, students receive certificates
                issued directly by our academy or through recognized
                skill development and government-aligned organizations.
              </p>
            </div>
          </motion.div>

          <div className="row g-4">

            {[
              {
                badge: "Government Registration",
                title: "MSME (Udyam) Registered Institute",
                text: "Shivshakti Computer Academy is officially registered under MSME (Government of India), confirming our legal status as a recognized training and educational service provider."
              },
              {
                badge: "Quality Standards",
                title: "ISO 9001:2015 Certified",
                text: "Our institute follows ISO 9001:2015 quality management standards, ensuring structured operations, consistent training delivery and continuous improvement."
              },
              {
                badge: "Authorized Franchise",
                title: "Drishti Computer Education",
                text: "For basic and foundation-level computer courses, we operate as an authorized Drishti Computer Education training center. Certificates are issued under the Drishti system after completion."
              },
              {
                badge: "Skill Development Mission",
                title: "Gramin Skill Development Mission (GSDM)",
                text: "Selected diploma and vocational programs are registered under GSDM. Eligible students receive government-aligned certification after assessment and official verification."
              },
              {
                badge: "Skill India",
                title: "NSDC / Skill India Alignment",
                text: "Skill India / NSDC certification is applicable only for specific GSDM-approved courses. Not all programs fall under NSDC norms and eligibility varies by course structure."
              },
              {
                badge: "Digital Verification",
                title: "DigiLocker Certificate Access",
                text: "For eligible government-issued certificates, digital copies may be available on DigiLocker. Availability depends on the issuing authority and course eligibility."
              }
            ].map((item, i) => (
              <motion.div
                key={i}
                custom={i}
                variants={fadeUp}
                initial="hidden"
                animate="visible"
                className="col-md-6"
              >
                <div className="card h-100 shadow-sm border-0 accreditation-card">
                  <div className="card-body">
                    <span className="badge bg-primary mb-2">{item.badge}</span>
                    <h5 className="fw-bold mt-2">{item.title}</h5>
                    <p className="text-muted small mb-0">{item.text}</p>
                  </div>
                </div>
              </motion.div>
            ))}

            {/* TRANSPARENCY */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="col-12"
            >
              <div className="alert alert-light border shadow-sm mt-4">
                <strong>Transparency & Verification:</strong>
                <p className="small mb-0 mt-1">
                  Certification availability depends on course type,
                  authority approval and student eligibility.
                  Shivshakti Computer Academy maintains complete and
                  verifiable records through its student portal and
                  administrative systems.
                </p>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* CARD HOVER EFFECT */}
      <style>
        {`
          .accreditation-card {
            transition: transform 0.25s ease, box-shadow 0.25s ease;
          }
          .accreditation-card:hover {
            transform: translateY(-6px);
            box-shadow: 0 12px 28px rgba(0,0,0,0.08);
          }
        `}
      </style>
    </>
  )
}

export default Accreditation
