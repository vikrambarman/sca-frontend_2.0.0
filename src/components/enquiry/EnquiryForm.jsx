const EnquiryForm = () => {
    return (
        <div className="card shadow-sm border-0">
            <div className="card-body p-4">
                <h2 className="fw-bold mb-1">Send Your Enquiry</h2> {/* h2 for hierarchy */}
                <p className="text-muted small mb-4">
                    Fill in the details below and we’ll get back to you shortly.
                </p>

                <form aria-label="Course enquiry form">
                    <div className="row g-3">

                        <div className="col-md-6">
                            <label htmlFor="enquiryName" className="form-label">Full Name</label>
                            <input
                                type="text"
                                id="enquiryName"
                                className="form-control"
                                placeholder="Enter your full name"
                                required
                                aria-required="true"
                            />
                        </div>

                        <div className="col-md-6">
                            <label htmlFor="enquiryMobile" className="form-label">Mobile Number</label>
                            <input
                                type="tel"
                                id="enquiryMobile"
                                className="form-control"
                                placeholder="10-digit mobile number"
                                required
                                aria-required="true"
                            />
                        </div>

                        <div className="col-md-6">
                            <label htmlFor="enquiryCourse" className="form-label">Course Interested In</label>
                            <select id="enquiryCourse" className="form-select">
                                <option value="">Select course</option>
                                <option>DCA</option>
                                <option>ADCA</option>
                                <option>Tally</option>
                                <option>Basic Computer</option>
                            </select>
                        </div>

                        <div className="col-md-6">
                            <label htmlFor="enquiryContactMethod" className="form-label">Preferred Contact Method</label>
                            <select id="enquiryContactMethod" className="form-select">
                                <option>Phone Call</option>
                                <option>WhatsApp</option>
                            </select>
                        </div>

                        <div className="col-12">
                            <label htmlFor="enquiryMessage" className="form-label">Message (Optional)</label>
                            <textarea
                                id="enquiryMessage"
                                className="form-control"
                                rows="3"
                                placeholder="Any specific question or requirement"
                            />
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
