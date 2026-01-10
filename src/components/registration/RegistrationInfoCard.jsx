const RegistrationInfoCard = () => {
    return (
        <div className="card shadow-sm sticky-top" style={{ top: '90px' }}>
            <div className="card-body">

                <h6 className="fw-bold mb-3">Important Information</h6>

                <ul className="small text-muted mb-4">
                    <li>Registration does not guarantee admission</li>
                    <li>Our team will contact you for verification</li>
                    <li>Documents may be required for diploma courses</li>
                </ul>

                <div className="border-top pt-3 small text-muted">
                    <p className="mb-1">✔ ISO 9001:2015 Certified Institute</p>
                    <p className="mb-1">✔ Skill India / Gramin Skill Partner</p>
                    <p className="mb-1">✔ DigiLocker Certificate Support</p>
                    <p className="mb-0">✔ Drishti Computer Education Franchise</p>
                </div>

            </div>
        </div>
    )
}

export default RegistrationInfoCard
