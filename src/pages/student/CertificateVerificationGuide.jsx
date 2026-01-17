const CertificateVerificationGuide = ({ student }) => {
    return (
        <div className="card shadow-sm mb-4">
            <div className="card-body">

                <h5 className="fw-bold mb-2">
                    How to Verify My Certificate
                </h5>

                <p className="small text-muted mb-3">
                    Certificate verification depends on the authority through which
                    your course was conducted.
                </p>

                <div className="table-responsive">
                    <table className="table table-bordered table-sm small">
                        <thead className="table-light">
                            <tr>
                                <th>Course Category</th>
                                <th>Issued By</th>
                                <th>Where to Verify</th>
                                <th>Registration Number Used</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Basic / Professional Courses</td>
                                <td>Drishti Computer Education</td>
                                <td>
                                    <a
                                        href="https://drishticomputereducation.com"
                                        target="_blank"
                                        rel="noreferrer"
                                    >
                                        Drishti Website
                                    </a>
                                </td>
                                <td>Drishti Registration Number</td>
                            </tr>

                            <tr>
                                <td>Skill / Advanced Courses</td>
                                <td>GSDM (NSDC / Skill India)</td>
                                <td>
                                    <a
                                        href="https://graminskill.in"
                                        target="_blank"
                                        rel="noreferrer"
                                    >
                                        GSDM / NSDC Portal
                                    </a>
                                </td>
                                <td>GSDM / NSDC Registration Number</td>
                            </tr>

                            <tr>
                                <td>Diploma Courses</td>
                                <td>Medhavi Skill University</td>
                                <td>
                                    <a
                                        href="https://www.digilocker.gov.in"
                                        target="_blank"
                                        rel="noreferrer"
                                    >
                                        DigiLocker
                                    </a>
                                </td>
                                <td>Aadhaar-linked DigiLocker</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <div className="alert alert-warning small mt-3 mb-0">
                    Your institute roll number and registration number are
                    only for internal use on this portal.
                    Official certificates are verified only on the respective
                    authority websites mentioned above.
                </div>

            </div>
        </div>
    )
}

export default CertificateVerificationGuide
