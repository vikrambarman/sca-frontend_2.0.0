import { useEffect, useState } from 'react'
import axios from 'axios'
import CountUp from 'react-countup'
import { motion } from 'framer-motion'
import { FaUsers, FaBook, FaCertificate, FaClock } from 'react-icons/fa'
import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    Tooltip,
    ResponsiveContainer,
    CartesianGrid,
    LineChart,
    Line,
    Legend
} from 'recharts'

import DashboardStudentsWidget from './DashboardStudentsWidget'

const AdminDashboard = () => {
    const [data, setData] = useState(null)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() => {
        fetchDashboard()
    }, [])

    const fetchDashboard = async () => {
        try {
            const res = await axios.get(
                'http://localhost:5000/api/admin/dashboard',
                {
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem('adminToken')}`
                    }
                }
            )
            setData(res.data)
        } catch (err) {
            setError('Failed to load dashboard')
        } finally {
            setLoading(false)
        }
    }

    if (loading) return <p>Loading dashboard...</p>
    if (error) return <p className="text-danger">{error}</p>

    const cards = [
        {
            title: 'Total Students',
            value: data.totalStudents,
            icon: <FaUsers size={26} className="text-primary" />
        },
        {
            title: 'Total Courses',
            value: data.totalCourses,
            icon: <FaBook size={26} className="text-success" />
        },
        {
            title: 'Certificates Issued',
            value: data.certificatesIssued,
            icon: <FaCertificate size={26} className="text-warning" />
        },
        {
            title: 'Pending Certificates',
            value: data.pendingCertificates,
            icon: <FaClock size={26} className="text-danger" />
        }
    ]

    const barData = data.courseBreakdown.map(c => ({
        course: c.course,
        students: c.count
    }))

    return (
        <>
            <h4 className="fw-bold mb-4">Dashboard Overview</h4>

            {/* ================= KPI CARDS ================= */}
            <div className="row g-4 mb-4">
                {cards.map((card, i) => (
                    <motion.div
                        key={i}
                        className="col-xl-3 col-md-6"
                        initial={{ opacity: 0, y: 15 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: i * 0.1 }}
                    >
                        <div className="card border-0 shadow-sm h-100">
                            <div className="card-body d-flex justify-content-between align-items-center">
                                <div>
                                    <div className="text-muted small">
                                        {card.title}
                                    </div>
                                    <h3 className="fw-bold mb-0">
                                        <CountUp end={card.value} duration={1} />
                                    </h3>
                                </div>
                                {card.icon}
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>

            {/* ================= CHARTS ================= */}
            <div className="row g-4 mb-4">
                <div className="col-lg-7">
                    <div className="card shadow-sm p-3 h-100">
                        <div className="d-flex justify-content-between mb-2">
                            <h6 className="fw-semibold mb-0">
                                Students by Course
                            </h6>
                        </div>

                        <ResponsiveContainer width="100%" height={280}>
                            <BarChart data={barData}>
                                <CartesianGrid strokeDasharray="3 3" />
                                <XAxis dataKey="course" />
                                <YAxis />
                                <Tooltip />
                                <Bar dataKey="students" barSize={28} />
                            </BarChart>
                        </ResponsiveContainer>
                    </div>
                </div>

                <div className="col-lg-5">
                    <div className="card shadow-sm p-3 h-100">
                        <h6 className="fw-semibold mb-2">
                            Certificates Issued (Last Days)
                        </h6>

                        <ResponsiveContainer width="100%" height={280}>
                            <LineChart
                                data={[
                                    { date: '10 Jan', certificates: 5 },
                                    { date: '11 Jan', certificates: 8 },
                                    { date: '12 Jan', certificates: 12 },
                                    { date: '13 Jan', certificates: 7 },
                                    { date: '14 Jan', certificates: 10 }
                                ]}
                            >
                                <CartesianGrid strokeDasharray="3 3" />
                                <XAxis dataKey="date" />
                                <YAxis />
                                <Tooltip />
                                <Legend />
                                <Line
                                    type="monotone"
                                    dataKey="certificates"
                                    strokeWidth={3}
                                />
                            </LineChart>
                        </ResponsiveContainer>
                    </div>
                </div>
            </div>

            {/* ================= RECENT STUDENTS ================= */}
            <DashboardStudentsWidget />
        </>
    )
}

export default AdminDashboard
