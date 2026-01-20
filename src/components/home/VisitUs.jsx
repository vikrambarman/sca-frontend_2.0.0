import { FaMapMarkerAlt, FaPhoneAlt, FaClock } from 'react-icons/fa'

const VisitUs = () => {
    return (
        <section className="py-5">
            <div className="container">

                {/* HEADER */}
                <div className="text-center mb-5">
                    <h4 className="fw-bold">Visit Our Academy</h4>
                    <p className="text-muted small">
                        Feel free to visit Shivshakti Computer Academy for enquiry & admission
                    </p>
                </div>

                <div className="row g-4 align-items-center">

                    {/* MAP */}
                    <div className="col-md-7">
                        <div className="ratio ratio-16x9 rounded-4 overflow-hidden shadow-sm">
                            <iframe
                                src="https://www.google.com/maps?q=Shivshakti+Computer+Academy+Ambikapur&output=embed"
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                title="Shivshakti Computer Academy Location"
                            />
                        </div>
                    </div>

                    {/* INFO */}
                    <div className="col-md-5">
                        <div className="card border-0 shadow-sm rounded-4 h-100">
                            <div className="card-body p-4">

                                <h6 className="fw-bold mb-3">
                                    Shivshakti Computer Academy
                                </h6>

                                <p className="text-muted small mb-3">
                                    Authorized Training Centre under Gramin Skill Development Mission,
                                    providing government-recognized & professional computer courses.
                                </p>

                                {/* ADDRESS */}
                                <div className="d-flex mb-3">
                                    <FaMapMarkerAlt className="text-primary mt-1 me-3" />
                                    <span className="small text-muted">
                                        1st floor above Usha Matching Center, Near Babra Petrol Pump, Banaras Road, Phunderdihari, Ambikapur, Surguja - 497001<br />
                                        Chhattisgarh, India
                                    </span>
                                </div>

                                {/* PHONE */}
                                <div className="d-flex mb-3">
                                    <FaPhoneAlt className="text-primary mt-1 me-3" />
                                    <span className="small text-muted">
                                        +91 7477036832 | +91 9009087883
                                    </span>
                                </div>

                                {/* TIMING */}
                                <div className="d-flex mb-4">
                                    <FaClock className="text-primary mt-1 me-3" />
                                    <span className="small text-muted">
                                        Monday – Saturday<br />
                                        8:00 AM – 6:00 PM
                                    </span>
                                </div>

                                {/* CTA */}
                                <a
                                    href="https://www.google.com/maps?q=Shivshakti+Computer+Academy+Ambikapur"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="btn btn-primary btn-sm"
                                >
                                    Open in Google Maps
                                </a>

                            </div>
                        </div>
                    </div>

                </div>

            </div>
        </section>
    )
}

export default VisitUs
