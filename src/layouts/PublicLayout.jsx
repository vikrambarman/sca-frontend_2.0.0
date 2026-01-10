import React from 'react'

import { Outlet } from 'react-router-dom'
import Navbar from '../components/common/Navbar'
import Footer from '../components/common/Footer'
import WhatsAppButton from '../components/common/WhatsAppButton'
import '../assets/css/custom.css'

const PublicLayout = () => {
  return (
    <>
      <Navbar />
      <main className="min-vh-100">
        <Outlet />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  )
}

export default PublicLayout
