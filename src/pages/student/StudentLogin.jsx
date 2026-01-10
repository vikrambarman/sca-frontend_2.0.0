import PageHeader from '../../components/common/PageHeader'

const StudentLogin = () => {
    return (
        <>
            <PageHeader
                title="Student Login"
                subtitle="Access your notes, profile and course information"
            />

            <section className="py-5">
                <div className="container">
                    <div className="row justify-content-center">

                        <div className="col-md-5">
                            <div className="card shadow-sm">
                                <div className="card-body">

                                    <h5 className="fw-bold mb-4 text-center">
                                        Login to Student Panel
                                    </h5>

                                    <form>
                                        <div className="mb-3">
                                            <label className="form-label">
                                                Registration ID / Mobile Number
                                            </label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                required
                                            />
                                        </div>

                                        <div className="mb-4">
                                            <label className="form-label">Password / DOB</label>
                                            <input
                                                type="password"
                                                className="form-control"
                                                required
                                            />
                                        </div>

                                        <button className="btn btn-primary w-100">
                                            Login
                                        </button>
                                    </form>

                                    <p className="small text-muted text-center mt-3 mb-0">
                                        For login issues, contact institute office
                                    </p>

                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
        </>
    )
}

export default StudentLogin
