const ContactForm = () => {
    return (
        <div className="card border-0 shadow-sm rounded-4">
            <div className="card-body p-4 p-md-5">

                <h5 className="fw-semibold mb-3">Send Us a Message</h5>

                <form>
                    <div className="row g-3">

                        <div className="col-md-6">
                            <label className="form-label small">Your Name</label>
                            <input type="text" className="form-control" required />
                        </div>

                        <div className="col-md-6">
                            <label className="form-label small">Mobile Number</label>
                            <input type="tel" className="form-control" required />
                        </div>

                        <div className="col-12">
                            <label className="form-label small">Email Address</label>
                            <input type="email" className="form-control" />
                        </div>

                        <div className="col-12">
                            <label className="form-label small">Message</label>
                            <textarea className="form-control" rows="4"></textarea>
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
