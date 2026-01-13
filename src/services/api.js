import axios from 'axios'

const api = axios.create({
    baseURL: 'http://localhost:5000/api'
})

api.interceptors.request.use(config => {
    const adminToken = localStorage.getItem('adminToken')
    const studentToken = localStorage.getItem('studentToken')

    if (adminToken) {
        config.headers.Authorization = `Bearer ${adminToken}`
    } else if (studentToken) {
        config.headers.Authorization = `Bearer ${studentToken}`
    }

    return config
})

export default api
