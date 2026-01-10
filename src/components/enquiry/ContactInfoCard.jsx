const ContactInfoCard = () => {
    return (
        <div className="card shadow-sm h-100">
            <div className="card-body">

                <h5 className="fw-bold mb-3">Contact Information</h5>

                <p className="small text-muted mb-3">
                    You can also contact us directly through call or WhatsApp.
                </p>

                <p className="mb-2">📞 <strong>+91 90000 00000</strong></p>
                <p className="mb-2">✉️ <strong>info@shivshakticomputer.in</strong></p>
                <p className="mb-4">📍 Your Address, City</p>

                <a
                    href="https://wa.me/919000000000"
                    target="_blank"
                    rel="noreferrer"
                    className="btn btn-success w-100 mb-3"
                >
                    Chat on WhatsApp
                </a>

                <div className="border-top pt-3 small text-muted">
                    <p className="mb-1">✔ ISO 9001:2015 Certified Institute</p>
                    <p className="mb-1">✔ Skill India Recognized Courses</p>
                    <p className="mb-0">✔ DigiLocker Certificates</p>
                </div>

            </div>
        </div>
    )
}

export default ContactInfoCard
