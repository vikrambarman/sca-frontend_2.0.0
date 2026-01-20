// const groupCoursesByLevel = (courses) => {
//     const grouped = {}

//     courses.forEach(course => {
//         if (!grouped[course.level]) {
//             grouped[course.level] = {
//                 level: course.level,
//                 authority: course.authority,
//                 verify: course.verification,
//                 courses: []
//             }
//         }

//         grouped[course.level].courses.push(course)
//     })

//     return Object.values(grouped)
// }

// export default groupCoursesByLevel


const groupCoursesByLevel = (courses = []) => {
    const grouped = {}

    courses.forEach(course => {
        if (!grouped[course.level]) {
            grouped[course.level] = {
                level: course.level,
                authority: course.authority,
                verify: course.verification,
                courses: []
            }
        }

        grouped[course.level].courses.push({
            name: course.name,
            slug: course.slug,
            duration: course.duration,
            eligibility: course.eligibility,
            certificate: course.certificate,
            syllabus: course.syllabus
        })
    })

    return Object.values(grouped)
}

export default groupCoursesByLevel
