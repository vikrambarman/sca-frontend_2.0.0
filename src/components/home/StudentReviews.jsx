import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Pagination } from 'swiper/modules'
import { FaStar } from 'react-icons/fa'
import studentReviews from '../../data/studentReviews'
import 'swiper/css'
import 'swiper/css/pagination'

const StudentReviews = () => {
    return (
        <section
            className="py-5 bg-light"
            aria-labelledby="student-reviews-heading"
        >
            <div className="container">

                {/* HEADER */}
                <header className="text-center mb-5">
                    <h2
                        id="student-reviews-heading"
                        className="fw-bold"
                    >
                        Student Reviews & Testimonials
                    </h2>

                    <p className="text-muted small">
                        Genuine feedback from students and parents of Shivshakti Computer Academy, Ambikapur
                    </p>
                </header>

                {/* CAROUSEL */}
                <Swiper
                    modules={[Autoplay, Pagination]}
                    autoplay={{ delay: 3500, disableOnInteraction: false }}
                    pagination={{ clickable: true }}
                    spaceBetween={24}
                    breakpoints={{
                        0: { slidesPerView: 1 },
                        768: { slidesPerView: 2 },
                        1024: { slidesPerView: 3 }
                    }}
                    aria-roledescription="carousel"
                >
                    {studentReviews.map((r, i) => (
                        <SwiperSlide key={i}>
                            <article
                                className="card border-0 shadow-sm h-100 rounded-4"
                                aria-label={`Student review by ${r.author}`}
                            >
                                <div className="card-body p-4">

                                    {/* USER */}
                                    <div className="d-flex align-items-center mb-3">
                                        <div>
                                            <h3 className="h6 mb-0 fw-semibold">
                                                {r.author}
                                            </h3>
                                            <small className="text-muted">
                                                Google Review
                                            </small>
                                        </div>
                                    </div>

                                    {/* STARS */}
                                    <div
                                        className="mb-2"
                                        aria-label={`${r.rating} star rating`}
                                    >
                                        {[...Array(r.rating)].map((_, idx) => (
                                            <FaStar
                                                key={idx}
                                                className="text-warning me-1"
                                                aria-hidden="true"
                                            />
                                        ))}
                                    </div>

                                    {/* REVIEW TEXT */}
                                    <p className="text-muted small mb-0">
                                        “{r.text}”
                                    </p>

                                </div>
                            </article>
                        </SwiperSlide>
                    ))}
                </Swiper>

            </div>
        </section>
    )
}

export default StudentReviews
