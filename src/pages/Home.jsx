import HeroSection from '../components/home/HeroSection'
import TrustSection from '../components/home/TrustSection'
import Highlights from '../components/home/Highlights'
import CoursesPreview from '../components/home/CoursesPreview'
import PartnersAndCertifications from '../components/home/PartnersAndCertifications'
import WhyChooseUs from '../components/home/WhyChooseUs'
import Notices from '../components/home/Notices'
import HomeCTA from '../components/home/HomeCTA'

const Home = () => {
  return (
    <>
      <HeroSection />
      <TrustSection />
      <Highlights />
      <CoursesPreview />
      <PartnersAndCertifications />
      <WhyChooseUs />
      <Notices />
      <HomeCTA />
    </>
  )
}

export default Home
