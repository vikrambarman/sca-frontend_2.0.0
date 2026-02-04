import { Helmet } from 'react-helmet-async'

import HeroSection from '../components/home/HeroSection'
import TrustSection from '../components/home/TrustSection'
import CoursesPreview from '../components/home/CoursesPreview'
import PartnersAndCertifications from '../components/home/PartnersAndCertifications'
import WhyChooseUs from '../components/home/WhyChooseUs'
import Notices from '../components/home/Notices'
import HomeCTA from '../components/home/HomeCTA'
import StudentReviews from '../components/home/StudentReviews'
import VisitUs from '../components/home/VisitUs'

const Home = () => {
  return (
    <>
      <Helmet>
        {/* Primary SEO */}
        <title>
          Best Computer Institute & Training Center in Ambikapur | Shivshakti Computer Academy
        </title>

        <meta
          name="description"
          content="Shivshakti Computer Academy is a leading computer training institute in Ambikapur offering professional computer courses, government-recognized certifications, and skill development programs for students."
        />

        {/* Canonical */}
        <link
          rel="canonical"
          href="https://www.shivshakticomputer.in/"
        />

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Best Computer Institute & Training Center in Ambikapur | Shivshakti Computer Academy"
        />
        <meta
          property="og:description"
          content="Join Shivshakti Computer Academy in Ambikapur for professional computer courses, certified training, and career-focused skill development."
        />
        <meta
          property="og:url"
          content="https://www.shivshakticomputer.in/"
        />

        {/* Local Business Schema */}
        <script type="application/ld+json">
          {`
          {
            "@context": "https://schema.org",
            "@type": "EducationalOrganization",
            "name": "Shivshakti Computer Academy",
            "url": "https://www.shivshakticomputer.in",
            "logo": "https://www.shivshakticomputer.in/logo.png",
            "areaServed": {
              "@type": "Place",
              "name": "Ambikapur"
            }
          }
        `}
        </script>
      </Helmet>

      {/* UI / Layout unchanged */}
      <HeroSection />
      <TrustSection />
      <CoursesPreview />
      <PartnersAndCertifications />
      <WhyChooseUs />
      <StudentReviews />
      <VisitUs />
      <Notices />
      <HomeCTA />
    </>
  )
}

export default Home
