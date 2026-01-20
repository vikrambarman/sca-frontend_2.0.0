const categories = [
    'All',
    'Classrooms',
    'Computer Lab',
    'Events',
    'Certificates',
    'Student Activities'
]

const GalleryFilter = ({ active, setActive }) => {
    return (
        <div className="text-center mb-5">
            <div className="d-inline-flex flex-wrap gap-2 justify-content-center">

                {categories.map(cat => (
                    <button
                        key={cat}
                        onClick={() => setActive(cat)}
                        className={`btn btn-sm rounded-pill px-3 ${active === cat
                                ? 'btn-primary'
                                : 'btn-outline-primary'
                            }`}
                    >
                        {cat}
                    </button>
                ))}

            </div>
        </div>
    )
}

export default GalleryFilter
