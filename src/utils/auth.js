export const saveStudentAuth = (data) => {
    localStorage.setItem('studentToken', data.token)
    localStorage.setItem('studentInfo', JSON.stringify(data.student))
}

export const getStudent = () => {
    const data = localStorage.getItem('studentInfo')
    return data ? JSON.parse(data) : null
}

export const logoutStudent = () => {
    localStorage.clear()
}