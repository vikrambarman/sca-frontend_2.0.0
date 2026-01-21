const ContactForm = () => {
    return (
        <div className="card border-0 shadow-sm rounded-4">
            <div className="card-body p-4 p-md-5">
                <h2 className="fw-semibold mb-3">Send Us a Message</h2> {/* h2 for SEO hierarchy */}

                <form aria-label="Contact form">
                    <div className="row g-3">
                        <div className="col-md-6">
                            <label htmlFor="contactName" className="form-label small">Your Name</label>
                            <input type="text" id="contactName" className="form-control" required aria-required="true" />
                        </div>

                        <div className="col-md-6">
                            <label htmlFor="contactMobile" className="form-label small">Mobile Number</label>
                            <input type="tel" id="contactMobile" className="form-control" required aria-required="true" />
                        </div>

                        <div className="col-12">
                            <label htmlFor="contactEmail" className="form-label small">Email Address</label>
                            <input type="email" id="contactEmail" className="form-control" />
                        </div>

                        <div className="col-12">
                            <label htmlFor="contactMessage" className="form-label small">Message</label>
                            <textarea id="contactMessage" className="form-control" rows="4" />
                        </div>

                        <div className="col-12">
                            <button type="submit" className="btn btn-primary w-100">
                                Send Message
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default ContactForm
