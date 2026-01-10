const TrustSection = () => {
    return (
        <section className="py-4 bg-white border-bottom">
            <div className="container">

                <div className="row text-center g-4">
                    {/* ISO Certified */}
                    <div className="col-md-4">
                        <div className="p-3 border rounded shadow-sm">
                            <h5 className="fw-bold">ISO 9001:2015 Certified</h5>
                            <p className="small text-muted">
                                Quality training standards for computer and vocational education.
                            </p>
                        </div>
                    </div>

                    {/* Authorized Partner */}
                    <div className="col-md-4">
                        <div className="p-3 border rounded shadow-sm">
                            <h5 className="fw-bold">Authorized Training Partner</h5>
                            <p className="small text-muted">
                                Linked with Gramin Skill Development Mission for government-recognised skills.
                            </p>
                        </div>
                    </div>

                    {/* Drishti Franchise */}
                    <div className="col-md-4">
                        <div className="p-3 border rounded shadow-sm">
                            <h5 className="fw-bold">Drishti Computer Education Franchise</h5>
                            <p className="small text-muted">
                                Franchise center of a recognised national computer education platform.
                            </p>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    )
}

export default TrustSection
