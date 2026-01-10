const images = [
    { id: 1, category: 'Classrooms', src: '/gallery/classroom1.jpg' },
    { id: 2, category: 'Lab', src: '/gallery/lab1.jpg' },
    { id: 3, category: 'Events', src: '/gallery/event1.jpg' },
    { id: 4, category: 'Certificates', src: '/gallery/certificate1.jpg' },
    { id: 5, category: 'Classrooms', src: '/gallery/classroom2.jpg' },
    { id: 6, category: 'Lab', src: '/gallery/lab2.jpg' },
]

const GalleryGrid = () => {
    return (
        <div className="row g-4">

            {images.map((img) => (
                <div key={img.id} className="col-6 col-md-4 col-lg-3">
                    <div className="card shadow-sm h-100">
                        <img
                            src={img.src}
                            alt="Gallery"
                            className="img-fluid rounded"
                        />
                    </div>
                </div>
            ))}

        </div>
    )
}

export default GalleryGrid
