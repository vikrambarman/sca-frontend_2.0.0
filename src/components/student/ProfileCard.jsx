const ProfileCard = () => {
    return (
        <div className="card shadow-sm">
            <div className="card-body">

                <h6 className="fw-bold mb-3">
                    Student Profile
                </h6>

                <p className="small mb-1">
                    <strong>Name:</strong> Rahul Kumar
                </p>
                <p className="small mb-1">
                    <strong>Course:</strong> ADCA
                </p>
                <p className="small mb-1">
                    <strong>Batch:</strong> 2024
                </p>
                <p className="small mb-3">
                    <strong>Status:</strong> Active
                </p>

                <button className="btn btn-outline-secondary btn-sm w-100">
                    View Full Profile
                </button>

            </div>
        </div>
    )
}

export default ProfileCard
