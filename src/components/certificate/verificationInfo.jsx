const VerificationInfo = () => {
    return (
        <div className="card shadow-sm h-100">
            <div className="card-body">

                <h6 className="fw-bold mb-3">About Certificate Verification</h6>

                <p className="small text-muted">
                    Certificates provided through our institute are issued and verified
                    by recognized national and institutional authorities.
                </p>

                <ul className="small text-muted mb-4">
                    <li>Drishti Computer Education – Authorized Training Partner</li>
                    <li>Gramin Skill Development Mission (GSDM)</li>
                    <li>NSDC / Skill India aligned programs</li>
                    <li>Medhavi Skill University diploma via DigiLocker</li>
                </ul>

                <div className="border-top pt-3 small text-muted">
                    <p className="mb-1">✔ ISO 9001:2015 Certified Institute</p>
                    <p className="mb-1">✔ GSDM Authorized Training Center</p>
                    <p className="mb-1">✔ NSDC & Skill India Aligned Courses</p>
                    <p className="mb-0">
                        ✔ Training center verified on GSDM official portal
                    </p>
                </div>

                <div className="mt-3 d-flex flex-column gap-1">
                    <a
                        href="https://drishticomputer.com/search_centre"
                        target="_blank"
                        rel="noreferrer"
                        className="small"
                    >
                        Verify our authorization on Drishti Computer Education website →
                    </a>

                    <a
                        href="https://graminskill.in/Find_Training_Center.aspx"
                        target="_blank"
                        rel="noreferrer"
                        className="small"
                    >
                        Verify our authorization on GSDM website →
                    </a>
                </div>


            </div>
        </div>
    )
}

export default VerificationInfo
