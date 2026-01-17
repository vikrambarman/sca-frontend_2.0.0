import { useState } from 'react'

const PORTALS = [
    {
        name: 'Drishti Computer Education',
        match: /DRISHTI|DCE/i,
        url: 'https://drishticomputer.com/check-certificate-marksheet',
        note: 'Certificate issued & verified by Drishti Computer Education'
    },
    {
        name: 'Gramin Skill Development Mission (GSDM)',
        match: /GSDM|GSM/i,
        url: 'https://graminskill.in/condidate_Verify.aspx',
        note: 'Authorized Training Center – Certificate verified on GSDM portal'
    },
    {
        name: 'NSDC / Skill India',
        match: /NSDC|SKILL/i,
        url: 'https://www.nsdcindia.org',
        note: 'Skill India aligned certificate'
    },
    {
        name: 'DigiLocker (Medhavi Skill University)',
        match: /DIPLOMA|MSU/i,
        url: 'https://www.digilocker.gov.in',
        note: 'University diploma available on DigiLocker'
    }
]

const VerificationForm = () => {
    const [certificateNo, setCertificateNo] = useState('')
    const [result, setResult] = useState(null)

    const submitHandler = (e) => {
        e.preventDefault()

        const cert = certificateNo.trim()
        const authority = PORTALS.find(p => p.match.test(cert))

        if (!authority) {
            setResult({
                error: 'Unable to identify certificate authority. Please contact the institute.'
            })
            return
        }

        setResult(authority)
    }

    return (
        <div className="card shadow-sm">
            <div className="card-body">

                <h5 className="fw-bold mb-3">Verify Certificate</h5>

                <p className="small text-muted mb-4">
                    Enter your certificate number to proceed to the official verification portal.
                </p>

                <form onSubmit={submitHandler}>
                    <div className="mb-3">
                        <label className="form-label">
                            Certificate Number / Registration ID
                        </label>
                        <input
                            type="text"
                            className="form-control"
                            required
                            value={certificateNo}
                            onChange={e => setCertificateNo(e.target.value)}
                            placeholder="Eg: DCE/23/00002345 / GSDM-NSDC-88921"
                        />
                    </div>

                    <button type="submit" className="btn btn-primary w-100">
                        Proceed to Verification
                    </button>
                </form>

                {/* RESULT */}
                {result?.error && (
                    <div className="alert alert-danger mt-4">
                        {result.error}
                    </div>
                )}

                {result?.name && (
                    <div className="alert alert-info mt-4">
                        <h6 className="fw-bold mb-1">{result.name}</h6>
                        <p className="small mb-2">{result.note}</p>

                        <a
                            href={result.url}
                            target="_blank"
                            rel="noreferrer"
                            className="btn btn-sm btn-outline-primary"
                        >
                            Go to Official Verification Portal
                        </a>
                    </div>
                )}

                {/* DISCLAIMER */}
                <p className="small text-muted mt-4">
                    Certificates are issued and verified by respective authorities.
                    Shivshakti Computer Academy acts only as an authorized training partner.
                </p>

            </div>
        </div>
    )
}

export default VerificationForm
