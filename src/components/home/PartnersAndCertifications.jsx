const PartnersAndCertifications = () => {
    return (
        <section className="py-5 bg-light">
            <div className="container text-center">

                <h4 className="fw-bold mb-4">Our Certifications & Partners</h4>

                <div className="row justify-content-center g-4">

                    {[
                        { img: '/iso-9001-logo.png', label: 'ISO 9001:2015' },
                        { img: '/gramin-skill-logo.png', label: 'Gramin Skill Dev. Mission' },
                        { img: '/skill-india-logo.png', label: 'Skill India Portal' },
                        { img: '/drishti-logo.png', label: 'Drishti Computer Franchise' }
                    ].map((item) => (
                        <div className="col-6 col-sm-4 col-md-3" key={item.label}>
                            <div className="p-3 border rounded bg-white shadow-sm">
                                <img
                                    src={item.img}
                                    alt={item.label}
                                    className="img-fluid mb-2"
                                    style={{ height: '48px' }}
                                />
                                <p className="small text-muted">{item.label}</p>
                            </div>
                        </div>
                    ))}

                </div>

            </div>
        </section>
    )
}

export default PartnersAndCertifications
