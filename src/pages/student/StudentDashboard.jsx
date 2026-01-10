import StudentSidebar from '../../components/student/StudentSidebar'
import DashboardHeader from '../../components/student/DashboardHeader'
import NotesList from '../../components/student/NotesList'
import ProfileCard from '../../components/student/ProfileCard'

const StudentDashboard = () => {
    return (
        <div className="d-flex">

            <StudentSidebar />

            <div className="flex-grow-1">
                <DashboardHeader />

                <div className="container py-4">
                    <div className="row g-4">

                        <div className="col-md-8">
                            <NotesList />
                        </div>

                        <div className="col-md-4">
                            <ProfileCard />
                        </div>

                    </div>
                </div>
            </div>

        </div>
    )
}

export default StudentDashboard
