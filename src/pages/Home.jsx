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
      <HeroSection />
      <TrustSection />
      <CoursesPreview />
      <PartnersAndCertifications />
      <WhyChooseUs />
      <StudentReviews/>
      <VisitUs/>
      <Notices />
      <HomeCTA />
    </>
  )
}

export default Home
