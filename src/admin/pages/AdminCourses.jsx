import { useEffect, useState } from 'react'
import api from '../../services/api'
import { NavLink } from 'react-router-dom'

const AdminCourses = () => {
    const [courses, setCourses] = useState([])

    useEffect(() => {
        api.get('/courses').then(res => setCourses(res.data))
    }, [])

    return (
        <div>
            <div className="d-flex justify-content-between mb-3">
                <h4>Courses Management</h4>
                <NavLink to="/admin/courses/add" className="btn btn-primary btn-sm">
                    Add Course
                </NavLink>
            </div>

            <table className="table table-bordered align-middle">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Level</th>
                        <th>Authority</th>
                        <th>Duration</th>
                        <th>Status</th>
                        <th width="120">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {courses.map(course => (
                        <tr key={course._id}>
                            <td>{course.name}</td>
                            <td>{course.level}</td>
                            <td>{course.authority}</td>
                            <td>{course.duration}</td>
                            <td>
                                {course.isActive ? (
                                    <span className="badge bg-success">Active</span>
                                ) : (
                                    <span className="badge bg-secondary">Disabled</span>
                                )}
                            </td>
                            <td>
                                <NavLink
                                    to={`/admin/courses/edit/${course._id}`}
                                    className="btn btn-sm btn-warning"
                                >
                                    Edit
                                </NavLink>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default AdminCourses
