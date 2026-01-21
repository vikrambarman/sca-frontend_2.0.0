import { motion } from 'framer-motion'
import {
    FaChalkboardTeacher,
    FaCertificate,
    FaLaptopCode,
    FaUsers,
    FaMapMarkedAlt,
    FaBriefcase
} from 'react-icons/fa'

const WhyChooseUs = () => {
    const points = [
        {
            icon: <FaChalkboardTeacher size={28} aria-hidden="true" />,
            title: '100% Practical Computer Training',
            desc: 'Theory ke saath real-time computer practice. Har student ko individual system par hands-on training diya jata hai.'
        },
        {
            icon: <FaCertificate size={28} aria-hidden="true" />,
            title: 'Government Recognized Certifications',
            desc: 'Selected computer courses Skill India, GSDM aur DigiLocker ke through verified government certificates ke saath.'
        },
        {
            icon: <FaLaptopCode size={28} aria-hidden="true" />,
            title: 'Career Oriented Computer Courses',
            desc: 'Basic computer education se lekar Web Development, Software Development aur professional IT skills tak.'
        },
        {
            icon: <FaUsers size={28} aria-hidden="true" />,
            title: 'Supportive Learning Environment',
            desc: 'Rural aur urban dono background ke students ke liye friendly, easy aur supportive learning system.'
        },
        {
            icon: <FaMapMarkedAlt size={28} aria-hidden="true" />,
            title: 'Trusted Computer Institute in Ambikapur',
            desc: 'Ambikapur, Chhattisgarh me sthit ek vishwasniya aur pehchana hua computer training institute.'
        },
        {
            icon: <FaBriefcase size={28} aria-hidden="true" />,
            title: 'Job & Self-Employment Focus',
            desc: 'Computer skills jo private job, government opportunities, freelancing aur self-employment me madad kare.'
        }
    ]

    return (
        <section
            className="py-5 bg-light"
            aria-labelledby="why-choose-heading"
        >
            <div className="container">

                {/* Heading */}
                <header className="text-center mb-5">
                    <motion.h2
                        id="why-choose-heading"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="fw-bold"
                    >
                        Why Choose Shivshakti Computer Academy?
                    </motion.h2>

                    <p className="text-muted mt-2">
                        Practical computer training, trusted certifications and career-focused education
                    </p>
                </header>

                <div className="row g-4">
                    {points.map((item, index) => (
                        <div className="col-md-4" key={index}>
                            <motion.article
                                initial={{ opacity: 0, y: 25 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1 }}
                                whileHover={{ y: -6 }}
                                className="card h-100 border-0 shadow-sm"
                                aria-label={item.title}
                            >
                                <div className="card-body">
                                    <div className="d-flex align-items-center mb-3">
                                        <div className="me-3 text-primary">
                                            {item.icon}
                                        </div>
                                        <h3 className="h6 fw-bold mb-0">
                                            {item.title}
                                        </h3>
                                    </div>

                                    <p className="small text-muted mb-0">
                                        {item.desc}
                                    </p>
                                </div>
                            </motion.article>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    )
}

export default WhyChooseUs
