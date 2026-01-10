const EnquiryForm = () => {
    return (
        <div className="card shadow-sm">
            <div className="card-body">

                <h5 className="fw-bold mb-3">Send Your Enquiry</h5>

                <form>
                    <div className="row g-3">

                        <div className="col-md-6">
                            <label className="form-label">Full Name</label>
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Your name"
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
                                <option>Select course</option>
                                <option>DCA</option>
                                <option>ADCA</option>
                                <option>Tally</option>
                                <option>Basic Computer</option>
                            </select>
                        </div>

                        <div className="col-md-6">
                            <label className="form-label">Preferred Contact</label>
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
                                placeholder="Your message"
                            ></textarea>
                        </div>

                        <div className="col-12">
                            <button type="submit" className="btn btn-primary w-100">
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
