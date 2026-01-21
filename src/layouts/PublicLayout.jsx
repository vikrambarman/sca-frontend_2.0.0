import React from 'react'
import { Outlet } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'

import Navbar from '../components/common/Navbar'
import Footer from '../components/common/Footer'
import WhatsAppButton from '../components/common/WhatsAppButton'
import '../assets/css/custom.css'

const PublicLayout = () => {
  return (
    <>
      <Helmet>
        {/* Default SEO (will be overridden by pages) */}
        <title>Shivshakti Computer Academy | Computer Training Institute</title>

        <meta
          name="description"
          content="Shivshakti Computer Academy provides professional computer courses, certifications, and skill development programs for students and professionals."
        />

        <meta name="robots" content="index, follow" />

        {/* Organization Schema (basic) */}
        <script type="application/ld+json">
          {`
          {
            "@context": "https://schema.org",
            "@type": "EducationalOrganization",
            "name": "Shivshakti Computer Academy",
            "url": "https://www.shivshakticomputer.in",
            "logo": "https://www.shivshakticomputer.in/logo.png"
          }
        `}
        </script>
      </Helmet>

      <Navbar />

      <main className="min-vh-100" role="main">
        <Outlet />
      </main>

      <Footer />
      <WhatsAppButton />
    </>
  )
}

export default PublicLayout
