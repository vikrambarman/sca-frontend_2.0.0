import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Pagination } from 'swiper/modules'
import { FaStar } from 'react-icons/fa'
import studentReviews from '../../data/studentReviews'
import 'swiper/css'
import 'swiper/css/pagination'

const StudentReviews = () => {
    return (
        <section className="py-5 bg-light">
            <div className="container">

                {/* HEADER */}
                <div className="text-center mb-5">
                    <h4 className="fw-bold">Student Reviews</h4>
                    <p className="text-muted small">
                        Trusted feedback from our students & parents
                    </p>
                </div>

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
                >
                    {studentReviews.map((r, i) => (
                        <SwiperSlide key={i}>
                            <div className="card border-0 shadow-sm h-100 rounded-4">
                                <div className="card-body p-4">

                                    {/* USER */}
                                    <div className="d-flex align-items-center mb-3">
                                        {/* <img
                                            src={r.profile || '/user.png'}
                                            alt={r.author}
                                            width="48"
                                            height="48"
                                            className="rounded-circle me-3"
                                        /> */}
                                        <div>
                                            <h6 className="mb-0 fw-semibold">
                                                {r.author}
                                            </h6>
                                            <small className="text-muted">
                                                Google Review
                                            </small>
                                        </div>
                                    </div>

                                    {/* STARS */}
                                    <div className="mb-2">
                                        {[...Array(r.rating)].map((_, idx) => (
                                            <FaStar key={idx} className="text-warning me-1" />
                                        ))}
                                    </div>

                                    {/* REVIEW TEXT */}
                                    <p className="text-muted small mb-0">
                                        “{r.text}”
                                    </p>

                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>

            </div>
        </section>
    )
}

export default StudentReviews
