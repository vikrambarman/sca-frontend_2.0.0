import { FaMapMarkerAlt, FaPhoneAlt, FaClock } from 'react-icons/fa'

const VisitUs = () => {
    return (
        <section
            className="py-5"
            aria-labelledby="visit-us-heading"
        >
            <div className="container">

                {/* HEADER */}
                <header className="text-center mb-5">
                    <h2
                        id="visit-us-heading"
                        className="fw-bold"
                    >
                        Visit Shivshakti Computer Academy, Ambikapur
                    </h2>

                    <p className="text-muted small">
                        Visit our computer training institute in Ambikapur for course enquiry,
                        admission guidance and counseling
                    </p>
                </header>

                <div className="row g-4 align-items-center">

                    {/* MAP */}
                    <div className="col-md-7">
                        <div className="ratio ratio-16x9 rounded-4 overflow-hidden shadow-sm">
                            <iframe
                                src="https://www.google.com/maps?q=Shivshakti+Computer+Academy+Ambikapur&output=embed"
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                title="Shivshakti Computer Academy Ambikapur Location Map"
                                aria-label="Google map location of Shivshakti Computer Academy Ambikapur"
                            />
                        </div>
                    </div>

                    {/* INFO */}
                    <div className="col-md-5">
                        <address className="card border-0 shadow-sm rounded-4 h-100">
                            <div className="card-body p-4">

                                <h3 className="h6 fw-bold mb-3">
                                    Shivshakti Computer Academy
                                </h3>

                                <p className="text-muted small mb-3">
                                    Authorized Training Centre under Gramin Skill Development Mission (GSDM),
                                    offering government-recognized and professional computer courses in Ambikapur.
                                </p>

                                {/* ADDRESS */}
                                <div className="d-flex mb-3">
                                    <FaMapMarkerAlt
                                        className="text-primary mt-1 me-3"
                                        aria-hidden="true"
                                    />
                                    <span className="small text-muted">
                                        1st floor above Usha Matching Center, Near Babra Petrol Pump,
                                        Banaras Road, Phunderdihari, Ambikapur, Surguja – 497001<br />
                                        Chhattisgarh, India
                                    </span>
                                </div>

                                {/* PHONE */}
                                <div className="d-flex mb-3">
                                    <FaPhoneAlt
                                        className="text-primary mt-1 me-3"
                                        aria-hidden="true"
                                    />
                                    <span className="small text-muted">
                                        <a
                                            href="tel:+917477036832"
                                            className="text-muted text-decoration-none"
                                        >
                                            +91 74770 36832
                                        </a>
                                        {' | '}
                                        <a
                                            href="tel:+919009087883"
                                            className="text-muted text-decoration-none"
                                        >
                                            +91 90090 87883
                                        </a>
                                    </span>
                                </div>

                                {/* TIMING */}
                                <div className="d-flex mb-4">
                                    <FaClock
                                        className="text-primary mt-1 me-3"
                                        aria-hidden="true"
                                    />
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
                                    aria-label="Open Shivshakti Computer Academy location in Google Maps"
                                >
                                    Open in Google Maps
                                </a>

                            </div>
                        </address>
                    </div>

                </div>

            </div>
        </section>
    )
}

export default VisitUs
