const ContactForm = () => {
    return (
        <div className="card shadow-sm">
            <div className="card-body">

                <h5 className="fw-bold mb-3">Send Us a Message</h5>

                <form>
                    <div className="row g-3">

                        <div className="col-md-6">
                            <label className="form-label">Your Name</label>
                            <input type="text" className="form-control" required />
                        </div>

                        <div className="col-md-6">
                            <label className="form-label">Mobile Number</label>
                            <input type="tel" className="form-control" required />
                        </div>

                        <div className="col-12">
                            <label className="form-label">Email Address</label>
                            <input type="email" className="form-control" />
                        </div>

                        <div className="col-12">
                            <label className="form-label">Message</label>
                            <textarea className="form-control" rows="3"></textarea>
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
