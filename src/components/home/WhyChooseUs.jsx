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
            icon: <FaChalkboardTeacher size={28} />,
            title: '100% Practical Training',
            desc: 'Theory ke saath real computer practice. Har student ko system par kaam karna sikhaya jata hai.'
        },
        {
            icon: <FaCertificate size={28} />,
            title: 'Government Recognized Certifications',
            desc: 'Selected courses Skill India, GSDM aur DigiLocker ke through verified certificates ke saath.'
        },
        {
            icon: <FaLaptopCode size={28} />,
            title: 'Career Oriented Courses',
            desc: 'Basic computer se lekar Web Development, Software Development aur professional IT skills tak.'
        },
        {
            icon: <FaUsers size={28} />,
            title: 'Supportive Learning Environment',
            desc: 'Rural aur urban dono background ke students ke liye friendly aur easy learning system.'
        },
        {
            icon: <FaMapMarkedAlt size={28} />,
            title: 'Trusted Local Institute',
            desc: 'Ambikapur, Chhattisgarh me sthit ek vishwasniya aur pehchana hua computer training institute.'
        },
        {
            icon: <FaBriefcase size={28} />,
            title: 'Job & Self-Employment Focus',
            desc: 'Computer skills jo job ke saath saath freelancing aur self-employment me madad kare.'
        }
    ]

    return (
        <section className="py-5 bg-light">
            <div className="container">

                {/* Heading */}
                <div className="text-center mb-5">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="fw-bold"
                    >
                        Why Choose Shivshakti Computer Academy?
                    </motion.h2>

                    <p className="text-muted mt-2">
                        Practical learning, trusted certifications and career-focused training
                    </p>
                </div>

                <div className="row g-4">
                    {points.map((item, index) => (
                        <div className="col-md-4" key={index}>
                            <motion.div
                                initial={{ opacity: 0, y: 25 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1 }}
                                whileHover={{ y: -6 }}
                                className="card h-100 border-0 shadow-sm"
                            >
                                <div className="card-body">
                                    <div className="d-flex align-items-center mb-3">
                                        <div className="me-3 text-primary">
                                            {item.icon}
                                        </div>
                                        <h6 className="fw-bold mb-0">
                                            {item.title}
                                        </h6>
                                    </div>

                                    <p className="small text-muted mb-0">
                                        {item.desc}
                                    </p>
                                </div>
                            </motion.div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    )
}

export default WhyChooseUs
