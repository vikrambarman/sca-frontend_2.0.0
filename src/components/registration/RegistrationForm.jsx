const RegistrationForm = () => {
    return (
        <div className="card shadow-sm">
            <div className="card-body">

                <h5 className="fw-bold mb-4">Student Registration Form</h5>

                <form>
                    {/* Personal Details */}
                    <h6 className="fw-semibold mb-3">Personal Details</h6>

                    <div className="row g-3 mb-4">
                        <div className="col-md-6">
                            <label className="form-label">Student Name</label>
                            <input type="text" className="form-control" required />
                        </div>

                        <div className="col-md-6">
                            <label className="form-label">Father / Guardian Name</label>
                            <input type="text" className="form-control" />
                        </div>

                        <div className="col-md-6">
                            <label className="form-label">Mobile Number</label>
                            <input type="tel" className="form-control" required />
                        </div>

                        <div className="col-md-6">
                            <label className="form-label">Email Address</label>
                            <input type="email" className="form-control" />
                        </div>

                        <div className="col-md-6">
                            <label className="form-label">Date of Birth</label>
                            <input type="date" className="form-control" />
                        </div>

                        <div className="col-md-6">
                            <label className="form-label">Gender</label>
                            <select className="form-select">
                                <option>Select</option>
                                <option>Male</option>
                                <option>Female</option>
                                <option>Other</option>
                            </select>
                        </div>
                    </div>

                    {/* Academic Details */}
                    <h6 className="fw-semibold mb-3">Academic Details</h6>

                    <div className="row g-3 mb-4">
                        <div className="col-md-6">
                            <label className="form-label">Highest Qualification</label>
                            <select className="form-select">
                                <option>Select</option>
                                <option>8th Pass</option>
                                <option>10th Pass</option>
                                <option>12th Pass</option>
                                <option>Graduate</option>
                            </select>
                        </div>

                        <div className="col-md-6">
                            <label className="form-label">Passing Year</label>
                            <input type="text" className="form-control" />
                        </div>
                    </div>

                    {/* Course Selection */}
                    <h6 className="fw-semibold mb-3">Course Selection</h6>

                    <div className="row g-3 mb-4">
                        <div className="col-md-6">
                            <label className="form-label">Select Course</label>
                            <select className="form-select" required>
                                <option>Select course</option>
                                <option>DCA (Diploma)</option>
                                <option>ADCA (Diploma)</option>
                                <option>Tally with GST</option>
                                <option>Basic Computer Course</option>
                            </select>
                        </div>

                        <div className="col-md-6">
                            <label className="form-label">Course Category</label>
                            <select className="form-select">
                                <option>Skill India / Diploma</option>
                                <option>Professional Course</option>
                                <option>Basic Course</option>
                            </select>
                        </div>
                    </div>

                    {/* Address */}
                    <h6 className="fw-semibold mb-3">Address</h6>

                    <div className="row g-3 mb-4">
                        <div className="col-12">
                            <label className="form-label">Full Address</label>
                            <textarea className="form-control" rows="2"></textarea>
                        </div>
                    </div>

                    {/* Submit */}
                    <button type="submit" className="btn btn-primary w-100">
                        Submit Registration
                    </button>
                </form>

            </div>
        </div>
    )
}

export default RegistrationForm
