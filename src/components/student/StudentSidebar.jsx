const StudentSidebar = () => {
    return (
        <div
            className="border-end vh-100 p-3"
            style={{ width: '230px' }}
        >
            <h6 className="fw-bold mb-4">
                Student Panel
            </h6>

            <ul className="nav flex-column gap-2">
                <li className="nav-item">
                    <a className="nav-link active">Dashboard</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link">Notes</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link">My Course</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link">Profile</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link text-danger">Logout</a>
                </li>
            </ul>
        </div>
    )
}

export default StudentSidebar
