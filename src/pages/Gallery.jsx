import PageHeader from '../components/common/PageHeader'
import GalleryFilter from '../components/gallery/GalleryFilter'
import GalleryGrid from '../components/gallery/GalleryGrid'
import { useState } from 'react'

const Gallery = () => {
  const [activeCategory, setActiveCategory] = useState('All')

  return (
    <>
      <PageHeader
        title="Institute Gallery"
        subtitle="Classrooms, labs, events & real student activities at Shivshakti Computer Academy"
      />

      <section className="py-5 bg-light">
        <div className="container">

          <GalleryFilter
            active={activeCategory}
            setActive={setActiveCategory}
          />

          <GalleryGrid activeCategory={activeCategory} />

        </div>
      </section>
    </>
  )
}

export default Gallery
