const VerificationForm = () => {
    return (
        <div className="card shadow-sm">
            <div className="card-body">

                <h5 className="fw-bold mb-3">Verify Certificate</h5>

                <p className="small text-muted mb-4">
                    Enter your Certificate Number or Registration ID to verify details.
                </p>

                <form>
                    <div className="mb-3">
                        <label className="form-label">Certificate Number / Registration ID</label>
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Eg: SCA/2024/DCA/1023"
                            required
                        />
                    </div>

                    <div className="mb-4">
                        <label className="form-label">Date of Birth (Optional)</label>
                        <input type="date" className="form-control" />
                    </div>

                    <button type="submit" className="btn btn-primary w-100">
                        Verify Certificate
                    </button>
                </form>

            </div>
        </div>
    )
}

export default VerificationForm
