import { motion, AnimatePresence } from 'framer-motion'

const images = [
    {
        id: 1,
        category: 'Classrooms',
        title: 'Smart Classroom Training',
        src: '/gallery/classroom1.jpg'
    },
    {
        id: 2,
        category: 'Computer Lab',
        title: 'Practical Computer Lab',
        src: '/gallery/lab1.jpeg'
    },
    {
        id: 3,
        category: 'Computer Lab',
        title: 'Practical Computer Lab',
        src: '/gallery/lab2.jpeg'
    },
    {
        id: 4,
        category: 'Computer Lab',
        title: 'Practical Computer Lab',
        src: '/gallery/lab3.jpeg'
    },
    {
        id: 5,
        category: 'Computer Lab',
        title: 'Practical Computer Lab',
        src: '/gallery/lab4.jpeg'
    },
    {
        id: 6,
        category: 'Computer Lab',
        title: 'Practical Computer Lab',
        src: '/gallery/lab5.jpeg'
    },
    {
        id: 7,
        category: 'Events',
        title: 'Student Picnic & Events',
        src: '/gallery/event1.jpeg'
    },
    {
        id: 8,
        category: 'Events',
        title: 'Student Picnic & Events',
        src: '/gallery/event2.jpeg'
    },
    {
        id: 9,
        category: 'Events',
        title: 'Student Picnic & Events',
        src: '/gallery/event3.jpeg'
    },
    {
        id: 10,
        category: 'Events',
        title: 'Student Picnic & Events',
        src: '/gallery/event4.jpeg'
    },
    {
        id: 11,
        category: 'Events',
        title: 'Student Picnic & Events',
        src: '/gallery/event5.jpeg'
    },
    {
        id: 12,
        category: 'Events',
        title: 'Student Picnic & Events',
        src: '/gallery/event6.jpeg'
    },
    {
        id: 13,
        category: 'Events',
        title: 'Student Picnic & Events',
        src: '/gallery/event7.jpeg'
    },
    {
        id: 14,
        category: 'Events',
        title: 'Student Picnic & Events',
        src: '/gallery/event8.jpeg'
    },
    {
        id: 15,
        category: 'Events',
        title: 'Student Picnic & Events',
        src: '/gallery/event9.jpeg'
    },
    {
        id: 16,
        category: 'Events',
        title: 'Student Picnic & Events',
        src: '/gallery/event10.jpeg'
    },
    {
        id: 17,
        category: 'Events',
        title: 'Student Picnic & Events',
        src: '/gallery/event11.jpeg'
    },
    {
        id: 18,
        category: 'Activities',
        title: 'Group Photo',
        src: '/gallery/activity1.jpeg'
    },
    {
        id: 19,
        category: 'Activities',
        title: 'Group Photo',
        src: '/gallery/activity2.jpeg'
    },
    {
        id: 20,
        category: 'Activities',
        title: 'Republic Day',
        src: '/gallery/activity3.jpeg'
    },
    {
        id: 21,
        category: 'Activities',
        title: 'Republic Day',
        src: '/gallery/activity4.jpeg'
    },
    {
        id: 22,
        category: 'Activities',
        title: 'Maa Saraswati Pooja in Basant Panchami',
        src: '/gallery/activity5.jpeg'
    },
    {
        id: 23,
        category: 'Activities',
        title: 'Student Group Photos',
        src: '/gallery/activity6.jpeg'
    },
    {
        id: 24,
        category: 'Certificates',
        title: 'Government Certificates',
        src: '/gallery/certificate1.jpg'
    },
]

const GalleryGrid = ({ activeCategory }) => {
    const filteredImages =
        activeCategory === 'All'
            ? images
            : images.filter(img => img.category === activeCategory)

    return (
        <div className="row g-4" role="list">
            <AnimatePresence>
                {filteredImages.map(img => (
                    <motion.div
                        key={img.id}
                        className="col-6 col-md-4 col-lg-3"
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.95 }}
                        transition={{ duration: 0.3 }}
                        role="listitem"
                    >
                        <div className="gallery-card position-relative overflow-hidden rounded-4 shadow-sm">
                            <img
                                src={img.src}
                                alt={img.title} // SEO alt text
                                className="img-fluid w-100 gallery-img"
                            />
                            <div className="gallery-overlay d-flex flex-column justify-content-end p-3">
                                <span className="badge bg-primary mb-2 align-self-start">{img.category}</span>
                                <h6 className="text-white mb-0 small">{img.title}</h6>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </AnimatePresence>
        </div>
    )
}

export default GalleryGrid
export {images}
