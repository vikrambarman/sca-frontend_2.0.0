const ContactInfoCards = () => {
    return (
        <div className="row g-4 mb-4">

            <div className="col-md-3">
                <div className="card text-center shadow-sm h-100">
                    <div className="card-body">
                        <h6 className="fw-bold">Call Us</h6>
                        <p className="small text-muted mb-1">Mon – Sat (9 AM – 6 PM)</p>
                        <p className="fw-semibold">+91 90000 00000</p>
                    </div>
                </div>
            </div>

            <div className="col-md-3">
                <div className="card text-center shadow-sm h-100">
                    <div className="card-body">
                        <h6 className="fw-bold">WhatsApp</h6>
                        <p className="small text-muted mb-2">Quick response</p>
                        <a
                            href="https://wa.me/919000000000"
                            target="_blank"
                            rel="noreferrer"
                            className="btn btn-success btn-sm"
                        >
                            Chat Now
                        </a>
                    </div>
                </div>
            </div>

            <div className="col-md-3">
                <div className="card text-center shadow-sm h-100">
                    <div className="card-body">
                        <h6 className="fw-bold">Email</h6>
                        <p className="small text-muted mb-1">Write to us</p>
                        <p className="fw-semibold">info@shivshakticomputer.in</p>
                    </div>
                </div>
            </div>

            <div className="col-md-3">
                <div className="card text-center shadow-sm h-100">
                    <div className="card-body">
                        <h6 className="fw-bold">Visit Us</h6>
                        <p className="small text-muted mb-1">Institute Address</p>
                        <p className="small">Your City, Your State</p>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default ContactInfoCards
