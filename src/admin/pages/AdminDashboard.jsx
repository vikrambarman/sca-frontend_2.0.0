const AdminDashboard = () => {
    return (
        <>
            <h4 className="fw-bold mb-3">Admin Dashboard</h4>

            <div className="row g-4">
                <div className="col-md-3">
                    <div className="card shadow-sm">
                        <div className="card-body">
                            <h6>Total Students</h6>
                            <h4 className="fw-bold">120</h4>
                        </div>
                    </div>
                </div>

                <div className="col-md-3">
                    <div className="card shadow-sm">
                        <div className="card-body">
                            <h6>Total Courses</h6>
                            <h4 className="fw-bold">8</h4>
                        </div>
                    </div>
                </div>

                <div className="col-md-3">
                    <div className="card shadow-sm">
                        <div className="card-body">
                            <h6>Certificates Issued</h6>
                            <h4 className="fw-bold">95</h4>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AdminDashboard
