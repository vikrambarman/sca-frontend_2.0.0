const EnquiryForm = () => {
    return (
        <div className="card shadow-sm border-0">
            <div className="card-body p-4">

                <h5 className="fw-bold mb-1">Send Your Enquiry</h5>
                <p className="text-muted small mb-4">
                    Fill in the details below and we’ll get back to you shortly.
                </p>

                <form>
                    <div className="row g-3">

                        <div className="col-md-6">
                            <label className="form-label">Full Name</label>
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Enter your full name"
                                required
                            />
                        </div>

                        <div className="col-md-6">
                            <label className="form-label">Mobile Number</label>
                            <input
                                type="tel"
                                className="form-control"
                                placeholder="10-digit mobile number"
                                required
                            />
                        </div>

                        <div className="col-md-6">
                            <label className="form-label">Course Interested In</label>
                            <select className="form-select">
                                <option value="">Select course</option>
                                <option>DCA</option>
                                <option>ADCA</option>
                                <option>Tally</option>
                                <option>Basic Computer</option>
                            </select>
                        </div>

                        <div className="col-md-6">
                            <label className="form-label">Preferred Contact Method</label>
                            <select className="form-select">
                                <option>Phone Call</option>
                                <option>WhatsApp</option>
                            </select>
                        </div>

                        <div className="col-12">
                            <label className="form-label">Message (Optional)</label>
                            <textarea
                                className="form-control"
                                rows="3"
                                placeholder="Any specific question or requirement"
                            ></textarea>
                        </div>

                        <div className="col-12 pt-2">
                            <button type="submit" className="btn btn-primary w-100 py-2">
                                Submit Enquiry
                            </button>
                        </div>

                    </div>
                </form>

            </div>
        </div>
    )
}

export default EnquiryForm
