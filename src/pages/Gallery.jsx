import { useState } from 'react'
import { Helmet } from 'react-helmet-async'
import PageHeader from '../components/common/PageHeader'
import GalleryFilter from '../components/gallery/GalleryFilter'
import GalleryGrid, { images as galleryImages } from '../components/gallery/GalleryGrid'

const Gallery = () => {
  const [activeCategory, setActiveCategory] = useState('All')

  // Use the same images from GalleryGrid for JSON-LD
  const jsonLdImages = galleryImages.map(img => ({
    "@type": "ImageObject",
    "contentUrl": img.src,
    "name": img.title,
    "caption": img.category
  }))

  return (
    <>
      <Helmet>
        <title>Shivshakti Computer Academy Gallery – Classrooms, Labs & Events</title>
        <meta
          name="description"
          content="Explore Shivshakti Computer Academy gallery showcasing classrooms, computer labs, student events, certificates and activities. See the real learning environment."
        />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ImageGallery",
            "name": "Shivshakti Computer Academy Gallery",
            "image": jsonLdImages
          })}
        </script>
      </Helmet>

      <PageHeader
        title="Institute Gallery"
        subtitle="Classrooms, labs, events & real student activities at Shivshakti Computer Academy"
      />

      <section className="py-5 bg-light">
        <div className="container">
          <GalleryFilter active={activeCategory} setActive={setActiveCategory} />
          <GalleryGrid activeCategory={activeCategory} />
        </div>
      </section>
    </>
  )
}

export default Gallery
