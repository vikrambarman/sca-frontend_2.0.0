import PageHeader from '../components/common/PageHeader'
import GalleryFilter from '../components/gallery/GalleryFilter'
import GalleryGrid from '../components/gallery/GalleryGrid'

const Gallery = () => {
  return (
    <>
      <PageHeader
        title="Institute Gallery"
        subtitle="A glimpse of our classrooms, labs, events and student activities"
      />

      <section className="py-5">
        <div className="container">

          <GalleryFilter />
          <GalleryGrid />

        </div>
      </section>
    </>
  )
}

export default Gallery
